# 🚗 Kasa Katalog

<p align="center">
  <b>Otomobil kasa kodları ve teknik özellikleri için modern bir web kataloğu ve REST API</b>
</p>

<p align="center">
  <a href="https://kasa-katalog.vercel.app/"><b>🌐 Canlı Demo</b></a> •
  <a href="https://kasa-katalog.onrender.com/"><b>🔌 Backend API</b></a>
</p>

---

## 📖 Proje Hakkında

**Kasa Katalog**, otomobil tutkunları için geliştirilmiş bir **web kataloğu ve REST API** projesidir.

Projede BMW, Mercedes-Benz, Audi, Nissan ve Toyota gibi markalara ait araçların:

* 🚗 **Kasa kodları** (E46, W211, R34 vb.)
* ⚙️ **Motor seçenekleri**
* 📅 **Üretim yılları**
* 🔧 **Teknik özellikleri**
* 🖼️ **Wikipedia açıklamaları ve görselleri**

gibi bilgiler tek bir platformda sunulmaktadır.

---

# ✨ Özellikler

### 🚘 Detaylı Araç Verileri

İkonik araç modellerine ait **kasa kodları, nesil bilgileri ve üretim tarihleri**.

### ⚙️ Motor Seçenekleri (Variants)

Her kasa için:

* Beygir gücü (**HP**)
* Tork (**Nm**)
* 0-100 hızlanma
* Çekiş sistemi
* Motor tipi

gibi teknik detaylar.

### 🔍 Gelişmiş Filtreleme

Kullanıcılar araçları şu kriterlere göre filtreleyebilir:

* Marka
* Yakıt tipi
* Kasa tipi

### 🌐 Wikipedia Entegrasyonu

Araç açıklamaları ve görseller **Wikipedia API** kullanılarak otomatik olarak çekilir.

### 📱 Responsive Tasarım

Mobil uyumlu **modern ve dark-mode odaklı kullanıcı arayüzü**.

---

# 🛠️ Kullanılan Teknolojiler

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Axios**
* **Cheerio**
* **Dotenv**

### Backend Özellikleri

* REST API mimarisi
* MongoDB veri modelleme
* Web scraping
* Otomatik veri seed sistemi

---

## Frontend

* **Vanilla JavaScript**
* **HTML5**
* **CSS3**
* **Flexbox & Grid Layout**
* **Responsive Design**
* **Dark Mode UI**

Frontend tarafı **hafif, hızlı ve framework bağımsız** olacak şekilde tasarlanmıştır.

---

# 📂 Proje Yapısı

```
kasa-katalog
│
├── backend
│   ├── src
│   │   ├── config       # Veritabanı bağlantı ayarları
│   │   ├── controllers  # API mantığı ve filtreleme işlemleri
│   │   ├── models       # Mongoose veri şemaları
│   │   ├── routes       # API endpointleri
│   │   ├── scripts      # Seed ve scraper araçları
│   │   └── server.js    # Sunucu başlangıç noktası
│
├── frontend
│   ├── index.html       # Ana sayfa
│   ├── detail.html      # Araç detay sayfası
│   ├── app.js           # Ana sayfa JS
│   ├── detail.js        # Detay sayfası JS
│   └── style.css        # UI tasarım dosyası
```

---

# ⚙️ Kurulum

## 1️⃣ Gereksinimler

* Node.js **v18+**
* MongoDB (**Local veya Atlas**)
* Git

---

## 2️⃣ Projeyi Klonlama

```bash
git clone https://github.com/sercancintosunn/kasa-katalog.git
cd kasa-katalog
```

---

## 3️⃣ Ortam Değişkenleri

`backend` klasörünün içine `.env` dosyası oluşturun:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Bağımlılıkları Kurma

```bash
cd backend
npm install
```

---

## 5️⃣ Veritabanını Doldurma

```bash
npm run seed
```

Bu komut **örnek araç verilerini** MongoDB’ye yükler.

---

## 6️⃣ Wikipedia Verilerini Çekme

```bash
npm run scrape
```

Bu işlem araçlar için:

* açıklamalar
* görseller

gibi verileri Wikipedia’dan çeker.

---

## ▶️ Uygulamayı Çalıştırma

```bash
npm run dev
```

Sunucu çalıştıktan sonra:

```
frontend/index.html
```

dosyasını tarayıcıda açarak uygulamayı kullanabilirsiniz.

---

# 🌍 Canlı Demo

Frontend:

👉 https://kasa-katalog.vercel.app/

Backend API:

👉 https://kasa-katalog.onrender.com/

---

# 🧑‍💻 Geliştirici

**Sercan Çintosun**

GitHub:
https://github.com/sercancintosunn

---

# 📜 Lisans

Bu proje **ISC Lisansı** ile lisanslanmıştır.
