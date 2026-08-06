document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLLING NAVIGASI
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
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

    // 2. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. SWIPER AUTOMATIC SLIDER FOR TESTIMONI
    const swiper = new Swiper('.testimoni-slider', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 4. FAQ TOGGLE
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // 5. INTERSECTION OBSERVER (FADE IN)
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // 6. FORM BOOKING DIRECT TO WHATSAPP
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const tanggal = document.getElementById('tanggal').value;
        const peserta = document.getElementById('peserta').value;
        const tujuan = document.getElementById('tujuan').value;

        // Nomor WhatsApp Tujuan Admin TSHoliday (Ganti dengan nomor aslimu)
        const adminWA = "6281234567890"; 

        const pesan = `Halo Admin TSHoliday, saya ingin reservasi perjalanan:%0A%0A` +
                      `*Nama:* ${nama}%0A` +
                      `*No. WA:* ${whatsapp}%0A` +
                      `*Tanggal Perjalanan:* ${tanggal}%0A` +
                      `*Jumlah Peserta:* ${peserta} Orang%0A` +
                      `*Tujuan/Paket:* ${tujuan}%0A%0A` +
                      `Mohon info ketersediaan unit dan total harganya. Terima kasih!`;

        window.open(`https://wa.me/${adminWA}?text=${pesan}`, '_blank');
    });

});
