import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap,
  Briefcase,
  Calendar,
  User,
  BookOpen,
  Clock,
  Star,
  TrendingUp,
  ArrowRight,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const quickActions = [
    {
      title: "Mentorship",
      description: "Connect with alumni mentors for guidance",
      icon: User,
      href: "/student/mentorship",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Internships", 
      description: "Find internship opportunities",
      icon: Briefcase,
      href: "/student/internships",
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Webinars",
      description: "Join educational webinars and workshops",
      icon: BookOpen,
      href: "/student/webinars",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Training",
      description: "Access skill development programs",
      icon: Target,
      href: "/student/training",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Feedback",
      description: "Share your experience and get support",
      icon: Star,
      href: "/student/feedback",
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  const recentActivities = [
    { text: "Completed Web Development Workshop", time: "2 hours ago", type: "training" },
    { text: "New mentorship session scheduled", time: "5 hours ago", type: "mentorship" },
    { text: "Applied to Software Internship at TechCorp", time: "1 day ago", type: "internship" },
    { text: "Joined AI/ML Fundamentals webinar", time: "2 days ago", type: "webinar" }
  ];

  const skillProgress = [
    { name: "Web Development", progress: 75, color: "bg-blue-500" },
    { name: "Data Science", progress: 60, color: "bg-green-500" },
    { name: "Mobile Development", progress: 45, color: "bg-purple-500" },
    { name: "UI/UX Design", progress: 30, color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-success to-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground">Track your progress and explore new opportunities.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant="secondary" className="px-3 py-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              Active Student
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Computer Science
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Year 3
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Active internship applications</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Active mentor connections</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Webinars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Attended this semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Skills earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Student Portal Features</CardTitle>
                <CardDescription>Access resources to accelerate your academic and career growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

                {/* Skill Progress */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium text-foreground mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Skill Development Progress
                  </h3>
                  <div className="space-y-4">
                    {skillProgress.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
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

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="h-4 w-4 text-destructive" />
                      <h4 className="font-medium text-sm text-destructive">Google Internship</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Application due in 3 days</p>
                  </div>
                  
                  <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="h-4 w-4 text-orange-600" />
                      <h4 className="font-medium text-sm text-orange-700">AI Workshop</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Registration ends in 1 week</p>
                  </div>
                </div>
                
                <Link to="/applications">
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View All Deadlines
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/resume-builder">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      Resume Builder
                    </Button>
                  </Link>
                  <Link to="/interview-prep">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      Interview Preparation
                    </Button>
                  </Link>
                  <Link to="/coding-practice">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      Coding Practice
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;