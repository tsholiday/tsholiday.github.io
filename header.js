document.addEventListener('DOMContentLoaded', () => {
    // Deteksi path otomatis yang aman untuk sub-folder maupun root
    const currentPath = window.location.pathname;
    const isSubFolder = currentPath.includes('/paket-wisata-bandung') || 
                        currentPath.includes('/paket-wisata-bandung/bandung-city-tour') ||
                        currentPath.includes('/paket-wisata-bandung/ciwidey-tour') ||
                        currentPath.includes('/paket-wisata-bandung/lembang-tour') ||
                        currentPath.includes('/paket-wisata-bandung/pangalengan') ||
                        currentPath.includes('/paket-wisata-bogor') ||
                        currentPath.includes('/paket-wisata-jakarta') ||
                        currentPath.includes('/paket-wisata-jakarta/jakarta-city-tour') ||
                        currentPath.includes('/paket-wisata-jakarta/pik-tour') ||
                        currentPath.includes('/sewa-mobil-bandung') ||
                        currentPath.includes('/sewa-mobil-bandung/sewa-bus-bandung') ||
                        currentPath.includes('/sewa-mobil-bandung/sewa-elf-bandung') ||
                        currentPath.includes('/sewa-mobil-bandung/sewa-hiace-bandung') ||
                        currentPath.includes('/sewa-mobil-bandung/sewa-mvp-bandung') ||
                        currentPath.includes('/sewa-mobil-bogor') ||
                        currentPath.includes('/sewa-mobil-bogor/sewa-bus-bogor') ||
                        currentPath.includes('/sewa-mobil-bogor/sewa-elf-bogor') ||
                        currentPath.includes('/sewa-mobil-bogor/sewa-hiace-bogor') ||
                        currentPath.includes('/sewa-mobil-bogor/sewa-mvp-bogor') ||
                        currentPath.includes('/sewa-mobil-jakarta') ||
                        currentPath.includes('/sewa-mobil-jakarta/sewa-bus-jakarta') ||
                        currentPath.includes('/sewa-mobil-jakarta/sewa-elf-jakarta') ||
                        currentPath.includes('/sewa-mobil-jakarta/sewa-hiace-jakarta') ||
                        currentPath.includes('/sewa-mobil-jakarta/sewa-mvp-jakarta') ||
                        currentPath.includes('/calc/');
    
    const pathPrefix = isSubFolder ? '../' : '';

    const headerHTML = `
    <header class="fixed left-0 right-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl glass-navbar rounded-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border border-gray-100" id="navbar">
        <div class="px-5 sm:px-6 flex justify-between items-center h-14">
            <!-- Logo -->
            <a href="${pathPrefix}index.html" class="flex items-center gap-2">
                <img src="${pathPrefix}logo/logo.png" alt="TSHoliday Logo" class="h-8 w-auto">
                <div class="flex flex-col leading-none">
                    <span class="font-bold text-primary text-base tracking-wider">TSHOLIDAY</span>
                    <span class="text-[8px] text-gray-700 uppercase tracking-widest mt-0.5">Keepgoing TSH Indonesia</span>
                </div>
            </a>

            <!-- Area Navigasi & Dropdown (Desktop) -->
            <div class="hidden md:flex items-center space-x-5" id="navContainer">
                <nav class="flex items-center space-x-5 font-semibold text-[11px] tracking-widest uppercase text-gray-700">
                    <a href="${pathPrefix}index.html#home" class="hover:text-gold transition">Home</a>
                    
                    <!-- DROPDOWN WISATA -->
                    <div class="relative group py-2">
                        <button class="flex items-center gap-1 hover:text-gold transition focus:outline-none">
                            Wisata <i class="fas fa-chevron-down text-[9px]"></i>
                        </button>
                        <div class="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <a href="${pathPrefix}paket-wisata-bandung/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Paket Wisata Bandung</a>
                            <a href="${pathPrefix}paket-wisata-bandung/lembang-tour/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Lembang Tour</a>
                            <a href="${pathPrefix}paket-wisata-bandung/ciwidey-tour/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Ciwidey Tour</a>
                            <a href="${pathPrefix}paket-wisata-bandung/pangalengan/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Pangalengan</a>
                            <div class="border-t border-gray-100 my-1"></div>
                            <a href="${pathPrefix}paket-wisata-jakarta/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Wisata Jakarta</a>
                            <a href="${pathPrefix}paket-wisata-jakarta/pik-tour/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• PIK Tour</a>
                            <a href="${pathPrefix}paket-wisata-bogor/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Wisata Bogor</a>
                        </div>
                    </div>

                    <!-- DROPDOWN RENTAL MOBIL -->
                    <div class="relative group py-2">
                        <button class="flex items-center gap-1 hover:text-gold transition focus:outline-none">
                            Rental <i class="fas fa-chevron-down text-[9px]"></i>
                        </button>
                        <div class="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <a href="${pathPrefix}sewa-mobil-bandung/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Rental Bandung</a>
                            <a href="${pathPrefix}sewa-mobil-bandung/sewa-hiace-bandung/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Hiace Bandung</a>
                            <a href="${pathPrefix}sewa-mobil-bandung/sewa-bus-bandung/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Bus Bandung</a>
                            <div class="border-t border-gray-100 my-1"></div>
                            <a href="${pathPrefix}sewa-mobil-jakarta/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Rental Jakarta</a>
                            <a href="${pathPrefix}sewa-mobil-jakarta/sewa-hiace-jakarta/" class="block px-6 py-1.5 hover:bg-gray-50 hover:text-gold text-gray-500 text-[10px]">• Hiace Jakarta</a>
                            <div class="border-t border-gray-100 my-1"></div>
                            <a href="${pathPrefix}sewa-mobil-bogor/" class="block px-4 py-2 hover:bg-gray-50 hover:text-gold text-gray-600 font-medium">Rental Bogor</a>
                        </div>
                    </div>

                    <a href="${pathPrefix}index.html#armada" class="hover:text-gold transition">Armada</a>
                    <a href="${pathPrefix}contact.html" class="hover:text-gold transition">Kontak</a>
                </nav>

                <!-- Animated Language Toggle -->
                <div class="relative flex items-center bg-white/40 p-0.5 rounded-full border border-white/60 text-[10px] font-bold select-none w-[64px] h-[26px] shadow-inner">
                    <div id="lang-pill" class="absolute top-0.5 left-0.5 w-[28px] h-[20px] bg-primary rounded-full transition-transform duration-300 ease-in-out shadow-sm"></div>
                    <button id="btn-id" class="relative z-10 w-1/2 h-full text-center text-white transition-colors duration-300 focus:outline-none">ID</button>
                    <button id="btn-en" class="relative z-10 w-1/2 h-full text-center text-gray-700 hover:text-primary transition-colors duration-300 focus:outline-none">EN</button>
                </div>
            </div>

            <!-- Actions Booking & Mobile Toggle -->
            <div class="flex items-center gap-3">
                <a href="${pathPrefix}calc/index.html" class="hidden lg:block bg-gold hover:bg-yellow-600 text-white px-4 py-1.5 text-xs rounded-full font-bold transition-transform hover:scale-105 shadow-md">Pesan</a>
                
                <!-- Tombol Toggle Mobile -->
                <button class="md:hidden text-lg text-primary focus:outline-none p-2" id="mobileToggle">
                    <i class="fas fa-bars" id="toggleIcon"></i>
                </button>
            </div>
        </div>
    </header>
    `;

    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
