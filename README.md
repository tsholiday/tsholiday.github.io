# TSHoliday - Keepgoing TSH Indonesia

> **"Don't Just Travel, Keepgoing to the Extraordinary"**

TSHoliday adalah platform web resmi milik **PT Keepgoing TSH Indonesia** yang menyediakan layanan penyewaan kendaraan (sewa mobil) serta kurasi paket wisata pilihan dan terbaik di Bandung dan sekitarnya.

---

## 🚀 Fitur Utama Situs

* **Desain Modern & Responsif:** Dibangun menggunakan kerangka Tailwind CSS dengan sentuhan estetika *Glassmorphism*.
* **Navigasi Multi-Halaman:**
  * **Beranda (`index.html`):** Menampilkan banner utama, pengenalan layanan, daftar paket wisata, armada kendaraan, galeri interaktif, hingga formulir pemesanan cepat.
  * **Tentang Kami (`about.html`):** Informasi legalitas perusahaan, visi, misi, serta komitmen pelayanan.
  * **Kontak (`contact.html`):** Detail saluran komunikasi resmi, lokasi operasional, dan formulir pesan.
  * **Kebijakan Privasi (`privacy.html`):** Penjelasan transparan mengenai perlindungan data pribadi pelanggan.
  * **Halaman 404 (`404.html`):** Halaman kesalahan dengan fitur hitung mundur otomatis 10 detik untuk kembali ke beranda.
* **Fitur Bahasa (ID / EN):** Tombol pengubah bahasa interaktif (Indonesia dan Inggris) secara *real-time*.
* **Integrasi WhatsApp Booking:** Formulir pemesanan yang otomatis memformat data pelanggan dan mengirimkannya langsung ke nomor WhatsApp admin (`+62 821-3064-0161`).
* **Lightbox & Zoom Galeri:** Galeri gambar interaktif yang dilengkapi kontrol perbesaran (*zoom*) serta navigasi antar-foto.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5 & CSS3** (Struktur dan gaya visual dasar)
* **JavaScript (ES6+)** (Logika interaktif, menu mobile, galeri, hitung mundur, dan bahasa)
* **Tailwind CSS** (Kerangka utilitas CSS modern)
* **FontAwesome** (Ikon vektor pendukung)
* **Google Fonts** (Tipografi *Montserrat*, *Playfair Display*, dan *Geist*)

---

## 📁 Struktur Direktori Proyek

```text
tsholiday/
│
├── index.html            # Halaman Utama (Beranda)
├── about.html            # Halaman Tentang Kami
├── contact.html          # Halaman Kontak & Formulir
├── privacy.html          # Halaman Kebijakan Privasi
├── 404.html              # Halaman Error 404 (Halaman Tidak Ditemukan)
├── style.css             # Kustomisasi CSS Tambahan
├── script.js             # Skrip Utama JavaScript Global
│
├── logo/
│   └── logo.png          # Aset Logo Perusahaan
│
└── assets/
    └── image/            # Folder Gambar Kendaraan & Destinasi Wisata
