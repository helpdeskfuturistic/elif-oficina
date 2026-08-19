const modal = document.getElementById("breve-modal");
const modalTitle = document.getElementById("breve-title");
const nav = document.getElementById("nav");
const toggle = document.getElementById("menu-toggle");

function openBreve(nome) {
  modalTitle.textContent = nome || "Esta página";
  modal.classList.add("open");
}

function closeBreve() {
  modal.classList.remove("open");
}

document.querySelectorAll("[data-breve]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    openBreve(el.getAttribute("data-breve"));
    nav.classList.remove("open");
    document.querySelectorAll(".has-dropdown.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  });
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeBreve();
});

document.getElementById("fechar-breve").addEventListener("click", closeBreve);

document.getElementById("contacto-form").addEventListener("submit", (event) => {
  event.preventDefault();
  openBreve("Formulário de contacto");
});

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".has-dropdown").forEach((item) => {
  const button = item.querySelector(".dropdown-toggle");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const willOpen = !item.classList.contains("open");
    document.querySelectorAll(".has-dropdown.open").forEach((openItem) => {
      openItem.classList.remove("open");
      openItem.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
    item.classList.toggle("open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-dropdown")) {
    document.querySelectorAll(".has-dropdown.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  }
});
