// ==========================================================================
// 1. DAFTAR GAMBAR GALERI SPESIFIK & LOAD MORE
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

// DATA RINCIAN DESTINASI UNTUK POPUP DETAIL MODAL
const destinationsData = {
    ciwidey: {
        title: "🌋 Wisata Ciwidey (South Bandung)",
        subtitle: "Keindahan kawah vulkanik, kebun teh luas, dan udara pegunungan yang sejuk.",
        items: [
            { name: "Kawah Putih", desc: "Danau kawah vulkanik ikonik dengan air putih kehijauan yang memukau." },
            { name: "Ranca Upas", desc: "Penangkaran rusa, camping ground eksotis, & pemandian air panas alami." },
            { name: "Glamping Lakeside Rancabali", desc: "Restoran berbentuk kapal Phinisi megah di tepi Danau Situ Patenggang." },
            { name: "Situ Patenggang", desc: "Danau alami menenangkan yang dikelilingi hamparan kebun teh hijau." },
            { name: "Kebun Teh Rancabali & Tea Cliff Bridge", desc: "Jembatan kayu estetis melintasi hamparan perkebunan teh." },
            { name: "Kawah Rengganis & Suspension Bridge", desc: "Jembatan gantung terpanjang & pemandian air panas alami kawah purba." },
            { name: "Happy Farm Ciwidey", desc: "Destinasi wisata edukasi peternakan ramah anak & keluarga." }
        ]
    },
    lembang: {
        title: "🌲 Wisata Lembang (West Bandung)",
        subtitle: "Destinasi favorit keluarga dengan lanskap hijau dan taman rekreasi tematik.",
        items: [
            { name: "Orchid Forest Cikole", desc: "Hutan pinus asri dengan koleksi anggrek langka & jembatan gantung menyala." },
            { name: "Dusun Bambu", desc: "Taman rekreasi alam, danau indah, & kuliner khas Sunda berkonsep ramah lingkungan." },
            { name: "The Lodge Maribaya", desc: "Wisata alam dengan wahana foto ekstrem & pemandangan jurang pinus menakjubkan." },
            { name: "Floating Market Lembang", desc: "Pasar terapung unik, taman bunga, & penyewaan kostum Jepang/Korea." },
            { name: "Farmhouse Susu Lembang", desc: "Wisata berkonsep gaya Eropa, rumah Hobbit, & susu murni khas Lembang." },
            { name: "The Great Asia Africa", desc: "Taman miniatur arsitektur & budaya dari negara-negara Asia & Afrika." },
            { name: "Tangkuban Perahu", desc: "Kawah gunung berapi aktif yang eksotis dan dapat diakses langsung hingga pinggir kawah." },
            { name: "Taman Begonia", desc: "Taman bunga berwarna-warni yang sangat cantik untuk berfoto." },
            { name: "Lembang Park & Zoo", desc: "Kebun binatang modern interaktif dengan resto berkonsep terbuka." }
        ]
    },
    bandung: {
        title: "🏛️ Bandung City Tour (Kota, Sejarah & Kuliner)",
        subtitle: "Pusat kota kaya sejarah, arsitektur kolonial, spot foto aesthetic & belanja.",
        items: [
            { name: "Jalan Asia Afrika & Gedung Merdeka", desc: "Spot sejarah bersejarah dengan arsitektur klasik KAA 1955." },
            { name: "Jalan Braga", desc: "Kawasan ikonik dengan kafe vintage, bangunan tua, & galeri lukisan jalanan." },
            { name: "Alun-Alun Bandung & Masjid Raya", desc: "Taman rumput sintetis luas di pusat kota Bandung." },
            { name: "Gedung Sate & Museum Gedung Sate", desc: "Landmark ikonik pusat pemerintahan Jawa Barat berteknologi interaktif." },
            { name: "Kiara Artha Park", desc: "Taman kota modern dengan pertunjukan air mancur menari & Taman Korea." },
            { name: "Hutan Kota Babakan Siliwangi (Babsil)", desc: "Forest walk menyejukkan di tengah rindangnya pepohonan kota." },
            { name: "Pasar Baru Trade Center", desc: "Pusat belanja tekstil, pakaian, & oleh-oleh paling populer." },
            { name: "Saung Angklung Udjo", desc: "Pusat seni budaya tradisional & pertunjukan angklung interaktif." }
        ]
    }
};

let currentIndex = 0;
const ITEMS_PER_LOAD = 6;

// FUNGSI MEMUAT GAMBAR GALERI
function renderGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!galleryGrid) return;

    const nextBatch = galleryImages.slice(currentIndex, currentIndex + ITEMS_PER_LOAD);

    nextBatch.forEach(fileName => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item fade-in';

        // Menyesuaikan jalur gambar galeri sesuai struktur folder assets/image/gallery/
        const imgSrc = `assets/image/gallery/${fileName}`;

        itemDiv.innerHTML = `
            <img src="${imgSrc}" 
                 alt="Dokumentasi TSHoliday" 
                 loading="lazy" 
                 onerror="this.src='assets/image/kota-bandung/bandung.jpg'"
                 onclick="openLightbox('${imgSrc}')">
        `;

        galleryGrid.appendChild(itemDiv);
    });

    currentIndex += ITEMS_PER_LOAD;

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

function showNextImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex + 1) % galleryImages.length;
    const newSrc = `assets/image/gallery/${galleryImages[currentModalIndex]}`;
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.src = newSrc;
        currentZoom = 1;
        updateZoom();
    }
}

function showPrevImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex - 1 + galleryImages.length) % galleryImages.length;
    const newSrc = `assets/image/gallery/${galleryImages[currentModalIndex]}`;
    const modalImg = document.getElementById('modalImage');
    if (modalImg) {
        modalImg.src = newSrc;
        currentZoom = 1;
        updateZoom();
    }
}


// ==========================================================================
// 3. FUNGSI KONTROL DETAIL MODAL TEMPAT WISATA
// ==========================================================================
function openDetailModal(categoryKey) {
    const data = destinationsData[categoryKey];
    if (!data) return;

    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBodyList = document.getElementById('modalBodyList');

    if (modal && modalTitle && modalSubtitle && modalBodyList) {
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;

        let htmlContent = '';
        data.items.forEach(item => {
            htmlContent += `
                <div class="destination-item">
                    <h4><i class="fas fa-map-pin"></i> ${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
        });

        modalBodyList.innerHTML = htmlContent;
        modal.classList.add('show');
    }
}

function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.classList.remove('show');
    }
}


// ==========================================================================
// 4. MAIN INITIALIZATION (DOM CONTENT LOADED)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    let currentLang = 'id';

    // A. INITIALIZE GALLERY
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (galleryGrid) {
        renderGalleryItems();
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', renderGalleryItems);
        }
    }

    // B. LIGHTBOX CONTROL EVENT LISTENERS
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');
    const prevImgBtn = document.getElementById('prevImgBtn');
    const nextImgBtn = document.getElementById('nextImgBtn');

    if (modal) {
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                if (currentZoom < 3) { currentZoom += 0.25; updateZoom(); }
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                if (currentZoom > 0.5) { currentZoom -= 0.25; updateZoom(); }
            });
        }

        if (resetZoomBtn) {
            resetZoomBtn.addEventListener('click', () => {
                currentZoom = 1; updateZoom();
            });
        }

        if (prevImgBtn) prevImgBtn.addEventListener('click', showPrevImage);
        if (nextImgBtn) nextImgBtn.addEventListener('click', showNextImage);

        modal.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                if (currentZoom < 3) currentZoom += 0.15;
            } else {
                if (currentZoom > 0.5) currentZoom -= 0.15;
            }
            updateZoom();
        }, { passive: false });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content-wrapper')) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('show')) {
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'Escape') closeModal();
            }
        });
    }

    // Klik gambar yang bertanda khusus untuk lightbox
    const extraClickableImages = document.querySelectorAll('.card img, .legality-img');
    extraClickableImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src);
        });
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

        document.querySelectorAll('[data-id][data-en]').forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (targetText) el.innerHTML = targetText;
        });

        if (btnEN && btnID) {
            if (lang === 'en') {
                btnEN.classList.add('bg-primary', 'text-white');
                btnEN.classList.remove('text-gray-500');
                btnID.classList.remove('bg-primary', 'text-white');
                btnID.classList.add('text-gray-500');
            } else {
                btnID.classList.add('bg-primary', 'text-white');
                btnID.classList.remove('text-gray-500');
                btnEN.classList.remove('bg-primary', 'text-white');
                btnEN.classList.add('text-gray-500');
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
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('p-6');
            navLinks.classList.toggle('shadow-xl');
            navLinks.classList.toggle('rounded-2xl');
        });
    }

    // F. SMOOTH SCROLLING NAVIGATION
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
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

    // G. FORM BOOKING DIRECT TO WHATSAPP
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const namaEl = document.getElementById('nama');
            const whatsappEl = document.getElementById('whatsapp');
            const tanggalEl = document.getElementById('tanggal');
            const pesertaEl = document.getElementById('peserta');
            const tujuanSelect = document.getElementById('tujuan');

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
// 5. REGISTER PWA SERVICE WORKER
// ==========================================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((reg) => {
                console.log('TSHoliday PWA Registered Successfully:', reg.scope);
            })
            .catch((err) => {
                console.error('TSHoliday PWA Registration Failed:', err);
            });
    });
}
