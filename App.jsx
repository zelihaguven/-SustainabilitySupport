import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Switch } from './components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Textarea } from './components/ui/textarea'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Leaf, Droplets, Sparkles, Brain, MessageSquare } from 'lucide-react'
import './App.css'

// Çevresel veri değerleri (kg CO2/adet ve L su/adet)
const ENVIRONMENTAL_DATA = {
  'paper': { co2: 0.9, water: 10, category: 'Genel Ambalaj' },
  'polyethylene': { co2: 1.8, water: 3.5, category: 'Genel Ambalaj' },
  'glass': { co2: 1.2, water: 2.8, category: 'Genel Ambalaj' },
  'aluminum': { co2: 16.1, water: 155, category: 'Metal Ambalaj' },
  'steel': { co2: 1.65, water: 25, category: 'Metal Ambalaj' },
  'pet_bottle': { co2: 2.25, water: 3.5, category: 'İçecek Ambalajı' },
  'cosmetic_plastic': { co2: 2.8, water: 8.5, category: 'Kozmetik Ambalajı' },
  'cosmetic_glass': { co2: 1.5, water: 4.2, category: 'Kozmetik Ambalajı' },
  'plastic_tube': { co2: 2.2, water: 6.8, category: 'Tüp Ambalajı' },
  'aluminum_tube': { co2: 8.5, water: 45, category: 'Tüp Ambalajı' }
}

// Tüketim faktörleri
const CONSUMPTION_FACTORS = {
  'daily': { factor: 365, label: 'Günlük - Her gün kullanıyorum' },
  'weekly': { factor: 52, label: 'Haftalık - Haftada bir kullanıyorum' },
  'monthly': { factor: 12, label: 'Aylık - Ayda bir kullanıyorum' },
  'seasonal': { factor: 4, label: 'Mevsimlik - 3 ayda bir kullanıyorum' },
  'yearly': { factor: 1, label: 'Yıllık - Yılda bir kullanıyorum' }
}

// Bölgesel su kıtlığı faktörleri
const REGIONAL_FACTORS = {
  'istanbul': { factor: 1.2, label: 'İstanbul (Orta su stresi)' },
  'ankara': { factor: 1.5, label: 'Ankara (Yüksek su stresi)' },
  'izmir': { factor: 1.3, label: 'İzmir (Orta-yüksek su stresi)' },
  'antalya': { factor: 1.8, label: 'Antalya (Çok yüksek su stresi)' },
  'bursa': { factor: 1.1, label: 'Bursa (Düşük-orta su stresi)' },
  'adana': { factor: 1.6, label: 'Adana (Yüksek su stresi)' },
  'gaziantep': { factor: 1.7, label: 'Gaziantep (Çok yüksek su stresi)' },
  'konya': { factor: 1.4, label: 'Konya (Yüksek su stresi)' }
}

function App() {
  const [productType, setProductType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [frequency, setFrequency] = useState('')
  const [priority, setPriority] = useState('')
  const [useCustomData, setUseCustomData] = useState(false)
  const [customCO2, setCustomCO2] = useState('')
  const [customWater, setCustomWater] = useState('')
  const [region, setRegion] = useState('')
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  
  // AI Tahmin/Yardım state'leri
  const [aiInput, setAiInput] = useState('')
  const [aiResults, setAiResults] = useState(null)
  const [isAiProcessing, setIsAiProcessing] = useState(false)

  const productOptions = [
    { value: 'paper', label: 'Kağıt Ambalaj', category: 'Genel Ambalaj' },
    { value: 'polyethylene', label: 'Polietilen Ambalaj', category: 'Genel Ambalaj' },
    { value: 'glass', label: 'Cam Ambalaj', category: 'Genel Ambalaj' },
    { value: 'aluminum', label: 'Alüminyum Ambalaj', category: 'Metal Ambalaj' },
    { value: 'steel', label: 'Çelik Ambalaj', category: 'Metal Ambalaj' },
    { value: 'pet_bottle', label: 'PET Su Şişesi', category: 'İçecek Ambalajı' },
    { value: 'cosmetic_plastic', label: 'Makyaj Malzemesi (Plastik)', category: 'Kozmetik Ambalajı' },
    { value: 'cosmetic_glass', label: 'Makyaj Malzemesi (Cam)', category: 'Kozmetik Ambalajı' },
    { value: 'plastic_tube', label: 'Plastik Tüp', category: 'Tüp Ambalajı' },
    { value: 'aluminum_tube', label: 'Alüminyum Tüp', category: 'Tüp Ambalajı' }
  ]

  const groupedProducts = productOptions.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})

  const calculateEnvironmentalImpact = () => {
    if (!productType || !quantity || !frequency || !priority) {
      return
    }

    setIsCalculating(true)
    
    setTimeout(() => {
      const envData = useCustomData ? 
        { co2: parseFloat(customCO2) || 0, water: parseFloat(customWater) || 0 } : 
        ENVIRONMENTAL_DATA[productType]
      
      const consumptionFactor = CONSUMPTION_FACTORS[frequency].factor
      const yearlyQuantity = parseInt(quantity) * consumptionFactor
      
      let totalCO2 = envData.co2 * yearlyQuantity
      let totalWater = envData.water * yearlyQuantity
      
      // Bölgesel faktör uygulama
      if (region) {
        totalWater *= REGIONAL_FACTORS[region].factor
      }
      
      const selectedProduct = productOptions.find(p => p.value === productType)
      const selectedFrequency = CONSUMPTION_FACTORS[frequency]
      
      let recommendation = ''
      if (priority === 'co2') {
        recommendation = productType === 'paper' ? 
          'Kağıt ambalaj CO2 açısından iyi bir seçim. Devam edin!' :
          'CO2 emisyonlarını azaltmak için kağıt ambalaj tercih etmeyi düşünün.'
      } else if (priority === 'water') {
        recommendation = productType === 'polyethylene' || productType === 'pet_bottle' ? 
          'Bu ürün su tüketimi açısından daha iyi bir seçim.' :
          'Su tüketimini azaltmak için polietilen ambalaj tercih etmeyi düşünün.'
      } else {
        recommendation = 'Her iki seçenek de farklı avantajlara sahip. Önceliğinize göre karar verin.'
      }

      if (frequency === 'daily' || frequency === 'weekly') {
        recommendation += ` ${selectedFrequency.label.toLowerCase()} ile yıllık ${yearlyQuantity} adet tüketim öngörülmektedir.`
      }

      setResults({
        productName: selectedProduct.label,
        category: selectedProduct.category,
        frequency: selectedFrequency.label,
        yearlyQuantity,
        totalCO2: totalCO2.toFixed(2),
        totalWater: totalWater.toFixed(2),
        recommendation,
        priority,
        region: region ? REGIONAL_FACTORS[region].label : null
      })
      setIsCalculating(false)
    }, 1000)
  }

  // AI Tahmin/Yardım fonksiyonu
  const processAiInput = () => {
    if (!aiInput.trim()) return
    
    setIsAiProcessing(true)
    
    setTimeout(() => {
      // Basit metin analizi
      const input = aiInput.toLowerCase()
      
      // Hacim/miktar çıkarma
      const volumeMatch = input.match(/(\d+)\s*(ml|litre|l|gram|g|adet)/i)
      const volume = volumeMatch ? parseInt(volumeMatch[1]) : 100
      const unit = volumeMatch ? volumeMatch[2] : 'ml'
      
      // Kullanım sıklığı çıkarma
      let dailyUsage = 1
      let daysToFinish = volume
      
      if (input.includes('günde') || input.includes('her gün')) {
        const dailyMatch = input.match(/günde\s*(\d+)/i)
        dailyUsage = dailyMatch ? parseInt(dailyMatch[1]) : 1
        daysToFinish = Math.ceil(volume / dailyUsage)
      } else if (input.includes('çok sık') || input.includes('sık sık')) {
        dailyUsage = Math.max(1, Math.ceil(volume / 30)) // 30 günde bitecek şekilde
        daysToFinish = Math.ceil(volume / dailyUsage)
      } else if (input.includes('az') || input.includes('nadiren')) {
        dailyUsage = Math.max(0.5, Math.ceil(volume / 180)) // 180 günde bitecek şekilde
        daysToFinish = Math.ceil(volume / dailyUsage)
      }
      
      const yearlyConsumption = Math.ceil(365 / daysToFinish)
      
      // Ürün türü tahmini
      let estimatedProduct = 'cosmetic_plastic'
      let productCategory = 'Kozmetik Ambalajı'
      
      if (input.includes('şişe') || input.includes('su') || input.includes('içecek')) {
        estimatedProduct = 'pet_bottle'
        productCategory = 'İçecek Ambalajı'
      } else if (input.includes('tüp') || input.includes('krem') || input.includes('diş macunu')) {
        estimatedProduct = 'plastic_tube'
        productCategory = 'Tüp Ambalajı'
      } else if (input.includes('cam') || input.includes('parfüm')) {
        estimatedProduct = 'cosmetic_glass'
        productCategory = 'Kozmetik Ambalajı'
      }
      
      // Çevresel etki hesaplama
      const envData = ENVIRONMENTAL_DATA[estimatedProduct]
      const totalCO2 = (envData.co2 * yearlyConsumption).toFixed(2)
      const totalWater = (envData.water * yearlyConsumption).toFixed(2)
      
      // AI önerileri
      const suggestions = [
        `${volume}${unit} hacimli ürününüzü günde ${dailyUsage} ${unit === 'ml' || unit === 'l' ? 'ml' : 'gram'} kullanarak yaklaşık ${daysToFinish} günde bitiriyorsunuz.`,
        `Bu kullanım hızıyla yılda ${yearlyConsumption} adet ürün tüketmeniz bekleniyor.`,
        `Tahmini yıllık karbon ayak iziniz: ${totalCO2} kg CO2`,
        `Tahmini yıllık su kullanımınız: ${totalWater} litre`,
        yearlyConsumption > 12 ? 'Kullanım miktarınızı azaltmayı düşünebilirsiniz.' : 'Kullanım miktarınız makul seviyede.',
        'Daha sürdürülebilir alternatifler için ürün kategorisini değiştirmeyi düşünün.',
        'Bölgesel su kıtlığı faktörlerini de göz önünde bulundurarak seçim yapın.'
      ]
      
      setAiResults({
        originalInput: aiInput,
        volume,
        unit,
        dailyUsage,
        daysToFinish,
        yearlyConsumption,
        estimatedProduct: productOptions.find(p => p.value === estimatedProduct)?.label || 'Bilinmeyen',
        productCategory,
        totalCO2,
        totalWater,
        suggestions
      })
      
      setIsAiProcessing(false)
    }, 1500)
  }

  const resetForm = () => {
    setProductType('')
    setQuantity('')
    setFrequency('')
    setPriority('')
    setUseCustomData(false)
    setCustomCO2('')
    setCustomWater('')
    setRegion('')
    setResults(null)
    setAiInput('')
    setAiResults(null)
  }

  const chartData = results ? [
    {
      name: 'CO2 Emisyonu',
      value: parseFloat(results.totalCO2),
      color: '#ef4444'
    },
    {
      name: 'Su Kullanımı',
      value: parseFloat(results.totalWater),
      color: '#3b82f6'
    }
  ] : []

  const pieData = results ? [
    { name: 'CO2 (kg)', value: parseFloat(results.totalCO2), fill: '#ef4444' },
    { name: 'Su (L)', value: parseFloat(results.totalWater), fill: '#3b82f6' }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Leaf className="text-green-600" />
            Sürdürülebilirlik Karar Destek Aracı
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ambalaj seçimlerinizin çevresel etkisini analiz edin ve sürdürülebilir kararlar alın.
            CO2 emisyonları ve su kullanımını karşılaştırarak en uygun seçeneği belirleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sol Panel - Geleneksel Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="text-blue-600" />
                Ürün Bilgileri
              </CardTitle>
              <CardDescription>
                Analiz etmek istediğiniz ürün ve kullanım bilgilerini girin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="product-type">Ambalaj/Ürün Türü</Label>
                <Select value={productType} onValueChange={setProductType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ürün türünü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(groupedProducts).map(([category, products]) => (
                      <div key={category}>
                        <div className="px-2 py-1 text-sm font-semibold text-gray-500 bg-gray-100">
                          {category}
                        </div>
                        {products.map((product) => (
                          <SelectItem key={product.value} value={product.value}>
                            {product.label}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Miktar (adet)</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Örn: 1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="frequency">Ne sıklıkla kullanıyorsunuz?</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kullanım sıklığını seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(CONSUMPTION_FACTORS).map(([key, data]) => (
                      <SelectItem key={key} value={key}>
                        {data.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Önceliğiniz nedir?</Label>
                <RadioGroup value={priority} onValueChange={setPriority} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="co2" id="co2" />
                    <Label htmlFor="co2">Sera gazı emisyonlarını azaltmak</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="water" id="water" />
                    <Label htmlFor="water">Su tüketimini azaltmak</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <Label htmlFor="balanced">Dengeli yaklaşım</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Gelişmiş Ayarlar</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Switch
                    id="custom-data"
                    checked={useCustomData}
                    onCheckedChange={setUseCustomData}
                  />
                  <Label htmlFor="custom-data">Özel çevresel veri kullan</Label>
                </div>
              </div>

              {useCustomData && (
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label htmlFor="custom-co2">CO2 (kg/adet)</Label>
                    <Input
                      id="custom-co2"
                      type="number"
                      step="0.1"
                      placeholder="Örn: 1.5"
                      value={customCO2}
                      onChange={(e) => setCustomCO2(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="custom-water">Su (L/adet)</Label>
                    <Input
                      id="custom-water"
                      type="number"
                      step="0.1"
                      placeholder="Örn: 5.0"
                      value={customWater}
                      onChange={(e) => setCustomWater(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="region">Coğrafi Bölge (Su Kıtlığı Analizi)</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Bölge seçin (opsiyonel)" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(REGIONAL_FACTORS).map(([key, data]) => (
                      <SelectItem key={key} value={key}>
                        {data.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={calculateEnvironmentalImpact} 
                  disabled={!productType || !quantity || !frequency || !priority || isCalculating}
                  className="flex-1"
                >
                  {isCalculating ? 'Hesaplanıyor...' : 'Analiz Et'}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Yeniden Başla
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sağ Panel - AI Tahmin/Yardım */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="text-purple-600" />
                AI Tahmin & Yardım
              </CardTitle>
              <CardDescription>
                Kendi kullanım senaryonuzu yazın, AI size özel tahmin ve öneriler sunsun
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ai-input">Kullanım Senaryonuzu Anlatın</Label>
                <Textarea
                  id="ai-input"
                  placeholder="Örn: 100 ml'lik ürünü günde 1 kez kullanıyorum ve çok sık kullanıyorum bitince yeniliyorum karbon ayak izim ne kadar?"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button 
                onClick={processAiInput} 
                disabled={!aiInput.trim() || isAiProcessing}
                className="w-full flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {isAiProcessing ? 'AI Analiz Ediyor...' : 'AI Analizi Başlat'}
              </Button>

              {aiResults && (
                <div className="space-y-4 p-4 bg-purple-50 rounded-lg border">
                  <div className="flex items-center gap-2 text-purple-700 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    AI Analiz Sonuçları
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Ürün Hacmi:</span>
                      <p>{aiResults.volume} {aiResults.unit}</p>
                    </div>
                    <div>
                      <span className="font-medium">Günlük Kullanım:</span>
                      <p>{aiResults.dailyUsage} {aiResults.unit === 'ml' || aiResults.unit === 'l' ? 'ml' : 'gram'}</p>
                    </div>
                    <div>
                      <span className="font-medium">Bitiş Süresi:</span>
                      <p>{aiResults.daysToFinish} gün</p>
                    </div>
                    <div>
                      <span className="font-medium">Yıllık Tüketim:</span>
                      <p>{aiResults.yearlyConsumption} adet</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-3 bg-white rounded border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{aiResults.totalCO2} kg</div>
                      <div className="text-sm text-gray-600">Yıllık CO2 Emisyonu</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{aiResults.totalWater} L</div>
                      <div className="text-sm text-gray-600">Yıllık Su Kullanımı</div>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-purple-700">AI Önerileri:</span>
                    <ul className="mt-2 space-y-1 text-sm">
                      {aiResults.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sonuçlar Bölümü */}
        {results && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="text-green-600" />
                Analiz Sonuçları
              </CardTitle>
              <CardDescription>
                Çevresel etki analizi ve görselleştirme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="summary">Özet</TabsTrigger>
                  <TabsTrigger value="charts">Grafikler</TabsTrigger>
                  <TabsTrigger value="comparison">Karşılaştırma</TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        {results.productName} - {results.yearlyQuantity} adet/yıl
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Kategori: {results.category} | Kullanım: {results.frequency}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 text-red-700 mb-2">
                            <span className="text-2xl">🔥</span>
                            <span className="font-medium">Yıllık CO2 Emisyonu</span>
                          </div>
                          <div className="text-2xl font-bold text-red-600">{results.totalCO2} kg</div>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 text-blue-700 mb-2">
                            <Droplets className="w-6 h-6" />
                            <span className="font-medium">Yıllık Su Kullanımı</span>
                          </div>
                          <div className="text-2xl font-bold text-blue-600">{results.totalWater} L</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 text-purple-700 mb-2">
                          <span className="text-xl">⏱️</span>
                          <span className="font-medium">Tüketim Analizi</span>
                        </div>
                        <p className="text-sm text-purple-600">
                          {results.frequency.split(' - ')[0]} kullanım ile {quantity} adet ürün, yılda toplam {results.yearlyQuantity} adet tüketim anlamına gelir.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 text-green-700 mb-2">
                          <span className="text-xl">💡</span>
                          <span className="font-medium">Öneri</span>
                        </div>
                        <p className="text-sm text-green-600">{results.recommendation}</p>
                      </div>
                      
                      {results.region && (
                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="flex items-center gap-2 text-orange-700 mb-2">
                            <span className="text-xl">🌍</span>
                            <span className="font-medium">Bölgesel Faktör</span>
                          </div>
                          <p className="text-sm text-orange-600">
                            {results.region} için su kullanımı hesaplamalara dahil edilmiştir.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="charts" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Çevresel Etki Karşılaştırması</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Etki Dağılımı</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="comparison" className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Detaylı Analiz</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Ürün Kategorisi:</span>
                        <p>{results.category}</p>
                      </div>
                      <div>
                        <span className="font-medium">Kullanım Sıklığı:</span>
                        <p>{results.frequency}</p>
                      </div>
                      <div>
                        <span className="font-medium">Yıllık Tüketim:</span>
                        <p>{results.yearlyQuantity} adet</p>
                      </div>
                      <div>
                        <span className="font-medium">Birim CO2 Emisyonu:</span>
                        <p>{(parseFloat(results.totalCO2) / results.yearlyQuantity).toFixed(3)} kg/adet</p>
                      </div>
                      <div>
                        <span className="font-medium">Birim Su Kullanımı:</span>
                        <p>{(parseFloat(results.totalWater) / results.yearlyQuantity).toFixed(2)} L/adet</p>
                      </div>
                      <div>
                        <span className="font-medium">Öncelik:</span>
                        <p>{priority === 'co2' ? 'CO2 Azaltma' : priority === 'water' ? 'Su Tasarrufu' : 'Dengeli Yaklaşım'}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-8">
        Bu araç, ürün seçimlerinizde çevresel faktörleri değerlendirmenize yardımcı olur.
        Veriler endüstri ortalamaları ve araştırma sonuçları temel alınarak hesaplanmıştır.
      </footer>
    </div>
  )
}

export default App


