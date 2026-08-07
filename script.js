// ==========================================================================
// 1. DAFTAR GAMBAR GALERI SPESIFIK & LOAD MORE (5 PER FETCH)
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
const ITEMS_PER_LOAD = 5; // Memuat 5 foto per klik sesuai permintaan

function renderGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const remainingCountSpan = document.getElementById('remainingCount');

    if (!galleryGrid) return;

    const nextBatch = galleryImages.slice(currentIndex, currentIndex + ITEMS_PER_LOAD);

    nextBatch.forEach(fileName => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item fade-in';

        const imgSrc = `assets/image/${fileName}`;

        itemDiv.innerHTML = `
            <img src="${imgSrc}" 
                 alt="Dokumentasi TSHoliday" 
                 loading="lazy" 
                 onclick="openLightbox('${imgSrc}')">
        `;

        galleryGrid.appendChild(itemDiv);
    });

    currentIndex += ITEMS_PER_LOAD;

    // Update jumlah sisa foto jika elemen remainingCount ada
    if (remainingCountSpan) {
        const remaining = galleryImages.length - currentIndex;
        remainingCountSpan.textContent = remaining > 0 ? remaining : 0;
    }

    // Sembunyikan tombol jika semua foto sudah dimuat
    if (currentIndex >= galleryImages.length && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// ==========================================================================
// 2. LIGHTBOX MODAL WITH ZOOM & NAVIGATION SYSTEM
// ==========================================================================
let currentZoom = 1;
let currentModalIndex = 0;

function openLightbox(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    if (modal && modalImg) {
        // Cari indeks gambar dalam array galeri
        const foundIndex = galleryImages.findIndex(file => imageSrc.includes(file));
        if (foundIndex !== -1) {
            currentModalIndex = foundIndex;
        }

        modal.classList.add('show');
        modalImg.src = imageSrc;
        modalImg.alt = 'Preview Image';
        currentZoom = 1;
        updateZoom();
    }
}

function updateZoom() {
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.style.transform = `scale(${currentZoom})`;
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('show');
        currentZoom = 1;
        updateZoom();
    }
}

// FUNGSI NAVIGASI FOTO SELANJUTNYA
function showNextImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex + 1) % galleryImages.length;
    const newSrc = `assets/image/${galleryImages[currentModalIndex]}`;
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.src = newSrc;
        currentZoom = 1;
        updateZoom();
    }
}

// FUNGSI NAVIGASI FOTO SEBELUMNYA
function showPrevImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex - 1 + galleryImages.length) % galleryImages.length;
    const newSrc = `assets/image/${galleryImages[currentModalIndex]}`;
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.src = newSrc;
        currentZoom = 1;
        updateZoom();
    }
}



// ==========================================================================
// 3. MAIN INITIALIZATION (DOM CONTENT LOADED)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    let currentLang = 'id';

    // A. INITIALIZE GALLERY
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (galleryGrid) {
        renderGalleryItems(); // Load 5 foto awal
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', renderGalleryItems);
        }
    }

    
    // B. LIGHTBOX CONTROL EVENT LISTENERS
    const prevImgBtn = document.getElementById('prevImgBtn');
    const nextImgBtn = document.getElementById('nextImgBtn');

    if (prevImgBtn) prevImgBtn.addEventListener('click', showPrevImage);
    if (nextImgBtn) nextImgBtn.addEventListener('click', showNextImage);

    // Navigasi via Keyboard (Panah Kiri, Panah Kanan, & ESC)
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('imageModal');
        if (modal && modal.classList.contains('show')) {
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'Escape') closeModal();
        }
    });

        // Scroll Wheel Zooming
        modal.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                if (currentZoom < 3) currentZoom += 0.15;
            } else {
                if (currentZoom > 0.5) currentZoom -= 0.15;
            }
            updateZoom();
        }, { passive: false });

        // Close Trigger
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content-wrapper')) {
                closeModal();
            }
        });

        // ESC Key Close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
    }

    // Otomatis daftarkan juga gambar lain (misal: kartu paket / legalitas)
    const extraClickableImages = document.querySelectorAll('.card img, .legality-img');
    extraClickableImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    // C. SCROLL TO TOP CONTROL
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // D. DYNAMIC LANGUAGE SWITCHER
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');

    function switchLanguage(lang) {
        currentLang = lang;

        // Text Content Translation
        document.querySelectorAll('[data-id][data-en]').forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (targetText) el.innerHTML = targetText;
        });

        // Input Placeholders Translation
        document.querySelectorAll('[data-id-placeholder][data-en-placeholder]').forEach(el => {
            const targetPlaceholder = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-id-placeholder');
            if (targetPlaceholder) el.setAttribute('placeholder', targetPlaceholder);
        });

        // Button Active State
        if (btnEN && btnID) {
            if (lang === 'en') {
                btnEN.classList.add('active');
                btnID.classList.remove('active');
            } else {
                btnID.classList.add('active');
                btnEN.classList.remove('active');
            }
        }
    }

    if (btnID && btnEN) {
        btnID.addEventListener('click', () => switchLanguage('id'));
        btnEN.addEventListener('click', () => switchLanguage('en'));
    }

    // E. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    // F. SMOOTH SCROLLING NAVIGATION
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

    // G. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // H. SWIPER TESTIMONIAL SLIDER
    if (document.querySelector('.testimoni-slider')) {
        new Swiper('.testimoni-slider', {
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
    }

    // I. FAQ ACCORDION TOGGLE
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => item.classList.toggle('active'));
        }
    });

    // J. INTERSECTION OBSERVER (FADE IN)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    if (fadeInSections.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeInSections.forEach(section => observer.observe(section));
    }

    // K. FORM BOOKING DIRECT TO WHATSAPP
    const bookingForm = document.getElementById('bookingForm') || document.getElementById('whatsappForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const namaEl = document.getElementById('nama') || document.getElementById('bookingName');
            const whatsappEl = document.getElementById('whatsapp');
            const tanggalEl = document.getElementById('tanggal') || document.getElementById('bookingDate');
            const pesertaEl = document.getElementById('peserta') || document.getElementById('bookingGuests');
            const tujuanSelect = document.getElementById('tujuan') || document.getElementById('bookingService');

            const nama = namaEl ? namaEl.value : '';
            const whatsapp = whatsappEl ? whatsappEl.value : '-';
            const tanggal = tanggalEl ? tanggalEl.value : '';
            const peserta = pesertaEl ? pesertaEl.value : '';
            const tujuan = tujuanSelect ? (tujuanSelect.options ? tujuanSelect.options[tujuanSelect.selectedIndex].text : tujuanSelect.value) : '';

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
    }

});


// ==========================================================================
// 4. REGISTER PWA SERVICE WORKER
// ==========================================================================
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
