// Memaksa video hero diputar otomatis jika ditahan oleh browser
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    heroVideo.play().catch(error => {
        console.log("Autoplay ditahan oleh browser:", error);
    });
}


document.addEventListener('DOMContentLoaded', () => {

    // 1. LANGUAGE SWITCHER (ID / EN)
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');

    function switchLanguage(lang) {
        const translatableElements = document.querySelectorAll('[data-id][data-en]');
        
        translatableElements.forEach(el => {
            if (lang === 'en') {
                el.innerHTML = el.getAttribute('data-en');
            } else {
                el.innerHTML = el.getAttribute('data-id');
            }
        });

        if (lang === 'en') {
            btnEN.classList.add('active');
            btnID.classList.remove('active');
        } else {
            btnID.classList.add('active');
            btnEN.classList.remove('active');
        }
    }

    btnID.addEventListener('click', () => switchLanguage('id'));
    btnEN.addEventListener('click', () => switchLanguage('en'));

    // 2. SMOOTH SCROLLING NAVIGASI
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

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. SWIPER AUTOMATIC SLIDER FOR TESTIMONI
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

    // 5. FAQ TOGGLE
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // 6. INTERSECTION OBSERVER (FADE IN)
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

     // 7. FORM BOOKING DIRECT TO WHATSAPP
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const tanggal = document.getElementById('tanggal').value;
        const peserta = document.getElementById('peserta').value;
        const tujuan = document.getElementById('tujuan').value;

        // Nomor WhatsApp Resmi PT Keepgoing TSH Indonesia
        const adminWA = "6282130640161"; 

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
