## AI Tahmin/Yardım Modülü Araştırma Özeti

Bu bölümde, kullanıcının belirttiği "100 ml'lik ürünü günde 1 kez kullanıyorum ve çok sık kullanıyorum bitince yeniliyorum karbon ayak izim ne kadar" gibi senaryoları destekleyecek bir yapay zeka tahmin/yardım modülü için yapılan araştırmaların özeti sunulmaktadır.

1. Yapay Zeka Modelleri ve Algoritmaları

Çevresel etki tahmini için genel yapay zeka modelleri ve algoritmaları üzerine yapılan araştırmalar, iklim değişikliği tahmini, enerji optimizasyonu ve atık yönetimi gibi geniş alanlarda yapay zekanın kullanıldığını göstermektedir. Ancak, doğrudan "ürün tüketim hızı ve çevresel etki" gibi mikro düzeyde tahminler için spesifik bir yapay zeka modeli veya algoritması bulunamamıştır. Bu tür bir senaryo için daha çok kural tabanlı sistemler veya basit regresyon modelleri daha uygun görünmektedir.

2. Kullanıcı Girdisine Dayalı Tahmin ve Öneri Sistemleri

Kullanıcı girdisine dayalı öneri sistemleri genellikle büyük veri analizi ve kişiselleştirilmiş deneyimler sunma üzerine odaklanmıştır. Bu sistemler, kullanıcının geçmiş davranışlarını ve tercihlerini analiz ederek önerilerde bulunur. Ancak, çevresel etki tahmini gibi nicel bir çıktı veren bir öneri sistemi için, kullanıcıdan alınan serbest metin girdisini anlamlandıracak ve bunu mevcut çevresel veri ile ilişkilendirecek bir mekanizma gereklidir.

3. Yaklaşım Önerisi

Kullanıcının talebini karşılamak için aşağıdaki yaklaşımlar benimsenecektir:

•
Kural Tabanlı Tahmin: Kullanıcının girdiği "100 ml'lik ürün", "günde 1 kez", "çok sık kullanıyorum" gibi ifadeleri parse ederek, ürünün tahmini bitiş süresini ve yıllık tüketim miktarını hesaplayan kural tabanlı bir sistem geliştirilecektir. Örneğin, 100 ml'lik bir ürünün günde 1 ml kullanıldığı varsayımıyla 100 günde biteceği gibi basit bir hesaplama yapılabilir. "Çok sık kullanıyorum" gibi ifadeler için varsayılan bir kullanım miktarı atanabilir veya kullanıcıdan daha spesifik bilgi istenebilir.

•
Mevcut Çevresel Veri Entegrasyonu: Hesaplanan yıllık tüketim miktarı, mevcut çevresel veri tabanımızdaki (ENVIRONMENTAL_DATA) ilgili ürün kategorisiyle eşleştirilerek CO2 emisyonu ve su kullanımı tahminleri yapılacaktır.

•
Serbest Metin Analizi: Kullanıcının serbest metin girişini (örneğin "100 mllik ürünü günde 1 kez kullanıyorum ve çok sık kullanıyorum bitince yeniliyorum") işlemek için basit anahtar kelime analizi veya düzenli ifadeler (regex) kullanılabilir. Bu, metinden ürün hacmi, kullanım sıklığı gibi bilgileri çıkarmaya yardımcı olacaktır.

•
AI Yardımcı Metin Üretimi: Tahmin sonuçlarına ek olarak, kullanıcıya çevresel etkiyi azaltmaya yönelik kişiselleştirilmiş tavsiyeler sunmak için bir AI yardımcı metin üretimi özelliği eklenebilir. Bu, kullanıcının girdiği senaryoya özel, bilgilendirici ve eyleme geçirilebilir öneriler sunacaktır.

4. Geliştirme Adımları

•
Kullanıcıdan serbest metin girişi alacak bir UI bileşeni oluşturulacak.

•
Serbest metni parse edecek ve ilgili parametreleri (ürün hacmi, kullanım sıklığı) çıkaracak bir fonksiyon geliştirilecek.

•
Bu parametreleri kullanarak ürünün tahmini bitiş süresini ve yıllık tüketim miktarını hesaplayan bir mantık eklenecek.

•
Hesaplanan değerler mevcut çevresel veri ile birleştirilerek CO2 ve su kullanımı tahminleri yapılacak.

•
Kullanıcıya özel AI destekli öneri metinleri oluşturulacak.

Bu yaklaşım, mevcut uygulamanın altyapısını kullanarak ve karmaşık bir yapay zeka modeli eğitme ihtiyacını ortadan kaldırarak hızlı ve etkili bir çözüm sunacaktır.

