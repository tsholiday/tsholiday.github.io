// 1. Variabel Global & Data
let currentLang = localStorage.getItem('lang') || 'id'; // Default ke 'id'

const translations = {
    "id": {
        "nav_home": "Beranda",
        "nav_about": "Tentang",
        "nav_packages": "Paket",
        "nav_fleet": "Armada",
        "nav_contact": "Kontak",
        "nav_cta": "Pesan Langsung"
    },
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_packages": "Packages",
        "nav_fleet": "Fleet",
        "nav_contact": "Contact",
        "nav_cta": "Book Now"
    }
};

// 2. Fungsi Utama Update Konten
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

// 3. Fungsi Toggle Bahasa
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('lang', currentLang);
    updateContent();
}

// 4. Inisialisasi Halaman
document.addEventListener('DOMContentLoaded', () => {
    
    // Fungsi Load Komponen
    function loadComponent(id, file, callback) {
        const element = document.getElementById(id);
        if (element) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                    if (callback) callback();
                    // PENTING: Update bahasa setelah header/footer muncul
                    updateContent(); 
                })
                .catch(error => console.error(`Gagal memuat ${file}:`, error));
        }
    }

    // Load Header & Footer
    loadComponent('header-placeholder', 'header.html', () => {
        // Event Listener untuk Mobile Menu setelah header dimuat
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    });

    loadComponent('footer-placeholder', 'footer.html');

    // Inisialisasi awal saat pertama kali buka
    updateContent();
});
