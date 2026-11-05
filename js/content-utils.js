(() => {
  const normalizeText = (value = "") => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/g, " ")
    .trim();

  const searchableText = (content) => [
    content.title,
    content.category,
    content.summary,
    ...(content.keywords ?? []),
    ...(content.paragraphs ?? []),
    ...(content.sources ?? []).map((source) => source.label),
  ].filter(Boolean).join(" ");

  function filterContents(contents, query = "", categoryId = "todos") {
    const normalizedQuery = normalizeText(query);
    return Object.values(contents).filter((content) => {
      const matchesQuery = !normalizedQuery
        || normalizeText(searchableText(content)).includes(normalizedQuery);
      const matchesCategory = categoryId === "todos"
        || content.categoryId === categoryId;
      return matchesQuery && matchesCategory;
    });
  }

  function scrollToTop(windowObject = window, focusTarget = null) {
    if (windowObject.location.hash !== "#inicio") {
      windowObject.history.pushState(windowObject.history.state, "", "#inicio");
    }

    const prefersReducedMotion = typeof windowObject.matchMedia === "function"
      && windowObject.matchMedia("(prefers-reduced-motion: reduce)").matches;
    windowObject.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
    focusTarget?.focus({ preventScroll: true });
  }

  window.MenteEquilibrioUtils = Object.freeze({
    filterContents,
    normalizeText,
    scrollToTop,
  });
})();
