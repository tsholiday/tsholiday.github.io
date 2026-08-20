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

    function setLanguage(lang) {
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
        { src: '../../assets/image/ciwidey.jpg', title: 'Kawah Putih Ciwidey' }
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
            loadMoreBtn.style.display = itemsToShow >= galleryImages.length ? 'none' : 'inline-flex';
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            itemsToShow += 10;
            renderGallery();
        });
    }

    renderGallery();
});
