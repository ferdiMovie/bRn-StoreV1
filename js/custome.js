// Toggle class active untuk hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Toggle class active untuk searh form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart / keranjang belanja
const ShoppingCartMenu = document.querySelector(".shopping-cart");
// Ketika icon shopping cart / icon keranjang di klick maka halaman cart keluar
document.querySelector("#shopping-cart").onclick = (e) => {
  ShoppingCartMenu.classList.toggle("active");
  e.preventDefault();
};

// Klick di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const ShoppingCartButton = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !ShoppingCartButton.contains(e.target) &&
    !ShoppingCartMenu.contains(e.target)
  ) {
    ShoppingCartMenu.classList.remove("active");
  }
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";

    e.preventDefault();
  };
});

// Klik tombol close modal box
document.querySelector(".modal-close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";

  e.preventDefault();
};

// Klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
