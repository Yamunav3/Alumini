import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown,
  Star,
  Users,
  Briefcase,
  GraduationCap,
  Building,
  Shield,
  User,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const Welcome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loginRoles = [
    {
      id: 'student',
      title: 'Student Login',
      description: 'Access mentorships, internships & training',
      icon: GraduationCap,
      href: '/login?role=student'
    },
    {
      id: 'alumni',
      title: 'Alumni Login', 
      description: 'Connect with network & career opportunities',
      icon: User,
      href: '/login?role=alumni'
    },
    {
      id: 'staff',
      title: 'Staff Login',
      description: 'Manage activities & student support',
      icon: Building,
      href: '/login?role=staff'
    },
    {
      id: 'admin',
      title: 'Admin Login',
      description: 'Full system management access',
      icon: Shield,
      href: '/login?role=admin'
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Alumni Network",
      description: "Connect with thousands of successful alumni across industries"
    },
    {
      icon: Briefcase,
      title: "Career Opportunities", 
      description: "Access exclusive job postings and career development resources"
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Mentorship programs, webinars, and skill development initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Asthra
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Career Portal
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    Login <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {loginRoles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <DropdownMenuItem key={role.id} asChild>
                        <Link to={role.href} className="flex items-center space-x-3 py-3">
                          <Icon className="h-4 w-4" />
                          <div>
                            <p className="text-sm font-medium">{role.title}</p>
                            <p className="text-xs text-muted-foreground">{role.description}</p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/signup">
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Sign Up
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link to="#home" className="block px-3 py-2 text-sm font-medium text-foreground">
                Home
              </Link>
              <Link to="#about" className="block px-3 py-2 text-sm font-medium text-muted-foreground">
                About
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-muted-foreground">
                Career Portal
              </Link>
              <div className="pt-2 border-t border-border mt-2">
                {loginRoles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <Link
                      key={role.id}
                      to={role.href}
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-muted-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{role.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Star className="h-3 w-3 mr-1" />
              Welcome to Asthra
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Connect. <span className="text-primary">Grow.</span> <span className="text-secondary">Succeed.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our thriving community of students, alumni, and professionals. 
              Build meaningful connections, access career opportunities, and shape your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 px-8">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="px-8">
                    Sign In <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
                  {loginRoles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <DropdownMenuItem key={role.id} asChild>
                        <Link to={role.href} className="flex items-center space-x-3 py-3">
                          <Icon className="h-5 w-5" />
                          <div>
                            <p className="text-sm font-medium">{role.title}</p>
                            <p className="text-xs text-muted-foreground">{role.description}</p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-center">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Asthra
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Asthra is more than just a platform – it's a thriving ecosystem that connects students, 
              alumni, staff, and industry professionals to create opportunities, foster growth, and build lasting relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </div>
                <CardDescription>
                  To bridge the gap between academic learning and professional success by creating 
                  meaningful connections within our community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Our Community</CardTitle>
                </div>
                <CardDescription>
                  Join thousands of students, alumni, and professionals who are actively 
                  shaping the future through collaboration and mentorship.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Impact</CardTitle>
                </div>
                <CardDescription>
                  Empowering career growth through mentorship programs, job placements, 
                  and continuous learning opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                <li><Link to="#home" className="hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="#about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Career Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Login As</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/login?role=student" className="hover:text-foreground transition-colors">Student</Link></li>
                <li><Link to="/login?role=alumni" className="hover:text-foreground transition-colors">Alumni</Link></li>
                <li><Link to="/login?role=staff" className="hover:text-foreground transition-colors">Staff</Link></li>
                <li><Link to="/login?role=admin" className="hover:text-foreground transition-colors">Admin</Link></li>
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

export default Welcome;