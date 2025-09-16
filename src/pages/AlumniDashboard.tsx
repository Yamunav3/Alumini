import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Heart,
  Trophy,
  MessageCircle,
  BookOpen,
  User,
  TrendingUp,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniDashboard = () => {
  const quickActions = [
    {
      title: "Celebrations",
      description: "Join alumni celebrations and milestone events",
      icon: Trophy,
      href: "/alumni/celebrations",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      title: "Mentorship",
      description: "Become a mentor or find guidance",
      icon: User,
      href: "/alumni/mentorship",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Forums",
      description: "Engage in community discussions",
      icon: MessageCircle,
      href: "/alumni/forums",
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Directory",
      description: "Connect with fellow alumni",
      icon: Users,
      href: "/alumni/directory",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Feedback",
      description: "Share your experience and suggestions",
      icon: Star,
      href: "/alumni/feedback",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const recentActivities = [
    { text: "Alumni mixer event registration opened", time: "2 hours ago", type: "event" },
    { text: "New mentorship request from John Doe", time: "4 hours ago", type: "mentorship" },
    { text: "Monthly newsletter published", time: "1 day ago", type: "news" },
    { text: "Career fair networking session", time: "2 days ago", type: "career" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alumni Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening in your network.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant="secondary" className="px-3 py-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              Alumni Member
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Active Since 2020
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Network Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+23 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Active connections</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Events Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,500</div>
              <p className="text-xs text-muted-foreground">Total donated</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Alumni Portal Features</CardTitle>
                <CardDescription>Access your alumni community resources and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={index} to={action.href}>
                        <div className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50 group cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${action.color}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {action.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Stay updated with the latest news</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-4" size="sm">
                  View All Activities
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm">Alumni Networking Night</h4>
                    <p className="text-xs text-muted-foreground">Dec 15, 2024 • 6:00 PM</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm">Career Development Workshop</h4>
                    <p className="text-xs text-muted-foreground">Dec 20, 2024 • 2:00 PM</p>
                  </div>
                </div>
                
                <Link to="/events">
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View All Events
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;