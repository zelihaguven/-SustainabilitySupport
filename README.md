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
git clone https://github.com/yourusername/sustainability-decision-tool.git
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
git clone https://github.com/yourusername/sustainability-decision-tool.git
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
