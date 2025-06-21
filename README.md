# 🚀 Sustainability Decision Support Tool - Ambalaj Buddy Guide

**Ambalaj Buddy Guide**, sürdürülebilir ambalaj seçimi yapmak isteyen kullanıcılar için tasarlanmış modern bir çevresel analiz platformudur. Uygulama, kağıt ve polietilen ambalajların CO2 emisyonu ve su kullanımı etkilerini analiz eder, görselleştirir ve karar önerileri sunar.

---

🌐 **Canlı Web Sitesi:**  
👉 https://makloyim.manus.space  

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
## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

> **Uyarı:** Uygulama eğitim ve farkındalık amaçlıdır; kararlar profesyonel danışmanlık yerine geçmez.

---

## 🤝 Katkıda Bulunmak İster misiniz?

Pull request ve issue katkıları memnuniyetle karşılanır. Lütfen katkı için bir issue açarak değişikliklerinizi paylaşın.
