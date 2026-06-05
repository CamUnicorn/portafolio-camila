/* ========================= */
/* CURSOR PERSONALIZADO */
/* ========================= */

const cursor = document.querySelector('.cursor');

if (cursor) {

    document.addEventListener('mousemove', e => {

        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

    });

}

/* ========================= */
/* MODAL SKETCHFAB */
/* ========================= */

const modal = document.getElementById("sketchfabModal");
const iframe = document.getElementById("sketchfabFrame");
const closeBtn = document.querySelector(".close-modal");

if (modal && iframe && closeBtn) {

    document.querySelectorAll(".model-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            iframe.src = btn.dataset.model;
            modal.style.display = "flex";

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";
        iframe.src = "";

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";
            iframe.src = "";

        }

    });

}

/* ========================= */
/* MENÚ HAMBURGUESA */
/* ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}