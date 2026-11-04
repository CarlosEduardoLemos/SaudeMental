const { contents: CONTENTS } = window.MenteEquilibrio;

const normalizeText = (value = '') => String(value ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .trim();

function setupMobileNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (!toggle || !navigation) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
}

function setupCardFilters({
  inputSelector,
  cardSelector,
  statusSelector,
  emptySelector,
  selectSelector = null,
  allCategoriesValue = 'todos',
  singularLabel,
  pluralLabel,
}) {
  const input = document.querySelector(inputSelector);
  const status = document.querySelector(statusSelector);
  const emptyState = document.querySelector(emptySelector);
  const categorySelect = selectSelector
    ? document.querySelector(selectSelector)
    : null;

  if (!input || !status || !emptyState) return;

  const cards = [...document.querySelectorAll(cardSelector)].map((element) => ({
    element,
    searchableText: normalizeText(`${element.dataset.search ?? ''} ${element.textContent}`),
  }));

  const updateResults = () => {
    const query = normalizeText(input.value);
    const selectedCategory = categorySelect?.value ?? allCategoriesValue;
    let visibleCount = 0;

    cards.forEach(({ element, searchableText }) => {
      const matchesQuery = !query || searchableText.includes(query);
      const matchesCategory = !categorySelect
        || selectedCategory === allCategoriesValue
        || element.dataset.category === selectedCategory;
      const isVisible = matchesQuery && matchesCategory;

      element.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    status.textContent = `${visibleCount} ${visibleCount === 1 ? singularLabel : pluralLabel}`;
    emptyState.hidden = visibleCount > 0;
  };

  input.addEventListener('input', updateResults);
  categorySelect?.addEventListener('change', updateResults);
  updateResults();
}

function setupContentSearch() {
  setupCardFilters({
    inputSelector: '#education-search',
    cardSelector: '.education-grid [data-content-card]',
    statusSelector: '#education-count',
    emptySelector: '#education-empty',
    singularLabel: 'conteúdo',
    pluralLabel: 'conteúdos',
  });

  setupCardFilters({
    inputSelector: '#library-search',
    cardSelector: '.library-grid [data-content-card]',
    statusSelector: '#library-count',
    emptySelector: '#library-empty',
    selectSelector: '#library-filter',
    singularLabel: 'material',
    pluralLabel: 'materiais',
  });
}

function createSourceLink(source) {
  const link = document.createElement('a');
  link.href = source.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = source.label;

  const item = document.createElement('li');
  item.append(link);
  return item;
}

function renderDialogContent(dialog, content) {
  const title = dialog.querySelector('#dialog-title');
  const category = dialog.querySelector('#dialog-kicker');
  const body = dialog.querySelector('#dialog-body');
  const sourcesList = dialog.querySelector('#dialog-sources ul');

  title.textContent = content.title;
  category.textContent = content.category;
  body.replaceChildren(...content.paragraphs.map((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }));
  sourcesList.replaceChildren(...content.sources.map(createSourceLink));
}

function setupContentDialog() {
  const dialog = document.querySelector('#content-dialog');
  if (!dialog) return;

  let lastTrigger = null;

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const trigger = event.target.closest('[data-open-content]');
    if (!trigger) return;

    const content = CONTENTS[trigger.dataset.openContent];
    if (!content) return;

    lastTrigger = trigger;
    renderDialogContent(dialog, content);
    dialog.showModal();
    dialog.querySelector('.dialog-close').focus();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
      return;
    }

    if (event.target instanceof Element
      && event.target.closest('.dialog-close, .dialog-done')) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    if (lastTrigger?.isConnected) lastTrigger.focus();
  });
}

function setCurrentYear() {
  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
}

setupMobileNavigation();
setupContentSearch();
setupContentDialog();
setCurrentYear();
