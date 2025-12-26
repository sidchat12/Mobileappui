import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { 
  Building2, 
  Package, 
  TestTube, 
  TrendingUp,
  ArrowRight,
  Scan,
  Plus,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle,
  Beaker,
  Truck,
  QrCode,
  LogOut
} from 'lucide-react'

interface ManufacturerHomeProps {
  onNavigate: (screen: string) => void
  onLogout: () => void
}

export function ManufacturerHome({ onNavigate, onLogout }: ManufacturerHomeProps) {
  const activeBatches = [
    { id: 'BATCH-ASH-001', product: 'Ashwagandha Powder', progress: 85, status: 'processing', eta: '2 days' },
    { id: 'BATCH-MIX-002', product: 'Immunity Blend', progress: 45, status: 'testing', eta: '5 days' },
    { id: 'BATCH-TUR-003', product: 'Turmeric Extract', progress: 95, status: 'packaging', eta: '1 day' }
  ]

  const pendingTests = [
    { id: 'TEST-001', material: 'Raw Ashwagandha', type: 'Purity Analysis', urgency: 'high' },
    { id: 'TEST-002', material: 'Immunity Blend', type: 'Final Product', urgency: 'medium' },
    { id: 'TEST-003', material: 'Turmeric Batch', type: 'Curcumin Content', urgency: 'low' }
  ]

  const quickActions = [
    {
      icon: Scan,
      title: 'Receive Materials',
      description: 'Scan farmer QR codes',
      color: 'bg-blue-600',
      action: () => onNavigate('manufacturer')
    },
    {
      icon: Plus,
      title: 'Start Production',
      description: 'Create new batch',
      color: 'bg-green-600',
      action: () => onNavigate('manufacturer')
    },
    {
      icon: TestTube,
      title: 'Lab Testing',
      description: 'Quality control',
      color: 'bg-purple-600',
      action: () => onNavigate('manufacturer')
    },
    {
      icon: QrCode,
      title: 'Generate QR',
      description: 'Final product codes',
      color: 'bg-orange-600',
      action: () => onNavigate('manufacturer')
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'testing': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'packaging': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing': return <Beaker className="w-3 h-3" />
      case 'testing': return <TestTube className="w-3 h-3" />
      case 'packaging': return <Package className="w-3 h-3" />
      default: return null
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-8 right-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-blue-700 hover:text-blue-800 hover:bg-blue-100"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center pt-8 pb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl text-blue-800 mb-1">Production Center</h1>
          <p className="text-sm text-blue-600">AyurPure Manufacturing</p>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <Card className="bg-white/80 border-blue-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <Package className="w-3 h-3 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-blue-900">18</p>
              <p className="text-xs text-blue-600">Active Batches</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-blue-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
              </div>
              <p className="text-sm font-medium text-blue-900">24</p>
              <p className="text-xs text-blue-600">Completed</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-blue-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <TestTube className="w-3 h-3 text-amber-600" />
              </div>
              <p className="text-sm font-medium text-blue-900">7</p>
              <p className="text-xs text-blue-600">In Testing</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-blue-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <TrendingUp className="w-3 h-3 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-blue-900">92%</p>
              <p className="text-xs text-blue-600">Efficiency</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-medium text-blue-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/80 border-blue-200 cursor-pointer hover:bg-white/90 transition-colors" onClick={action.action}>
                <CardContent className="p-3">
                  <div className="text-center">
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-medium text-blue-900 text-sm">{action.title}</h4>
                    <p className="text-xs text-blue-600">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Production Batches */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-blue-800">Active Batches</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-blue-600 hover:text-blue-700"
              onClick={() => onNavigate('manufacturer')}
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {activeBatches.map((batch) => (
              <Card key={batch.id} className="bg-white/80 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-blue-900">{batch.product}</h4>
                        <Badge className={`${getStatusColor(batch.status)} flex items-center gap-1 text-xs`}>
                          {getStatusIcon(batch.status)}
                          {batch.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-blue-600">{batch.id}</p>
                      <p className="text-xs text-gray-500">ETA: {batch.eta}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 uppercase tracking-wide">Progress</span>
                      <span className="text-sm font-medium">{batch.progress}%</span>
                    </div>
                    <Progress value={batch.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Lab Tests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-blue-800">Pending Tests</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-blue-600 hover:text-blue-700"
              onClick={() => onNavigate('manufacturer')}
            >
              Lab Portal
            </Button>
          </div>
          
          <div className="space-y-3">
            {pendingTests.map((test) => (
              <Card key={test.id} className="bg-white/80 border-blue-200">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-blue-900 text-sm">{test.material}</h4>
                        <Badge className={`${getUrgencyColor(test.urgency)} text-xs`}>
                          {test.urgency}
                        </Badge>
                      </div>
                      <p className="text-xs text-blue-600">{test.type} • {test.id}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <TestTube className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Alerts */}
        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 text-white">
              <AlertCircle className="w-6 h-6" />
              <div className="flex-1">
                <h4 className="font-medium">Quality Alert</h4>
                <p className="text-xs text-amber-100">3 batches require immediate testing</p>
              </div>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Review
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Production Metrics */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm">Daily Production</span>
                </div>
                <p className="text-xs text-blue-100">Target: 2.5T | Actual: 2.8T</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">112%</p>
                <p className="text-xs text-blue-100">Above Target</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Primary Action */}
      <div className="p-6">
        <Button 
          onClick={() => onNavigate('manufacturer')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
        >
          <Building2 className="w-5 h-5 mr-3" />
          Open Production Dashboard
        </Button>
      </div>
    </div>
  )
}