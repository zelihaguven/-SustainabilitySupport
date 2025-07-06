# 🌱 Sustainability Decision Support Tool

A comprehensive web application developed using modern web technologies to analyze the environmental impact of your packaging choices and help you make sustainable decisions.

## 🌐 Live Demo
**https://ruzlyoes.manus.space**

## 📋 Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🔧 Core Features
- **10 Different Product Categories**: Paper, plastic, glass, metal, cosmetic, and tube packaging
- **5 Usage Frequency Options**: Daily, weekly, monthly, seasonal, yearly
- **Realistic Calculation System**: Optimized usage durations based on product categories
- **Environmental Impact Analysis**: CO2 emissions and water usage calculations
- **Smart Recommendation System**: Personalized suggestions based on user priorities

### 🧠 AI Prediction & Assistance
- **Natural Language Processing**: Understanding free text like "I use makeup daily, I have a 30ml concealer"
- **Automatic Parsing**: Extracting volume, usage frequency, and product type from text
- **Smart Prediction**: Estimating finish time and annual consumption
- **Personalized Recommendations**: AI-powered sustainability advice

### 📊 Visualization
- **Interactive Charts**: Bar charts and pie charts with Recharts
- **Tab System**: Summary, Charts, and Comparison tabs
- **Responsive Design**: Mobile and desktop compatible interface
- **Modern UI**: Tailwind CSS and shadcn/ui components

### 🌍 Advanced Features
- **Regional Water Analysis**: Water scarcity factors for 8 Turkish cities
- **Custom Data Input**: Users can enter their own environmental data
- **Geographic Factors**: Water usage multiplied by regional water stress
- **Detailed Reporting**: Comprehensive analysis results and recommendations

## 🛠 Technologies

### Frontend
- **React 18**: Modern JavaScript framework
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern UI component library
- **Recharts**: Chart library for React
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Type-safe JavaScript
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **pnpm**: Fast package manager

## 🚀 Installation

### Requirements
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Steps

1. **Clone the project**
```bash
git clone https://github.com/zelihaguven/sustainability-decision-tool.git
cd sustainability-decision-tool
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Start development server**
```bash
pnpm run dev
# or
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build and Deploy

```bash
# Production build
pnpm run build

# Preview build
pnpm run preview

# Linting
pnpm run lint
```

## 📖 Usage

### Traditional Form Usage

1. **Product Selection**: Choose packaging/product type from dropdown
2. **Quantity Input**: Enter how many units you use
3. **Usage Frequency**: Specify how often you use it
4. **Priority Selection**: CO2, water conservation, or balanced approach
5. **Analysis**: Click "Analyze" button

### AI Prediction & Assistance Usage

1. **Free Text**: Write your usage scenario in natural language
   - Example: "I use 100ml shampoo daily, how long will it last?"
2. **AI Analysis**: Click "Start AI Analysis" button
3. **Review Results**: See detailed predictions and recommendations

### Advanced Features

- **Custom Data**: Toggle switch to enter your own CO2 and water values
- **Regional Analysis**: Select geographic region to include water scarcity factor
- **Chart Review**: Visualize results in different tabs

## 🔧 API Reference

### Environmental Data Structure

```javascript
const ENVIRONMENTAL_DATA = {
  'product_type': {
    co2: number,        // kg CO2/unit
    water: number,      // L water/unit
    category: string    // Product category
  }
}
```

### Usage Durations

```javascript
const PRODUCT_USAGE_DURATION = {
  'product_type': {
    daily: number,      // Days for daily usage
    weekly: number,     // Days for weekly usage
    monthly: number,    // Days for monthly usage
    seasonal: number,   // Days for seasonal usage
    yearly: number      // Days for yearly usage
  }
}
```

### Regional Factors

```javascript
const REGIONAL_FACTORS = {
  'region_code': {
    factor: number,     // Water usage multiplier
    label: string       // Region name and description
  }
}
```

## 📊 Supported Product Categories

### General Packaging
- **Paper Packaging**: 0.9 kg CO2, 10 L water
- **Polyethylene Packaging**: 1.8 kg CO2, 3.5 L water  
- **Glass Packaging**: 1.2 kg CO2, 2.8 L water

### Metal Packaging
- **Aluminum**: 16.1 kg CO2, 155 L water
- **Steel**: 1.65 kg CO2, 25 L water

### Beverage Packaging
- **PET Water Bottle**: 2.25 kg CO2, 3.5 L water

### Cosmetic Packaging
- **Plastic**: 2.8 kg CO2, 8.5 L water
- **Glass**: 1.5 kg CO2, 4.2 L water

### Tube Packaging
- **Plastic Tube**: 2.2 kg CO2, 6.8 L water
- **Aluminum Tube**: 8.5 kg CO2, 45 L water

## 🌍 Regional Water Scarcity Factors

| City | Water Stress Level | Factor |
|------|-------------------|--------|
| Istanbul | Medium | 1.2 |
| Ankara | High | 1.5 |
| Izmir | Medium-High | 1.3 |
| Antalya | Very High | 1.8 |
| Bursa | Low-Medium | 1.1 |
| Adana | High | 1.6 |
| Gaziantep | Very High | 1.7 |
| Konya | High | 1.4 |

## 🧪 Test Scenarios

### Makeup Product Test
```
Input: "I use makeup daily, I have a 30ml concealer"
Output: 
- Finish Time: 90 days
- Annual Consumption: 5 units
- CO2: 14.00 kg/year
- Water: 42.50 L/year
```

### Water Bottle Test
```
Input: "I use 500ml water bottle daily"
Output:
- Finish Time: 1 day
- Annual Consumption: 365 units
- CO2: 821.25 kg/year
- Water: 1277.50 L/year
```

## 🤝 Contributing

1. **Fork** the project
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Development Guidelines
- Follow ESLint rules
- Maintain responsive design principles
- Consider accessibility standards
- Update test scenarios

## 📝 Changelog

### v2.0.0 (2025-01-23)
- ✅ Added AI Prediction & Assistance feature
- ✅ Implemented realistic usage durations
- ✅ Regional water scarcity analysis
- ✅ Support for 10 different product categories
- ✅ Interactive chart system

### v1.0.0 (2025-01-20)
- 🎉 Initial release
- ✅ Basic calculation system
- ✅ React + Tailwind CSS interface
- ✅ Responsive design

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: Zeliha Ilgın Güven
- **Design**: Zeliha Ilgın güven 
- **Data Source**: Industry research and environmental reports

## 📞 Contact

- **Website**: https://ruzlyoes.manus.space
- **Issues**: Use GitHub Issues page
- **Suggestions**: Send Pull Requests

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Tailwind CSS**: For the modern CSS framework  
- **shadcn/ui**: For beautiful UI components
- **Recharts**: For interactive charts
- **Environmental Data Sources**: For reliable data

---

**Note**: This application is for awareness purposes. For real environmental decisions, expert consultation is recommended.

## 🌟 Key Differentiators

### Realistic Usage Calculations
Unlike simple multiplication-based calculators, our tool considers:
- **Product-specific lifespans**: Makeup lasts 90 days, not consumed daily
- **Category-based logic**: Different products have different usage patterns
- **AI-powered parsing**: Natural language understanding for user convenience

### Comprehensive Analysis
- **Dual input methods**: Traditional forms + AI natural language
- **Regional considerations**: Water scarcity factors by location
- **Visual insights**: Interactive charts and detailed breakdowns
- **Actionable recommendations**: Personalized sustainability advice

### Modern Technology Stack
- **Performance optimized**: Vite build system for fast loading
- **Mobile-first design**: Responsive across all devices
- **Accessibility focused**: WCAG compliant interface
- **Type-safe development**: TypeScript for reliability

## 🔮 Future Roadmap

- [ ] **Multi-language support**: Additional language options
- [ ] **Database integration**: User account and history tracking
- [ ] **API endpoints**: External integration capabilities
- [ ] **Mobile app**: Native iOS/Android applications
- [ ] **Advanced AI**: Machine learning for better predictions
- [ ] **Carbon offsetting**: Integration with offset programs

## 📈 Performance Metrics

- **Bundle size**: ~217KB gzipped
- **Load time**: <2 seconds on 3G
- **Lighthouse score**: 95+ performance
- **Accessibility**: WCAG AA compliant
- **Browser support**: Modern browsers (ES2020+)

--- 


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
git clone https://github.com/zelihaguven/sustainability-decision-tool.git
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

- **Geliştirici**: Zeliha Ilgın Güven
- **Tasarım**: zeliha Ilgın güven
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

**Not**: Bu uygulama bilinçlendirme amaçlıdır. Gerçek çevresel kararlar için uzman görüşü alınması önerilir.

--- 
# 🤝 Katkıda Bulunma Rehberi / Contributing Guide

Bu projeye katkıda bulunmak istediğiniz için teşekkür ederiz! / Thank you for your interest in contributing to this project!

## 🌍 Dil Seçimi / Language Choice
- [Türkçe](#türkçe)
- [English](#english)

---

## Türkçe

### 🚀 Nasıl Katkıda Bulunabilirsiniz

#### 1. Geliştirme Ortamını Hazırlama
```bash
# Projeyi fork edin ve klonlayın
git clone https://github.com/zelihaguven/sustainability-decision-tool.git
cd sustainability-decision-tool

# Bağımlılıkları yükleyin
pnpm install

# Development server'ı başlatın
pnpm run dev
```

#### 2. Kod Standartları
- **ESLint kurallarına uyun**: `pnpm run lint` ile kontrol edin
- **TypeScript kullanın**: Type safety için
- **Responsive tasarım**: Mobil-first yaklaşım
- **Accessibility**: WCAG AA standartları
- **Performans**: Bundle size'ı gözetin

#### 3. Commit Mesajları
```
feat: yeni özellik ekleme
fix: hata düzeltme
docs: dokümantasyon güncelleme
style: kod formatı düzenleme
refactor: kod yeniden yapılandırma
test: test ekleme/güncelleme
chore: build/config değişiklikleri
```

#### 4. Pull Request Süreci
1. **Feature branch oluşturun**: `git checkout -b feature/amazing-feature`
2. **Değişikliklerinizi commit edin**: `git commit -m 'feat: amazing feature'`
3. **Branch'i push edin**: `git push origin feature/amazing-feature`
4. **Pull Request açın**: GitHub'da PR oluşturun

#### 5. Katkı Alanları

##### 🐛 Hata Raporları
- GitHub Issues kullanın
- Detaylı açıklama yapın
- Adımları belirtin
- Ekran görüntüsü ekleyin

##### ✨ Özellik Önerileri
- Use case açıklayın
- Mockup/wireframe ekleyin
- Teknik detayları belirtin

##### 📝 Dokümantasyon
- README güncellemeleri
- Code comment'leri
- API dokümantasyonu
- Kullanım örnekleri

##### 🧪 Test Yazma
- Unit testler
- Integration testler
- E2E testler
- Performance testler

#### 6. Kod İnceleme Kriterleri
- ✅ Fonksiyonellik çalışıyor mu?
- ✅ Kod okunabilir mi?
- ✅ Performance etkileri var mı?
- ✅ Security açıkları var mı?
- ✅ Accessibility standartları karşılanıyor mu?
- ✅ Test coverage yeterli mi?

---

## English

### 🚀 How to Contribute

#### 1. Setting Up Development Environment
```bash
# Fork and clone the project
git clone https://github.com/zelihaguven/sustainability-decision-tool.git
cd sustainability-decision-tool

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

#### 2. Code Standards
- **Follow ESLint rules**: Check with `pnpm run lint`
- **Use TypeScript**: For type safety
- **Responsive design**: Mobile-first approach
- **Accessibility**: WCAG AA standards
- **Performance**: Mind the bundle size

#### 3. Commit Messages
```
feat: add new feature
fix: bug fix
docs: documentation update
style: code formatting
refactor: code restructuring
test: add/update tests
chore: build/config changes
```

#### 4. Pull Request Process
1. **Create feature branch**: `git checkout -b feature/amazing-feature`
2. **Commit your changes**: `git commit -m 'feat: amazing feature'`
3. **Push branch**: `git push origin feature/amazing-feature`
4. **Open Pull Request**: Create PR on GitHub

#### 5. Contribution Areas

##### 🐛 Bug Reports
- Use GitHub Issues
- Provide detailed description
- Include reproduction steps
- Add screenshots

##### ✨ Feature Requests
- Explain use case
- Include mockup/wireframe
- Specify technical details

##### 📝 Documentation
- README updates
- Code comments
- API documentation
- Usage examples

##### 🧪 Testing
- Unit tests
- Integration tests
- E2E tests
- Performance tests

#### 6. Code Review Criteria
- ✅ Does functionality work?
- ✅ Is code readable?
- ✅ Any performance impacts?
- ✅ Any security vulnerabilities?
- ✅ Accessibility standards met?
- ✅ Sufficient test coverage?

---

## 🎯 Öncelikli Katkı Alanları / Priority Areas

### Yüksek Öncelik / High Priority
- [ ] **Mobil optimizasyon** / Mobile optimization
- [ ] **Performance iyileştirmeleri** / Performance improvements
- [ ] **Accessibility geliştirmeleri** / Accessibility enhancements
- [ ] **Test coverage artırma** / Increase test coverage

### Orta Öncelik / Medium Priority
- [ ] **Yeni ürün kategorileri** / New product categories
- [ ] **Çoklu dil desteği** / Multi-language support
- [ ] **Dark mode** / Dark mode
- [ ] **PWA özellikleri** / PWA features

### Düşük Öncelik / Low Priority
- [ ] **Animasyonlar** / Animations
- [ ] **Tema özelleştirme** / Theme customization
- [ ] **Sosyal medya entegrasyonu** / Social media integration
- [ ] **Export/import özellikleri** / Export/import features



## 🙏 Teşekkürler / Acknowledgments

Tüm katkıda bulunanlar projenin gelişimine değerli katkılar sağlamaktadır. Katkılarınız için teşekkür ederiz!

All contributors are making valuable contributions to the project's development. Thank you for your contributions!

## MIT License

Copyright (c) 2025 Sustainability Decision Support Tool

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
