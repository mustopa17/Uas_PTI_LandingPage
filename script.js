// untuk mengatur saat tombol icon menu di klik maka tombol navbar akan muncul
const navbarNav =
  document.querySelector(
    ".navbar-nav"
  ); /* membuat narvbarNav dengan mencari elemen dari html dengan class .navbar-nav */
// ketika icon menu di klik jalankan fungsi (=>) yang ada di curly bracket
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  // kalo sebelumnya gak ada class nya maka ditambahin
  // kalo sebelumnya udah ada classnya maka ilangin
  // dimana classnya = active
  // navbar akan muncul class active
  // tapi kalo class active udah ada maka class active akan hilang, jika menu di click
};

// menghilangkan navbar pada menu (disamping) dengan mengklik di luar sidebar
const hamburger = document.querySelector('#hamburger-menu');

// membuat event dimana ketika mengklik mouse diluar sidebar
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
// ketika di 'click' maka jalankan 'function' dan ambil event atau 'e'
// lalu kita buat kondisi jika kita mengklik diluar side bar dan diluar icon menu(hamburger-menu)
// kenapa diluar icon menu(hamburger menu)? takutnya ketimpa sama kode di line 7 dan 8 pada script.js
// e.target = apa yang di click oleh mouse kita
// jadi tanda seru merupakan kondisi !=
// setelah kondisi terpenuhi, kita hilangkan fungsi 'active' yang ada pada 
