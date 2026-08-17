document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-primary text-white pt-20 pb-10 border-t border-white/10 mt-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                <!-- Info, Alamat & Media Sosial -->
                <div class="space-y-4">
                    <div class="flex items-center gap-2 mb-4">
                        <img src="/logo/logo.png" alt="TSHoliday" class="h-10 w-auto">
                        <span class="font-bold text-lg tracking-widest text-white">TSHOLIDAY</span>
                    </div>
                    <div class="text-gray-400 text-sm leading-relaxed space-y-2">
                        <p><i class="fas fa-map-marker-alt text-gold mr-2"></i> TS Holiday, Jawa Barat, Indonesia</p>
                        <p><i class="fas fa-clock text-gold mr-2"></i> Buka: 08:00 - 20:00 WIB</p>
                    </div>
                    <div class="pt-2">
                        <p class="text-xs font-bold text-gold uppercase tracking-wider mb-3">Ikuti Kami</p>
                        <div class="flex flex-wrap gap-3">
                            <a href="https://instagram.com/tsholiday.id" target="_blank" class="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition shadow-sm"><i class="fab fa-instagram text-sm"></i></a>
                            <a href="https://tiktok.com/@tsholiday" target="_blank" class="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition shadow-sm"><i class="fab fa-tiktok text-sm"></i></a>
                            <a href="https://facebook.com" target="_blank" class="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition shadow-sm"><i class="fab fa-facebook-f text-sm"></i></a>
                            <a href="https://youtube.com/@tsholiday" target="_blank" class="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-primary text-white flex items-center justify-center transition shadow-sm"><i class="fab fa-youtube text-sm"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Google Maps -->
                <div class="lg:col-span-1">
                    <h4 class="font-bold text-gold mb-6 uppercase tracking-widest text-xs">Lokasi Kami</h4>
                    <div class="w-full h-40 rounded-2xl overflow-hidden border border-white/10 shadow-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5764354687503!2d107.7397853!3d-6.941116899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c340867b636f%3A0x9bd0b020c1f195d9!2sTS%20Holiday!5e0!3m2!1sid!2sid!4v1786924629761!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold text-gold mb-6 uppercase tracking-widest text-xs">Jelajahi</h4>
                    <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300">
                        <div class="space-y-2.5">
                            <p class="font-bold text-gold uppercase text-[10px] tracking-wider">Wisata</p>
                            <ul>
                                <li><a href="/paket-wisata-bandung/" class="hover:text-gold transition">Bandung</a></li>
                                <li><a href="/paket-wisata-jakarta/" class="hover:text-gold transition">Jakarta</a></li>
                                <li><a href="/paket-wisata-bogor/" class="hover:text-gold transition">Bogor</a></li>
                            </ul>
                        </div>
                        <div class="space-y-2.5">
                            <p class="font-bold text-gold uppercase text-[10px] tracking-wider">Rental</p>
                            <ul>
                                <li><a href="/sewa-mobil-bandung/" class="hover:text-gold transition">Bandung</a></li>
                                <li><a href="/sewa-mobil-jakarta/" class="hover:text-gold transition">Jakarta</a></li>
                                <li><a href="/sewa-mobil-bogor/" class="hover:text-gold transition">Bogor</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-white/5">
                        <a href="/sitemap.html" class="text-[11px] text-gold hover:underline font-bold"><i class="fas fa-sitemap mr-1"></i> Peta Situs Lengkap</a>
                    </div>
                </div>

                <!-- CTA -->
                <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 class="font-bold text-gold mb-4 uppercase tracking-widest text-xs">Butuh Bantuan?</h4>
                    <p class="text-gray-400 text-xs mb-4">Tim kami siap membantu perjalanan Anda.</p>
                    <a href="https://wa.me/6282130640161" target="_blank" class="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-3 rounded-xl transition">
                        <i class="fab fa-whatsapp mr-2"></i> Chat WhatsApp
                    </a>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
                <p>&copy; 2026 PT Keepgoing TSH Indonesia. All rights reserved.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="/privacy.html" class="hover:text-white transition">Privasi</a>
                    <a href="/about.html" class="hover:text-white transition">Tentang Kami</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Mencari elemen dengan id 'footer-container' dan menyuntikkan HTML
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
