(function () {
  const categoryId = document.body.dataset.category;
  const page = SERVICE_PAGES[categoryId];
  const grid = document.getElementById("service-grid");
  const title = document.getElementById("service-page-title");

  if (!page || !grid || !title) return;

  document.title = `${page.title} | Oficina ELIF`;
  title.textContent = page.title;

  const image = page.image;
  const imageSrc = image?.src || "";
  const imageAlt = image?.alt || page.title;

  if (image?.credit) {
    const credit = document.createElement("p");
    credit.className = "service-page-credit";
    credit.innerHTML = `Foto: <a href="${image.creditUrl}" target="_blank" rel="noopener noreferrer">${image.credit}</a> / Unsplash`;
    title.insertAdjacentElement("afterend", credit);
  }

  grid.innerHTML = page.items
    .map((item) => {
      const slug = slugify(item.title);

      return `
      <article class="service-card" id="${slug}">
        <img src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
        <div class="service-card-body">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="btn btn-block" href="${getQuoteUrl(item.title, page.title)}" target="_blank" rel="noopener noreferrer">QUOTAÇÃO</a>
        </div>
      </article>
    `;
    })
    .join("");

  function focusServiceFromHash() {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.classList.add("is-highlighted");
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      target.classList.remove("is-highlighted");
    }, 2400);
  }

  focusServiceFromHash();
  window.addEventListener("hashchange", focusServiceFromHash);
})();
