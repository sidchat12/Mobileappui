import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  MapPin, 
  Calendar, 
  Leaf, 
  Award, 
  Truck, 
  Building, 
  TestTube, 
  Star,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Eye
} from 'lucide-react'

interface TraceabilityViewProps {
  onNext: () => void
  onBack: () => void
}

export function TraceabilityView({ onNext, onBack }: TraceabilityViewProps) {
  const [activeStep, setActiveStep] = useState(0)

  const journeySteps = [
    {
      id: 'origin',
      title: 'Origin & Cultivation',
      icon: Leaf,
      status: 'verified',
      data: {
        farmer: 'Rajesh Kumar',
        location: 'Mysore, Karnataka',
        farm: 'Organic Valley Farms',
        coordinates: '12.2958°N, 76.6394°E',
        cultivationMethod: 'Organic Traditional',
        harvestDate: '15 Nov 2024',
        season: 'Shishira (Winter)',
        soilType: 'Red Laterite'
      }
    },
    {
      id: 'processing',
      title: 'Processing & Purification',
      icon: Building,
      status: 'verified',
      data: {
        facility: 'AyurPure Processing Center',
        location: 'Bangalore, Karnataka',
        method: 'Sun-dried & Shodhana',
        duration: '7 days',
        temperature: '40-45°C',
        purity: '98.5%'
      }
    },
    {
      id: 'testing',
      title: 'Quality Testing',
      icon: TestTube,
      status: 'verified',
      data: {
        lab: 'Ayur Lab Solutions',
        testDate: '22 Nov 2024',
        heavyMetals: 'Below detection limit',
        pesticides: 'Not detected',
        microbial: 'Within limits',
        potency: '2.5% withanolides'
      }
    },
    {
      id: 'packaging',
      title: 'Manufacturing & Packaging',
      icon: Award,
      status: 'verified',
      data: {
        manufacturer: 'VedaLife Ayurvedics',
        batchNo: 'ASH-2024-001',
        mfgDate: '25 Nov 2024',
        expiry: '24 Nov 2026',
        packagingType: 'Amber glass bottle',
        quantity: '100g'
      }
    }
  ]

  const currentStep = journeySteps[activeStep]

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
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <h1 className="text-xl text-green-800">Ashwagandha Powder</h1>
        </div>
        <p className="text-sm text-green-600">Product Code: AYU-ASH-2024-001</p>
      </div>

      {/* Journey Timeline */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                    activeStep === index 
                      ? 'bg-green-600 text-white scale-110' 
                      : step.status === 'verified'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="w-12 h-0.5 bg-green-200 mt-2"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Details */}
      <div className="flex-1 px-6">
        <Card className="bg-white/80 border-green-200 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <currentStep.icon className="w-6 h-6 text-green-600" />
              <h2 className="text-lg font-medium text-green-800">{currentStep.title}</h2>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>

            <div className="space-y-4">
              {activeStep === 0 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Farmer</p>
                      <p className="font-medium">{currentStep.data.farmer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Farm</p>
                      <p className="font-medium">{currentStep.data.farm}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-green-600 uppercase tracking-wide">Location</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <p className="font-medium">{currentStep.data.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Harvest Date</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-500" />
                        <p className="font-medium">{currentStep.data.harvestDate}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Season (Ritu)</p>
                      <p className="font-medium">{currentStep.data.season}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-600 uppercase tracking-wide mb-1">Cultivation Method</p>
                    <p className="font-medium text-green-800">{currentStep.data.cultivationMethod}</p>
                  </div>
                </>
              )}

              {activeStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Facility</p>
                      <p className="font-medium">{currentStep.data.facility}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Location</p>
                      <p className="font-medium">{currentStep.data.location}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Method</p>
                      <p className="font-medium">{currentStep.data.method}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Duration</p>
                      <p className="font-medium">{currentStep.data.duration}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-600 uppercase tracking-wide mb-1">Purity Achieved</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-[98%]"></div>
                      </div>
                      <span className="font-medium text-green-800">{currentStep.data.purity}</span>
                    </div>
                  </div>
                </>
              )}

              {activeStep === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Laboratory</p>
                      <p className="font-medium">{currentStep.data.lab}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Test Date</p>
                      <p className="font-medium">{currentStep.data.testDate}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Heavy Metals</span>
                      <Badge className="bg-green-100 text-green-700">✓ Pass</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Pesticides</span>
                      <Badge className="bg-green-100 text-green-700">✓ Pass</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm">Microbial</span>
                      <Badge className="bg-green-100 text-green-700">✓ Pass</Badge>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">Active Compounds</p>
                    <p className="font-medium text-amber-800">{currentStep.data.potency}</p>
                  </div>
                </>
              )}

              {activeStep === 3 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Manufacturer</p>
                      <p className="font-medium">{currentStep.data.manufacturer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Batch No.</p>
                      <p className="font-medium font-mono">{currentStep.data.batchNo}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Mfg Date</p>
                      <p className="font-medium">{currentStep.data.mfgDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase tracking-wide">Expiry</p>
                      <p className="font-medium">{currentStep.data.expiry}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-600 uppercase tracking-wide mb-1">Packaging</p>
                    <p className="font-medium text-blue-800">{currentStep.data.packagingType} - {currentStep.data.quantity}</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <Button 
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg h-12"
          >
            <Star className="w-4 h-4 mr-2" />
            Rate This Product
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline"
              className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
            >
              Download Certificate
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
            >
              Share Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}