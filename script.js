// ==========================================================================
// 1. DATA GALERI & DETAIL PAKET WISATA
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

const destinationsData = {
    ciwidey: { title: "🌋 Wisata Ciwidey", subtitle: "South Bandung", items: [{name:"Kawah Putih",desc:"Danau kawah ikonik."}, {name:"Ranca Upas",desc:"Penangkaran rusa & camping."}, {name:"Glamping Lakeside",desc:"Restoran kapal Phinisi."}] },
    lembang: { title: "🌲 Wisata Lembang", subtitle: "West Bandung", items: [{name:"Orchid Forest",desc:"Hutan pinus & anggrek."}, {name:"Dusun Bambu",desc:"Taman rekreasi alam."}, {name:"The Lodge Maribaya",desc:"Wahana foto ekstrem."}] },
    bandung: { title: "🏛️ Bandung City Tour", subtitle: "History & Culinary", items: [{name:"Jalan Asia Afrika",desc:"Spot sejarah klasik."}, {name:"Jalan Braga",desc:"Kafe & bangunan tua."}, {name:"Saung Angklung Udjo",desc:"Seni budaya tradisional."}] },
    pangalengan: { title: "🍃 Pangalengan Adventure", subtitle: "Nature & Rafting", items: [{name:"Nimo Highland",desc:"Jembatan kaca 360."}, {name:"Situ Cileunca",desc:"Pusat rafting & wisata air."}] },
    bogor: { title: "🌿 Wisata Bogor", subtitle: "Highland & Botanical", items: [{name:"Kebun Raya Bogor",desc:"Taman botani tertua."}, {name:"Taman Safari",desc:"Safari berkendara edukatif."}, {name:"Puncak",desc:"Agrowisata kebun teh."}] },
    jakarta: { title: "🏙️ Jakarta City Tour", subtitle: "Heritage & Modern", items: [{name:"Monas",desc:"Tugu ikonik nasional."}, {name:"Kota Tua",desc:"Arsitektur kolonial."}, {name:"Ancol",desc:"Taman hiburan pesisir."}] },
    jogja: { title: "🏛️ Exotic Jogja", subtitle: "Cultural & Nature", items: [{name:"Malioboro",desc:"Pusat belanja & kuliner."}, {name:"Borobudur",desc:"Candi Buddha terbesar."}, {name:"Lava Tour Merapi",desc:"Petualangan jeep."}] }
};

let currentIndex = 0;
let currentZoom = 1;
let currentModalIndex = 0;
const ITEMS_PER_LOAD = 5;

// ==========================================================================
// 2. FUNGSI UTAMA
// ==========================================================================
function renderGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!galleryGrid) return;
    const nextBatch = galleryImages.slice(currentIndex, currentIndex + ITEMS_PER_LOAD);
    nextBatch.forEach(fileName => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item fade-in';
        const imgSrc = `assets/image/${fileName}`;
        itemDiv.innerHTML = `<img src="${imgSrc}" loading="lazy" onclick="openLightbox('${imgSrc}')">`;
        galleryGrid.appendChild(itemDiv);
    });
    currentIndex += ITEMS_PER_LOAD;
    if (currentIndex >= galleryImages.length && loadMoreBtn) loadMoreBtn.style.display = 'none';
}

function openLightbox(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        const foundIndex = galleryImages.findIndex(file => imageSrc.includes(file));
        if (foundIndex !== -1) currentModalIndex = foundIndex;
        modal.classList.add('show');
        modalImg.src = imageSrc;
        currentZoom = 1;
        updateZoom();
    }
}

function updateZoom() {
    const modalImg = document.getElementById('modalImage');
    if (modalImg) modalImg.style.transform = `scale(${currentZoom})`;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) { modal.classList.remove('show'); currentZoom = 1; updateZoom(); }
}

function showNextImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex + 1) % galleryImages.length;
    document.getElementById('modalImage').src = `assets/image/${galleryImages[currentModalIndex]}`;
}

function showPrevImage() {
    if (galleryImages.length === 0) return;
    currentModalIndex = (currentModalIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('modalImage').src = `assets/image/${galleryImages[currentModalIndex]}`;
}

function openDetailModal(cat) {
    const data = destinationsData[cat];
    if (!data) return;
    const modal = document.getElementById('detailModal');
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalSubtitle').textContent = data.subtitle;
    let html = '';
    data.items.forEach(i => html += `<div class="destination-item"><h4><i class="fas fa-map-pin"></i> ${i.name}</h4><p>${i.desc}</p></div>`);
    document.getElementById('modalBodyList').innerHTML = html;
    modal.classList.add('show');
}

function closeDetailModal() { document.getElementById('detailModal').classList.remove('show'); }

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Galeri
    renderGalleryItems();
    document.getElementById('loadMoreBtn')?.addEventListener('click', renderGalleryItems);

    // Lightbox Controls
    document.getElementById('zoomInBtn')?.addEventListener('click', () => { if (currentZoom < 3) { currentZoom += 0.25; updateZoom(); }});
    document.getElementById('zoomOutBtn')?.addEventListener('click', () => { if (currentZoom > 0.5) { currentZoom -= 0.25; updateZoom(); }});
    document.getElementById('resetZoomBtn')?.addEventListener('click', () => { currentZoom = 1; updateZoom(); });
    document.getElementById('prevImgBtn')?.addEventListener('click', showPrevImage);
    document.getElementById('nextImgBtn')?.addEventListener('click', showNextImage);

    // Klik Legalitas
    document.querySelectorAll('.card img, .legality-img, .legality-card img').forEach(img => {
        img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(img.src); });
    });

    // Keyboard & Global Listeners
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('imageModal').classList.contains('show')) {
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'Escape') closeModal();
        }
    });

    // Language, Form, Scroll, etc... (Remaining logic)
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');
    btnID?.addEventListener('click', () => { btnID.classList.add('active'); btnEN.classList.remove('active'); });
    btnEN?.addEventListener('click', () => { btnEN.classList.add('active'); btnID.classList.remove('active'); });

    document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const wa = document.getElementById('whatsapp').value;
        const tujuan = document.getElementById('tujuan').value;
        window.open(`https://wa.me/6282130640161?text=Halo%20TSHoliday,%20Nama:%20${nama},%20Tujuan:%20${tujuan}`);
    });

    // Scroll Top
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if(window.scrollY > 300) btn.classList.add('show'); else btn.classList.remove('show');
    });
    document.getElementById('scrollTopBtn')?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
});

// PWA
if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
