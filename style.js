// toggle  class active//
const navbarNav = document.querySelector(".navbar_nav");

document.querySelector("#hamburger_menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//fungsi untuk menghilangkan nav ketika click di luar navbar
const hamburger = document.querySelector("#hamburger_menu");

document.addEventListener("click", function (e) {
  //jika di hamburger konten di klik tidak = navbarnav dan contain maka kelas 'active' di navbar pada toggle akan hialng
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popUp");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
