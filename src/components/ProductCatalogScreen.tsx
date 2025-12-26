import { Star, Home, Leaf, Zap, Award, Clock, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface AyurvedicCatalogProps {
  onHome: () => void
  onBack: () => void
}

export function AyurvedicCatalog({ onHome, onBack }: AyurvedicCatalogProps) {
  const herbs = [
    {
      id: 1,
      name: 'Ashwagandha',
      sanskritName: 'Withania somnifera',
      image: 'https://images.unsplash.com/photo-1655275194063-08d11b6abea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHR1cm1lcmljJTIwYXNod2FnYW5kaGF8ZW58MXx8fHwxNzU4MjYxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rasa: ['Tikta', 'Kashaya', 'Madhura'],
      virya: 'Ushna',
      prabhava: 'Balya',
      rating: 4.8,
      verified: true,
      properties: ['Adaptogen', 'Stress Relief', 'Immunity'],
      featured: true
    },
    {
      id: 2,
      name: 'Turmeric',
      sanskritName: 'Curcuma longa',
      image: 'https://images.unsplash.com/photo-1756363886854-b51467278a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMG1hcmtldCUyMHRyYWRpdGlvbmFsJTIwaGVyYnN8ZW58MXx8fHwxNzU4MzY1NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rasa: ['Tikta', 'Katu'],
      virya: 'Ushna',
      prabhava: 'Krimighna',
      rating: 4.9,
      verified: true,
      properties: ['Anti-inflammatory', 'Antioxidant', 'Digestive']
    },
    {
      id: 3,
      name: 'Brahmi',
      sanskritName: 'Bacopa monnieri',
      image: 'https://images.unsplash.com/photo-1649620537042-77f0f361d773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGhlcmJzJTIwb3JnYW5pY3xlbnwxfHx8fDE3NTgzNjU3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rasa: ['Tikta', 'Kashaya'],
      virya: 'Sheeta',
      prabhava: 'Medhya',
      rating: 4.7,
      verified: true,
      properties: ['Cognitive', 'Memory', 'Neurological']
    },
    {
      id: 4,
      name: 'Triphala',
      sanskritName: 'Tri-phala',
      image: 'https://images.unsplash.com/photo-1523302270222-0f256786563c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMGhlcmJzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NTgzNjU3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rasa: ['Pancha Rasa'],
      virya: 'Anushna',
      prabhava: 'Tridoshahara',
      rating: 4.6,
      verified: true,
      properties: ['Detox', 'Digestive', 'Rejuvenative']
    }
  ]

  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    return (
      <div className="flex items-center gap-1">
        <div className="flex">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
          {hasHalfStar && <Star className="w-3 h-3 fill-amber-400/50 text-amber-400" />}
          {[...Array(5 - Math.ceil(rating))].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-gray-300" />
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    )
  }

  const featuredHerb = herbs.find(h => h.featured)

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
        <h1 className="text-2xl text-green-800 mb-1">Ayurvedic Herbs</h1>
        <p className="text-sm text-green-600">Verified Traditional Medicine</p>
      </div>

      {/* Featured Herb */}
      {featuredHerb && (
        <div className="px-6 pb-6">
          <Card className="overflow-hidden bg-white/80 border-green-200">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={featuredHerb.image}
                  alt={featuredHerb.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-600 text-white border-0">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-green-700 border-0">
                    <Leaf className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-green-900">{featuredHerb.name}</h3>
                    <p className="text-xs text-green-600 italic">{featuredHerb.sanskritName}</p>
                  </div>
                  {renderStarRating(featuredHerb.rating)}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <p className="text-xs text-green-600 uppercase">Rasa</p>
                    <p className="text-xs font-medium">{featuredHerb.rasa.join(', ')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-green-600 uppercase">Virya</p>
                    <p className="text-xs font-medium">{featuredHerb.virya}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-green-600 uppercase">Prabhava</p>
                    <p className="text-xs font-medium">{featuredHerb.prabhava}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {featuredHerb.properties.map((prop, index) => (
                    <Badge key={index} className="bg-green-100 text-green-700 border-green-200 text-xs">
                      {prop}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Herbs List */}
      <div className="flex-1 px-6">
        <h3 className="text-sm text-green-700 uppercase tracking-wide mb-3">All Herbs</h3>
        <div className="space-y-3">
          {herbs.filter(h => !h.featured).map((herb) => (
            <Card key={herb.id} className="bg-white/70 border-green-200 hover:bg-white/90 transition-colors">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 flex-shrink-0">
                    <ImageWithFallback
                      src={herb.image}
                      alt={herb.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-green-900 text-sm truncate">{herb.name}</h4>
                        <p className="text-xs text-green-600 italic truncate">{herb.sanskritName}</p>
                      </div>
                      {herb.verified && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 ml-2">
                          <Leaf className="w-2 h-2 mr-1" />
                          <span className="text-xs">Verified</span>
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {renderStarRating(herb.rating)}
                      <div className="flex gap-1">
                        {herb.properties.slice(0, 2).map((prop, index) => (
                          <Badge key={index} className="bg-green-50 text-green-600 border-green-200 text-xs">
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-100 rounded-full h-1 mt-2">
                      <div 
                        className="bg-green-600 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${(herb.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="p-6">
        <div className="flex justify-center">
          <Button
            onClick={onHome}
            size="icon"
            className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700"
          >
            <Home className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}