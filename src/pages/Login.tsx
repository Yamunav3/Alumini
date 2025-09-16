import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
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
      <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Button
            variant="ghost"
            onClick={() => setSelectedRole(null)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to role selection
          </Button>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`p-3 ${roles.find(r => r.id === selectedRole)?.color} rounded-lg`}>
                  {(() => {
                    const role = roles.find(r => r.id === selectedRole);
                    const Icon = role?.icon || User;
                    return <Icon className="h-6 w-6 text-white" />;
                  })()}
                </div>
              </div>
              <CardTitle className="text-2xl">
                {roles.find(r => r.id === selectedRole)?.title} Login
              </CardTitle>
              <CardDescription>
                Sign in to access your {selectedRole} dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email Login</TabsTrigger>
                  <TabsTrigger value="otp">OTP Login</TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
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
                          className="pl-10 pr-10"
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
                    <Button className="w-full">Sign In</Button>
                  </div>
                </TabsContent>

                <TabsContent value="otp" className="space-y-4">
                  {!otpSent ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Button 
                        className="w-full"
                        onClick={() => setOtpSent(true)}
                      >
                        Send OTP
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <CheckCircle className="h-12 w-12 text-success mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground">
                          OTP sent to your phone number
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          maxLength={6}
                          className="text-center text-lg"
                        />
                      </div>
                      <Button className="w-full">Verify OTP</Button>
                      <Button 
                        variant="ghost" 
                        className="w-full"
                        onClick={() => setOtpSent(false)}
                      >
                        Resend OTP
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <Separator className="my-4" />
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?
                  </p>
                  <Link to="/signup">
                    <Button variant="link" className="p-0">
                      Register as {roles.find(r => r.id === selectedRole)?.title}
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
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold">Asthra</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Choose Your Role</h1>
          <p className="text-muted-foreground mt-2">
            Select your role to access the appropriate dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card 
                key={role.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${role.color} rounded-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-center">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Continue as {role.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need help choosing? 
            <Link to="/" className="text-primary hover:underline ml-1">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;