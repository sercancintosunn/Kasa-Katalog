🚗 Kasa Katalog
Kasa Katalog; otomobil tutkunları ve yazılımcılar için geliştirilmiş, araçların kasa kodları (E46, W211, R34 vb.), teknik özellikleri, motor seçenekleri ve üretim yıllarını içeren kapsamlı bir REST API ve web arayüzüdür.

Canlı Demo: kasa-katalog.vercel.app

Backend API: kasa-katalog.onrender.com

🚀 Özellikler
Detaylı Kasa Verileri: BMW, Mercedes-Benz, Audi, Nissan, Toyota gibi markaların ikonik modellerine ait nesil ve kasa kodu bilgileri.

Motor Seçenekleri (Variants): Her kasa kodu için beygir gücü (HP), tork (Nm), hızlanma (0-100 km/s) ve çekiş sistemi gibi teknik detaylar.

Gelişmiş Filtreleme: Marka, yakıt tipi ve kasa tipine göre dinamik arama ve filtreleme seçenekleri.

Wikipedia Entegrasyonu: Wikipedia API kullanılarak otomatik olarak çekilen araç açıklamaları ve görseller.

Responsive Tasarım: Mobil uyumlu, modern ve "Dark Mode" odaklı minimalist kullanıcı arayüzü.

🛠️ Kullanılan Teknolojiler
Backend
Node.js & Express: Hızlı ve ölçeklenebilir REST API mimarisi.

MongoDB & Mongoose: Esnek veri modelleme ve veritabanı yönetimi.

Axios & Cheerio: Veri çekme ve Wikipedia API entegrasyonu.

Dotenv: Çevresel değişken yönetimi.

Frontend
Vanilla JavaScript: Hafif ve performanslı DOM yönetimi.

CSS3: Özel değişkenler (CSS Variables) ve Grid/Flexbox ile modern tasarım.

HTML5: Semantik yapı ve SEO uyumlu içerik.

📂 Proje Yapısı
Plaintext
├── backend/
│   ├── src/
│   │   ├── config/      # Veritabanı bağlantı ayarları
│   │   ├── controllers/ # API mantığı ve filtreleme işlemleri
│   │   ├── models/      # Mongoose veri şemaları
│   │   ├── routes/      # API uç noktaları (endpoints)
│   │   ├── scripts/     # Veri ekleme (seed) ve scraper araçları
│   │   └── server.js    # Sunucu başlangıç noktası
├── frontend/
│   ├── index.html       # Ana vitrin arayüzü
│   ├── detail.html      # Araç detay sayfası
│   ├── app.js           # Ana sayfa dinamikleri ve API fetch işlemleri
│   └── style.css        # Modern karanlık tema tasarımları
⚙️ Kurulum ve Çalıştırma
Depoyu klonlayın:

Bash
git clone https://github.com/sercancintosunn/kasa-katalog.git
cd kasa-katalog
Bağımlılıkları yükleyin:

Bash
cd backend
npm install
.env dosyasını oluşturun:
backend klasörü içinde bir .env dosyası oluşturun ve MongoDB bağlantı adresinizi ekleyin:

Kod snippet'i
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Veritabanını hazırlayın:
Örnek verileri yüklemek ve görselleri çekmek için:

Bash
npm run seed    # Örnek araç listesini yükler
npm run scrape  # Wikipedia'dan veri ve resim çeker
Uygulamayı başlatın:

Bash
npm run dev     # Nodemon ile geliştirme modunda başlatır
📝 Lisans
Bu proje ISC lisansı ile korunmaktadır.

Hazırlayan: Sercan Çintosun
