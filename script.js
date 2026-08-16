document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DATA & RENDER GALERI DOKUMENTASI
       ========================================================================== */
    const galleryData = [
        { src: 'assets/image/ciwidey/ciwidey.jpg', alt: 'Wisata Ciwidey Kawah Putih' },
        { src: 'assets/image/lembang/lembang.jpg', alt: 'Wisata Lembang Bandung' },
        { src: 'assets/image/kota-bandung/bandung.jpg', alt: 'Bandung City Tour' },
        { src: 'assets/image/legalitas.jpg', alt: 'Armada & Tim TSHoliday' },
        { src: 'assets/image/ciwidey/ciwidey.jpg', alt: 'Perkebunan Teh Rancabali' },
        { src: 'assets/image/lembang/lembang.jpg', alt: 'Farmhouse Lembang' },
        { src: 'assets/image/kota-bandung/bandung.jpg', alt: 'Gedung Sate Bandung' },
        { src: 'assets/image/legalitas.jpg', alt: 'Dokumentasi Peserta Tour' }
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    let itemsShown = 4;
    const itemsPerLoad = 4;

    function renderGallery() {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';

        const visibleItems = galleryData.slice(0, itemsShown);

        visibleItems.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Gambar+Tidak+Ditemukan';">
            `;
            galleryItem.addEventListener('click', () => openImageModal(index));
            galleryGrid.appendChild(galleryItem);
        });

        if (loadMoreBtn) {
            if (itemsShown >= galleryData.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            itemsShown += itemsPerLoad;
            renderGallery();
        });
    }

    renderGallery();


    /* ==========================================================================
       2. LIGHTBOX & ZOOM SYSTEM FOR GALLERY
       ========================================================================== */
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const prevImgBtn = document.getElementById('prevImgBtn');
    const nextImgBtn = document.getElementById('nextImgBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');

    let currentImgIndex = 0;
    let currentZoom = 1;

    function openImageModal(index) {
        currentImgIndex = index;
        currentZoom = 1;
        updateModalImage();
        if (imageModal) imageModal.classList.add('show');
    }

    function updateModalImage() {
        if (!modalImage) return;
        modalImage.src = galleryData[currentImgIndex].src;
        modalImage.alt = galleryData[currentImgIndex].alt;
        modalImage.style.transform = `scale(${currentZoom})`;
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            imageModal.classList.remove('show');
        });
    }

    if (prevImgBtn) {
        prevImgBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + galleryData.length) % galleryData.length;
            currentZoom = 1;
            updateModalImage();
        });
    }

    if (nextImgBtn) {
        nextImgBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % galleryData.length;
            currentZoom = 1;
            updateModalImage();
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (currentZoom < 2.5) {
                currentZoom += 0.25;
                modalImage.style.transform = `scale(${currentZoom})`;
            }
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (currentZoom > 0.75) {
                currentZoom -= 0.25;
                modalImage.style.transform = `scale(${currentZoom})`;
            }
        });
    }

    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', () => {
            currentZoom = 1;
            modalImage.style.transform = `scale(${currentZoom})`;
        });
    }


    /* ==========================================================================
       3. LANGUAGE SWITCHER SLIDING ANIMATION
       ========================================================================== */
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');
    const langPill = document.getElementById('lang-pill');

    function switchLanguage(lang) {
        document.querySelectorAll('[data-id][data-en]').forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (targetText) el.innerHTML = targetText;
        });

        if (langPill && btnID && btnEN) {
            if (lang === 'en') {
                langPill.style.transform = 'translateX(30px)';
                btnEN.classList.add('text-white');
                btnEN.classList.remove('text-gray-700');
                btnID.classList.remove('text-white');
                btnID.classList.add('text-gray-700');
            } else {
                langPill.style.transform = 'translateX(0px)';
                btnID.classList.add('text-white');
                btnID.classList.remove('text-gray-700');
                btnEN.classList.remove('text-white');
                btnEN.classList.add('text-gray-700');
            }
        }
    }

    if (btnID && btnEN) {
        btnID.addEventListener('click', () => switchLanguage('id'));
        btnEN.addEventListener('click', () => switchLanguage('en'));
    }

/* 4. MOBILE MENU */
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        // Cukup toggle kelas 'active'
        navLinks.classList.toggle('active');
    });
}
    
        /* ==========================================================================
       5. FORM BOOKING WHATSAPP
       ========================================================================== */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const wa = document.getElementById('whatsapp').value;
            const tanggal = document.getElementById('tanggal').value;
            const peserta = document.getElementById('peserta').value;
            const tujuan = document.getElementById('tujuan').value;

            const message = `Halo TSHoliday, saya ingin memesan layanan:%0A%0A` +
                `*Nama:* ${nama}%0A` +
                `*WhatsApp:* ${wa}%0A` +
                `*Tanggal Perjalanan:* ${tanggal}%0A` +
                `*Jumlah Peserta:* ${peserta} Orang%0A` +
                `*Paket/Kendaraan:* ${tujuan}%0A%0A` +
                `Mohon ketersediaan armada dan rincian harganya. Terima kasih!`;

            window.open(`https://wa.me/6282130640161?text=${message}`, '_blank');
        });
    }
});


/* ==========================================================================
   6. MODAL DETAIL RINCIAN DESTINASI (GLOBAL FUNCTION)
   ========================================================================== */
const packageDetails = {
    ciwidey: {
        title: "Paket Wisata Ciwidey",
        subtitle: "Eksplorasi Keindahan Alam Bandung Selatan",
        list: [
            { name: "Kawah Putih", desc: "Danau kawah vulkanik eksotis dengan tanah putih dan air danau bernuansa kehijauan yang berubah warna." },
            { name: "Perkebunan Teh Rancabali", desc: "Hamparan kebun teh hijau yang sejuk dan sangat cocok untuk foto estetik." },
            { name: "Glamping Lakeside & Pinisi Resto", desc: "Restoran megah berbentuk kapal Pinisi di tepi Danau Situ Patenggang." }
        ]
    },
    lembang: {
        title: "Paket Wisata Lembang",
        subtitle: "Pesona Sejuk & Wahana Populer Bandung Utara",
        list: [
            { name: "Gunung Tangkuban Perahu", desc: "Kawah aktif legendaris yang memukau dan udara pegunungan yang sangat segar." },
            { name: "Farmhouse Lembang", desc: "Taman bergaya Eropa lengkap dengan Rumah Hobbit dan penyewaan kostum ala Belanda." },
            { name: "The Lodge Maribaya", desc: "Destinasi wisata alam berkonsep *extreme selfie* dengan latar belakang hutan pinus rindang." }
        ]
    },
    bandung: {
        title: "Bandung City Tour",
        subtitle: "Keliling Tempat Bersejarah & Kuliner Ikonik",
        list: [
            { name: "Gedung Sate & Museum", desc: "Ikon bangunan bersejarah Bandung dengan arsitektur klasik nan megah." },
            { name: "Jalan Asia Afrika & Braga", desc: "Pusat kenangan bersejarah tempat KTT Asia-Afrika dan jalanan romantis ala tempo dulu." },
            { name: "Pusat Oleh-Oleh & Kuliner", desc: "Berbelanja Kartika Sari, Primasa, atau Factory Outlet terkemuka di Bandung." }
        ]
    }
};

function openDetailModal(type) {
    const detailModal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBodyList = document.getElementById('modalBodyList');

    if (!packageDetails[type]) return;

    modalTitle.textContent = packageDetails[type].title;
    modalSubtitle.textContent = packageDetails[type].subtitle;

    modalBodyList.innerHTML = packageDetails[type].list.map(item => `
        <div class="destination-item">
            <h4><i class="fas fa-map-marker-alt"></i> ${item.name}</h4>
            <p>${item.desc}</p>
        </div>
    `).join('');

    detailModal.classList.add('show');
}

function closeDetailModal() {
    const detailModal = document.getElementById('detailModal');
    if (detailModal) detailModal.classList.remove('show');
}

