import { useState } from 'react'
import { SetupScreen } from './components/SetupScreen'
import { QRScannerScreen } from './components/ValidationScreen'
import { TraceabilityView } from './components/ConsumerPortalScreen'
import { AyurvedicCatalog } from './components/ProductCatalogScreen'
import { FarmerDashboard } from './components/FarmerDashboard'
import { ManufacturerDashboard } from './components/ManufacturerDashboard'
import { ConsumerHome } from './components/ConsumerHome'
import { FarmerHome } from './components/FarmerHome'
import { ManufacturerHome } from './components/ManufacturerHome'
import { AuditorHome } from './components/AuditorHome'
import { FarmerAnalytics } from './components/FarmerAnalytics'

type Screen = 'setup' | 'consumer-home' | 'farmer-home' | 'manufacturer-home' | 'auditor-home' | 'scanner' | 'traceability' | 'catalog' | 'farmer' | 'manufacturer' | 'analytics'

export default function App() {
  const [navigationStack, setNavigationStack] = useState<Screen[]>(['setup'])
  const [userRole, setUserRole] = useState<string>('')

  const currentScreen = navigationStack[navigationStack.length - 1]

  const navigateToScreen = (screen: Screen) => {
    setNavigationStack(prev => [...prev, screen])
  }

  const goBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(prev => prev.slice(0, -1))
    }
  }

  const navigateToHome = () => {
    // Navigate to appropriate home screen based on user role
    let homeScreen: Screen = 'setup'
    switch (userRole) {
      case 'consumer':
        homeScreen = 'consumer-home'
        break
      case 'farmer':
        homeScreen = 'farmer-home'
        break
      case 'manufacturer':
        homeScreen = 'manufacturer-home'
        break
      case 'auditor':
        homeScreen = 'auditor-home'
        break
    }
    
    // Reset navigation stack to just setup and home
    setNavigationStack(['setup', homeScreen])
  }

  const handleLogout = () => {
    // Reset user state and navigation
    setUserRole('')
    setNavigationStack(['setup'])
  }

  const handleUserRegistration = (role: string) => {
    setUserRole(role)
    // Navigate to appropriate home screen based on user role
    switch (role) {
      case 'consumer':
        navigateToScreen('consumer-home')
        break
      case 'farmer':
        navigateToScreen('farmer-home')
        break
      case 'manufacturer':
        navigateToScreen('manufacturer-home')
        break
      case 'auditor':
        navigateToScreen('auditor-home')
        break
      default:
        navigateToScreen('consumer-home')
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'setup':
        return <SetupScreen onNext={handleUserRegistration} />
      
      case 'consumer-home':
        return <ConsumerHome onNavigate={navigateToScreen} onLogout={handleLogout} />
      
      case 'farmer-home':
        return <FarmerHome onNavigate={navigateToScreen} onLogout={handleLogout} />
      
      case 'manufacturer-home':
        return <ManufacturerHome onNavigate={navigateToScreen} onLogout={handleLogout} />
      
      case 'auditor-home':
        return <AuditorHome onNavigate={navigateToScreen} onLogout={handleLogout} />
      
      case 'scanner':
        return (
          <QRScannerScreen 
            onNext={() => navigateToScreen('traceability')} 
            onBack={goBack}
          />
        )
      
      case 'traceability':
        return (
          <TraceabilityView 
            onNext={() => navigateToScreen('catalog')} 
            onBack={goBack}
          />
        )
      
      case 'catalog':
        return (
          <AyurvedicCatalog 
            onHome={navigateToHome} 
            onBack={goBack}
          />
        )
      
      case 'farmer':
        return (
          <FarmerDashboard 
            onNavigate={navigateToScreen} 
            onBack={goBack}
          />
        )
      
      case 'manufacturer':
        return (
          <ManufacturerDashboard 
            onNavigate={navigateToScreen} 
            onBack={goBack}
          />
        )
      
      case 'analytics':
        return (
          <FarmerAnalytics 
            onBack={goBack}
          />
        )
      
      default:
        return <SetupScreen onNext={handleUserRegistration} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Mobile Frame */}
      <div className="max-w-sm mx-auto bg-white min-h-screen relative border-x border-gray-200 shadow-xl">
        {renderScreen()}
      </div>
    </div>
  )
}