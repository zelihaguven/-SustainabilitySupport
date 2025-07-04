# 🌱 Sürdürülebilirlik Karar Destek Aracı

Modern web teknolojileri kullanılarak geliştirilmiş, ambalaj seçimlerinizin çevresel etkisini analiz eden ve sürdürülebilir kararlar almanıza yardımcı olan kapsamlı bir web uygulaması.

## 🌐 Canlı Demo
**https://ruzlyoes.manus.space**

## 📋 İçindekiler
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [API Referansı](#api-referansı)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## ✨ Özellikler

### 🔧 Temel Özellikler
- **10 Farklı Ürün Kategorisi**: Kağıt, plastik, cam, metal, kozmetik ve tüp ambalajları
- **5 Kullanım Sıklığı Seçeneği**: Günlük, haftalık, aylık, mevsimlik, yıllık
- **Gerçekçi Hesaplama Sistemi**: Ürün kategorisine göre optimize edilmiş kullanım süreleri
- **Çevresel Etki Analizi**: CO2 emisyonu ve su kullanımı hesaplama
- **Akıllı Öneri Sistemi**: Kullanıcı önceliğine göre kişiselleştirilmiş öneriler

### 🧠 AI Tahmin & Yardım
- **Doğal Dil İşleme**: "Makyaj malzemesini günlük kullanıyorum, 30 ml kapatıcım var" gibi serbest metinleri anlama
- **Otomatik Parsing**: Hacim, kullanım sıklığı ve ürün türünü metinden çıkarma
- **Akıllı Tahmin**: Bitiş süresi ve yıllık tüketim tahmini
- **Kişiselleştirilmiş Öneriler**: AI destekli sürdürülebilirlik tavsiyeleri

### 📊 Görselleştirme
- **İnteraktif Grafikler**: Recharts ile bar chart ve pie chart
- **Tab Sistemi**: Özet, Grafikler ve Karşılaştırma sekmeleri
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz
- **Modern UI**: Tailwind CSS ve shadcn/ui bileşenleri

### 🌍 Gelişmiş Özellikler
- **Bölgesel Su Analizi**: 8 Türkiye şehri için su kıtlığı faktörleri
- **Özel Veri Girişi**: Kullanıcıların kendi çevresel verilerini girebilmesi
- **Coğrafi Faktörler**: Su kullanımının bölgesel su stresi ile çarpılması
- **Detaylı Raporlama**: Kapsamlı analiz sonuçları ve öneriler

## 🛠 Teknolojiler

### Frontend
- **React 18**: Modern JavaScript framework
- **Vite**: Hızlı build tool ve development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern UI bileşen kütüphanesi
- **Recharts**: React için grafik kütüphanesi
- **Lucide React**: İkon kütüphanesi

### Geliştirme Araçları
- **TypeScript**: Type-safe JavaScript
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **pnpm**: Hızlı paket yöneticisi

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- pnpm (önerilen) veya npm/yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/yourusername/sustainability-decision-tool.git
cd sustainability-decision-tool
```

2. **Bağımlılıkları yükleyin**
```bash
pnpm install
# veya
npm install
```

3. **Development server'ı başlatın**
```bash
pnpm run dev
# veya
npm run dev
```

4. **Tarayıcınızda açın**
```
http://localhost:5173
```

### Build ve Deploy

```bash
# Production build
pnpm run build

# Build önizleme
pnpm run preview

# Linting
pnpm run lint
```

## 📖 Kullanım

### Geleneksel Form Kullanımı

1. **Ürün Seçimi**: Dropdown menüden ambalaj/ürün türünü seçin
2. **Miktar Girişi**: Kaç adet ürün kullandığınızı girin
3. **Kullanım Sıklığı**: Ne sıklıkla kullandığınızı belirtin
4. **Öncelik Seçimi**: CO2, su tasarrufu veya dengeli yaklaşım
5. **Analiz**: "Analiz Et" butonuna tıklayın

### AI Tahmin & Yardım Kullanımı

1. **Serbest Metin**: Kullanım senaryonuzu doğal dille yazın
   - Örnek: "100 ml şampuan günlük kullanıyorum ne kadar sürer?"
2. **AI Analizi**: "AI Analizi Başlat" butonuna tıklayın
3. **Sonuçları İnceleyin**: Detaylı tahmin ve önerileri görün

### Gelişmiş Özellikler

- **Özel Veri**: Switch'i açarak kendi CO2 ve su değerlerinizi girin
- **Bölgesel Analiz**: Coğrafi bölge seçerek su kıtlığı faktörünü dahil edin
- **Grafik İnceleme**: Farklı tab'larda sonuçları görselleştirin

## 🔧 API Referansı

### Çevresel Veri Yapısı

```javascript
const ENVIRONMENTAL_DATA = {
  'product_type': {
    co2: number,        // kg CO2/adet
    water: number,      // L su/adet
    category: string    // Ürün kategorisi
  }
}
```

### Kullanım Süreleri

```javascript
const PRODUCT_USAGE_DURATION = {
  'product_type': {
    daily: number,      // Günlük kullanımda kaç gün sürer
    weekly: number,     // Haftalık kullanımda kaç gün sürer
    monthly: number,    // Aylık kullanımda kaç gün sürer
    seasonal: number,   // Mevsimlik kullanımda kaç gün sürer
    yearly: number      // Yıllık kullanımda kaç gün sürer
  }
}
```

### Bölgesel Faktörler

```javascript
const REGIONAL_FACTORS = {
  'region_code': {
    factor: number,     // Su kullanımı çarpanı
    label: string       // Bölge adı ve açıklama
  }
}
```

## 📊 Desteklenen Ürün Kategorileri

### Genel Ambalaj
- **Kağıt Ambalaj**: 0.9 kg CO2, 10 L su
- **Polietilen Ambalaj**: 1.8 kg CO2, 3.5 L su  
- **Cam Ambalaj**: 1.2 kg CO2, 2.8 L su

### Metal Ambalaj
- **Alüminyum**: 16.1 kg CO2, 155 L su
- **Çelik**: 1.65 kg CO2, 25 L su

### İçecek Ambalajı
- **PET Su Şişesi**: 2.25 kg CO2, 3.5 L su

### Kozmetik Ambalajı
- **Plastik**: 2.8 kg CO2, 8.5 L su
- **Cam**: 1.5 kg CO2, 4.2 L su

### Tüp Ambalajı
- **Plastik Tüp**: 2.2 kg CO2, 6.8 L su
- **Alüminyum Tüp**: 8.5 kg CO2, 45 L su

## 🌍 Bölgesel Su Kıtlığı Faktörleri

| Şehir | Su Stresi Seviyesi | Faktör |
|-------|-------------------|--------|
| İstanbul | Orta | 1.2 |
| Ankara | Yüksek | 1.5 |
| İzmir | Orta-Yüksek | 1.3 |
| Antalya | Çok Yüksek | 1.8 |
| Bursa | Düşük-Orta | 1.1 |
| Adana | Yüksek | 1.6 |
| Gaziantep | Çok Yüksek | 1.7 |
| Konya | Yüksek | 1.4 |

## 🧪 Test Senaryoları

### Makyaj Malzemesi Testi
```
Girdi: "Makyaj malzemesini günlük kullanıyorum, 30 ml kapatıcım var"
Çıktı: 
- Bitiş Süresi: 90 gün
- Yıllık Tüketim: 5 adet
- CO2: 14.00 kg/yıl
- Su: 42.50 L/yıl
```

### Su Şişesi Testi
```
Girdi: "500 ml su şişesi günlük kullanıyorum"
Çıktı:
- Bitiş Süresi: 1 gün
- Yıllık Tüketim: 365 adet
- CO2: 821.25 kg/yıl
- Su: 1277.50 L/yıl
```

## 🤝 Katkıda Bulunma

1. **Fork** edin
2. **Feature branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. **Commit** edin (`git commit -m 'Add amazing feature'`)
4. **Push** edin (`git push origin feature/amazing-feature`)
5. **Pull Request** açın

### Geliştirme Kuralları
- ESLint kurallarına uyun
- Responsive tasarım prensiplerini takip edin
- Accessibility standartlarını gözetin
- Test senaryolarını güncelleyin

## 📝 Changelog

### v2.0.0 (2025-01-23)
- ✅ AI Tahmin & Yardım özelliği eklendi
- ✅ Gerçekçi kullanım süreleri implementasyonu
- ✅ Bölgesel su kıtlığı analizi
- ✅ 10 farklı ürün kategorisi desteği
- ✅ İnteraktif grafik sistemi

### v1.0.0 (2025-01-20)
- 🎉 İlk sürüm yayınlandı
- ✅ Temel hesaplama sistemi
- ✅ React + Tailwind CSS arayüz
- ✅ Responsive tasarım

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👥 Ekip

- **Geliştirici**: Manus AI Team
- **Tasarım**: Modern UI/UX Principles
- **Veri Kaynağı**: Endüstri araştırmaları ve çevresel raporlar

## 📞 İletişim

- **Website**: https://ruzlyoes.manus.space
- **Issues**: GitHub Issues sayfasını kullanın
- **Öneriler**: Pull Request gönderin

## 🙏 Teşekkürler

- **React Team**: Harika framework için
- **Tailwind CSS**: Modern CSS framework için  
- **shadcn/ui**: Güzel UI bileşenleri için
- **Recharts**: İnteraktif grafikler için
- **Çevresel Veri Kaynakları**: Güvenilir veriler için

---

**Not**: Bu uygulama eğitim ve bilinçlendirme amaçlıdır. Gerçek çevresel kararlar için uzman görüşü alınması önerilir.

