import { Heart, MessageCircle, UserPlus, Bell } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      action: 'liked your post',
      content: 'about modern workspace design',
      time: '2m ago',
      isNew: true
    },
    {
      id: 2,
      type: 'comment',
      user: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      action: 'commented on your post',
      content: '"Great insights on productivity!"',
      time: '15m ago',
      isNew: true
    },
    {
      id: 3,
      type: 'follow',
      user: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      action: 'started following you',
      content: '',
      time: '1h ago',
      isNew: false
    },
    {
      id: 4,
      type: 'like',
      user: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      action: 'liked your comment',
      content: 'on Tech Conference post',
      time: '2h ago',
      isNew: false
    },
    {
      id: 5,
      type: 'mention',
      user: 'David Lee',
      avatar: 'https://images.unsplash.com/photo-1724435811349-32d27f4d5806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1ODM1NjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      action: 'mentioned you in a post',
      content: 'about design collaboration',
      time: '3h ago',
      isNew: false
    }
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="h-4 w-4 text-red-500" />
      case 'comment':
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case 'follow':
        return <UserPlus className="h-4 w-4 text-green-500" />
      case 'mention':
        return <Bell className="h-4 w-4 text-purple-500" />
      default:
        return <Bell className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="flex-1 overflow-auto pb-20">
      <div className="p-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Notifications</h2>
            <p className="text-sm text-muted-foreground">
              {notifications.filter(n => n.isNew).length} new notifications
            </p>
          </div>
          <Button variant="ghost" size="sm">
            Mark all read
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`cursor-pointer transition-colors ${
                notification.isNew 
                  ? 'bg-accent/30 hover:bg-accent/50 border-primary/20' 
                  : 'hover:bg-accent/50'
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={notification.avatar} alt={notification.user} />
                      <AvatarFallback>{notification.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 border border-border">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{notification.user}</span>
                          {' '}
                          <span className="text-muted-foreground">{notification.action}</span>
                          {notification.content && (
                            <>
                              {' '}
                              <span className="text-foreground">{notification.content}</span>
                            </>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {notification.isNew && (
                          <Badge variant="default" className="h-2 w-2 p-0 rounded-full">
                            <span className="sr-only">New</span>
                          </Badge>
                        )}
                        {notification.type === 'follow' && (
                          <Button variant="outline" size="sm" className="text-xs h-7">
                            Follow back
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          <Button variant="ghost" size="sm">
            Load more notifications
          </Button>
        </div>
      </div>
    </div>
  )
}