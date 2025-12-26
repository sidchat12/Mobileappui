import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Scan, 
  Search, 
  BookOpen, 
  Shield, 
  QrCode,
  ArrowRight,
  Leaf,
  CheckCircle,
  TrendingUp,
  History,
  Eye,
  LogOut
} from 'lucide-react'

interface ConsumerHomeProps {
  onNavigate: (screen: string) => void
  onLogout: () => void
}

export function ConsumerHome({ onNavigate, onLogout }: ConsumerHomeProps) {
  const recentScans = [
    { id: 1, product: 'Ashwagandha Powder', brand: 'AyurPure', date: '2 days ago', verified: true },
    { id: 2, product: 'Turmeric Capsules', brand: 'HerbalLife', date: '1 week ago', verified: true },
    { id: 3, product: 'Brahmi Extract', brand: 'NatureCure', date: '2 weeks ago', verified: true }
  ]

  const quickActions = [
    {
      icon: Scan,
      title: 'Scan Product',
      description: 'Verify authenticity & trace origin',
      color: 'bg-green-600',
      action: () => onNavigate('scanner')
    },
    {
      icon: BookOpen,
      title: 'Herb Catalog',
      description: 'Learn about Ayurvedic herbs',
      color: 'bg-blue-600',
      action: () => onNavigate('catalog')
    },
    {
      icon: Search,
      title: 'Search Products',
      description: 'Find verified products',
      color: 'bg-purple-600',
      action: () => onNavigate('catalog')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-8 right-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-green-700 hover:text-green-800 hover:bg-green-100"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center pt-8 pb-6">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl text-green-800 mb-1">Welcome Back!</h1>
          <p className="text-sm text-green-600">Verify. Trust. Choose Better.</p>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <QrCode className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-900">23</p>
              <p className="text-xs text-green-600">Products Scanned</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-lg font-medium text-green-900">21</p>
              <p className="text-xs text-green-600">Verified</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-lg font-medium text-green-900">85%</p>
              <p className="text-xs text-green-600">Trust Score</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-medium text-green-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/80 border-green-200 cursor-pointer hover:bg-white/90 transition-colors" onClick={action.action}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-green-900">{action.title}</h4>
                      <p className="text-sm text-green-600">{action.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-green-800">Recent Scans</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-green-600 hover:text-green-700"
              onClick={() => onNavigate('history')}
            >
              <History className="w-4 h-4 mr-1" />
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentScans.map((scan) => (
              <Card key={scan.id} className="bg-white/80 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-green-900">{scan.product}</h4>
                        {scan.verified && (
                          <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                            <CheckCircle className="w-2 h-2 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-green-600">{scan.brand}</p>
                      <p className="text-xs text-gray-500">{scan.date}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-green-600 hover:text-green-700"
                      onClick={() => onNavigate('traceability')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0">
          <CardContent className="p-4 text-center">
            <Leaf className="w-8 h-8 text-white mx-auto mb-2" />
            <h4 className="font-medium text-white mb-1">Ayurvedic Authenticity Verified</h4>
            <p className="text-xs text-green-100">Every product traced from farm to you</p>
          </CardContent>
        </Card>
      </div>

      {/* Primary Action */}
      <div className="p-6">
        <Button 
          onClick={() => onNavigate('scanner')}
          className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
        >
          <Scan className="w-5 h-5 mr-3" />
          Scan Product QR Code
        </Button>
      </div>
    </div>
  )
}