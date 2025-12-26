import { Bell, Search, Settings } from 'lucide-react'
import { Button } from './ui/button'

interface HeaderProps {
  title: string
  showSearch?: boolean
  showNotifications?: boolean
  showSettings?: boolean
}

export function Header({ title, showSearch = false, showNotifications = false, showSettings = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <h1 className="text-lg font-medium">{title}</h1>
        <div className="flex items-center gap-2">
          {showSearch && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
          )}
          {showNotifications && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="h-4 w-4" />
            </Button>
          )}
          {showSettings && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Settings className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}