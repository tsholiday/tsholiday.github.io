// ==========================================================================
// DYNAMIC GALLERY WITH LOAD MORE (5 PER FETCH)
// ==========================================================================
const galleryImages = [
    "bandung.jpg", "ciwidey.jpg", "gallery-1.jpg", "gallery-10.webp", "gallery-100.webp",
    "gallery-101.webp", "gallery-11.webp", "gallery-12.webp", "gallery-13.webp", "gallery-136.webp",
    "gallery-137.webp", "gallery-138.webp", "gallery-139.webp", "gallery-14.webp", "gallery-140.webp",
    "gallery-141.webp", "gallery-142.webp", "gallery-143.webp", "gallery-144.webp", "gallery-145.webp",
    "gallery-146.webp", "gallery-147.jpg", "gallery-148.webp", "gallery-149.webp", "gallery-15.jpg",
    "gallery-150.jpg", "gallery-151.webp", "gallery-152.webp", "gallery-153.webp", "gallery-154.webp",
    "gallery-155.webp", "gallery-156.webp", "gallery-157.webp", "gallery-158.webp", "gallery-16.webp",
    "gallery-17.webp", "gallery-18.webp", "gallery-19.webp", "gallery-2.webp", "gallery-20.webp",
    "gallery-21.webp", "gallery-22.webp", "gallery-23.webp", "gallery-24.webp", "gallery-25.webp",
    "gallery-26.webp", "gallery-27.jpg", "gallery-28.webp", "gallery-29.webp", "gallery-3.jpg",
    "gallery-30.webp", "gallery-31.webp", "gallery-32.webp", "gallery-33.webp", "gallery-34.webp",
    "gallery-35.webp", "gallery-36.webp", "gallery-37.webp", "gallery-38.webp", "gallery-39.jpg",
    "gallery-4.webp", "gallery-40.webp", "gallery-41.webp", "gallery-42.webp", "gallery-43.webp",
    "gallery-44.webp", "gallery-45.webp", "gallery-46.webp", "gallery-47.webp", "gallery-48.webp",
    "gallery-49.webp", "gallery-5.webp", "gallery-50.webp", "gallery-51.jpg", "gallery-52.webp",
    "gallery-53.webp", "gallery-54.webp", "gallery-55.webp", "gallery-56.jpg", "gallery-57.webp",
    "gallery-58.jpg", "gallery-59.webp", "gallery-6.webp", "gallery-60.webp", "gallery-61.webp",
    "gallery-62.webp", "gallery-63.jpg", "gallery-64.webp", "gallery-65.webp", "gallery-66.webp",
    "gallery-67.webp", "gallery-68.webp", "gallery-69.webp", "gallery-7.webp", "gallery-70.webp",
    "gallery-71.webp", "gallery-72.webp", "gallery-73.webp", "gallery-74.webp", "gallery-75.jpg",
    "gallery-76.webp", "gallery-77.webp", "gallery-78.webp", "gallery-79.webp", "gallery-8.webp",
    "gallery-80.webp", "gallery-81.webp", "gallery-82.webp", "gallery-83.webp", "gallery-84.webp",
    "gallery-85.webp", "gallery-86.webp", "gallery-87.jpg", "gallery-88.webp", "gallery-89.webp",
    "gallery-9.webp", "gallery-90.webp", "gallery-91.webp", "gallery-92.webp", "gallery-93.webp",
    "gallery-94.webp", "gallery-95.webp", "gallery-96.webp", "gallery-97.webp", "gallery-98.webp",
    "gallery-99.jpg", "gallery1.jpg", "legalitas.jpg", "lembang.jpg"
];

let currentIndex = 0;
const imagesPerLoad = 5;

function loadGalleryImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!galleryGrid) return;

    const nextBatch = galleryImages.slice(currentIndex, currentIndex + imagesPerLoad);

    nextBatch.forEach(fileName => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = `assets/image/${fileName}`;
        img.alt = 'TSHoliday Gallery';
        img.loading = 'lazy'; // Lazy loading untuk menghemat kuota & mempercepat muat halaman

        itemDiv.appendChild(img);
        galleryGrid.appendChild(itemDiv);
    });

    currentIndex += imagesPerLoad;

    // Sembunyikan tombol jika semua gambar sudah ditampilkan
    if (currentIndex >= galleryImages.length && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// Inisialisasi awal saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages(); // Muat 5 gambar pertama

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadGalleryImages);
    }
});


// ==========================================================================
    // KONTROL TOMBOL SCROLL TO TOP
    // ==========================================================================
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        // Tampilkan/sembunyikan tombol berdasarkan posisi scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Muncul setelah scroll 300px ke bawah
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        // Aksi klik untuk kembali ke paling atas
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


// ==========================================
// PWA GALLERY LOAD MORE SYSTEM (158 PHOTOS)
// ==========================================

const galleryimage = [];
const TOTAL_image = 158;

for (let i = 1; i <= TOTAL_image; i++) {
    galleryimage.push({
        // Jalur folder diubah menjadi assets/image/gallery/
        src: `assets/image/gallery/gallery-${i}.jpg`,
        alt: `Dokumentasi TSHoliday Bandung #${i}`
    });
}


// 2. Konfigurasi Tampilan
const ITEMS_PER_LOAD = 10; // Jumlah foto yang dimuat per klik
let currentIndex = 0;

const galleryGrid = document.getElementById('galleryGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const remainingCountSpan = document.getElementById('remainingCount');

// 3. Fungsi Render Foto
function renderGalleryItems() {
    const nextItems = galleryimage.slice(currentIndex, currentIndex + ITEMS_PER_LOAD);

    nextItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in'; // Animasi smooth

        galleryItem.innerHTML = `
            <img src="${item.src}" 
                 alt="${item.alt}" 
                 loading="lazy" 
                 onclick="openLightbox('${item.src}')">
        `;

        galleryGrid.appendChild(galleryItem);
    });

    currentIndex += ITEMS_PER_LOAD;

    // Update jumlah sisa foto pada tombol
    const remaining = TOTAL_image - currentIndex;
    if (remainingSpan()) {
        remainingCountSpan.textContent = remaining > 0 ? remaining : 0;
    }

    // Sembunyikan tombol jika semua 158 foto sudah tampil
    if (currentIndex >= TOTAL_image) {
        loadMoreBtn.style.display = 'none';
    }
}

// Helper untuk update counter aman
function remainingSpan() {
    return document.getElementById('remainingCount');
}

// 4. Inisialisasi Tampilan Pertama (10 Foto Pertama)
document.addEventListener('DOMContentLoaded', () => {
    if (galleryGrid && loadMoreBtn) {
        renderGalleryItems(); // Load 10 foto awal

        // Event Listener Tombol "Tampilkan Lebih Banyak"
        loadMoreBtn.addEventListener('click', () => {
            renderGalleryItems();
        });
    }
});


// 10. REGISTER PWA SERVICE WORKER
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((reg) => {
                    console.log('TSHoliday PWA Registered Successfully:', reg.scope);
                })
                .catch((err) => {
                    console.error('TSHoliday PWA Registration Failed:', err);
                });
        });
    }


// 9. LIGHTBOX MODAL WITH ZOOM IN / ZOOM OUT SYSTEM
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');

    let currentZoom = 1;

    // Otomatis daftarkan semua gambar di paket, galeri, dan legalitas
    const clickableimage = document.querySelectorAll('.card img, .gallery-grid img, .legality-img');

    clickableimage.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Preview Image';
            currentZoom = 1;
            updateZoom();
        });
    });

    // Fungsi Update Transform Zoom
    function updateZoom() {
        modalImg.style.transform = `scale(${currentZoom})`;
    }

    // Tombol Zoom In
    zoomInBtn.addEventListener('click', () => {
        if (currentZoom < 3) {
            currentZoom += 0.25;
            updateZoom();
        }
    });

    // Tombol Zoom Out
    zoomOutBtn.addEventListener('click', () => {
        if (currentZoom > 0.5) {
            currentZoom -= 0.25;
            updateZoom();
        }
    });

    // Tombol Reset Zoom
    resetZoomBtn.addEventListener('click', () => {
        currentZoom = 1;
        updateZoom();
    });

    // Zoom menggunakan Scroll Wheel pada Mouse
    modal.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (currentZoom < 3) currentZoom += 0.15;
        } else {
            if (currentZoom > 0.5) currentZoom -= 0.15;
        }
        updateZoom();
    }, { passive: false });

    // Tutup Modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === document.querySelector('.modal-content-wrapper')) {
            closeModal();
        }
    });

    // Tutup Modal dengan tombol ESC Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        currentZoom = 1;
        updateZoom();
    }


document.addEventListener('DOMContentLoaded', () => {

    let currentLang = 'id';

    // 1. DYNAMIC LANGUAGE SWITCHER
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');

    function switchLanguage(lang) {
        currentLang = lang;

        // A. Translate text Content
        const translatableElements = document.querySelectorAll('[data-id][data-en]');
        translatableElements.forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (targetText) {
                el.innerHTML = targetText;
            }
        });

        // B. Translate Input Placeholders
        const placeholderElements = document.querySelectorAll('[data-id-placeholder][data-en-placeholder]');
        placeholderElements.forEach(el => {
            const targetPlaceholder = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-id-placeholder');
            if (targetPlaceholder) {
                el.setAttribute('placeholder', targetPlaceholder);
            }
        });

        // C. Update Language Active State
        if (lang === 'en') {
            btnEN.classList.add('active');
            btnID.classList.remove('active');
        } else {
            btnID.classList.add('active');
            btnEN.classList.remove('active');
        }
    }

    btnID.addEventListener('click', () => switchLanguage('id'));
    btnEN.addEventListener('click', () => switchLanguage('en'));

    // 2. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. SMOOTH SCROLLING NAVIGASI
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. SWIPER AUTOMATIC SLIDER FOR TESTIMONI
    const swiper = new Swiper('.testimoni-slider', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 6. FAQ TOGGLE
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // 7. INTERSECTION OBSERVER (FADE IN)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // 8. FORM BOOKING DIRECT TO WHATSAPP (+62 821-3064-0161)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const tanggal = document.getElementById('tanggal').value;
        const peserta = document.getElementById('peserta').value;
        const tujuanSelect = document.getElementById('tujuan');
        const tujuan = tujuanSelect.options[tujuanSelect.selectedIndex].text;

        // Nomor WhatsApp Resmi TSHoliday
        const adminWA = "6282130640161"; 

        let pesan = "";

        if (currentLang === 'en') {
            pesan = `Hello TSHoliday Admin, I would like to book a trip:%0A%0A` +
                    `*Name:* ${nama}%0A` +
                    `*WhatsApp:* ${whatsapp}%0A` +
                    `*Travel Date:* ${tanggal}%0A` +
                    `*Guests:* ${peserta} Pax%0A` +
                    `*Package/Destination:* ${tujuan}%0A%0A` +
                    `Please share unit availability and pricing details. Thank you!`;
        } else {
            pesan = `Halo Admin TSHoliday, saya ingin reservasi perjalanan:%0A%0A` +
                    `*Nama:* ${nama}%0A` +
                    `*No. WA:* ${whatsapp}%0A` +
                    `*Tanggal Perjalanan:* ${tanggal}%0A` +
                    `*Jumlah Peserta:* ${peserta} Orang%0A` +
                    `*Tujuan/Paket:* ${tujuan}%0A%0A` +
                    `Mohon info ketersediaan unit dan total harganya. Terima kasih!`;
        }

        window.open(`https://wa.me/${adminWA}?text=${pesan}`, '_blank');
    });

});
