import { useState } from 'react'
import { QrCode, Camera, Search, Zap, MapPin, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'

interface QRScannerScreenProps {
  onNext: () => void
  onBack: () => void
}

export function QRScannerScreen({ onNext, onBack }: QRScannerScreenProps) {
  const [scanMode, setScanMode] = useState<'camera' | 'manual'>('camera')
  const [manualCode, setManualCode] = useState('')
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    // Simulate scan delay
    setTimeout(() => {
      setIsScanning(false)
      onNext()
    }, 2000)
  }

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      onNext()
    }
  }

  const recentScans = [
    { id: '1', code: 'AYU-ASH-2024-001', product: 'Ashwagandha Powder', time: '2 hours ago' },
    { id: '2', code: 'AYU-TUR-2024-007', product: 'Turmeric Capsules', time: '1 day ago' },
    { id: '3', code: 'AYU-BRA-2024-003', product: 'Brahmi Extract', time: '3 days ago' }
  ]

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
          <QrCode className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl text-green-800 mb-1">Scan & Trace</h1>
        <p className="text-sm text-green-600">Discover your herb's journey</p>
      </div>

      {/* Scan Mode Toggle */}
      <div className="px-6 mb-6">
        <div className="flex bg-white/70 rounded-lg p-1">
          <Button
            variant={scanMode === 'camera' ? 'default' : 'ghost'}
            className={`flex-1 rounded-md ${scanMode === 'camera' ? 'bg-green-600 text-white' : 'text-green-700'}`}
            onClick={() => setScanMode('camera')}
          >
            <Camera className="w-4 h-4 mr-2" />
            Camera
          </Button>
          <Button
            variant={scanMode === 'manual' ? 'default' : 'ghost'}
            className={`flex-1 rounded-md ${scanMode === 'manual' ? 'bg-green-600 text-white' : 'text-green-700'}`}
            onClick={() => setScanMode('manual')}
          >
            <Search className="w-4 h-4 mr-2" />
            Manual
          </Button>
        </div>
      </div>

      {/* Scan Area */}
      <div className="flex-1 px-6">
        {scanMode === 'camera' ? (
          <div className="mb-6">
            <Card className="overflow-hidden bg-white/70 border-green-200">
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gray-900 flex items-center justify-center">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                      <p className="text-white text-sm">Scanning QR Code...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">Position QR code in frame</p>
                    </div>
                  )}
                  
                  {/* Scan overlay */}
                  <div className="absolute inset-0 border-2 border-dashed border-green-500 m-8 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              onClick={handleScan}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white rounded-lg h-12"
              disabled={isScanning}
            >
              {isScanning ? 'Scanning...' : 'Start Scan'}
            </Button>
          </div>
        ) : (
          <div className="mb-6">
            <Card className="p-4 bg-white/70 border-green-200">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-green-700 uppercase tracking-wide mb-2 block">
                    Enter Product Code
                  </label>
                  <Input
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="e.g., AYU-ASH-2024-001"
                    className="bg-white border-green-200 rounded-lg h-12"
                  />
                </div>
                <Button 
                  onClick={handleManualSubmit}
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg h-12"
                  disabled={!manualCode.trim()}
                >
                  Trace Product
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Recent Scans */}
        <div>
          <h3 className="text-sm text-green-700 uppercase tracking-wide mb-3">Recent Scans</h3>
          <div className="space-y-3">
            {recentScans.map((scan) => (
              <Card key={scan.id} className="bg-white/70 border-green-200 hover:bg-white/90 transition-colors cursor-pointer" onClick={onNext}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{scan.product}</p>
                      <p className="text-xs text-green-600 font-mono">{scan.code}</p>
                      <p className="text-xs text-gray-500">{scan.time}</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}