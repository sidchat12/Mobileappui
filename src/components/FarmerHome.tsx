import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Leaf, 
  Plus, 
  Package, 
  TrendingUp,
  ArrowRight,
  Calendar,
  MapPin,
  BarChart3,
  CheckCircle,
  Clock,
  Truck,
  LogOut
} from 'lucide-react'

interface FarmerHomeProps {
  onNavigate: (screen: string) => void
  onLogout: () => void
}

export function FarmerHome({ onNavigate, onLogout }: FarmerHomeProps) {
  const recentLots = [
    { id: 'LOT-ASH-001', herb: 'Ashwagandha', quantity: '500 kg', status: 'shipped', date: '2 days ago' },
    { id: 'LOT-TUR-003', herb: 'Turmeric', quantity: '200 kg', status: 'ready', date: '1 week ago' },
    { id: 'LOT-BRA-005', herb: 'Brahmi', quantity: '100 kg', status: 'processing', date: '2 weeks ago' }
  ]

  const quickActions = [
    {
      icon: Plus,
      title: 'Create New Lot',
      description: 'Register new herb harvest',
      color: 'bg-green-600',
      action: () => onNavigate('farmer')
    },
    {
      icon: BarChart3,
      title: 'View Analytics',
      description: 'Track your performance',
      color: 'bg-purple-600',
      action: () => onNavigate('analytics')
    }
  ]

  const upcomingTasks = [
    { task: 'Harvest Tulsi crop', date: 'Tomorrow', priority: 'high' },
    { task: 'Quality check Neem', date: 'Nov 25', priority: 'medium' },
    { task: 'Prepare shipment ASH-001', date: 'Nov 27', priority: 'low' }
  ]

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
      case 'shipped': return <Truck className="w-3 h-3" />
      case 'ready': return <Package className="w-3 h-3" />
      case 'processing': return <Clock className="w-3 h-3" />
      default: return null
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

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
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl text-green-800 mb-1">Good Morning, Farmer!</h1>
          <p className="text-sm text-green-600">Growing Trust, One Harvest at a Time</p>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-900">12</p>
              <p className="text-xs text-green-600">Active Lots</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-lg font-medium text-green-900">2.5T</p>
              <p className="text-xs text-green-600">This Month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-lg font-medium text-green-900">98%</p>
              <p className="text-xs text-green-600">Quality Score</p>
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

        {/* Recent Lots */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-green-800">Recent Lots</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-green-600 hover:text-green-700"
              onClick={() => onNavigate('farmer')}
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentLots.map((lot) => (
              <Card key={lot.id} className="bg-white/80 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-green-900">{lot.herb}</h4>
                        <Badge className={`${getStatusColor(lot.status)} flex items-center gap-1 text-xs`}>
                          {getStatusIcon(lot.status)}
                          {lot.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-green-600">{lot.quantity} • {lot.id}</p>
                      <p className="text-xs text-gray-500">{lot.date}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-green-600 hover:text-green-700"
                      onClick={() => onNavigate('farmer')}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div>
          <h3 className="text-lg font-medium text-green-800 mb-4">Upcoming Tasks</h3>
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <Card key={index} className="bg-white/80 border-green-200">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-green-900 text-sm">{task.task}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600">{task.date}</span>
                        <Badge className={`${getPriorityColor(task.priority)} text-xs`}>
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weather & Location */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Nashik, Maharashtra</span>
                </div>
                <p className="text-xs text-green-100">Perfect conditions for harvest</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">28°C</p>
                <p className="text-xs text-green-100">Sunny</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Primary Action */}
      <div className="p-6">
        <Button 
          onClick={() => onNavigate('farmer')}
          className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
        >
          <Plus className="w-5 h-5 mr-3" />
          Create New Herb Lot
        </Button>
      </div>
    </div>
  )
}