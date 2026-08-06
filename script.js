document.addEventListener('DOMContentLoaded', () => {

    // Language Switcher
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');

    function setLanguage(lang) {
        document.querySelectorAll('[data-id][data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        if (lang === 'en') {
            btnEn.classList.add('active');
            btnId.classList.remove('active');
        } else {
            btnId.classList.add('active');
            btnEn.classList.remove('active');
        }
    }

    if (btnId && btnEn) {
        btnId.addEventListener('click', () => setLanguage('id'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    // Form WhatsApp
    const form = document.getElementById('whatsappForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = "6282130640161";
            const name = document.getElementById('bookingName').value;
            const service = document.getElementById('bookingService').value;
            const date = document.getElementById('bookingDate').value;
            const guests = document.getElementById('bookingGuests').value;

            const text = `Halo TSHoliday, saya ingin reservasi:\n\n*Nama:* ${name}\n*Layanan:* ${service}\n*Tanggal:* ${date}\n*Peserta:* ${guests} Orang`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
        });
    }

});
