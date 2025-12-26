import { Search, TrendingUp, Hash, MapPin } from 'lucide-react'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export function ExploreScreen() {
  const trendingTopics = [
    { tag: 'design', posts: '1.2k posts', trend: '+12%' },
    { tag: 'technology', posts: '3.4k posts', trend: '+8%' },
    { tag: 'startup', posts: '892 posts', trend: '+15%' },
    { tag: 'productivity', posts: '567 posts', trend: '+6%' },
    { tag: 'AI', posts: '2.1k posts', trend: '+20%' },
  ]

  const categories = [
    { name: 'Design', icon: '🎨', count: '12k' },
    { name: 'Technology', icon: '💻', count: '28k' },
    { name: 'Business', icon: '💼', count: '15k' },
    { name: 'Photography', icon: '📷', count: '9.2k' },
    { name: 'Travel', icon: '✈️', count: '6.8k' },
    { name: 'Food', icon: '🍽️', count: '11k' },
  ]

  const nearbyEvents = [
    { name: 'Design Meetup', location: 'Downtown', time: 'Today 6PM', attendees: 23 },
    { name: 'Tech Conference', location: 'Convention Center', time: 'Tomorrow 9AM', attendees: 156 },
    { name: 'Startup Pitch', location: 'Co-working Space', time: 'Fri 2PM', attendees: 45 },
  ]

  return (
    <div className="flex-1 overflow-auto pb-20">
      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts, people, topics..."
            className="pl-10 bg-muted/50"
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className="mb-4">Explore Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <Card key={category.name} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{category.icon}</div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} posts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5" />
            <h2>Trending Topics</h2>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <Card key={topic.tag} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <span className="text-xs font-medium text-primary">#{index + 1}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{topic.tag}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{topic.posts}</p>
                      </div>
                    </div>
                    <Badge variant={topic.trend.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                      {topic.trend}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Events */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5" />
            <h2>Nearby Events</h2>
          </div>
          <div className="space-y-3">
            {nearbyEvents.map((event) => (
              <Card key={event.name} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{event.name}</h3>
                      <p className="text-sm text-muted-foreground">{event.location} • {event.time}</p>
                      <p className="text-xs text-muted-foreground mt-1">{event.attendees} attendees</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
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