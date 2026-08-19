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

const dropdownItem = document.querySelector(".has-dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", (event) => {
  event.preventDefault();
  const isOpen = dropdownItem.classList.toggle("open");
  dropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!dropdownItem.contains(event.target)) {
    dropdownItem.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  }
});
