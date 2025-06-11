// File nya nama nya style.js ? engga salah bang?

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
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popUp");
// Cek dulu ini mah, ada atau engga
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// Tadi kan loginLink ada di atas, klo di js browser
// klo ada 1 kode error di atas kode apapun, kode itu ga jalan
// jadi mau ga mau di pindahin paling bawah atau ga ya di komentar
btnPopup.addEventListener("click", () => {
  // console.log("Trigger"); Usaha kan klo misal mau bikin apapun harus trigger dulu
  // buat ngecek trus di inspect buat liat console nya
  // download extension live server biar bisa ngecek secara realtime
  wrapper.classList.remove("active-popup");
});

// Ini klo engga ada loginLink ga bakal bisa di tambahin add event listener nya
// Solusi biar aman, jadi gini: if (loginLink) loginLink.addEventListener("click", .....
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
