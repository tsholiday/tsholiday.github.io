/* ==========================================================================
   TSHOLIDAY GLOBAL SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       1. MOBILE MENU & GLASSMORPHISM TOGGLE
       ========================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navContainer = document.getElementById('navContainer');
    const toggleIcon = document.getElementById('toggleIcon');

    if (mobileToggle && navContainer) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navContainer.classList.toggle('active');
            
            // Mengubah ikon garis tiga (bars) menjadi tanda silang (times)
            if (navContainer.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            } else {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        });

        // Menutup menu otomatis ketika salah satu tautan di dalam mobile menu diklik
        navContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });

        // Menutup menu ketika pengguna mengklik di luar area navbar
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && !mobileToggle.contains(e.target)) {
                navContainer.classList.remove('active');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            }
        });
    }

    /* ==========================================================
       2. BAHASA (ID / EN) TOGGLE ANIMASI & KONTEN
       ========================================================== */
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');
    const langPill = document.getElementById('lang-pill');
    let currentLang = 'id';

    function setLanguage(lang) {
        currentLang = lang;
        if (lang === 'en') {
            if (langPill) langPill.style.transform = 'translateX(32px)';
            if (btnEn) {
                btnEn.classList.remove('text-gray-700');
                btnEn.classList.add('text-white');
            }
            if (btnId) {
                btnId.classList.remove('text-white');
                btnId.classList.add('text-gray-700');
            }
        } else {
            if (langPill) langPill.style.transform = 'translateX(0px)';
            if (btnId) {
                btnId.classList.remove('text-gray-700');
                btnId.classList.add('text-white');
            }
            if (btnEn) {
                btnEn.classList.remove('text-white');
                btnEn.classList.add('text-gray-700');
            }
        }

        // Ubah elemen yang memiliki atribut data-id dan data-en
        document.querySelectorAll('[data-id]').forEach(el => {
            const translation = el.getAttribute(`data-${lang}`);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
    }

    if (btnId && btnEn) {
        btnId.addEventListener('click', () => setLanguage('id'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    /* ==========================================================
       3. SCROLL TO TOP BUTTON
       ========================================================== */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================
       4. WHATSAPP BOOKING FORM SUBMISSION
       ========================================================== */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const tanggal = document.getElementById('tanggal').value;
            const peserta = document.getElementById('peserta').value;
            const tujuan = document.getElementById('tujuan').value;

            const adminPhone = '6282130640161';
            const message = `Halo TSHoliday, saya ingin melakukan pemesanan:%0A` +
                            `- Nama: ${nama}%0A` +
                            `- No WhatsApp: ${whatsapp}%0A` +
                            `- Tanggal: ${tanggal}%0A` +
                            `- Jumlah Peserta: ${peserta} Orang%0A` +
                            `- Paket/Kendaraan: ${tujuan}%0A%0A` +
                            `Mohon informasinya lebih lanjut. Terima kasih!`;

            window.open(`https://wa.me/${adminPhone}?text=${message}`, '_blank');
        });
    }

    /* ==========================================================
       5. GALERI DINAMIS & LIGHTBOX MODAL
       ========================================================== */
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Contoh data galeri gambar
    const galleryImages = [
        { src: 'assets/image/ciwidey/ciwidey.jpg', title: 'Kawah Putih Ciwidey' },
        { src: 'assets/image/lembang/lembang.jpg', title: 'The Lodge Lembang' },
        { src: 'assets/image/kota-bandung/bandung.jpg', title: 'Gedung Sate Bandung' },
        { src: 'assets/image/legalitas.jpg', title: 'Armada TSHoliday' }
    ];

    let itemsToShow = 4;
    function renderGallery() {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        const currentItems = galleryImages.slice(0, itemsToShow);
        
        currentItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'overflow-hidden rounded-2xl shadow-md cursor-pointer group relative h-48';
            div.innerHTML = `
                <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                    ${item.title}
                </div>
            `;
            div.addEventListener('click', () => openImageModal(index));
            galleryGrid.appendChild(div);
        });

        if (loadMoreBtn) {
            if (itemsToShow >= galleryImages.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            itemsToShow += 4;
            renderGallery();
        });
    }

    renderGallery();

    // Lightbox Image Modal Logic
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    let currentImageIndex = 0;
    let currentZoom = 1;

    window.openImageModal = function(index) {
        currentImageIndex = index;
        currentZoom = 1;
        if (modalImage && imageModal) {
            modalImage.src = galleryImages[index].src;
            modalImage.style.transform = `scale(${currentZoom})`;
            imageModal.style.display = 'flex';
        }
    }

    if (modalClose && imageModal) {
        modalClose.addEventListener('click', () => {
            imageModal.style.display = 'none';
        });
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }

    // Zoom & Navigation Controls di Modal
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');
    const prevImgBtn = document.getElementById('prevImgBtn');
    const nextImgBtn = document.getElementById('nextImgBtn');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            currentZoom = Math.min(currentZoom + 0.25, 2.5);
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            currentZoom = Math.max(currentZoom - 0.25, 1);
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', () => {
            currentZoom = 1;
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }
    if (prevImgBtn) {
        prevImgBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].src;
            currentZoom = 1;
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }
    if (nextImgBtn) {
        nextImgBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].src;
            currentZoom = 1;
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }

});

/* ==========================================================
   6. MODAL DETAIL DESTINASI (Global Scope)
   ========================================================== */
const detailModal = document.getElementById('detailModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBodyList = document.getElementById('modalBodyList');

const destinationDetails = {
    ciwidey: {
        title: "Ciwidey Tour Package",
        subtitle: "Eksplorasi Keindahan Alam Dataran Tinggi Selatan Bandung",
        items: [
            "Kawah Putih (Danau vulkanik eksotis berwarna putih kehijauan)",
            "Perkebunan Teh Rancabali (Hamparan hijau menyejukkan mata)",
            "Glamping Lakeside / Situ Patenggang (Makan siang tepi danau ikonik)"
        ]
    },
    lembang: {
        title: "Lembang Escape Package",
        subtitle: "Wisata Keluarga & Spot Instagramable Populer",
        items: [
            "Gunung Tangkuban Perahu (Kawah aktif legendaris)",
            "Farmhouse Susu Lembang (Nuansa perkampungan Eropa klasik)",
            "The Lodge Maribaya (Outbound & spot foto udara pegunungan)"
        ]
    },
    bandung: {
        title: "Bandung City Tour",
        subtitle: "Menelusuri Jejak Sejarah & Pusat Perbelanjaan Kota",
        items: [
            "Gedung Sate (Ikon arsitektur kolonial Belanda)",
            "Kawasan Jalan Asia Afrika & Museum Konferensi Asia Afrika",
            "Pusat Belanja / Factory Outlet Jalan Riau & Dago"
        ]
    }
};

window.openDetailModal = function(key) {
    const data = destinationDetails[key];
    if (data && detailModal) {
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalBodyList.innerHTML = data.items.map(item => `<div class="p-3 bg-light rounded-xl mb-2 text-sm text-gray-700 flex items-center gap-2"><i class="fas fa-check-circle text-gold"></i> ${item}</div>`).join('');
        detailModal.style.display = 'block';
    }
}

window.closeDetailModal = function() {
    if (detailModal) {
        detailModal.style.display = 'none';
    }
}

window.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.style.display = 'none';
    }
});
