/* =====================================================
   PIXOLL TEC
   SCRIPT.JS
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


/* ================= MOBILE MENU ================= */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* ================= FECHAR MENU ================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});