import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Package,
  Leaf,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  Activity,
  CheckCircle,
  Clock
} from 'lucide-react'

interface FarmerAnalyticsProps {
  onBack: () => void
}

export function FarmerAnalytics({ onBack }: FarmerAnalyticsProps) {
  const monthlyData = [
    { month: 'Jan', production: 2.1, revenue: 84000 },
    { month: 'Feb', production: 1.8, revenue: 72000 },
    { month: 'Mar', production: 2.5, revenue: 100000 },
    { month: 'Apr', production: 2.8, revenue: 112000 },
    { month: 'May', production: 3.2, revenue: 128000 },
    { month: 'Jun', production: 2.9, revenue: 116000 }
  ]

  const herbBreakdown = [
    { name: 'Ashwagandha', percentage: 35, quantity: '1.2T', color: 'bg-green-500' },
    { name: 'Turmeric', percentage: 25, quantity: '0.8T', color: 'bg-yellow-500' },
    { name: 'Brahmi', percentage: 20, quantity: '0.6T', color: 'bg-blue-500' },
    { name: 'Tulsi', percentage: 15, quantity: '0.5T', color: 'bg-purple-500' },
    { name: 'Others', percentage: 5, quantity: '0.2T', color: 'bg-gray-500' }
  ]

  const qualityMetrics = [
    { metric: 'Organic Compliance', score: 98, status: 'excellent' },
    { metric: 'Purity Standards', score: 96, status: 'excellent' },
    { metric: 'Traceability Score', score: 94, status: 'good' },
    { metric: 'Documentation', score: 92, status: 'good' }
  ]

  const recentActivity = [
    { action: 'Lot shipped to AyurPure Manufacturing', time: '2 hours ago', type: 'shipment' },
    { action: 'Quality certification received for LOT-ASH-001', time: '1 day ago', type: 'certification' },
    { action: 'New harvest registered - Turmeric 200kg', time: '3 days ago', type: 'harvest' },
    { action: 'Payment received ₹85,000', time: '5 days ago', type: 'payment' }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600 bg-green-100'
    if (score >= 90) return 'text-blue-600 bg-blue-100'
    if (score >= 80) return 'text-amber-600 bg-amber-100'
    return 'text-red-600 bg-red-100'
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'shipment': return <Package className="w-4 h-4 text-blue-600" />
      case 'certification': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'harvest': return <Leaf className="w-4 h-4 text-green-600" />
      case 'payment': return <DollarSign className="w-4 h-4 text-purple-600" />
      default: return <Activity className="w-4 h-4 text-gray-600" />
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
      <div className="text-center pt-4 pb-6">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl text-green-800 mb-1">Farm Analytics</h1>
        <p className="text-sm text-green-600">Performance & Insights Dashboard</p>
      </div>

      <div className="flex-1 px-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 uppercase tracking-wide">Total Production</p>
                  <p className="text-2xl font-medium text-green-900">3.2T</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">+12% vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 uppercase tracking-wide">Monthly Revenue</p>
                  <p className="text-2xl font-medium text-green-900">₹1.28L</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">+8% vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 uppercase tracking-wide">Active Lots</p>
                  <p className="text-2xl font-medium text-green-900">12</p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-3 h-3 text-amber-600 mr-1" />
                    <span className="text-xs text-amber-600">3 pending shipment</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 uppercase tracking-wide">Quality Score</p>
                  <p className="text-2xl font-medium text-green-900">95%</p>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="w-3 h-3 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">Excellent rating</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Production by Herb Type */}
        <Card className="bg-white/80 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Production Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {herbBreakdown.map((herb, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-900">{herb.name}</span>
                    <span className="text-sm text-green-600">{herb.quantity} ({herb.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${herb.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${herb.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quality Metrics */}
        <Card className="bg-white/80 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Quality & Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-900">{metric.metric}</span>
                    <Badge className={`${getScoreColor(metric.score)} text-xs`}>
                      {metric.score}%
                    </Badge>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/80 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-green-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0">
          <CardContent className="p-4">
            <div className="text-white text-center">
              <h4 className="font-medium mb-2">This Month's Performance</h4>
              <p className="text-2xl font-medium mb-1">Excellent</p>
              <p className="text-xs text-green-100">
                You're in the top 10% of farmers on our platform
              </p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-lg font-medium">18</p>
                  <p className="text-xs text-green-100">Lots Created</p>
                </div>
                <div>
                  <p className="text-lg font-medium">16</p>
                  <p className="text-xs text-green-100">Shipped</p>
                </div>
                <div>
                  <p className="text-lg font-medium">100%</p>
                  <p className="text-xs text-green-100">On Time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 space-y-3">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={onBack}
        >
          <BarChart3 className="w-4 h-4 mr-2" />
          Export Full Report
        </Button>
      </div>
    </div>
  )
}