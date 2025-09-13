import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChatBot from "./ChatBot";
import { 
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  UserCheck,
  Heart,
  BarChart3,
  LogIn,
  Menu,
  X,
  Calendar,
  Building,
  User,
  GraduationCap,
  Trophy,
  UserPlus
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Alumni Network", href: "/alumni", icon: Users },
    { name: "Career Portal", href: "/careers", icon: Briefcase },
    { name: "Student Portal", href: "/student-portal", icon: GraduationCap },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Gamification", href: "/gamification", icon: Trophy },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Staff Portal", href: "/staff", icon: UserCheck },
    { name: "Donations", href: "/donations", icon: Heart },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Admin", href: "/admin", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                Astra
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

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/signup">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
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
              <Link
                to="/signup"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserPlus className="h-5 w-5" />
                <span>Sign Up</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Astra</h3>
              <p className="text-muted-foreground text-sm">
                Connecting alumni, empowering futures, and building lasting relationships.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/alumni" className="hover:text-foreground">Alumni Directory</Link></li>
                <li><Link to="/careers" className="hover:text-foreground">Job Portal</Link></li>
                <li><Link to="/donations" className="hover:text-foreground">Support Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Astra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;