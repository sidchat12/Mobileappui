import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { 
  Plus, 
  Camera, 
  Calendar, 
  MapPin, 
  Leaf, 
  Package,
  Download,
  Share,
  CheckCircle,
  Clock,
  ArrowLeft
} from 'lucide-react'

interface FarmerDashboardProps {
  onNavigate: (screen: string) => void
  onBack: () => void
}

export function FarmerDashboard({ onNavigate, onBack }: FarmerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'create' | 'lots'>('create')
  const [formData, setFormData] = useState({
    herbName: '',
    variety: '',
    quantity: '',
    unit: 'kg',
    harvestDate: '',
    cultivationMethod: '',
    soilType: '',
    location: '',
    coordinates: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedLot, setSubmittedLot] = useState<any | null>(null)
  const [currentLotId, setCurrentLotId] = useState<string | null>(null)

  const existingLots = [
    {
      id: 'LOT-ASH-2024-001',
      herbName: 'Ashwagandha',
      quantity: '500 kg',
      harvestDate: '15 Nov 2024',
      status: 'shipped',
      trackingId: 'AYU-ASH-2024-001'
    },
    {
      id: 'LOT-TUR-2024-003',
      herbName: 'Turmeric',
      quantity: '200 kg',
      harvestDate: '10 Nov 2024',
      status: 'ready',
      trackingId: 'AYU-TUR-2024-003'
    },
    {
      id: 'LOT-BRA-2024-005',
      herbName: 'Brahmi',
      quantity: '100 kg',
      harvestDate: '08 Nov 2024',
      status: 'processing',
      trackingId: 'AYU-BRA-2024-005'
    }
  ]

  const herbOptions = [
    'Ashwagandha', 'Turmeric', 'Brahmi', 'Tulsi', 'Neem', 'Amla', 
    'Ginger', 'Fenugreek', 'Shatavari', 'Guduchi'
  ]

  const cultivationMethods = [
    'Organic Traditional', 'Organic Certified', 'Wild Crafted', 
    'Biodynamic', 'Natural Farming', 'Zero Budget Natural Farming'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const generateLotId = () => {
    const herbCode = formData.herbName.substring(0, 3).toUpperCase()
    const date = new Date().toISOString().slice(0, 7).replace('-', '')
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `LOT-${herbCode}-${date}-${random}`
  }

  const handleSubmitLot = () => {
    if (!formData.herbName || !formData.quantity || !formData.harvestDate) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    const lotId = generateLotId()
    setCurrentLotId(lotId)

    // Simulate lot creation delay
    setTimeout(() => {
      const lotData = {
        ...formData,
        id: lotId,
        status: 'created',
        createdAt: new Date().toISOString(),
        trackingId: `AYU-${formData.herbName.substring(0, 3).toUpperCase()}-2024-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
      }
      setSubmittedLot(lotData)
      setIsSubmitting(false)
    }, 2000)
  }

  const handleCreateNewLot = () => {
    setFormData({
      herbName: '',
      variety: '',
      quantity: '',
      unit: 'kg',
      harvestDate: '',
      cultivationMethod: '',
      soilType: '',
      location: '',
      coordinates: '',
      notes: ''
    })
    setSubmittedLot(null)
    setCurrentLotId(null)
    setActiveTab('create')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shipped': return 'bg-green-100 text-green-700 border-green-200'
      case 'ready': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'processing': return 'bg-amber-100 text-amber-700 border-amber-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'shipped': return <CheckCircle className="w-3 h-3" />
      case 'ready': return <Package className="w-3 h-3" />
      case 'processing': return <Clock className="w-3 h-3" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
      {/* Back Button */}
      <div className="pt-8 px-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-green-700 hover:text-green-800 hover:bg-green-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Header */}
      <div className="text-center pt-4 pb-4">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Leaf className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl text-green-800 mb-1">Farmer Dashboard</h1>
        <p className="text-sm text-green-600">Manage Your Herb Lots</p>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 mb-6">
        <div className="flex bg-white/70 rounded-lg p-1">
          <Button
            variant={activeTab === 'create' ? 'default' : 'ghost'}
            className={`flex-1 rounded-md ${activeTab === 'create' ? 'bg-green-600 text-white' : 'text-green-700'}`}
            onClick={() => setActiveTab('create')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Lot
          </Button>
          <Button
            variant={activeTab === 'lots' ? 'default' : 'ghost'}
            className={`flex-1 rounded-md ${activeTab === 'lots' ? 'bg-green-600 text-white' : 'text-green-700'}`}
            onClick={() => setActiveTab('lots')}
          >
            <Package className="w-4 h-4 mr-2" />
            My Lots
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6">
        {activeTab === 'create' ? (
          <div className="space-y-6">
            {!submittedLot ? (
              <Card className="bg-white/80 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Create New Herb Lot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Herb Name*</Label>
                      <Select value={formData.herbName} onValueChange={(value) => handleInputChange('herbName', value)}>
                        <SelectTrigger className="bg-white border-green-200">
                          <SelectValue placeholder="Select herb" />
                        </SelectTrigger>
                        <SelectContent>
                          {herbOptions.map((herb) => (
                            <SelectItem key={herb} value={herb}>{herb}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Variety</Label>
                      <Input
                        value={formData.variety}
                        onChange={(e) => handleInputChange('variety', e.target.value)}
                        className="bg-white border-green-200"
                        placeholder="e.g., KSM-66"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Quantity*</Label>
                      <Input
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="bg-white border-green-200"
                        placeholder="500"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Unit</Label>
                      <Select value={formData.unit} onValueChange={(value) => handleInputChange('unit', value)}>
                        <SelectTrigger className="bg-white border-green-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kilograms</SelectItem>
                          <SelectItem value="ton">Tonnes</SelectItem>
                          <SelectItem value="quintal">Quintals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-green-700 uppercase tracking-wide text-xs">Harvest Date*</Label>
                    <Input
                      type="date"
                      value={formData.harvestDate}
                      onChange={(e) => handleInputChange('harvestDate', e.target.value)}
                      className="bg-white border-green-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-green-700 uppercase tracking-wide text-xs">Cultivation Method</Label>
                    <Select value={formData.cultivationMethod} onValueChange={(value) => handleInputChange('cultivationMethod', value)}>
                      <SelectTrigger className="bg-white border-green-200">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        {cultivationMethods.map((method) => (
                          <SelectItem key={method} value={method}>{method}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Location</Label>
                      <Input
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="bg-white border-green-200"
                        placeholder="Village, District"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-green-700 uppercase tracking-wide text-xs">Soil Type</Label>
                      <Input
                        value={formData.soilType}
                        onChange={(e) => handleInputChange('soilType', e.target.value)}
                        className="bg-white border-green-200"
                        placeholder="Red laterite"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-green-700 uppercase tracking-wide text-xs">Additional Notes</Label>
                    <Textarea
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="bg-white border-green-200"
                      placeholder="Any additional information about this lot..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={handleSubmitLot}
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
                    disabled={isSubmitting || !formData.herbName || !formData.quantity || !formData.harvestDate}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Adding Lot...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Lot
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/80 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Lot Successfully Created
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-12 h-12 text-green-600" />
                    </div>
                    <p className="text-lg font-medium text-green-800 mb-1">Lot Created Successfully!</p>
                    <p className="text-sm text-green-600 mb-2">Lot ID: {currentLotId}</p>
                    <p className="text-sm text-green-600 mb-2">Tracking ID: {submittedLot?.trackingId}</p>
                    <p className="text-xs text-gray-500">Your herb lot has been registered on the blockchain</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-green-800 mb-3">Lot Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600">Herb Name:</span>
                        <span className="text-sm font-medium text-green-900">{submittedLot?.herbName}</span>
                      </div>
                      {submittedLot?.variety && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Variety:</span>
                          <span className="text-sm font-medium text-green-900">{submittedLot?.variety}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600">Quantity:</span>
                        <span className="text-sm font-medium text-green-900">{submittedLot?.quantity} {submittedLot?.unit}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600">Harvest Date:</span>
                        <span className="text-sm font-medium text-green-900">{submittedLot?.harvestDate}</span>
                      </div>
                      {submittedLot?.cultivationMethod && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Cultivation:</span>
                          <span className="text-sm font-medium text-green-900">{submittedLot?.cultivationMethod}</span>
                        </div>
                      )}
                      {submittedLot?.location && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Location:</span>
                          <span className="text-sm font-medium text-green-900">{submittedLot?.location}</span>
                        </div>
                      )}
                      {submittedLot?.soilType && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">Soil Type:</span>
                          <span className="text-sm font-medium text-green-900">{submittedLot?.soilType}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600">Status:</span>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          <Package className="w-3 h-3 mr-1" />
                          {submittedLot?.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {submittedLot?.notes && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Additional Notes</h4>
                      <p className="text-sm text-gray-600">{submittedLot?.notes}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Details
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Share Lot
                    </Button>
                  </div>

                  <Button 
                    onClick={handleCreateNewLot}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Another Lot
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-green-800">Your Herb Lots</h3>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                {existingLots.length} Total
              </Badge>
            </div>

            {existingLots.map((lot) => (
              <Card key={lot.id} className="bg-white/80 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-green-900">{lot.herbName}</h4>
                      <p className="text-sm text-green-600">{lot.quantity}</p>
                      <p className="text-xs text-gray-500">Harvested: {lot.harvestDate}</p>
                    </div>
                    <Badge className={`${getStatusColor(lot.status)} flex items-center gap-1`}>
                      {getStatusIcon(lot.status)}
                      {lot.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-mono text-green-800">{lot.trackingId}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-green-200 text-green-700 hover:bg-green-50"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="p-6">
        <Button
          onClick={() => onNavigate('catalog')}
          variant="outline"
          className="w-full border-green-200 text-green-700 hover:bg-green-50"
        >
          View Herb Catalog
        </Button>
      </div>
    </div>
  )
}