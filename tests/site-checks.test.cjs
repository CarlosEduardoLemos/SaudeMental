const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const readProjectFile = (relativePath) => readFileSync(path.join(root, relativePath), "utf8");
const browserContext = { window: {} };
vm.runInNewContext(readProjectFile("js/content-utils.js"), browserContext);
vm.runInNewContext(readProjectFile("js/content.js"), browserContext);

const contents = browserContext.window.MenteEquilibrio.contents;
const { filterContents, scrollToTop } = browserContext.window.MenteEquilibrioUtils;
const html = readProjectFile("index.html");
const mainJs = readProjectFile("js/main.js");
const contentUtilsJs = readProjectFile("js/content-utils.js");
const css = readProjectFile("css/style.css");
const readme = readProjectFile("README.md");

test("os scripts são carregados com defer na ordem necessária", () => {
  const scripts = [...html.matchAll(/<script src="([^"]+)" defer><\/script>/g)]
    .map((match) => match[1]);

  assert.deepEqual(scripts, ["js/content-utils.js", "js/content.js", "js/main.js"]);
});

test("o catálogo mantém IDs únicos e metadados completos", () => {
  const records = Object.values(contents);
  const ids = records.map((content) => content.id);

  assert.equal(records.length, 12);
  assert.equal(new Set(ids).size, ids.length);
  records.forEach((content) => {
    assert.equal(contents[content.id], content);
    assert.ok(["education", "library"].includes(content.collection));
    assert.ok(content.title && content.category && content.summary);
    assert.ok(Array.isArray(content.keywords));
    assert.ok(Array.isArray(content.paragraphs) && content.paragraphs.length > 0);
    assert.ok(Array.isArray(content.sources) && content.sources.length > 0);
    assert.equal(content.publicationDate, null);
    assert.equal(content.reviewDate, null);
    assert.equal(typeof content.sensitive, "boolean");
    content.sources.forEach((source) => {
      assert.ok(source.label);
      assert.match(source.url, /^https:\/\//);
    });
  });
});

test("a busca ignora acentos e espaços e pesquisa o texto completo", () => {
  assert.deepEqual(
    Array.from(filterContents(contents, "SAUDE   MENTAL E BEM-ESTAR"), (content) => content.id),
    ["saude-mental"],
  );
  assert.deepEqual(
    Array.from(filterContents(contents, "entrevista"), (content) => content.id),
    ["ansiedade"],
  );
});

test("o filtro de categorias e o estado sem resultados são preservados", () => {
  assert.deepEqual(
    Array.from(filterContents(contents, "", "bem-estar"), (content) => content.id),
    ["sono", "pausas"],
  );
  assert.deepEqual(Array.from(filterContents(contents, "termo inexistente")), []);
});

test("o retorno ao início não altera o histórico e respeita movimento reduzido", () => {
  let scrollOptions;
  let focusOptions;
  const calls = [];
  const windowLike = {
    location: { hash: "#inicio" },
    matchMedia: () => ({ matches: false }),
    scrollTo: (options) => { calls.push("scroll"); scrollOptions = options; },
  };

  scrollToTop(windowLike, { focus: (options) => { calls.push("focus"); focusOptions = options; } });
  assert.equal(scrollOptions.top, 0);
  assert.equal(scrollOptions.behavior, "smooth");
  assert.equal(focusOptions.preventScroll, true);
  assert.deepEqual(calls, ["focus", "scroll"], "o foco não deve substituir a rolagem solicitada");

  windowLike.location.hash = "#apoio";
  windowLike.matchMedia = () => ({ matches: true });
  scrollToTop(windowLike);
  assert.equal(scrollOptions.behavior, "auto");
  assert.equal(windowLike.location.hash, "#apoio", "a função não deve alterar a navegação ou o histórico");
});

test("os links internos apontam para IDs existentes e sem duplicação", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const idSet = new Set(ids);

  assert.equal(idSet.size, ids.length, "IDs HTML devem ser únicos");
  [...html.matchAll(/\bhref="#([^"]+)"/g)].forEach((match) => {
    assert.ok(idSet.has(match[1]), `Destino interno ausente: #${match[1]}`);
  });
  assert.match(html, /id="education-grid"/);
  assert.match(html, /id="library-grid"/);
});

test("links que abrem nova aba têm proteção contra acesso à janela original", () => {
  const links = [...html.matchAll(/<a\b[^>]*>/gs)].map((match) => match[0]);
  const newTabLinks = links.filter((link) => /\btarget="_blank"/.test(link));

  assert.ok(newTabLinks.length > 0);
  newTabLinks.forEach((link) => {
    assert.match(link, /\brel="[^"]*noopener[^"]*"/);
    assert.match(link, /\brel="[^"]*noreferrer[^"]*"/);
  });
});

test("a renderização usa APIs de texto e a origem dos cartões é o catálogo", () => {
  assert.doesNotMatch(mainJs, /\b(?:innerHTML|outerHTML|insertAdjacentHTML|document\.write)\b/);
  assert.match(mainJs, /document\.createElement\("article"\)/);
  assert.match(mainJs, /summary\.textContent = content\.summary/);
  assert.match(mainJs, /paragraph\.textContent = text/);
  assert.match(mainJs, /button\.dataset\.openContent = content\.id/);
});

test("o diálogo, o menu e as preferências responsivas têm suportes básicos", () => {
  assert.match(html, /<dialog[^>]*aria-labelledby="dialog-title"/);
  assert.match(mainJs, /dialog\.showModal\(\)/);
  assert.match(mainJs, /dialog\.addEventListener\("close"/);
  assert.match(mainJs, /lastTrigger\.focus\(\)/);
  assert.match(mainJs, /event\.key === "Escape"/);
  assert.match(css, /@media \(max-width: 420px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);
});

test("o link de retorno usa a navegação nativa e trata apenas o hash repetido", () => {
  assert.match(html, /class="back-top" href="#inicio"/);
  assert.match(html, /class="site-header" id="inicio" tabindex="-1"/);
  assert.match(mainJs, /function setupBackToTop\(\)/);
  assert.match(mainJs, /event\.preventDefault\(\)/);
  assert.match(mainJs, /if \(window\.location\.hash !== "#inicio"\) return;/);
  assert.match(mainJs, /scrollToTop\(window, header\)/);
  assert.doesNotMatch(contentUtilsJs, /history\.pushState/);
});

test("o README apresenta explicitamente o endereço publicado", () => {
  assert.match(readme, /\*\*Site publicado:\*\* \[https:\/\/carloseduardolemos\.github\.io\/SaudeMental\/\]\(https:\/\/carloseduardolemos\.github\.io\/SaudeMental\/\)/);
});
