# 📊 Aplikasi Manajemen Wali Kelas (WALAS)

**Aplikasi berbasis web untuk manajemen data siswa, absensi, jadwal pelajaran, dan tugas menggunakan Google Apps Script dan Google Sheets.**

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0-blue)

---

## 🎯 Fitur Utama

✅ **Manajemen Data Siswa**
- Database 45 siswa dengan informasi kontak
- Field: Nama, No HP Siswa, Nama Ortu, No HP Ortu

✅ **Sistem Absensi**
- Input harian dengan status: Hadir, Alfa, Sakit, Izin
- Tampilan absensi hari ini di dashboard

✅ **Rekap Kehadiran Bulanan**
- Generate rekap otomatis per bulan
- Format table dengan statistik lengkap
- Disimpan di sheet terpisah

✅ **Jadwal Pelajaran**
- 17 mata pelajaran beserta nama guru
- Informasi: Hari, Jam Mulai, Jam Selesai
- Tampil otomatis berdasarkan hari

✅ **Daftar Tugas**
- Input tugas dengan deadline
- Filter tugas yang belum dikerjakan
- Urut berdasarkan deadline

✅ **Dashboard Interaktif**
- Antarmuka modern & responsive
- Real-time data update
- Auto refresh setiap 5 menit

---

## 🛠️ Tech Stack

- **Backend**: Google Apps Script
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Database**: Google Sheets
- **Storage**: Google Drive
- **Browser**: Chrome, Firefox, Safari, Edge

---

## 📦 Struktur File

```
walas-management-app/
├── Code.gs                 # Backend logic (Google Apps Script)
├── UI.html                 # Frontend dashboard (HTML/CSS/JS)
├── SETUP_GUIDE.md          # Panduan setup lengkap
└── README.md               # File ini
```

---

## 🚀 Quick Start

### 1. Persiapan
- Buat Google Spreadsheet baru dengan nama "WALAS_Management"
- Buat 5 sheet: Database_Siswa, Absensi, Mapel_Guru, Tugas, Konfigurasi

### 2. Setup Apps Script
- Buka **Extensions → Apps Script**
- Copy-paste `Code.gs` ke editor
- Buat file HTML baru dengan nama `UI`
- Copy-paste `UI.html`

### 3. Deploy
- Klik **Deploy → New Deployment**
- Pilih type: **Web app**
- Set: Execute as (Your Account), Who has access (Anyone)
- Klik Deploy dan copy URL

### 4. Gunakan
- Buka URL di browser
- Dashboard siap digunakan!

📖 **Untuk panduan lengkap, baca: [SETUP_GUIDE.md](SETUP_GUIDE.md)**

---

## 📋 Struktur Google Sheets

### Sheet: Database_Siswa
| Nama | No HP Siswa | Nama Ortu | No HP Ortu |
|------|-------------|-----------|------------|
| Ahmad Raji | 081234567890 | Ibu Siti | 082345678901 |
| Budi Santoso | 081234567891 | Bapak Wahyu | 082345678902 |
| ... (45 siswa total) |

### Sheet: Absensi
| Tanggal | Nama Siswa | Status |
|---------|-----------|--------|
| 2024-06-29 | Ahmad Raji | Hadir |
| 2024-06-29 | Budi Santoso | Sakit |

### Sheet: Mapel_Guru
| No | Nama Mapel | Nama Guru | Hari | Jam Mulai | Jam Selesai |
|----|-----------|-----------|----- |-----------|-------------|
| 1 | Matematika | Ibu Siti | Senin | 07:00 | 08:00 |
| 2 | B. Indonesia | Pak Budi | Senin | 08:00 | 09:00 |

### Sheet: Tugas
| Tanggal Input | Nama Mapel | Deskripsi | Deadline | Status |
|---|---|---|---|---|
| 2024-06-29 | Matematika | Soal Bab 5 | 2024-06-30 | Pending |
| 2024-06-29 | B. Indonesia | Ringkasan Novel | 2024-07-02 | Pending |

---

## 💡 Fitur Dashboard

### 1. 📋 Absensi Hari Ini
- Tabel absensi siswa
- Status berwarna (Hijau/Merah/Kuning/Biru)
- Update otomatis

### 2. 📅 Jadwal Pelajaran Hari Ini
- Jadwal berdasarkan hari saat ini
- Info mapel, guru, jam
- Urut berdasarkan jam mulai

### 3. ➕ Input Absensi
- Dropdown daftar siswa
- Pilihan status absensi
- Tombol catat absensi

### 4. 📝 Tugas Belum Dikerjakan
- List tugas pending
- Info mapel, deskripsi, deadline
- Urut by deadline

### 5. 👥 Statistik Siswa
- Jumlah total siswa terdaftar
- Display besar & mudah dibaca

### 6. 📥 Export Rekap Bulanan
- Dropdown bulan & tahun
- Tombol generate rekap
- Sheet baru dibuat otomatis

---

## 🔧 API Functions

### Backend Functions

```javascript
// Ambil semua data dashboard
getAllDashboardData()

// Ambil daftar siswa
getStudentList()

// Ambil absensi hari ini
getTodayAbsence()

// Ambil jadwal hari ini
getTodaySchedule()

// Ambil tugas pending
getPendingTasks()

// Catat absensi
recordAbsence(namaSiswa, status)

// Generate rekap bulanan
generatemonthlyRecap(month, year)
```

---

## 📱 Responsiveness

✅ Desktop (1200px+)
- Grid 2 kolom
- Layout optimal

✅ Tablet (768px - 1199px)
- Grid 2 kolom (sesuaikan)
- Touch-friendly

✅ Mobile (< 768px)
- Grid 1 kolom
- Font responsive
- Thumb-friendly buttons

---

## 🎨 UI/UX

- **Color Scheme**: Purple gradient background (#667eea - #764ba2)
- **Cards**: White background dengan shadow
- **Status Badges**: 
  - Hadir: Green (#d4edda)
  - Alfa: Red (#f8d7da)
  - Sakit: Yellow (#fff3cd)
  - Izin: Blue (#d1ecf1)
- **Typography**: Segoe UI, sans-serif
- **Spacing**: Consistent 20px gap

---

## ⚙️ Requirements

- Google Account (Gmail)
- Google Sheets
- Web Browser (Chrome, Firefox, Safari, Edge)
- Internet Connection
- Akses ke Google Apps Script

---

## 📝 Notes

- Aplikasi gratis menggunakan platform Google
- Data disimpan di Google Sheets (unlimited)
- Auto backup oleh Google Drive
- Akses dari mana saja
- Kolaborasi mudah antar user

---

## 🤝 Kontribusi

Untuk update atau perbaikan, silakan buat Pull Request atau hubungi author.

---

## 📞 Support

- 📧 Email: [hubungi@example.com]
- 💬 WhatsApp: [link wa]
- 🐛 Issue: Silakan buat issue di GitHub

---

## 📄 License

MIT License - Bebas digunakan untuk personal & commercial

---

## 🎉 Credits

Dibuat dengan ❤️ untuk memudahkan manajemen kelas

**Version**: 1.0
**Last Updated**: June 2024
**Status**: Active & Maintained
