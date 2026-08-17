document.addEventListener('DOMContentLoaded', () => {
    // Deteksi apakah halaman berada di sub-folder atau root
    // Jika berada di sub-folder, path akan menyesuaikan dengan menambah '../'
    const isSubFolder = window.location.pathname.split('/').filter(Boolean).length > 1;
    const pathPrefix = isSubFolder ? '../' : '';

    const headerHTML = `
    <header class="fixed left-0 right-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl glass-navbar rounded-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border border-gray-100" id="navbar">
        <div class="px-5 sm:px-6 flex justify-between items-center h-14">
            <!-- Logo -->
            <a href="${pathPrefix}index.html" class="flex items-center gap-2">
                <img src="${pathPrefix}logo/logo.png" alt="TSHoliday Logo" class="h-8 w-auto">
                <div class="flex flex-col leading-none">
                    <span class="font-bold text-primary text-base tracking-wider">TSHOLIDAY</span>
                    <span class="text-[8px] text-gray-700 uppercase tracking-widest mt-0.5">Keepgoing TSH Indonesia</span>
                </div>
            </a>

            <!-- Area Navigasi & Toggle Bahasa -->
            <div class="hidden md:flex items-center space-x-6" id="navContainer">
                <nav class="flex items-center space-x-5 lg:space-x-7 font-semibold text-[11px] tracking-widest uppercase" id="navLinks">
                    <a href="${pathPrefix}index.html#home" class="nav-link" data-id="Beranda" data-en="Home">Home</a>
                    <a href="${pathPrefix}index.html#tentang" class="nav-link" data-id="Tentang" data-en="About">Tentang</a>
                    <a href="${pathPrefix}index.html#paket" class="nav-link" data-id="Paket" data-en="Packages">Paket</a>
                    <a href="${pathPrefix}index.html#armada" class="nav-link" data-id="Armada" data-en="Fleet">Armada</a>
                    <a href="${pathPrefix}index.html#galeri" class="nav-link" data-id="Galeri" data-en="Gallery">Galeri</a>
                    <a href="${pathPrefix}index.html#kontak" class="nav-link" data-id="Kontak" data-en="Contact">Kontak</a>
                </nav>

                <!-- Animated Language Toggle -->
                <div class="relative flex items-center bg-white/40 p-0.5 rounded-full border border-white/60 text-[10px] font-bold select-none w-[64px] h-[26px] shadow-inner">
                    <div id="lang-pill" class="absolute top-0.5 left-0.5 w-[28px] h-[20px] bg-primary rounded-full transition-transform duration-300 ease-in-out shadow-sm"></div>
                    <button id="btn-id" class="relative z-10 w-1/2 h-full text-center text-white transition-colors duration-300 focus:outline-none">ID</button>
                    <button id="btn-en" class="relative z-10 w-1/2 h-full text-center text-gray-700 hover:text-primary transition-colors duration-300 focus:outline-none">EN</button>
                </div>
            </div>

            <!-- Actions Booking Kalkulator -->
            <div class="flex items-center gap-3">
                <a href="${pathPrefix}calc/index.html" class="hidden lg:block bg-gold hover:bg-yellow-600 text-white px-4 py-1.5 text-xs rounded-full font-bold transition-transform hover:scale-105 shadow-md">Pesan langsung</a>
                <a href="${pathPrefix}index.html#booking" class="hidden lg:block bg-gold hover:bg-yellow-600 text-white px-4 py-1.5 text-xs rounded-full font-bold transition-transform hover:scale-105 shadow-md">QnA</a>
                
                <!-- Tombol Toggle Mobile -->
                <button class="md:hidden text-lg text-primary focus:outline-none p-2" id="mobileToggle">
                    <i class="fas fa-bars" id="toggleIcon"></i>
                </button>
            </div>
        </div>
    </header>
    `;

    // Menyuntikkan header ke elemen dengan id 'header-container'
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
