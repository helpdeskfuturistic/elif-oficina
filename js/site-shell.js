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

  function renderWhatsAppFloat() {
    document.querySelector(".side-dock")?.remove();

    const dock = document.createElement("aside");
    dock.className = "side-dock";
    dock.setAttribute("aria-label", "WhatsApp");
    dock.innerHTML = `
      <a href="https://wa.me/244947151562" class="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Oficina ELIF">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    `;
    document.body.appendChild(dock);
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
  renderWhatsAppFloat();
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
