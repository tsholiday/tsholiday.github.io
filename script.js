document.addEventListener('DOMContentLoaded', () => {

    let currentLang = 'id';

    // 1. DYNAMIC LANGUAGE SWITCHER
    const btnID = document.getElementById('btn-id');
    const btnEN = document.getElementById('btn-en');

    function switchLanguage(lang) {
        currentLang = lang;

        // A. Translate text Content
        const translatableElements = document.querySelectorAll('[data-id][data-en]');
        translatableElements.forEach(el => {
            const targetText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (targetText) {
                el.innerHTML = targetText;
            }
        });

        // B. Translate Input Placeholders
        const placeholderElements = document.querySelectorAll('[data-id-placeholder][data-en-placeholder]');
        placeholderElements.forEach(el => {
            const targetPlaceholder = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-id-placeholder');
            if (targetPlaceholder) {
                el.setAttribute('placeholder', targetPlaceholder);
            }
        });

        // C. Update Language Active State
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

    // 2. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. SMOOTH SCROLLING NAVIGASI
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

    // 4. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. SWIPER AUTOMATIC SLIDER FOR TESTIMONI
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

    // 6. FAQ TOGGLE
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // 7. INTERSECTION OBSERVER (FADE IN)
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

    // 8. FORM BOOKING DIRECT TO WHATSAPP (MULTI-LANGUAGE MESSAGE)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const tanggal = document.getElementById('tanggal').value;
        const peserta = document.getElementById('peserta').value;
        const tujuanSelect = document.getElementById('tujuan');
        const tujuan = tujuanSelect.options[tujuanSelect.selectedIndex].text;

        // Nomor WhatsApp Admin TSHoliday
        const adminWA = "6281234567890"; 

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

});
