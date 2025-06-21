import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Switch } from '@/components/ui/switch.jsx'
import { Leaf, Calculator, BarChart3, Droplets, Zap, PieChart, Settings, Globe } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts'
import './App.css'

// Çevresel veri değerleri (birim başına)
const ENVIRONMENTAL_DATA = {
  paper: {
    co2: 0.92, // kg CO2 eq per unit
    water: 10.5, // liters per unit
    name: 'Kağıt Ambalaj'
  },
  polyethylene: {
    co2: 1.8, // kg CO2 eq per unit
    water: 2.1, // liters per unit
    name: 'Polietilen Ambalaj'
  }
}

// Su kıtlığı skorları (bölgesel)
const WATER_SCARCITY_SCORES = {
  'tr-istanbul': { name: 'İstanbul', score: 2.1, description: 'Orta düzey su stresi' },
  'tr-ankara': { name: 'Ankara', score: 3.2, description: 'Yüksek su stresi' },
  'tr-izmir': { name: 'İzmir', score: 2.8, description: 'Orta-yüksek su stresi' },
  'tr-antalya': { name: 'Antalya', score: 3.8, description: 'Çok yüksek su stresi' },
  'tr-bursa': { name: 'Bursa', score: 1.9, description: 'Düşük-orta su stresi' },
  'tr-adana': { name: 'Adana', score: 3.5, description: 'Yüksek su stresi' },
  'tr-gaziantep': { name: 'Gaziantep', score: 4.2, description: 'Kritik su stresi' },
  'tr-konya': { name: 'Konya', score: 4.0, description: 'Çok yüksek su stresi' }
}

// Chart renkleri
const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b']

function App() {
  const [packagingType, setPackagingType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [priority, setPriority] = useState('')
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  
  // Gelişmiş özellikler
  const [useCustomData, setUseCustomData] = useState(false)
  const [customCO2, setCustomCO2] = useState('')
  const [customWater, setCustomWater] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const calculateEnvironmentalImpact = () => {
    if (!packagingType || !quantity) {
      alert('Lütfen tüm alanları doldurun!')
      return
    }

    // Özel veri kontrolü
    if (useCustomData && (!customCO2 || !customWater)) {
      alert('Lütfen özel çevresel veri değerlerini girin!')
      return
    }

    setIsCalculating(true)

    // Simüle edilmiş hesaplama gecikmesi
    setTimeout(() => {
      let data = ENVIRONMENTAL_DATA[packagingType]
      
      // Özel veri kullanılıyorsa değerleri güncelle
      if (useCustomData) {
        data = {
          ...data,
          co2: parseFloat(customCO2),
          water: parseFloat(customWater)
        }
      }

      const qty = parseInt(quantity)
      let totalCO2 = data.co2 * qty
      let totalWater = data.water * qty

      // Bölgesel su kıtlığı faktörü
      let waterScarcityFactor = 1
      let regionInfo = null
      if (selectedRegion) {
        regionInfo = WATER_SCARCITY_SCORES[selectedRegion]
        waterScarcityFactor = regionInfo.score / 2 // Su kıtlığı faktörü
        totalWater = totalWater * waterScarcityFactor
      }

      // Karşılaştırma için diğer ambalaj türünün verilerini al
      const otherType = packagingType === 'paper' ? 'polyethylene' : 'paper'
      let otherData = ENVIRONMENTAL_DATA[otherType]
      
      // Diğer tür için de özel veri varsa (varsayılan değerler kullan)
      const otherCO2 = otherData.co2 * qty
      let otherWater = otherData.water * qty
      if (selectedRegion) {
        otherWater = otherWater * waterScarcityFactor
      }

      // Yüzde farkları hesapla
      const co2Difference = ((totalCO2 - otherCO2) / otherCO2 * 100).toFixed(1)
      const waterDifference = ((totalWater - otherWater) / otherWater * 100).toFixed(1)

      // Öneri hesapla
      let recommendation = ''
      if (priority === 'co2') {
        recommendation = totalCO2 < otherCO2 ? 
          `${data.name} sera gazı emisyonları açısından daha iyi bir seçim.` :
          `${otherData.name} sera gazı emisyonları açısından daha iyi bir seçim.`
      } else if (priority === 'water') {
        recommendation = totalWater < otherWater ? 
          `${data.name} su tüketimi açısından daha iyi bir seçim.` :
          `${otherData.name} su tüketimi açısından daha iyi bir seçim.`
      } else {
        // Dengeli yaklaşım - her iki faktörü de değerlendir
        const co2Score = totalCO2 < otherCO2 ? 1 : 0
        const waterScore = totalWater < otherWater ? 1 : 0
        const totalScore = co2Score + waterScore

        if (totalScore === 2) {
          recommendation = `${data.name} hem sera gazı hem de su tüketimi açısından daha iyi.`
        } else if (totalScore === 1) {
          recommendation = `Her iki seçenek de farklı avantajlara sahip. Önceliğinize göre karar verin.`
        } else {
          recommendation = `${otherData.name} hem sera gazı hem de su tüketimi açısından daha iyi.`
        }
      }

      // Bölgesel öneri ekle
      if (selectedRegion && regionInfo) {
        recommendation += ` ${regionInfo.name} bölgesinde ${regionInfo.description} nedeniyle su kullanımı özellikle önemlidir.`
      }

      // Chart verileri hazırla
      const barChartData = [
        {
          name: data.name,
          'CO2 (kg)': totalCO2,
          'Su (L)': totalWater / 100, // Su değerini ölçeklendirme
        },
        {
          name: otherData.name,
          'CO2 (kg)': otherCO2,
          'Su (L)': otherWater / 100, // Su değerini ölçeklendirme
        }
      ]

      const pieChartData = [
        { name: `${data.name} CO2`, value: totalCO2, color: COLORS[0] },
        { name: `${otherData.name} CO2`, value: otherCO2, color: COLORS[1] },
        { name: `${data.name} Su`, value: totalWater, color: COLORS[2] },
        { name: `${otherData.name} Su`, value: otherWater, color: COLORS[3] }
      ]

      setResults({
        selected: {
          type: data.name,
          co2: totalCO2,
          water: totalWater
        },
        comparison: {
          type: otherData.name,
          co2: otherCO2,
          water: otherWater
        },
        differences: {
          co2: co2Difference,
          water: waterDifference
        },
        recommendation,
        quantity: qty,
        chartData: {
          bar: barChartData,
          pie: pieChartData
        },
        regionInfo,
        waterScarcityFactor: selectedRegion ? waterScarcityFactor : null,
        customData: useCustomData ? { co2: data.co2, water: data.water } : null
      })

      setIsCalculating(false)
    }, 1000)
  }

  const resetForm = () => {
    setPackagingType('')
    setQuantity('')
    setPriority('')
    setResults(null)
    setUseCustomData(false)
    setCustomCO2('')
    setCustomWater('')
    setSelectedRegion('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Sürdürülebilirlik Karar Destek Aracı
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ambalaj seçimlerinizin çevresel etkisini analiz edin ve sürdürülebilir kararlar alın. 
            CO2 emisyonları ve su kullanımını karşılaştırarak en uygun seçeneği belirleyin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Ambalaj Bilgileri
              </CardTitle>
              <CardDescription>
                Analiz etmek istediğiniz ambalaj türünü ve miktarını seçin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ambalaj Türü Seçimi */}
              <div className="space-y-2">
                <Label htmlFor="packaging-type">Ambalaj Türü</Label>
                <Select value={packagingType} onValueChange={setPackagingType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ambalaj türünü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paper">Kağıt Ambalaj</SelectItem>
                    <SelectItem value="polyethylene">Polietilen Ambalaj</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Miktar Girişi */}
              <div className="space-y-2">
                <Label htmlFor="quantity">Miktar (adet)</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Örn: 1000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                />
              </div>

              {/* Öncelik Seçimi */}
              <div className="space-y-3">
                <Label>Önceliğiniz nedir?</Label>
                <RadioGroup value={priority} onValueChange={setPriority}>
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

              {/* Gelişmiş Özellikler */}
              <div className="border-t pt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <Label className="font-medium">Gelişmiş Ayarlar</Label>
                </div>

                {/* Özel Veri Girişi */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="custom-data"
                      checked={useCustomData}
                      onCheckedChange={setUseCustomData}
                    />
                    <Label htmlFor="custom-data">Özel çevresel veri kullan</Label>
                  </div>
                  
                  {useCustomData && (
                    <div className="space-y-2 pl-6">
                      <div>
                        <Label htmlFor="custom-co2">CO2 Emisyonu (kg/adet)</Label>
                        <Input
                          id="custom-co2"
                          type="number"
                          step="0.01"
                          placeholder="Örn: 1.2"
                          value={customCO2}
                          onChange={(e) => setCustomCO2(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="custom-water">Su Kullanımı (L/adet)</Label>
                        <Input
                          id="custom-water"
                          type="number"
                          step="0.1"
                          placeholder="Örn: 8.5"
                          value={customWater}
                          onChange={(e) => setCustomWater(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Coğrafi Bölge Seçimi */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Coğrafi Bölge (Su Kıtlığı Analizi)
                  </Label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Bölge seçin (opsiyonel)" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(WATER_SCARCITY_SCORES).map(([key, region]) => (
                        <SelectItem key={key} value={key}>
                          {region.name} - {region.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={calculateEnvironmentalImpact} 
                  className="flex-1"
                  disabled={!packagingType || !quantity || isCalculating}
                >
                  {isCalculating ? 'Hesaplanıyor...' : 'Analiz Et'}
                </Button>
                {results && (
                  <Button 
                    onClick={resetForm} 
                    variant="outline"
                    className="flex-1"
                  >
                    Yeniden Başla
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Analiz Sonuçları
              </CardTitle>
              <CardDescription>
                Çevresel etki analizi ve görselleştirme
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!results ? (
                <div className="text-center py-12 text-gray-500">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Analiz sonuçları burada görünecek</p>
                  <p className="text-sm">Lütfen ambalaj bilgilerini girin ve "Analiz Et" butonuna tıklayın</p>
                </div>
              ) : (
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="summary">Özet</TabsTrigger>
                    <TabsTrigger value="charts">Grafikler</TabsTrigger>
                    <TabsTrigger value="comparison">Karşılaştırma</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="summary" className="space-y-4">
                    {/* Seçilen Ambalaj Sonuçları */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">
                        {results.selected.type} - {results.quantity.toLocaleString()} adet
                        {results.customData && (
                          <span className="text-sm font-normal text-blue-700 ml-2">(Özel veri)</span>
                        )}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-orange-600" />
                          <div>
                            <p className="text-sm text-gray-600">CO2 Emisyonu</p>
                            <p className="font-semibold">{results.selected.co2.toFixed(2)} kg</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">Su Kullanımı</p>
                            <p className="font-semibold">{results.selected.water.toFixed(2)} L</p>
                            {results.waterScarcityFactor && (
                              <p className="text-xs text-blue-600">
                                (Bölgesel faktör: x{results.waterScarcityFactor.toFixed(1)})
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bölgesel Bilgi */}
                    {results.regionInfo && (
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h3 className="font-semibold text-amber-900 mb-2">
                          Bölgesel Su Kıtlığı Analizi - {results.regionInfo.name}
                        </h3>
                        <p className="text-amber-800 text-sm">
                          {results.regionInfo.description} (Skor: {results.regionInfo.score}/5)
                        </p>
                        <p className="text-amber-700 text-xs mt-1">
                          Su kullanım değerleri bölgesel su kıtlığı faktörü ile çarpılmıştır.
                        </p>
                      </div>
                    )}

                    {/* Öneri */}
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold text-green-900 mb-2">Öneri</h3>
                      <p className="text-green-800">{results.recommendation}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="charts" className="space-y-6">
                    {/* Bar Chart */}
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Çevresel Etki Karşılaştırması
                      </h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={results.chartData.bar}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="CO2 (kg)" fill="#ef4444" />
                            <Bar dataKey="Su (L)" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-xs text-gray-500">
                        * Su değerleri görselleştirme için 100'e bölünmüştür
                      </p>
                    </div>

                    {/* Pie Chart */}
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <PieChart className="h-4 w-4" />
                        Çevresel Etki Dağılımı
                      </h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Tooltip />
                            <RechartsPieChart.Pie
                              data={results.chartData.pie}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value.toFixed(1)}`}
                            >
                              {results.chartData.pie.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </RechartsPieChart.Pie>
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="comparison" className="space-y-4">
                    {/* Karşılaştırma */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Karşılaştırma: {results.comparison.type}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-orange-600" />
                          <div>
                            <p className="text-sm text-gray-600">CO2 Emisyonu</p>
                            <p className="font-semibold">{results.comparison.co2.toFixed(2)} kg</p>
                            <p className="text-xs text-gray-500">
                              ({results.differences.co2 > 0 ? '+' : ''}{results.differences.co2}%)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">Su Kullanımı</p>
                            <p className="font-semibold">{results.comparison.water.toFixed(2)} L</p>
                            <p className="text-xs text-gray-500">
                              ({results.differences.water > 0 ? '+' : ''}{results.differences.water}%)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detaylı Analiz */}
                    <div className="space-y-3">
                      <h3 className="font-semibold">Detaylı Analiz</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-900">CO2 Emisyonu</h4>
                          <p className="text-sm text-orange-800 mt-1">
                            {results.selected.co2 < results.comparison.co2 ? 
                              `${results.selected.type} %${Math.abs(results.differences.co2)} daha az CO2 üretir` :
                              `${results.comparison.type} %${Math.abs(results.differences.co2)} daha az CO2 üretir`
                            }
                          </p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900">Su Kullanımı</h4>
                          <p className="text-sm text-blue-800 mt-1">
                            {results.selected.water < results.comparison.water ? 
                              `${results.selected.type} %${Math.abs(results.differences.water)} daha az su kullanır` :
                              `${results.comparison.type} %${Math.abs(results.differences.water)} daha az su kullanır`
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Bu araç, ambalaj seçimlerinizde çevresel faktörleri değerlendirmenize yardımcı olur.</p>
          <p className="mt-1">Veriler endüstri ortalamaları temel alınarak hesaplanmıştır.</p>
        </div>
      </div>
    </div>
  )
}

export default App

