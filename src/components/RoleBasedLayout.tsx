import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ChatBot from "./ChatBot";
import { 
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  UserCheck,
  Heart,
  BarChart3,
  Menu,
  X,
  Calendar,
  User,
  Trophy,
  Bell,
  LogOut,
  Info
} from "lucide-react";

interface RoleBasedLayoutProps {
  children: React.ReactNode;
  userRole: 'student' | 'alumni' | 'staff' | 'admin';
}

const RoleBasedLayout = ({ children, userRole }: RoleBasedLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Define navigation based on user role
  const getNavigation = () => {
    const baseNavigation = [
      { name: "Home", href: "/", icon: Home },
    ];

    switch (userRole) {
      case 'alumni':
        return [
          ...baseNavigation,
          { name: "Career Portal", href: "/careers", icon: Briefcase },
          { name: "Events", href: "/events", icon: Calendar },
          { name: "Donations", href: "/donations", icon: Heart },
          { name: "Gamification", href: "/gamification", icon: Trophy },
          { name: "About Us", href: "/about", icon: Info },
        ];
      case 'student':
        return [
          ...baseNavigation,
          { name: "Career Portal", href: "/careers", icon: Briefcase },
          { name: "Events", href: "/events", icon: Calendar },
        ];
      case 'admin':
        return [
          ...baseNavigation,
          { name: "Career Portal", href: "/careers", icon: Briefcase },
          { name: "About Us", href: "/about", icon: Info },
          { name: "Events", href: "/events", icon: Calendar },
          { name: "Analytics", href: "/analytics", icon: BarChart3 },
        ];
      case 'staff':
        return [
          ...baseNavigation,
          { name: "Career Portal", href: "/careers", icon: Briefcase },
          { name: "About Us", href: "/about", icon: Info },
          { name: "Events", href: "/events", icon: Calendar },
          { name: "Analytics", href: "/analytics", icon: BarChart3 },
        ];
      default:
        return baseNavigation;
    }
  };

  const navigation = getNavigation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
                  Asthra
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs flex items-center justify-center text-white">
                  3
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white">
                        {userRole.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white text-xs">
                        {userRole.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {userRole.charAt(0).toUpperCase() + userRole.slice(1)} User
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@asthra.com
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="border-t border-border pt-3 mt-3">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/notifications"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* ChatBot */}
      <ChatBot />

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Asthra
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting alumni, empowering futures, and building lasting relationships.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Career Portal</Link></li>
                <li><Link to="/events" className="hover:text-foreground transition-colors">Events</Link></li>
                <li><Link to="/profile" className="hover:text-foreground transition-colors">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Asthra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoleBasedLayout;