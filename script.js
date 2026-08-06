document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MULTI-LANGUAGE SWITCHER (INDONESIA / ENGLISH)
    // ==========================================================================
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');

    // Fungsi untuk memperbarui bahasa pada seluruh elemen yang memiliki atribut data-id & data-en
    function switchLanguage(lang) {
        // Ambil semua elemen yang memiliki atribut data-id dan data-en
        const translatableElements = document.querySelectorAll('[data-id][data-en]');

        translatableElements.forEach(el => {
            if (lang === 'en') {
                el.textContent = el.getAttribute('data-en');
            } else {
                el.textContent = el.getAttribute('data-id');
            }
        });

        // Perbarui status tombol aktif
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnId.classList.remove('active');
            localStorage.setItem('preferred_lang', 'en');
        } else {
            btnId.classList.add('active');
            btnEn.classList.remove('active');
            localStorage.setItem('preferred_lang', 'id');
        }
    }

    // Event Listener untuk Tombol Bahasa
    if (btnId && btnEn) {
        btnId.addEventListener('click', () => switchLanguage('id'));
        btnEn.addEventListener('click', () => switchLanguage('en'));

        // Cek bahasa pilihan pengguna yang tersimpan sebelumnya (Default: ID)
        const savedLang = localStorage.getItem('preferred_lang') || 'id';
        switchLanguage(savedLang);
    }


    // ==========================================================================
    // 2. FORCE AUTO-PLAY HERO VIDEO
    // ==========================================================================
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        // Memastikan video langsung diputar otomatis
        heroVideo.play().catch(error => {
            console.log("Autoplay ditahan oleh browser, mencoba pemutaran ulang:", error);
        });
    }


    // ==========================================================================
    // 3. FORMULIR RESERVASI / BOOKING VIA WHATSAPP
    // ==========================================================================
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Nomor WhatsApp Resmi PT Keepgoing TSH Indonesia
            const phoneNumber = "6282130640161";

            // Ambil data dari inputan formulir
            const name = document.getElementById('bookingName').value.trim();
            const service = document.getElementById('bookingService').value;
            const date = document.getElementById('bookingDate').value;
            const guests = document.getElementById('bookingGuests').value;
            const notes = document.getElementById('bookingNotes').value.trim();

            // Susun format pesan WhatsApp
            let message = `Halo TSHoliday, saya ingin melakukan reservasi tour/armada:\n\n`;
            message += `*Nama Lengkap:* ${name}\n`;
            message += `*Layanan / Paket:* ${service}\n`;
            message += `*Tanggal Keberangkatan:* ${date}\n`;
            message += `*Jumlah Peserta:* ${guests} Orang\n`;
            
            if (notes !== "") {
                message += `*Catatan Tambahan:* ${notes}\n`;
            }

            message += `\nMohon informasi ketersediaan dan rincian penawarannya. Terima kasih!`;

            // Encode karakter teks ke URL format
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Buka link WhatsApp di tab baru
            window.open(whatsappURL, '_blank');
        });
    }


    // ==========================================================================
    // 4. ACTIVE NAVBAR LINK HIGHLIGHT ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll('section, footer');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

});
