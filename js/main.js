const { contents: CONTENTS } = window.MenteEquilibrio;
const { filterContents, scrollToTop } = window.MenteEquilibrioUtils;

function createContentCard(content) {
  const card = document.createElement("article");
  card.className = `content-card${content.collection === "library" ? " library-card" : ""}`;
  card.dataset.contentCard = "";
  card.dataset.contentId = content.id;

  const kicker = document.createElement("span");
  kicker.className = "card-kicker";
  kicker.textContent = content.category;

  const icon = document.createElement("span");
  icon.className = `content-icon icon-${content.iconTone}`;
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = content.iconSymbol;

  const title = document.createElement("h3");
  title.textContent = content.title;

  const summary = document.createElement("p");
  summary.textContent = content.summary;

  const button = document.createElement("button");
  const actionLabel = content.collection === "library" ? "Ver ideias" : "Ler conteúdo";
  button.className = "card-open";
  button.type = "button";
  button.dataset.openContent = content.id;
  button.setAttribute("aria-label", `${actionLabel}: ${content.title}`);
  button.append(document.createTextNode(`${actionLabel} `));

  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  button.append(arrow);

  card.append(kicker, icon, title, summary, button);
  return card;
}

function renderContentCards() {
  const grids = {
    education: document.querySelector("#education-grid"),
    library: document.querySelector("#library-grid"),
  };

  Object.values(CONTENTS).forEach((content) => {
    const grid = grids[content.collection];
    if (grid) grid.append(createContentCard(content));
  });
}

function renderLibraryCategories() {
  const select = document.querySelector("#library-filter");
  if (!select) return;

  const categories = new Map();
  Object.values(CONTENTS)
    .filter((content) => content.collection === "library")
    .forEach((content) => categories.set(content.categoryId, content.category));

  const options = [new Option("Todas as categorias", "todos")];
  categories.forEach((label, id) => options.push(new Option(label, id)));
  select.replaceChildren(...options);
}

function setupMobileNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (!toggle || !navigation) return;

  const closeMenu = ({ restoreFocus = false } = {}) => {
    const wasOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
    if (restoreFocus && wasOpen) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu({ restoreFocus: true });
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  if (typeof window.matchMedia === "function") {
    window.matchMedia("(min-width: 721px)").addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }
}

function setupBackToTop() {
  const backToTop = document.querySelector(".back-top");
  if (!backToTop) return;

  backToTop.addEventListener("click", (event) => {
    // Let the browser handle a new fragment, including its history and focus.
    if (window.location.hash !== "#inicio") return;

    // A repeated fragment may be treated as a no-op by the browser.
    event.preventDefault();
    const header = document.querySelector("#inicio");
    scrollToTop(window, header);
  });
}

function setupCardFilters({
  collection,
  inputSelector,
  cardSelector,
  statusSelector,
  emptySelector,
  selectSelector = null,
  singularLabel,
  pluralLabel,
}) {
  const input = document.querySelector(inputSelector);
  const status = document.querySelector(statusSelector);
  const emptyState = document.querySelector(emptySelector);
  const categorySelect = selectSelector ? document.querySelector(selectSelector) : null;
  const grid = document.querySelector(cardSelector);

  if (!input || !status || !emptyState || !grid) return;

  const contents = Object.values(CONTENTS)
    .filter((content) => content.collection === collection);
  const cards = [...grid.querySelectorAll("[data-content-card]")];

  const updateResults = () => {
    const matchingContents = filterContents(
      contents,
      input.value,
      categorySelect?.value ?? "todos",
    );
    const matchingIds = new Set(matchingContents.map((content) => content.id));

    cards.forEach((card) => {
      card.hidden = !matchingIds.has(card.dataset.contentId);
    });

    const count = matchingContents.length;
    const message = `${count} ${count === 1 ? singularLabel : pluralLabel}`;
    if (status.textContent !== message) status.textContent = message;
    emptyState.hidden = count > 0;
  };

  input.addEventListener("input", updateResults);
  categorySelect?.addEventListener("change", updateResults);
  updateResults();
}

function setupContentSearch() {
  setupCardFilters({
    collection: "education",
    inputSelector: "#education-search",
    cardSelector: "#education-grid",
    statusSelector: "#education-count",
    emptySelector: "#education-empty",
    singularLabel: "conteúdo",
    pluralLabel: "conteúdos",
  });

  setupCardFilters({
    collection: "library",
    inputSelector: "#library-search",
    cardSelector: "#library-grid",
    statusSelector: "#library-count",
    emptySelector: "#library-empty",
    selectSelector: "#library-filter",
    singularLabel: "material",
    pluralLabel: "materiais",
  });
}

function createSourceLink(source) {
  let destination;
  try {
    destination = new URL(source.url, window.location.href);
  } catch {
    return null;
  }
  if (destination.protocol !== "https:") return null;

  const link = document.createElement("a");
  link.href = destination.toString();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = source.label;

  const item = document.createElement("li");
  item.append(link);
  return item;
}

function renderDialogContent(dialog, content) {
  const title = dialog.querySelector("#dialog-title");
  const category = dialog.querySelector("#dialog-kicker");
  const body = dialog.querySelector("#dialog-body");
  const sourcesList = dialog.querySelector("#dialog-sources ul");

  title.textContent = content.title;
  category.textContent = content.category;
  body.replaceChildren(...content.paragraphs.map((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }));
  sourcesList.replaceChildren(...content.sources.map(createSourceLink).filter(Boolean));
}

function setupContentDialog() {
  const dialog = document.querySelector("#content-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  let lastTrigger = null;

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const trigger = event.target.closest("[data-open-content]");
    if (!trigger) return;

    const content = CONTENTS[trigger.dataset.openContent];
    if (!content) return;

    lastTrigger = trigger;
    renderDialogContent(dialog, content);
    dialog.showModal();
    dialog.querySelector(".dialog-close").focus();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      return;
    }

    if (event.target instanceof Element
      && event.target.closest(".dialog-close, .dialog-done")) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    if (lastTrigger?.isConnected) lastTrigger.focus();
  });
}

function setCurrentYear() {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
}

renderContentCards();
renderLibraryCategories();
setupMobileNavigation();
setupBackToTop();
setupContentSearch();
setupContentDialog();
setCurrentYear();
