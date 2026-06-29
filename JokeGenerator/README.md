# 😂 Random Joke Generator

**Aplikasi joke generator random menggunakan Google Apps Script dengan Official Joke API**

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![API](https://img.shields.io/badge/API-Official%20Joke%20API-blue)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🎯 Fitur

✅ **Random Joke Generator**
- Ambil joke random dari Official Joke API
- Display dengan setup & punchline

✅ **Multiple Categories**
- General jokes
- Knock-knock jokes
- Programming jokes

✅ **Batch Loading**
- Ambil 10 jokes sekaligus
- Navigate between jokes

✅ **Share Functionality**
- Share ke social media
- Copy to clipboard

✅ **Modern UI**
- Responsive design
- Smooth animations
- Dark mode compatible

---

## 📋 API Endpoints Used

### Official Joke API
- **Base URL**: `https://official-joke-api.appspot.com`
- **Rate Limit**: No limit
- **Response Format**: JSON

### Available Endpoints

1. **Get Random Joke**
   ```
   GET /random_joke
   ```
   Response:
   ```json
   {
     "type": "general",
     "setup": "Why did the scarecrow win an award?",
     "punchline": "He was outstanding in his field!",
     "id": 123
   }
   ```

2. **Get Joke by Category**
   ```
   GET /jokes/{category}/random
   ```
   Categories: `general`, `knock-knock`, `programming`

3. **Get 10 Random Jokes**
   ```
   GET /jokes/ten
   ```
   Response: Array of 10 jokes

4. **Get Joke by ID**
   ```
   GET /jokes/{id}
   ```

---

## 🚀 Setup & Deployment

### Option 1: New Apps Script Project

1. **Buka Google Apps Script**: https://script.google.com
2. **Buat project baru**
3. **Copy-paste `JokeCode.gs`** ke editor
4. **Buat file HTML** dengan nama `JokeUI`
5. **Copy-paste `JokeUI.html`**
6. **Deploy sebagai Web App**

### Option 2: Tambah ke WALAS Project (Recommended)

1. **Di project WALAS Apps Script**:
   - Buat file baru: `JokeCode.gs`
   - Copy-paste semua kode dari `JokeCode.gs`
   
2. **Buat file HTML**:
   - Klik `+ File → New → HTML file`
   - Nama: `JokeUI`
   - Copy-paste semua kode dari `JokeUI.html`

3. **Deploy**:
   - **Deploy → New Deployment**
   - Type: **Web app**
   - Execute as: Your Account
   - Who has access: **Anyone**
   - Klik **Deploy**

---

## 📱 Cara Penggunaan

### 1. Akses Aplikasi
- Buka URL deployment di browser
- Dashboard joke generator muncul

### 2. Pilih Kategori
- Dropdown kategori (Random/General/Knock-knock/Programming)

### 3. Pilih Mode
- 1 Joke: Ambil 1 joke random
- 10 Jokes: Ambil 10 jokes sekaligus

### 4. Klik Tombol
- 🎲 **Get Joke**: Ambil joke baru
- 📤 **Share**: Share ke social media atau copy
- 📚 **Load 10 Jokes**: Tampil saat memilih 10 jokes

### 5. Keyboard Shortcut
- **Spacebar**: Ambil joke baru (faster!)

---

## 🔧 Backend Functions

```javascript
// Get random joke dari API
getRandomJoke()

// Get joke dari kategori tertentu
getJokeByCategory(category)

// Get 10 random jokes
getTenRandomJokes()

// Get joke by ID
getJokeById(jokeId)

// Get available categories
getAvailableCategories()

// Get API info
getApiInfo()
```

---

## 🎨 UI Components

### Header
- Title & description
- Gradient background

### Joke Display
- Setup (pertanyaan/setup)
- Punchline (jawaban/punchline)
- Type & ID info

### Controls
- Category dropdown
- Count selector
- Action buttons

### Indicators
- Loading spinner
- Joke counter (saat 10 jokes)
- Status alerts

---

## 🎨 Styling

### Color Scheme
- **Primary**: #667eea (Purple)
- **Secondary**: #764ba2 (Dark Purple)
- **Accent**: #ffeb3b (Yellow)
- **Background**: Gradient purple

### Features
- Smooth animations
- Hover effects
- Responsive grid
- Mobile-friendly

---

## 📊 Response Examples

### Single Joke
```json
{
  "success": true,
  "joke": {
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!",
    "id": 12
  }
}
```

### Multiple Jokes
```json
{
  "success": true,
  "jokes": [
    {
      "type": "general",
      "setup": "...",
      "punchline": "...",
      "id": 1
    },
    ...
  ],
  "count": 10
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message here"
}
```

---

## 🌐 Sharing Features

### Web Share API
- Jika browser support: share ke app (WhatsApp, Twitter, dll)
- Fallback: copy ke clipboard

### Share Format
```
[Setup]

[Punchline]
```

---

## 📱 Responsive Breakpoints

- **Desktop** (600px+): 2-column grid
- **Tablet** (768px+): Optimized layout
- **Mobile** (<600px): 1-column grid, single buttons

---

## ⚡ Performance

- **API Response**: ~200-500ms
- **First Load**: ~1-2s
- **Subsequent Loads**: ~500ms
- **No Rate Limit**: Official Joke API
- **Caching**: Browser cache untuk performa

---

## 🐛 Troubleshooting

### Error: "Failed to fetch joke"
- Check internet connection
- API might be down (rare)
- Try refreshing page

### Error: "Invalid category"
- Pastikan kategori: general, knock-knock, programming
- Jangan ada typo

### Share tidak bekerja
- Browser mungkin tidak support Web Share API
- Fallback to clipboard otomatis

---

## 📚 File Structure

```
JokeGenerator/
├── JokeCode.gs      # Backend (Google Apps Script)
├── JokeUI.html      # Frontend (HTML/CSS/JS)
└── README.md        # Dokumentasi (file ini)
```

---

## 🚀 Deployment Options

### Standalone
- Buat project Apps Script baru
- Copy files
- Deploy

### Integrated (Recommended)
- Tambah ke WALAS project
- Bisa diakses dari menu WALAS
- Share data dengan project lain

---

## 📝 Notes

- API: Official Joke API (https://official-joke-api.appspot.com)
- No API key required
- Free & public API
- Jokes berkualitas & family-friendly

---

## 🎉 Features to Come

- [ ] Favorite jokes collection
- [ ] Save jokes to Sheets
- [ ] Custom categories
- [ ] Joke statistics
- [ ] Dark mode toggle

---

## 📞 Support

If issues occur:
1. Check browser console (F12)
2. Verify internet connection
3. Try hard refresh (Ctrl+Shift+R)
4. Check if API is available

---

**Happy Laughing! 😂😂😂**
