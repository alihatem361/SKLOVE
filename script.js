// JavaScript للتحكم في قائمة الموبايل
const hamburgerMenu = document.getElementById("hamburgerMenu");
const mainNav = document.getElementById("mainNav");

hamburgerMenu.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
