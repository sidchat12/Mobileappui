import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Shield, 
  FileCheck, 
  AlertTriangle, 
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart3,
  Eye,
  Flag,
  Award,
  Scan,
  Archive,
  LogOut
} from 'lucide-react'

interface AuditorHomeProps {
  onNavigate: (screen: string) => void
  onLogout: () => void
}

export function AuditorHome({ onNavigate, onLogout }: AuditorHomeProps) {
  const pendingAudits = [
    { id: 'AUD-001', company: 'AyurPure Farms', type: 'Organic Certification', priority: 'high', due: '2 days' },
    { id: 'AUD-002', company: 'HerbalLife Mfg', type: 'Quality Compliance', priority: 'medium', due: '1 week' },
    { id: 'AUD-003', company: 'NatureCure Labs', type: 'Facility Inspection', priority: 'low', due: '2 weeks' }
  ]

  const recentFindings = [
    { id: 'FIND-001', type: 'Non-compliance', severity: 'high', description: 'Incomplete documentation' },
    { id: 'FIND-002', type: 'Minor Issue', severity: 'low', description: 'Label formatting' },
    { id: 'FIND-003', type: 'Best Practice', severity: 'positive', description: 'Excellent traceability' }
  ]

  const quickActions = [
    {
      icon: Scan,
      title: 'Verify Products',
      description: 'Scan & audit supply chain',
      color: 'bg-purple-600',
      action: () => onNavigate('scanner')
    },
    {
      icon: FileCheck,
      title: 'Review Compliance',
      description: 'Check regulatory status',
      color: 'bg-blue-600',
      action: () => onNavigate('compliance')
    },
    {
      icon: Search,
      title: 'Investigate Issues',
      description: 'Deep dive analysis',
      color: 'bg-red-600',
      action: () => onNavigate('investigation')
    },
    {
      icon: Archive,
      title: 'Generate Reports',
      description: 'Audit documentation',
      color: 'bg-green-600',
      action: () => onNavigate('reports')
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200'
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'positive': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-3 h-3" />
      case 'medium': return <Flag className="w-3 h-3" />
      case 'low': return <Clock className="w-3 h-3" />
      case 'positive': return <Award className="w-3 h-3" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-8 right-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-purple-700 hover:text-purple-800 hover:bg-purple-100"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center pt-8 pb-6">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl text-purple-800 mb-1">Regulatory Portal</h1>
          <p className="text-sm text-purple-600">Ayurvedic Compliance Authority</p>
        </div>
      </div>

      <div className="flex-1 px-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <Card className="bg-white/80 border-purple-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <FileCheck className="w-3 h-3 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-purple-900">156</p>
              <p className="text-xs text-purple-600">Audits Done</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-purple-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
              </div>
              <p className="text-sm font-medium text-purple-900">89%</p>
              <p className="text-xs text-purple-600">Compliance</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-purple-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <AlertTriangle className="w-3 h-3 text-amber-600" />
              </div>
              <p className="text-sm font-medium text-purple-900">12</p>
              <p className="text-xs text-purple-600">Pending</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border-purple-200">
            <CardContent className="p-3 text-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <TrendingUp className="w-3 h-3 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-purple-900">+5%</p>
              <p className="text-xs text-purple-600">This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-medium text-purple-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/80 border-purple-200 cursor-pointer hover:bg-white/90 transition-colors" onClick={action.action}>
                <CardContent className="p-3">
                  <div className="text-center">
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-medium text-purple-900 text-sm">{action.title}</h4>
                    <p className="text-xs text-purple-600">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Audits */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-purple-800">Pending Audits</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-purple-600 hover:text-purple-700"
              onClick={() => onNavigate('audits')}
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {pendingAudits.map((audit) => (
              <Card key={audit.id} className="bg-white/80 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-purple-900">{audit.company}</h4>
                        <Badge className={`${getPriorityColor(audit.priority)} text-xs`}>
                          {audit.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-purple-600">{audit.type}</p>
                      <p className="text-xs text-gray-500">Due in {audit.due} • {audit.id}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Findings */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-purple-800">Recent Findings</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-purple-600 hover:text-purple-700"
              onClick={() => onNavigate('findings')}
            >
              View Reports
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentFindings.map((finding) => (
              <Card key={finding.id} className="bg-white/80 border-purple-200">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-purple-900 text-sm">{finding.type}</h4>
                        <Badge className={`${getSeverityColor(finding.severity)} flex items-center gap-1 text-xs`}>
                          {getSeverityIcon(finding.severity)}
                          {finding.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-purple-600">{finding.description}</p>
                      <p className="text-xs text-gray-500">{finding.id}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Alert */}
        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="w-6 h-6" />
              <div className="flex-1">
                <h4 className="font-medium">Regulatory Update</h4>
                <p className="text-xs text-amber-100">New Ayurvedic guidelines effective next month</p>
              </div>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Review
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm">System Health</span>
                </div>
                <p className="text-xs text-purple-100">Blockchain integrity: 99.8%</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">Excellent</p>
                <p className="text-xs text-purple-100">All systems normal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Primary Action */}
      <div className="p-6">
        <Button 
          onClick={() => onNavigate('scanner')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12"
        >
          <Scan className="w-5 h-5 mr-3" />
          Start Product Verification
        </Button>
      </div>
    </div>
  )
}