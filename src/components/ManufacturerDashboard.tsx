import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Progress } from './ui/progress'
import { 
  Building2, 
  QrCode, 
  Scan, 
  TestTube, 
  Package, 
  Upload,
  CheckCircle,
  Clock,
  Plus,
  Link,
  FileText,
  Beaker,
  Droplets,
  Zap,
  ShoppingCart,
  Eye,
  ArrowLeft
} from 'lucide-react'

interface ManufacturerDashboardProps {
  onNavigate: (screen: string) => void
  onBack: () => void
}

export function ManufacturerDashboard({ onNavigate, onBack }: ManufacturerDashboardProps) {
  const [activeTab, setActiveTab] = useState('inventory')
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    productName: '',
    batchNumber: '',
    formula: '',
    processMethod: '',
    processTime: '',
    temperature: '',
    notes: ''
  })

  // Mock data for received raw materials
  const rawMaterials = [
    {
      id: 'RM-001',
      qrCode: 'AYU-ASH-2024-001',
      herbName: 'Ashwagandha',
      farmer: 'Rajesh Kumar',
      quantity: '500 kg',
      receivedDate: '2024-11-20',
      status: 'received',
      location: 'Warehouse A-1'
    },
    {
      id: 'RM-002',
      qrCode: 'AYU-TUR-2024-003',
      herbName: 'Turmeric',
      farmer: 'Priya Devi',
      quantity: '200 kg',
      receivedDate: '2024-11-19',
      status: 'tested',
      location: 'Warehouse A-2'
    },
    {
      id: 'RM-003',
      qrCode: 'AYU-BRA-2024-005',
      herbName: 'Brahmi',
      farmer: 'Suresh Patil',
      quantity: '100 kg',
      receivedDate: '2024-11-18',
      status: 'processing',
      location: 'Production Line 1'
    }
  ]

  // Mock data for production batches
  const productionBatches = [
    {
      id: 'BATCH-ASH-001',
      productName: 'Ashwagandha Premium Powder',
      formula: 'Pure Ashwagandha Root Powder',
      ingredients: ['AYU-ASH-2024-001'],
      status: 'processing',
      progress: 65,
      startDate: '2024-11-21',
      expectedCompletion: '2024-11-25'
    },
    {
      id: 'BATCH-MIX-002',
      productName: 'Immunity Blend Capsules',
      formula: 'Ashwagandha 40% + Turmeric 30% + Brahmi 30%',
      ingredients: ['AYU-ASH-2024-001', 'AYU-TUR-2024-003', 'AYU-BRA-2024-005'],
      status: 'testing',
      progress: 85,
      startDate: '2024-11-18',
      expectedCompletion: '2024-11-22'
    }
  ]

  // Mock lab tests
  const labTests = [
    {
      id: 'TEST-001',
      material: 'AYU-ASH-2024-001',
      testType: 'Purity Analysis',
      status: 'completed',
      result: 'Pass',
      withanolides: '2.8%',
      heavyMetals: 'Below detection limit',
      pesticides: 'Not detected'
    },
    {
      id: 'TEST-002',
      material: 'BATCH-MIX-002',
      testType: 'Final Product Analysis',
      status: 'pending',
      result: '-',
      expectedDate: '2024-11-23'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'tested': return 'bg-green-100 text-green-700 border-green-200'
      case 'processing': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'pending': return 'bg-gray-100 text-gray-700 border-gray-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'received': return <Package className="w-3 h-3" />
      case 'tested': return <CheckCircle className="w-3 h-3" />
      case 'processing': return <Clock className="w-3 h-3" />
      case 'completed': return <CheckCircle className="w-3 h-3" />
      case 'pending': return <Clock className="w-3 h-3" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Back Button */}
      <div className="pt-8 px-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-blue-700 hover:text-blue-800 hover:bg-blue-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Header */}
      <div className="text-center pt-4 pb-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl text-blue-800 mb-1">Manufacturer Portal</h1>
        <p className="text-sm text-blue-600">AyurPure Processing Center</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/70">
            <TabsTrigger value="inventory" className="text-xs">Inventory</TabsTrigger>
            <TabsTrigger value="production" className="text-xs">Production</TabsTrigger>
            <TabsTrigger value="testing" className="text-xs">Testing</TabsTrigger>
            <TabsTrigger value="products" className="text-xs">Products</TabsTrigger>
          </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-blue-800">Raw Materials</h3>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Scan className="w-4 h-4 mr-2" />
                Scan QR
              </Button>
            </div>

            {rawMaterials.map((material) => (
              <Card key={material.id} className="bg-white/80 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-blue-900">{material.herbName}</h4>
                      <p className="text-sm text-blue-600">From: {material.farmer}</p>
                      <p className="text-xs text-gray-500">Received: {material.receivedDate}</p>
                    </div>
                    <Badge className={`${getStatusColor(material.status)} flex items-center gap-1`}>
                      {getStatusIcon(material.status)}
                      {material.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide">Quantity</p>
                      <p className="font-medium">{material.quantity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide">Location</p>
                      <p className="font-medium">{material.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-mono text-blue-800">{material.qrCode}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      {material.status === 'received' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <TestTube className="w-3 h-3 mr-1" />
                          Test
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Production Tab */}
          <TabsContent value="production" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-blue-800">Production Batches</h3>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Batch
              </Button>
            </div>

            {productionBatches.map((batch) => (
              <Card key={batch.id} className="bg-white/80 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-blue-900">{batch.productName}</h4>
                      <p className="text-sm text-blue-600">{batch.formula}</p>
                      <p className="text-xs text-gray-500">Started: {batch.startDate}</p>
                    </div>
                    <Badge className={`${getStatusColor(batch.status)} flex items-center gap-1`}>
                      {getStatusIcon(batch.status)}
                      {batch.status}
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-blue-600 uppercase tracking-wide">Progress</span>
                      <span className="text-sm font-medium">{batch.progress}%</span>
                    </div>
                    <Progress value={batch.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide">Batch ID</p>
                      <p className="font-medium font-mono text-sm">{batch.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wide">Expected Completion</p>
                      <p className="font-medium text-sm">{batch.expectedCompletion}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-blue-600 uppercase tracking-wide mb-2">Linked Ingredients</p>
                    <div className="flex flex-wrap gap-1">
                      {batch.ingredients.map((ingredient, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                          <Link className="w-2 h-2 mr-1" />
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Beaker className="w-3 h-3 mr-2" />
                    Update Process Log
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Create New Batch Form */}
            <Card className="bg-white/80 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Production Batch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-blue-700 uppercase tracking-wide text-xs">Product Name</Label>
                    <Input
                      value={formData.productName}
                      onChange={(e) => handleInputChange('productName', e.target.value)}
                      className="bg-white border-blue-200"
                      placeholder="Ashwagandha Powder"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-blue-700 uppercase tracking-wide text-xs">Batch Number</Label>
                    <Input
                      value={formData.batchNumber}
                      onChange={(e) => handleInputChange('batchNumber', e.target.value)}
                      className="bg-white border-blue-200"
                      placeholder="BATCH-ASH-003"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-700 uppercase tracking-wide text-xs">Ayurvedic Process</Label>
                  <Select value={formData.processMethod} onValueChange={(value) => handleInputChange('processMethod', value)}>
                    <SelectTrigger className="bg-white border-blue-200">
                      <SelectValue placeholder="Select process method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shodhana">Shodhana (Purification)</SelectItem>
                      <SelectItem value="churna">Churna (Powder)</SelectItem>
                      <SelectItem value="kashayam">Kashayam (Decoction)</SelectItem>
                      <SelectItem value="ghana">Ghana (Extract)</SelectItem>
                      <SelectItem value="arka">Arka (Distillation)</SelectItem>
                      <SelectItem value="taila">Taila (Oil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-700 uppercase tracking-wide text-xs">Formula/Recipe</Label>
                  <Textarea
                    value={formData.formula}
                    onChange={(e) => handleInputChange('formula', e.target.value)}
                    className="bg-white border-blue-200"
                    placeholder="Describe the formulation and ratios..."
                    rows={3}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Zap className="w-4 h-4 mr-2" />
                  Start Production Batch
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testing Tab */}
          <TabsContent value="testing" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-blue-800">Lab Testing</h3>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload COA
              </Button>
            </div>

            {labTests.map((test) => (
              <Card key={test.id} className="bg-white/80 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-blue-900">{test.testType}</h4>
                      <p className="text-sm text-blue-600">Material: {test.material}</p>
                      {test.expectedDate && (
                        <p className="text-xs text-gray-500">Expected: {test.expectedDate}</p>
                      )}
                    </div>
                    <Badge className={`${getStatusColor(test.status)} flex items-center gap-1`}>
                      {getStatusIcon(test.status)}
                      {test.result !== '-' ? test.result : test.status}
                    </Badge>
                  </div>

                  {test.status === 'completed' && (
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      {test.withanolides && (
                        <div>
                          <p className="text-xs text-blue-600 uppercase tracking-wide">Withanolides</p>
                          <p className="font-medium">{test.withanolides}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-blue-600 uppercase tracking-wide">Heavy Metals</p>
                        <p className="font-medium">{test.heavyMetals}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-blue-600 uppercase tracking-wide">Pesticides</p>
                        <p className="font-medium">{test.pesticides}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      View Report
                    </Button>
                    {test.status === 'completed' && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Approve
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Final Products Tab */}
          <TabsContent value="products" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-blue-800">Final Products</h3>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <QrCode className="w-4 h-4 mr-2" />
                Generate QR
              </Button>
            </div>

            <Card className="bg-white/80 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Create Final Product
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 mb-2">Link Production Batches to Final Product</p>
                  <p className="text-xs text-blue-600">Select completed batches to create consumer product with linked QR codes</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-700 uppercase tracking-wide text-xs">Product Name</Label>
                  <Input
                    className="bg-white border-blue-200"
                    placeholder="Ashwagandha Premium Powder 100g"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-blue-700 uppercase tracking-wide text-xs">SKU</Label>
                    <Input
                      className="bg-white border-blue-200"
                      placeholder="ASH-PWD-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-blue-700 uppercase tracking-wide text-xs">Package Size</Label>
                    <Select>
                      <SelectTrigger className="bg-white border-blue-200">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50g">50g</SelectItem>
                        <SelectItem value="100g">100g</SelectItem>
                        <SelectItem value="250g">250g</SelectItem>
                        <SelectItem value="500g">500g</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-700 uppercase tracking-wide text-xs">Link Production Batches</Label>
                  <div className="space-y-2">
                    {productionBatches.filter(b => b.status === 'completed' || b.status === 'testing').map((batch) => (
                      <div key={batch.id} className="flex items-center justify-between p-3 bg-white border border-blue-200 rounded">
                        <div>
                          <p className="font-medium text-sm">{batch.productName}</p>
                          <p className="text-xs text-blue-600">{batch.id}</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
                          <Link className="w-3 h-3 mr-1" />
                          Link
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate Consumer QR Code
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="p-6">
        <Button
          onClick={() => onNavigate('catalog')}
          variant="outline"
          className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
        >
          View Market Catalog
        </Button>
      </div>
    </div>
  )
}