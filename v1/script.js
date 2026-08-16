// fungsi ID EN
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk memuat komponen eksternal (Header & Footer)
    function loadComponent(id, file, callback) {
        const element = document.getElementById(id);
        if (element) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`Gagal memuat ${file}`);
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                    if (callback) callback();
                })
                .catch(error => console.error(error));
        }
    }

    // Load Header lalu aktifkan kembali event mobile menu
    loadComponent('header-placeholder', 'header.html', () => {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    });

    // Load Footer
    loadComponent('footer-placeholder', 'footer.html');

    // ... (Kode galeri, modal, dan lainnya tetap di sini)
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ... (Fungsi Galeri, Modal, dan Booking tetap seperti semula)
});
