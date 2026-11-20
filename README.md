# Undangan Pernikahan Digital — Rafi + Sefia (Hand-Drawn Aesthetic Scrapbook)

Aplikasi web undangan pernikahan digital modern dengan tema **Hand-Drawn Minimalist & Aesthetic Scrapbook**. Memadukan nuansa kertas gading hangat (*warm off-white*), ilustrasi garis tangan (*fine-line doodle*) berwarna merah marun (*deep crimson*), serta tipografi mesin tik (*typewriter*).

---

## ✨ Fitur & Persyaratan Fungsional (PRD v1.0)

| Kode | Fitur | Spesifikasi & Implementasi |
| :--- | :--- | :--- |
| **FR-01** | **Layar Pembuka (Cover Screen)** | Layar penuh `100vh` mengunci *scroll*. Berisi ilustrasi cincin & pita sketsa, judul *"WE ARE GETTING MARRIED"*, foto pasangan dalam bingkai polaroid/scrapbook, nama *"Rafi + Sefia"*, tanggal *"11.6.26"*, sapaan dinamis tamu via `?to=Nama+Tamu`, serta tombol CTA *"Open Invitation"* yang membuka scroll, memicu konfeti crimson-ivory, dan memulai audio. |
| **FR-02** | **Bagian Pembuka & Pemutar Musik Kustom** | Judul *"SAVE THE DATE!"*, ilustrasi tangan terhubung benang merah takdir berbentuk hati, kutipan QS Ar-Rum: 21, dan **Kartu Pemutar Audio Kustom Matte Dark (`#2B2B2B`)** dengan thumbnail foto, judul lagu *"Until I Found You (Acoustic)"*, interactive scrubbable progress bar, timer `01:10` / `04:10`, kontrol Play/Pause/Prev/Next, dan teks instruksi earphone. |
| **FR-03** | **Profil Mempelai (Bride & Groom)** | Kaligrafi Arab Bismillah, salam pembuka, judul *"Bride & Groom"*, bingkai foto melengkung (*arch*) dengan tepi bergelombang ganda (*double scalloped border*) merah marun, nama lengkap *Muhammad Rafi Pratama* & *Sefia Azzahra, S.Ds.*, nama orang tua, dan tautan Instagram. |
| **FR-04** | **Jadwal Acara & Kalender** | **Strip Kalender Horizontal 3 Kolom** (*Rabu 10*, *Kamis 11* berlingkar merah ganda sketsa dengan label *"D-day !!"*, *Jumat 12*), detail Akad Nikah di Sasana Krida & Taman Asri Jakarta Selatan, tombol *"Lihat Lokasi"* (Google Maps), dan tombol *"Simpan ke Kalender"* (Google Calendar & `.ics`). |
| **FR-05** | **Dresscode, Rundown & No Envelope** | Panduan aturan berpakaian dengan lingkaran palet warna (*Earth tone, Terracotta, Soft Sage, Warm Ivory, Charcoal*), jadwal rundown berurutan (`08:30 AM` - `10:30 AM`) bergaris tipis, dan **Catatan Khusus (Tanpa Amplop)** dengan ilustrasi sketsa sepatu hak tinggi (*high heels*) di sisi kanan. |
| **FR-06** | **Penutup & Hitung Mundur** | *Real-Time Countdown Timer* menuju **11 Juni 2026, 09:00 WIB** format `DAYS : HOURS : MINUTES : SECONDS`, serta **Photobooth Strip Merah Marun Vertikal (kemiringan -3deg)** memuat 3 foto candid pasangan bergaya scrapbook dengan washi tape dan tanda tangan penutup. |

---

## 🎨 Palet Warna & Tipografi

- **Latar Belakang:** `#FAF8F5` / `#F7F5F0` dengan tekstur bintik kertas halus (*paper grain*).
- **Aksen Utama:** Merah Marun / Deep Crimson (`#8B1A1A`).
- **Teks Utama:** Hitam Arang / Charcoal (`#222222`).
- **Pemutar Musik:** Abu-abu Gelap Matte (`#2B2B2B`).
- **Font Judul:** *Caveat Brush*, *Gochi Hand*, *Caveat* (Hand-lettered brush doodle).
- **Font Isi & Jadwal:** *Courier Prime*, *Space Mono* (Monospace / Typewriter font).
- **Font Kaligrafi:** *Amiri* (Arab).

---

## 📱 Desain Wadah (Mobile-First Frame)

Sesuai spesifikasi PRD, aplikasi didesain **Mobile-First**:
- **Pada Desktop (> 768px):** Tampilan undangan berada di tengah layar (*centered frame*) dengan `max-width: 430px`, dikelilingi latar belakang desktop lembut bernuansa meja kerja kreatif (`#EFECE6`) dengan bayangan fisik jurnal (*photobooth shadow*).
- **Pada Seluler (Smartphone):** Memenuhi layar 100% secara alami dan responsif.

---

## 🚀 Cara Menjalankan Proyek di Lokal

1. **Jalankan Development Server:**
   ```bash
   npm run dev
   # atau: node node_modules/vite/bin/vite.js
   ```
   Buka di peramban: [http://localhost:5173](http://localhost:5173)

2. **Coba Tautan Undangan Khusus Tamu (WhatsApp Link):**
   [http://localhost:5173/?to=Bpk.+Ahmad+dan+Partner](http://localhost:5173/?to=Bpk.+Ahmad+dan+Partner)

3. **Kompilasi Produksi (Build):**
   ```bash
   npm run build
   # atau: node node_modules/vite/bin/vite.js build
   ```
   Total ukuran berkas gzip produksi hanya **~97 kB**!

---

## ✏️ Cara Mengubah Data & Konten

Seluruh data teks, nama mempelai, orang tua, tanggal, jam, dresscode, foto photobooth, dan rundown dapat diubah di:
👉 `src/data/weddingConfig.ts`
