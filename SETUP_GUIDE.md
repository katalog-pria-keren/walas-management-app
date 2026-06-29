# 📚 PANDUAN SETUP LENGKAP APLIKASI WALAS

## 1️⃣ PERSIAPAN GOOGLE SPREADSHEET

### A. Buat Spreadsheet Baru
1. Buka [Google Sheets](https://sheets.google.com)
2. Klik **+ Spreadsheet kosong**
3. Rename ke: **WALAS_Management**

### B. Buat 5 Sheet Sesuai Ketentuan

Hapus sheet default, kemudian buat 5 sheet baru dengan nama:
- `Database_Siswa`
- `Absensi`
- `Mapel_Guru`
- `Tugas`
- `Konfigurasi`

---

## 2️⃣ SETUP STRUKTUR SHEET

### Sheet: Database_Siswa
**Header Row:**
```
Nama | No HP Siswa | Nama Ortu | No HP Ortu
```

**Contoh Data (45 siswa):**
```
Ahmad Raji | 081234567890 | Ibu Siti | 082345678901
Budi Santoso | 081234567891 | Bapak Wahyu | 082345678902
... (total 45 siswa)
```

---

### Sheet: Mapel_Guru
**Header Row:**
```
No | Nama Mapel | Nama Guru | Hari | Jam Mulai | Jam Selesai
```

**Contoh Data (17 mata pelajaran):**
```
1 | Matematika | Ibu Siti | Senin | 07:00 | 08:00
2 | Bahasa Indonesia | Pak Budi | Senin | 08:00 | 09:00
3 | IPA | Ibu Nur | Senin | 09:00 | 10:00
4 | IPS | Pak Rinto | Senin | 10:00 | 11:00
5 | Bahasa Inggris | Ibu Yuni | Selasa | 07:00 | 08:00
6 | Olahraga | Pak Doni | Selasa | 08:00 | 09:00
7 | Seni | Ibu Eka | Selasa | 09:00 | 10:00
8 | TIK | Pak Anto | Selasa | 10:00 | 11:00
9 | PKN | Ibu Lis | Rabu | 07:00 | 08:00
10 | Agama | Pak Haji | Rabu | 08:00 | 09:00
11 | BK | Ibu Lina | Rabu | 09:00 | 10:00
12 | Penjaskes | Pak Rizki | Rabu | 10:00 | 11:00
13 | Muatan Lokal | Ibu Ratih | Kamis | 07:00 | 08:00
14 | Prakarya | Pak Hendra | Kamis | 08:00 | 09:00
15 | MTK Tambahan | Ibu Siti | Kamis | 09:00 | 10:00
16 | Bahasa Mandarin | Ibu Zhang | Jumat | 07:00 | 08:00
17 | Literasi | Pak Supri | Jumat | 08:00 | 09:00
```

---

### Sheet: Tugas
**Header Row:**
```
Tanggal Input | Nama Mapel | Deskripsi Tugas | Deadline | Status
```

**Contoh Data:**
```
2024-06-29 | Matematika | Soal Bab 5 halaman 120 | 2024-06-30 | Pending
2024-06-29 | Bahasa Indonesia | Membuat ringkasan novel | 2024-07-02 | Pending
```

---

### Sheet: Absensi
**Header Row:**
```
Tanggal | Nama Siswa | Status
```

⚠️ **PENTING:** Sheet ini akan terisi otomatis saat input absensi via dashboard

---

### Sheet: Konfigurasi
**Header Row:**
```
Parameter | Nilai
```

**Contoh Data:**
```
Nama Sekolah | SD Negeri Maju Jaya
Tahun Ajaran | 2024/2025
Kelas | 6A
Wali Kelas | Ibu Dwi Hariyani
```

---

## 3️⃣ SETUP GOOGLE APPS SCRIPT

### A. Buka Apps Script Editor
1. Di Google Sheets **WALAS_Management**
2. Klik menu **Extensions → Apps Script**
3. Akan membuka tab baru

### B. Setup File Code.gs
1. **Hapus** code default yang ada
2. **Copy-paste** seluruh isi dari **Code.gs** file dari repository
3. Klik **💾 Save** (atau Ctrl+S)

### C. Setup File UI.html
1. Klik **➕ File → New → HTML file**
2. Beri nama: `UI`
3. **Hapus** code default
4. **Copy-paste** seluruh isi dari **UI.html** file dari repository
5. Klik **💾 Save** (atau Ctrl+S)

---

## 4️⃣ DEPLOY APLIKASI

### A. Buat Deployment Baru
1. Di Apps Script, klik **Deploy → New Deployment**
2. Pilih **Type: Web app** (icon engkol)

### B. Atur Setting Deployment
- **Execute as**: Pilih akun Google Anda
- **Who has access**: 
  - Pilih **Anyone** (jika ingin semua orang akses)
  - Atau pilih **Specific people/domain** (jika ingin terbatas)

### C. Deploy
1. Klik **Deploy** (tombol biru)
2. Akan muncul dialog: "Authorize access"
3. Klik **Authorize** dan pilih akun Google Anda
4. Review permissions dan klik **Allow**
5. Selesai! Salin URL yang muncul

---

## 5️⃣ MENGGUNAKAN APLIKASI

### Akses Dashboard
1. Buka URL yang sudah di-copy
2. Dashboard akan tampil dengan 6 card:
   - 📋 **Absensi Hari Ini** - Menampilkan absensi hari ini
   - 📅 **Jadwal Pelajaran Hari Ini** - Jadwal berdasarkan hari
   - ➕ **Input Absensi** - Form input absensi baru
   - 📝 **Tugas Belum Dikerjakan** - Tugas dengan deadline
   - 👥 **Statistik Siswa** - Jumlah total siswa
   - 📥 **Export Rekap Bulanan** - Generate rekap Excel

### Fitur Input Absensi
1. Pilih nama siswa dari dropdown
2. Pilih status (Hadir/Alfa/Sakit/Izin)
3. Klik **Catat Absensi**
4. Data akan tersimpan di sheet Absensi
5. Tabel absensi hari ini akan update otomatis

### Fitur Export Rekap
1. Pilih bulan dan tahun
2. Klik **Generate Rekap**
3. Sheet baru akan dibuat dengan nama `Rekap_M-Y` (contoh: `Rekap_6-2024`)
4. Sheet berisi tabel lengkap dengan kolom:
   - No
   - Nama Siswa
   - Hadir (jumlah)
   - Alfa (jumlah)
   - Sakit (jumlah)
   - Izin (jumlah)
   - Total

---

## 6️⃣ TIPS & TROUBLESHOOTING

### ❌ Error: "Sheet tidak ditemukan"
**Solusi:**
- Pastikan semua 5 sheet sudah dibuat dengan nama EXACT (sesuai huruf besar/kecil)
- Periksa di cell A1 setiap sheet sudah ada header

### ❌ Dropdown kosong di form input absensi
**Solusi:**
- Pastikan sheet Database_Siswa sudah diisi dengan minimal 1 siswa
- Refresh halaman browser (F5)

### ❌ Data absensi tidak tersimpan
**Solusi:**
- Pastikan sheet Absensi sudah ada dan header sudah dibuat
- Periksa koneksi internet
- Coba refresh halaman dan ulang

### ❌ Tombol Generate Rekap tidak bekerja
**Solusi:**
- Pastikan sheet Absensi sudah memiliki data absensi
- Pilih bulan dan tahun yang valid
- Jika sudah ada rekap bulan yang sama, akan muncul error (sheet sudah ada)

### ✅ Mengupdate data
- Edit langsung di sheet Google Sheets
- Refresh browser untuk melihat perubahan di dashboard

---

## 7️⃣ STRUKTUR FILE LENGKAP

```
WALAS_Management/ (Google Spreadsheet)
├── Database_Siswa (Sheet)
│   └── Berisi data 45 siswa
├── Absensi (Sheet)
│   └── Rekam absensi harian otomatis
├── Mapel_Guru (Sheet)
│   └── 17 mata pelajaran & guru
├── Tugas (Sheet)
│   └── Daftar tugas & deadline
├── Konfigurasi (Sheet)
│   └── Setting aplikasi
└── [Apps Script Project]
    ├── Code.gs (Backend)
    └── UI.html (Frontend)
```

---

## 8️⃣ FITUR BONUS

### Auto Refresh Dashboard
- Dashboard otomatis refresh setiap 5 menit
- Tidak perlu refresh manual

### Status Warna-Warni
- 🟢 Hadir (Hijau)
- 🔴 Alfa (Merah)
- 🟡 Sakit (Kuning)
- 🔵 Izin (Biru)

### Responsive Design
- Bisa diakses di mobile & desktop
- Layout menyesuaikan ukuran layar

---

## 📞 DUKUNGAN

Jika ada pertanyaan atau masalah:
1. Periksa panduan troubleshooting di atas
2. Cek error message di console browser (F12)
3. Pastikan semua data sudah sesuai format

---

**Selamat menggunakan Aplikasi WALAS! 🎉**
