# 🚀 Sustainability Decision Support Tool - Ambalaj Buddy Guide

**Ambalaj Buddy Guide**, sürdürülebilir ambalaj seçimi yapmak isteyen kullanıcılar için tasarlanmış modern bir çevresel analiz platformudur. Uygulama, kağıt ve polietilen ambalajların CO2 emisyonu ve su kullanımı etkilerini analiz eder, görselleştirir ve karar önerileri sunar.

---

🌐 **Canlı Web Sitesi:**  
👉 https://devclxdi.manus.space

---

## 🎯 Projenin Amacı

**Ambalaj Buddy Guide**, üreticilerin ve çevre bilincine sahip kullanıcıların kağıt ve polietilen ambalaj türlerini çevresel etki açısından karşılaştırabilmesini, çevre dostu seçimler yapabilmesini ve bölgesel su kıtlığı gibi önemli sürdürülebilirlik faktörlerini analiz edebilmesini sağlar.

---

## ✨ Öne Çıkan Özellikler

🌱 **Ambalaj Analizi**  
Kağıt ve polietilen ambalaj türleri için CO2 emisyonu ve su kullanımı karşılaştırması.

📊 **Çevresel Hesaplama**  
Üretim miktarına göre toplam sera gazı emisyonu ve su tüketimi otomatik hesaplama.  
Örnek: *"1000 adet üretimde toplam çevresel etkim ne olur?"*

📈 **İnteraktif Grafikler**  
Bar chart ve pie chart kullanarak kolay analiz için görselleştirme (Chart.js / Recharts).

❤️ **Karar Desteği**  
Kullanıcının önceliğine göre öneri:  
- Sera gazı azaltımı önceliği → Kağıt ambalaj önerisi  
- Su tasarrufu önceliği → Polietilen ambalaj önerisi  

💧 **Bölgesel Su Analizi**  
Türkiye'nin 8 şehri (İstanbul, Ankara, İzmir, Antalya, Bursa, Adana, Gaziantep, Erzurum) için su kıtlığı faktörleriyle özel analiz.

---

## 🌟 Gelişmiş Özellikler

- 🌿 Kullanıcı tanımlı çevresel veri girişi  
- 📌 Coğrafi analiz ve zaman serisi izleme (dashboard)  
- 👥 Kullanıcı hesapları ve proje kaydetme  
- 🔔 Bildirim ve uyarı sistemleri (ör. belirli CO2 eşiği aşıldığında)

---

## 📊 Varsayılan Çevresel Veriler

| Ambalaj Türü | CO2 Emisyonu (10g) | Su Kullanımı (10g) |
|--------------|-------------------|-------------------|
| Kağıt        | 0.005 kg CO2 eq    | 0.020 L           |
| Polietilen   | 0.015 kg CO2 eq    | 0.008 L           |

> **Not:** Bölgesel su kıtlığı katsayıları JSON dosyasında yer alır ve analizlere uygulanır.

---

## 📌 Nasıl Kullanılır?

1️⃣ Web uygulamasına giriş yapın.  
2️⃣ Ambalaj türünü ve üretim miktarını seçin.  
3️⃣ Hesaplama sonucunu ve grafiklerini inceleyin.  
4️⃣ Çevresel önceliklerinize göre öneriyi değerlendirin.  
5️⃣ (Opsiyonel) Projenizi kaydedin ve karşılaştırma yapın.

---

## 📈 Gelecek Geliştirmeler

✅ Kısa Vadeli: Bölgesel kıtlık analizlerinin genişletilmesi, yeni ambalaj türleri  
⚡ Orta Vadeli: Gerçek zamanlı API'lerden çevresel veri çekme, kullanıcı hesapları  
🌟 Uzun Vadeli: Mobil uygulama, gelişmiş AI tabanlı sürdürülebilirlik öneri sistemi  

---
## 🛠️ Teknik Altyapı

### Frontend
- React 18 / TypeScript (veya Vue / Svelte opsiyonu)
- Tailwind CSS + Shadcn/UI
- Chart.js / Recharts ile grafik desteği
- Responsive tasarım: masaüstü, tablet, mobil uyumlu

### Backend (Opsiyonel)
- Node.js / Flask / Firebase
- Bölgesel veri ve kullanıcı projeleri için veri kaydı
- API desteği ve CORS uyumlu yapı

### Deployment
- Netlify / Vercel / Firebase Hosting  
- CDN, SSL, 7/24 erişim, optimize sayfa yükleme (~2 saniye)

 ---

 ## 🧠 Yeni AI Tahmin & Yardım Özellikleri

### ✨ Serbest Metin Analizi

Doğal Dil İşleme: "100 ml'lik ürünü günde 1 kez kullanıyorum" gibi cümleleri anlayabilir
Akıllı Parsing: Hacim, kullanım sıklığı ve ürün türünü otomatik tespit eder
Esnek Girdi: Kullanıcılar kendi kelimelerini kullanabilir

### 📊 Otomatik Hesaplama

Bitiş Süresi Tahmini: Ürünün ne kadar sürede biteceğini hesaplar
Yıllık Tüketim: Kullanım hızına göre yıllık kaç adet tüketeceğinizi tahmin eder
Çevresel Etki: CO2 ve su kullanımını otomatik hesaplar

---
### 🎯 Test Sonuçları

Test 1: "100 ml'lik ürünü günde 1 kez kullanıyorum"

✅ Hacim: 100 ml (doğru tespit )
✅ Günlük kullanım: 1 ml
✅ Bitiş süresi: 100 gün
✅ Yıllık tüketim: 4 adet
✅ CO2: 11.20 kg/yıl, Su: 34.00 L/yıl
Test 2: "500 ml şampuan şişesi haftalık kullanıyorum"

✅ Hacim: 500 ml (doğru tespit)
✅ Günlük kullanım: 1 ml
✅ Bitiş süresi: 500 gün
✅ Yıllık tüketim: 1 adet
✅ CO2: 2.25 kg/yıl, Su: 3.50 L/yıl

---
## 🚀 AI Özellik Detayları

### 🔍 Metin Analizi Yetenekleri

Hacim çıkarma (ml, litre, gram, adet)
Kullanım sıklığı tespiti (günlük, haftalık, "çok sık", "az")
Ürün türü tahmini (şişe, tüp, krem, şampuan)

### 💡 Akıllı Öneriler

Kişiselleştirilmiş kullanım analizi
Çevresel etki değerlendirmesi
Sürdürülebilirlik tavsiyeleri
Bölgesel faktör önerileri

### 🎨 Kullanıcı Deneyimi

İki panel sistemi (Geleneksel Form + AI)
Gerçek zamanlı analiz
Görsel sonuç sunumu
Anlaşılır AI önerileri

### 🌟 Tam Özellik Listesi

10 Farklı Ürün Kategorisi (Kağıt, Plastik, Cam, Metal, vb.)
5 Tüketim Hızı Seçeneği (Günlük, Haftalık, Aylık, vb.)
Bölgesel Su Kıtlığı Analizi (8 Türkiye şehri)
İnteraktif Grafikler (Bar chart, Pie chart)
AI Tahmin & Yardım (Serbest metin analizi)
Özel Veri Girişi (Kullanıcı tanımlı değerler)
Akıllı Öneriler (Öncelik bazlı tavsiyeler)

---
## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

> **Uyarı:** Uygulama eğitim ve farkındalık amaçlıdır; kararlar profesyonel danışmanlık yerine geçmez.

---

## 🤝 Katkıda Bulunmak İster misiniz?

Pull request ve issue katkıları memnuniyetle karşılanır. Lütfen katkı için bir issue açarak değişikliklerinizi paylaşın.
