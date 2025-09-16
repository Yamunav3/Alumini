import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  Users,
  BarChart3,
  Settings,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Activity,
  Database,
  UserCheck,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const adminActions = [
    {
      title: "User Management",
      description: "Manage students, alumni, and staff accounts",
      icon: Users,
      href: "/admin/users",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "System Analytics",
      description: "Monitor platform performance and usage",
      icon: BarChart3,
      href: "/admin/analytics", 
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Event Management",
      description: "Oversee all platform events and activities",
      icon: Calendar,
      href: "/admin/events",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Content Moderation", 
      description: "Review and moderate platform content",
      icon: Shield,
      href: "/admin/moderation",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "System Settings",
      description: "Configure platform settings and preferences",
      icon: Settings,
      href: "/admin/settings",
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Reports & Insights",
      description: "Generate detailed system reports",
      icon: Database,
      href: "/admin/reports",
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  const systemAlerts = [
    { text: "Server maintenance scheduled for tonight", type: "warning", time: "30 mins ago" },
    { text: "New user registrations increased by 25%", type: "success", time: "2 hours ago" },
    { text: "Database backup completed successfully", type: "info", time: "4 hours ago" },
    { text: "Content moderation queue requires attention", type: "warning", time: "6 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-destructive to-orange-500 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage and monitor the Asthra platform.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant="destructive" className="px-3 py-1">
              <Shield className="h-3 w-3 mr-1" />
              System Administrator
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Full Access
            </Badge>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,247</div>
              <p className="text-xs text-muted-foreground">+412 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,358</div>
              <p className="text-xs text-muted-foreground">Current active users</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-success">99.8%</div>
                <Activity className="h-4 w-4 text-success" />
              </div>
              <p className="text-xs text-muted-foreground">Uptime status</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-orange-600">7</div>
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Admin Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Administrative Functions</CardTitle>
                <CardDescription>Access comprehensive system management tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adminActions.map((action, index) => {
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

          {/* System Alerts & Status */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Recent system notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'warning' ? 'bg-orange-500' :
                        alert.type === 'success' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{alert.text}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-4" size="sm">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Students</span>
                    <span className="font-medium">8,420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Alumni</span>
                    <span className="font-medium">5,832</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Staff</span>
                    <span className="font-medium">895</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Jobs</span>
                    <span className="font-medium">234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Events This Month</span>
                    <span className="font-medium">42</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Approve Pending Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Monthly Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Database className="h-4 w-4 mr-2" />
                    Backup System Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;