import { Settings, Edit3, Share, MoreHorizontal } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function ProfileScreen() {
  const user = {
    name: 'Jordan Smith',
    username: '@jordansmith',
    bio: 'Product Designer & Creative Director. Passionate about building intuitive experiences that matter.',
    avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    following: 248,
    followers: 1420,
    posts: 126,
    location: 'San Francisco, CA',
    website: 'jordansmith.design',
    joinDate: 'Joined March 2022'
  }

  const stats = [
    { label: 'Posts', value: user.posts },
    { label: 'Following', value: user.following },
    { label: 'Followers', value: user.followers }
  ]

  const achievements = [
    { name: 'Early Adopter', icon: '🌟', description: 'One of the first 1000 users' },
    { name: 'Top Creator', icon: '🏆', description: 'Most liked posts this month' },
    { name: 'Community Leader', icon: '👑', description: 'Active community member' }
  ]

  const recentPosts = [
    { id: 1, content: 'Just finished an amazing design sprint!', likes: 42, comments: 8 },
    { id: 2, content: 'New project coming soon. Can\'t wait to share!', likes: 67, comments: 12 },
    { id: 3, content: 'Thoughts on the future of design systems...', likes: 89, comments: 24 }
  ]

  return (
    <div className="flex-1 overflow-auto pb-20">
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-lg">{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-xl font-medium">{user.name}</h1>
                <p className="text-muted-foreground">{user.username}</p>
                <div className="flex items-center gap-4 mt-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-medium">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm">{user.bio}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span>📍 {user.location}</span>
              <span>🌐 {user.website}</span>
              <span>📅 {user.joinDate}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="mb-3">Achievements</h2>
          <div className="grid grid-cols-1 gap-3">
            {achievements.map((achievement) => (
              <Card key={achievement.name}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium text-sm">{achievement.name}</h3>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="space-y-3">
            {recentPosts.map((post) => (
              <Card key={post.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <p className="text-sm mb-3">{post.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="media" className="text-center py-8">
            <p className="text-muted-foreground">No media posts yet</p>
          </TabsContent>
          
          <TabsContent value="likes" className="text-center py-8">
            <p className="text-muted-foreground">Liked posts are private</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}