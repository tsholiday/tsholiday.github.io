/* ==========================================================================
   SECTION PENCARIAN / SEARCH
   ========================================================================== */


/* ==========================================================================
   TSHOLIDAY GLOBAL SCRIPT (SUBFOLDER VERSION)
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
            
            if (navContainer.classList.contains('active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            } else {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        });

        navContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });

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
    let itemsToShow = 5;

    const galleryImages = [
        { src: '../../assets/image/bandung.jpg', title: 'Bandung City View' },
        { src: '../../assets/image/ciwidey.jpg', title: 'Kawah Putih Ciwidey' },
        { src: '../../assets/image/lembang.jpg', title: 'The Lodge Lembang' },
        { src: '../../assets/image/legalitas.jpg', title: 'Dokumentasi & Legalitas TSHoliday' },
        { src: '../../assets/image/gallery1.jpg', title: 'Dokumentasi Wisata 1' },
        { src: '../../assets/image/gallery-1.jpg', title: 'Dokumentasi Wisata 2' },
        { src: '../../assets/image/gallery-2.webp', title: 'Dokumentasi Wisata 3' },
        { src: '../../assets/image/gallery-3.jpg', title: 'Dokumentasi Wisata 4' },
        { src: '../../assets/image/gallery-4.webp', title: 'Dokumentasi Wisata 5' },
        { src: '../../assets/image/gallery-5.webp', title: 'Dokumentasi Wisata 6' },
        { src: '../../assets/image/gallery-6.webp', title: 'Dokumentasi Wisata 7' },
        { src: '../../assets/image/gallery-7.webp', title: 'Dokumentasi Wisata 8' },
        { src: '../../assets/image/gallery-8.webp', title: 'Dokumentasi Wisata 9' },
        { src: '../../assets/image/gallery-9.webp', title: 'Dokumentasi Wisata 10' },
        { src: '../../assets/image/gallery-10.webp', title: 'Dokumentasi Wisata 11' },
        { src: '../../assets/image/gallery-11.webp', title: 'Dokumentasi Wisata 12' },
        { src: '../../assets/image/gallery-12.webp', title: 'Dokumentasi Wisata 13' },
        { src: '../../assets/image/gallery-13.webp', title: 'Dokumentasi Wisata 14' },
        { src: '../../assets/image/gallery-14.webp', title: 'Dokumentasi Wisata 15' },
        { src: '../../assets/image/gallery-15.jpg', title: 'Dokumentasi Wisata 16' },
        { src: '../../assets/image/gallery-16.webp', title: 'Dokumentasi Wisata 17' },
        { src: '../../assets/image/gallery-17.webp', title: 'Dokumentasi Wisata 18' },
        { src: '../../assets/image/gallery-18.webp', title: 'Dokumentasi Wisata 19' },
        { src: '../../assets/image/gallery-19.webp', title: 'Dokumentasi Wisata 20' },
        { src: '../../assets/image/gallery-20.webp', title: 'Dokumentasi Wisata 21' },
        { src: '../../assets/image/gallery-21.webp', title: 'Dokumentasi Wisata 22' },
        { src: '../../assets/image/gallery-22.webp', title: 'Dokumentasi Wisata 23' },
        { src: '../../assets/image/gallery-23.webp', title: 'Dokumentasi Wisata 24' },
        { src: '../../assets/image/gallery-24.webp', title: 'Dokumentasi Wisata 25' },
        { src: '../../assets/image/gallery-25.webp', title: 'Dokumentasi Wisata 26' },
        { src: '../../assets/image/gallery-26.webp', title: 'Dokumentasi Wisata 27' },
        { src: '../../assets/image/gallery-27.jpg', title: 'Dokumentasi Wisata 28' },
        { src: '../../assets/image/gallery-28.webp', title: 'Dokumentasi Wisata 29' },
        { src: '../../assets/image/gallery-29.webp', title: 'Dokumentasi Wisata 30' },
        { src: '../../assets/image/gallery-30.webp', title: 'Dokumentasi Wisata 31' },
        { src: '../../assets/image/gallery-31.webp', title: 'Dokumentasi Wisata 32' },
        { src: '../../assets/image/gallery-32.webp', title: 'Dokumentasi Wisata 33' },
        { src: '../../assets/image/gallery-33.webp', title: 'Dokumentasi Wisata 34' },
        { src: '../../assets/image/gallery-34.webp', title: 'Dokumentasi Wisata 35' },
        { src: '../../assets/image/gallery-35.webp', title: 'Dokumentasi Wisata 36' },
        { src: '../../assets/image/gallery-36.webp', title: 'Dokumentasi Wisata 37' },
        { src: '../../assets/image/gallery-37.webp', title: 'Dokumentasi Wisata 38' },
        { src: '../../assets/image/gallery-38.webp', title: 'Dokumentasi Wisata 39' },
        { src: '../../assets/image/gallery-39.jpg', title: 'Dokumentasi Wisata 40' },
        { src: '../../assets/image/gallery-40.webp', title: 'Dokumentasi Wisata 41' },
        { src: '../../assets/image/gallery-41.webp', title: 'Dokumentasi Wisata 42' },
        { src: '../../assets/image/gallery-42.webp', title: 'Dokumentasi Wisata 43' },
        { src: '../../assets/image/gallery-43.webp', title: 'Dokumentasi Wisata 44' },
        { src: '../../assets/image/gallery-44.webp', title: 'Dokumentasi Wisata 45' },
        { src: '../../assets/image/gallery-45.webp', title: 'Dokumentasi Wisata 46' },
        { src: '../../assets/image/gallery-46.webp', title: 'Dokumentasi Wisata 47' },
        { src: '../../assets/image/gallery-47.webp', title: 'Dokumentasi Wisata 48' },
        { src: '../../assets/image/gallery-48.webp', title: 'Dokumentasi Wisata 49' },
        { src: '../../assets/image/gallery-49.webp', title: 'Dokumentasi Wisata 50' },
        { src: '../../assets/image/gallery-50.webp', title: 'Dokumentasi Wisata 51' },
        { src: '../../assets/image/gallery-51.jpg', title: 'Dokumentasi Wisata 52' },
        { src: '../../assets/image/gallery-52.webp', title: 'Dokumentasi Wisata 53' },
        { src: '../../assets/image/gallery-53.webp', title: 'Dokumentasi Wisata 54' },
        { src: '../../assets/image/gallery-54.webp', title: 'Dokumentasi Wisata 55' },
        { src: '../../assets/image/gallery-55.webp', title: 'Dokumentasi Wisata 56' },
        { src: '../../assets/image/gallery-56.jpg', title: 'Dokumentasi Wisata 57' },
        { src: '../../assets/image/gallery-57.webp', title: 'Dokumentasi Wisata 58' },
        { src: '../../assets/image/gallery-58.jpg', title: 'Dokumentasi Wisata 59' },
        { src: '../../assets/image/gallery-59.webp', title: 'Dokumentasi Wisata 60' },
        { src: '../../assets/image/gallery-60.webp', title: 'Dokumentasi Wisata 61' },
        { src: '../../assets/image/gallery-61.webp', title: 'Dokumentasi Wisata 62' },
        { src: '../../assets/image/gallery-62.webp', title: 'Dokumentasi Wisata 63' },
        { src: '../../assets/image/gallery-63.jpg', title: 'Dokumentasi Wisata 64' },
        { src: '../../assets/image/gallery-64.webp', title: 'Dokumentasi Wisata 65' },
        { src: '../../assets/image/gallery-65.webp', title: 'Dokumentasi Wisata 66' },
        { src: '../../assets/image/gallery-66.webp', title: 'Dokumentasi Wisata 67' },
        { src: '../../assets/image/gallery-67.webp', title: 'Dokumentasi Wisata 68' },
        { src: '../../assets/image/gallery-68.webp', title: 'Dokumentasi Wisata 69' },
        { src: '../../assets/image/gallery-69.webp', title: 'Dokumentasi Wisata 70' },
        { src: '../../assets/image/gallery-70.webp', title: 'Dokumentasi Wisata 71' },
        { src: '../../assets/image/gallery-71.webp', title: 'Dokumentasi Wisata 72' },
        { src: '../../assets/image/gallery-72.webp', title: 'Dokumentasi Wisata 73' },
        { src: '../../assets/image/gallery-73.webp', title: 'Dokumentasi Wisata 74' },
        { src: '../../assets/image/gallery-74.webp', title: 'Dokumentasi Wisata 75' },
        { src: '../../assets/image/gallery-75.jpg', title: 'Dokumentasi Wisata 76' },
        { src: '../../assets/image/gallery-76.webp', title: 'Dokumentasi Wisata 77' },
        { src: '../../assets/image/gallery-77.webp', title: 'Dokumentasi Wisata 78' },
        { src: '../../assets/image/gallery-78.webp', title: 'Dokumentasi Wisata 79' },
        { src: '../../assets/image/gallery-79.webp', title: 'Dokumentasi Wisata 80' },
        { src: '../../assets/image/gallery-80.webp', title: 'Dokumentasi Wisata 81' },
        { src: '../../assets/image/gallery-81.webp', title: 'Dokumentasi Wisata 82' },
        { src: '../../assets/image/gallery-82.webp', title: 'Dokumentasi Wisata 83' },
        { src: '../../assets/image/gallery-83.webp', title: 'Dokumentasi Wisata 84' },
        { src: '../../assets/image/gallery-84.webp', title: 'Dokumentasi Wisata 85' },
        { src: '../../assets/image/gallery-85.webp', title: 'Dokumentasi Wisata 86' },
        { src: '../../assets/image/gallery-86.webp', title: 'Dokumentasi Wisata 87' },
        { src: '../../assets/image/gallery-87.jpg', title: 'Dokumentasi Wisata 88' },
        { src: '../../assets/image/gallery-88.webp', title: 'Dokumentasi Wisata 89' },
        { src: '../../assets/image/gallery-89.webp', title: 'Dokumentasi Wisata 90' },
        { src: '../../assets/image/gallery-9.webp', title: 'Dokumentasi Wisata 91' },
        { src: '../../assets/image/gallery-90.webp', title: 'Dokumentasi Wisata 92' },
        { src: '../../assets/image/gallery-91.webp', title: 'Dokumentasi Wisata 93' },
        { src: '../../assets/image/gallery-92.webp', title: 'Dokumentasi Wisata 94' },
        { src: '../../assets/image/gallery-93.webp', title: 'Dokumentasi Wisata 95' },
        { src: '../../assets/image/gallery-94.webp', title: 'Dokumentasi Wisata 96' },
        { src: '../../assets/image/gallery-95.webp', title: 'Dokumentasi Wisata 97' },
        { src: '../../assets/image/gallery-96.webp', title: 'Dokumentasi Wisata 98' },
        { src: '../../assets/image/gallery-97.webp', title: 'Dokumentasi Wisata 99' },
        { src: '../../assets/image/gallery-98.webp', title: 'Dokumentasi Wisata 100' },
        { src: '../../assets/image/gallery-99.jpg', title: 'Dokumentasi Wisata 101' },
        { src: '../../assets/image/gallery-100.webp', title: 'Dokumentasi Wisata 102' },
        { src: '../../assets/image/gallery-101.webp', title: 'Dokumentasi Wisata 103' },
        { src: '../../assets/image/gallery-136.webp', title: 'Dokumentasi Wisata 104' },
        { src: '../../assets/image/gallery-137.webp', title: 'Dokumentasi Wisata 105' },
        { src: '../../assets/image/gallery-138.webp', title: 'Dokumentasi Wisata 106' },
        { src: '../../assets/image/gallery-139.webp', title: 'Dokumentasi Wisata 107' },
        { src: '../../assets/image/gallery-140.webp', title: 'Dokumentasi Wisata 108' },
        { src: '../../assets/image/gallery-141.webp', title: 'Dokumentasi Wisata 109' },
        { src: '../../assets/image/gallery-142.webp', title: 'Dokumentasi Wisata 110' },
        { src: '../../assets/image/gallery-143.webp', title: 'Dokumentasi Wisata 111' },
        { src: '../../assets/image/gallery-144.webp', title: 'Dokumentasi Wisata 112' },
        { src: '../../assets/image/gallery-145.webp', title: 'Dokumentasi Wisata 113' },
        { src: '../../assets/image/gallery-146.webp', title: 'Dokumentasi Wisata 114' },
        { src: '../../assets/image/gallery-147.jpg', title: 'Dokumentasi Wisata 115' },
        { src: '../../assets/image/gallery-148.webp', title: 'Dokumentasi Wisata 116' },
        { src: '../../assets/image/gallery-149.webp', title: 'Dokumentasi Wisata 117' },
        { src: '../../assets/image/gallery-150.jpg', title: 'Dokumentasi Wisata 118' },
        { src: '../../assets/image/gallery-151.webp', title: 'Dokumentasi Wisata 119' },
        { src: '../../assets/image/gallery-152.webp', title: 'Dokumentasi Wisata 120' },
        { src: '../../assets/image/gallery-153.webp', title: 'Dokumentasi Wisata 121' },
        { src: '../../assets/image/gallery-154.webp', title: 'Dokumentasi Wisata 122' },
        { src: '../../assets/image/gallery-155.webp', title: 'Dokumentasi Wisata 123' },
        { src: '../../assets/image/gallery-156.webp', title: 'Dokumentasi Wisata 124' },
        { src: '../../assets/image/gallery-157.webp', title: 'Dokumentasi Wisata 125' },
        { src: '../../assets/image/gallery-158.webp', title: 'Dokumentasi Wisata 126' }
    ];

    function renderGallery() {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        const currentItems = galleryImages.slice(0, itemsToShow);
        
        currentItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 flex flex-col';
            div.innerHTML = `
                <div class="relative h-56 overflow-hidden bg-gray-100">
                    <img src="${item.src}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span class="text-white text-xs font-semibold flex items-center gap-1.5"><i class="fas fa-search-plus text-gold"></i> Perbesar Foto</span>
                    </div>
                </div>
                <div class="p-4 bg-white flex items-center justify-between">
                    <p class="text-xs font-bold text-primary truncate">${item.title}</p>
                    <span class="text-[10px] bg-light text-gray-500 px-2 py-0.5 rounded-full font-medium">TSHoliday</span>
                </div>
            `;
            div.addEventListener('click', () => {
                if (typeof window.openImageModal === 'function') {
                    window.openImageModal(index);
                }
            });
            galleryGrid.appendChild(div);
        });

        if (loadMoreBtn) {
            if (itemsToShow >= galleryImages.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            itemsToShow += 10;
            renderGallery();
        });
    }

    renderGallery();

    /* ==========================================================
       6. MODAL DETAIL DESTINASI & LIGHTBOX (Global Scope)
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
    };

    window.closeDetailModal = function() {
        if (detailModal) {
            detailModal.style.display = 'none';
        }
    };

    // Global Image Lightbox Handler untuk Galeri
    window.openImageModal = function(index) {
        const item = galleryImages[index];
        if (!item) return;

        // Cek apakah modal lightbox sudah ada, jika belum buat secara dinamis
        let lightbox = document.getElementById('galleryLightboxModal');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.id = 'galleryLightboxModal';
            lightbox.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4';
            lightbox.innerHTML = `
                <div class="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col items-center">
                    <button id="closeLightbox" class="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <i class="fas fa-times text-lg"></i>
                    </button>
                    <img id="lightboxImg" src="" alt="" class="max-h-[70vh] w-auto object-contain rounded-2xl mb-4 shadow-sm">
                    <h4 id="lightboxTitle" class="text-base md:text-lg font-bold text-primary text-center"></h4>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.querySelector('#closeLightbox').addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                }
            });
        }

        document.getElementById('lightboxImg').src = item.src;
        document.getElementById('lightboxImg').alt = item.title;
        document.getElementById('lightboxTitle').textContent = item.title;
        lightbox.style.display = 'flex';
    };

    window.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });

});
