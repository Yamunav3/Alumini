import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Phone,
  GraduationCap,
  Building,
  Shield,
  ArrowLeft,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'student' | 'alumni' | 'staff' | 'admin' | null>(null);

  const roles = [
    {
      id: 'student' as const,
      title: 'Student',
      description: 'Access mentorships, internships, webinars, and training',
      icon: GraduationCap,
      color: 'bg-success'
    },
    {
      id: 'alumni' as const,
      title: 'Alumni',
      description: 'Access alumni network, job portal, and mentorship',
      icon: User,
      color: 'bg-primary'
    },
    {
      id: 'staff' as const,
      title: 'Staff',
      description: 'Manage students, moderate content, and oversee activities',
      icon: Building,
      color: 'bg-secondary'
    },
    {
      id: 'admin' as const,
      title: 'Administrator',
      description: 'Full system access and management capabilities',
      icon: Shield,
      color: 'bg-destructive'
    }
  ];

  if (selectedRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <Button
            variant="ghost"
            onClick={() => setSelectedRole(null)}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to role selection
          </Button>

          <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className={`p-4 ${roles.find(r => r.id === selectedRole)?.color} rounded-2xl shadow-lg`}>
                  {(() => {
                    const role = roles.find(r => r.id === selectedRole);
                    const Icon = role?.icon || User;
                    return <Icon className="h-8 w-8 text-white" />;
                  })()}
                </div>
              </div>
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join as {roles.find(r => r.id === selectedRole)?.title}
              </CardTitle>
              <CardDescription className="text-lg">
                Create your account to start your journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-background/50"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Role-specific fields */}
              {(selectedRole === 'student' || selectedRole === 'alumni') && (
                <>
                  <div>
                    <Label htmlFor="university">University/Institution</Label>
                    <Input
                      id="university"
                      placeholder="University Name"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="degree">Degree</Label>
                      <Input
                        id="degree"
                        placeholder="Bachelor's in Computer Science"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="graduationYear">Graduation Year</Label>
                      <Input
                        id="graduationYear"
                        type="number"
                        placeholder="2024"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </>
              )}

              {selectedRole === 'alumni' && (
                <>
                  <div>
                    <Label htmlFor="currentCompany">Current Company</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="currentCompany"
                        placeholder="Company Name"
                        className="pl-10 bg-background/50"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      placeholder="Software Engineer"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {selectedRole === 'student' && (
                <>
                  <div>
                    <Label htmlFor="year">Current Year</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Textarea
                      id="interests"
                      placeholder="Technology, Business, Marketing, etc."
                      className="bg-background/50"
                    />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="City, Country"
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                Create Account
              </Button>

              <div className="mt-6">
                <Separator className="my-4" />
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?
                  </p>
                  <Link to="/login">
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                      Sign in here
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Asthra</span>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Community</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with alumni, find mentorship opportunities, and build your professional network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card 
                key={role.id}
                className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 ${role.color} rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                    Join as {role.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Need help?
            <Link to="/" className="text-primary hover:underline ml-1 font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;