import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building,
  Users,
  Activity,
  Star,
  Calendar,
  MessageSquare,
  UserCheck,
  ClipboardList,
  TrendingUp,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const StaffDashboard = () => {
  const staffActions = [
    {
      title: "Activities Management",
      description: "Organize and oversee student activities",
      icon: Activity,
      href: "/staff/activities",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Student Feedback",
      description: "Review and respond to student feedback",
      icon: Star,
      href: "/staff/feedback",
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Staff Management", 
      description: "Coordinate with staff members and teams",
      icon: UserCheck,
      href: "/staff/management",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const recentTasks = [
    { text: "Review event proposal from Computer Science Club", priority: "high", time: "1 hour ago" },
    { text: "Respond to student inquiry about internship program", priority: "medium", time: "3 hours ago" },
    { text: "Coordinate with alumni mentorship coordinator", priority: "medium", time: "5 hours ago" },
    { text: "Update activity guidelines document", priority: "low", time: "1 day ago" }
  ];

  const upcomingEvents = [
    { name: "Student Orientation Session", date: "Dec 15, 2024", time: "10:00 AM", attendees: 45 },
    { name: "Career Fair Preparation", date: "Dec 18, 2024", time: "2:00 PM", attendees: 12 },
    { name: "Alumni Guest Speaker Event", date: "Dec 22, 2024", time: "4:00 PM", attendees: 120 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-secondary to-primary rounded-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Staff Dashboard</h1>
              <p className="text-muted-foreground">Manage activities, support students, and coordinate operations.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Building className="h-3 w-3 mr-1" />
              Staff Member
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Student Affairs
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">Under your supervision</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold">12</div>
                <AlertCircle className="h-4 w-4 text-orange-500" />
              </div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Events This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Organized activities</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Feedback Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-success">4.8</div>
                <Star className="h-4 w-4 text-success fill-current" />
              </div>
              <p className="text-xs text-muted-foreground">Student satisfaction</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Staff Functions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Staff Portal Features</CardTitle>
                <CardDescription>Access tools to support student success and manage operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {staffActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={index} to={action.href}>
                        <div className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50 group cursor-pointer">
                          <div className="text-center space-y-3">
                            <div className={`p-3 rounded-lg ${action.color} mx-auto w-fit`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-center">
                                {action.title}
                              </h3>
                              <p className="text-sm text-muted-foreground text-center">{action.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Upcoming Events */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium text-foreground mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Upcoming Events You're Managing
                  </h3>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-foreground">{event.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {event.attendees} attendees
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/events">
                    <Button variant="outline" className="w-full mt-4" size="sm">
                      Manage All Events
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>Items requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(task.priority)}`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{task.text}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {task.priority} priority
                          </Badge>
                          <p className="text-xs text-muted-foreground">{task.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-4" size="sm">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Department Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Clubs</span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Week's Events</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pending Approvals</span>
                    <span className="font-medium text-orange-600">7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Budget Utilization</span>
                    <span className="font-medium">68%</span>
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
                    <ClipboardList className="h-4 w-4 mr-2" />
                    Create Activity Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Announcement
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Schedule Team Meeting
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

export default StaffDashboard;