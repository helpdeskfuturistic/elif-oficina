(function () {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menu-toggle");
  const currentPage = document.body.dataset.page || "";
  const currentCategory = document.body.dataset.category || "";

  function alignTopbarWithNav() {
    const topbarInner = document.querySelector(".topbar-inner");
    if (!nav || !topbarInner) return;

    if (window.innerWidth <= 980) {
      topbarInner.style.paddingLeft = "";
      topbarInner.style.paddingRight = "";
      return;
    }

    const navItems = [...nav.children];
    if (!navItems.length) return;

    let minLeft = Infinity;
    let maxRight = -Infinity;

    navItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.width === 0) return;
      minLeft = Math.min(minLeft, rect.left);
      maxRight = Math.max(maxRight, rect.right);
    });

    if (!Number.isFinite(minLeft)) return;

    const topbarRect = topbarInner.getBoundingClientRect();
    topbarInner.style.paddingLeft = `${Math.max(0, minLeft - topbarRect.left)}px`;
    topbarInner.style.paddingRight = `${Math.max(0, topbarRect.right - maxRight)}px`;
  }

  function renderNav() {
    if (!nav || typeof SERVICE_PAGES === "undefined") return;

    const serviceNav = Object.entries(SERVICE_PAGES)
      .map(([id, page]) => {
        const isActive = id === currentCategory;
        const dropdownItems = page.items
          .map(
            (item) =>
              `<a href="${getServiceUrl(id, item.title)}">${item.title}</a>`
          )
          .join("");

        return `
          <div class="nav-item has-dropdown">
            <a class="nav-link${isActive ? " is-active" : ""}" href="${page.file}">${page.title}</a>
            <div class="dropdown" role="menu">${dropdownItems}</div>
          </div>
        `;
      })
      .join("");

    nav.innerHTML = `
      ${serviceNav}
      <a href="sobre-nos.html"${currentPage === "sobre" ? ' class="is-active"' : ""}>Sobre nós</a>
      <a href="registo-viatura.html"${currentPage === "registo" ? ' class="is-active"' : ""}>Registo de viatura</a>
      <a href="index.html#contactos">Contactos e Localização</a>
    `;

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  renderNav();
  alignTopbarWithNav();

  window.addEventListener("resize", alignTopbarWithNav);
  document.fonts?.ready?.then(alignTopbarWithNav);

  if (nav && window.ResizeObserver) {
    new ResizeObserver(alignTopbarWithNav).observe(nav);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const contactForm = document.getElementById("contacto-form");
  const modal = document.getElementById("breve-modal");
  const modalTitle = document.getElementById("breve-title");
  const closeButton = document.getElementById("fechar-breve");

  function openBreve(name) {
    if (!modal || !modalTitle) return;
    modalTitle.textContent = name || "Formulário de contacto";
    modal.classList.add("open");
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      openBreve("Formulário de contacto");
    });
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.classList.remove("open");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
})();
