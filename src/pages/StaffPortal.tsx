import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  Users, 
  UserCheck,
  Clock,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  Calendar,
  BookOpen,
  FileText,
  Settings,
  Bell,
  TrendingUp,
  Activity,
  Briefcase,
  GraduationCap
} from "lucide-react";

const StaffPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pendingRegistrations = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      email: "emily.johnson@university.edu",
      department: "Computer Science",
      position: "Associate Professor",
      experience: "8 years",
      submittedDate: "Dec 10, 2024",
      documents: ["CV", "Teaching Certificates", "Research Papers"],
      status: "pending"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "m.chen@university.edu",
      department: "Business Administration",
      position: "Assistant Professor",
      experience: "5 years",
      submittedDate: "Dec 9, 2024",
      documents: ["CV", "PhD Certificate", "Publications List"],
      status: "under_review"
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      email: "s.williams@university.edu",
      department: "Mathematics",
      position: "Senior Lecturer",
      experience: "12 years",
      submittedDate: "Dec 8, 2024",
      documents: ["CV", "Degree Certificates", "Experience Letters"],
      status: "approved"
    }
  ];

  const activities = [
    {
      id: 1,
      staff: "Dr. John Smith",
      action: "Created new course material",
      target: "Advanced Algorithms",
      timestamp: "2 hours ago",
      type: "content"
    },
    {
      id: 2,
      staff: "Prof. Lisa Davis",
      action: "Moderated forum discussion",
      target: "Career Guidance Thread",
      timestamp: "4 hours ago",
      type: "moderation"
    },
    {
      id: 3,
      staff: "Dr. Mike Johnson",
      action: "Approved student registration",
      target: "Alumni Network",
      timestamp: "6 hours ago",
      type: "approval"
    },
    {
      id: 4,
      staff: "Prof. Sarah Chen",
      action: "Updated course curriculum",
      target: "Data Science Program",
      timestamp: "1 day ago",
      type: "content"
    }
  ];

  const feedbackQueue = [
    {
      id: 1,
      type: "Alumni Feedback",
      author: "John Doe (2020)",
      subject: "Suggestion for networking events",
      content: "I think we should have more industry-specific networking events...",
      sentiment: "positive",
      priority: "medium",
      submittedDate: "Dec 11, 2024",
      status: "pending"
    },
    {
      id: 2,
      type: "Student Feedback",
      author: "Jane Smith",
      subject: "Course content outdated",
      content: "The web development course materials need updating...",
      sentiment: "negative",
      priority: "high",
      submittedDate: "Dec 10, 2024",
      status: "in_progress"
    },
    {
      id: 3,
      type: "General Feedback",
      author: "Anonymous",
      subject: "Website usability",
      content: "The alumni portal is very user-friendly and helpful...",
      sentiment: "positive",
      priority: "low",
      submittedDate: "Dec 9, 2024",
      status: "resolved"
    }
  ];

  const staffMembers = [
    {
      id: 1,
      name: "Dr. Robert Thompson",
      email: "r.thompson@university.edu",
      department: "Engineering",
      position: "Department Head",
      joinDate: "Jan 2020",
      courses: 3,
      students: 150,
      status: "active",
      lastActive: "Online now"
    },
    {
      id: 2,
      name: "Prof. Jennifer Liu",
      email: "j.liu@university.edu",
      department: "Business",
      position: "Professor",
      joinDate: "Mar 2019",
      courses: 2,
      students: 120,
      status: "active",
      lastActive: "2 hours ago"
    },
    {
      id: 3,
      name: "Dr. Marcus Williams",
      email: "m.williams@university.edu",
      department: "Arts & Sciences",
      position: "Associate Professor",
      joinDate: "Sep 2021",
      courses: 4,
      students: 200,
      status: "inactive",
      lastActive: "1 week ago"
    }
  ];

  const dashboardStats = [
    { label: "Active Staff", value: "45", change: "+3", icon: UserCheck, color: "text-green-600" },
    { label: "Pending Reviews", value: "12", change: "-2", icon: Clock, color: "text-yellow-600" },
    { label: "Student Engagement", value: "87%", change: "+5%", icon: TrendingUp, color: "text-blue-600" },
    { label: "Feedback Queue", value: "8", change: "0", icon: MessageSquare, color: "text-purple-600" },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      case "neutral":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "approved":
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "under_review":
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Staff Portal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manage student activities, moderate content, and oversee academic operations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                            {stat.change !== '0' ? `${stat.change} from last week` : 'No change'}
                          </p>
                        </div>
                        <Icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest staff and system activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          {activity.type === 'content' && <BookOpen className="h-5 w-5 text-blue-600" />}
                          {activity.type === 'moderation' && <MessageSquare className="h-5 w-5 text-yellow-600" />}
                          {activity.type === 'approval' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.staff}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.target} • {activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common staff operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex-col">
                      <UserCheck className="h-6 w-6 mb-2" />
                      <span className="text-sm">Approve Registration</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <MessageSquare className="h-6 w-6 mb-2" />
                      <span className="text-sm">Moderate Content</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <FileText className="h-6 w-6 mb-2" />
                      <span className="text-sm">Review Feedback</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      <span className="text-sm">View Reports</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Staff Registrations */}
          <TabsContent value="registrations" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Staff Registration Requests</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {pendingRegistrations.map((registration) => (
                <Card key={registration.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{registration.name.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{registration.name}</h3>
                          <p className="text-sm text-muted-foreground">{registration.email}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm">{registration.position}</span>
                            <span className="text-sm text-muted-foreground">{registration.department}</span>
                            <span className="text-sm text-muted-foreground">{registration.experience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(registration.status)}
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        {registration.status === 'pending' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                      <p>Submitted: {registration.submittedDate}</p>
                      <p>Documents: {registration.documents.join(', ')}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Monitoring */}
          <TabsContent value="activities" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Activity Monitoring</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {activity.type === 'content' && <BookOpen className="h-5 w-5 text-blue-600" />}
                          {activity.type === 'moderation' && <MessageSquare className="h-5 w-5 text-yellow-600" />}
                          {activity.type === 'approval' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{activity.staff}</h3>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                          <p className="text-sm font-medium text-primary">{activity.target}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                        <Badge variant="outline" className="mt-1 capitalize">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Moderation */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Feedback Moderation</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Priority
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Manual Entry
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {feedbackQueue.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{feedback.subject}</h3>
                          <Badge variant="outline">{feedback.type}</Badge>
                          <Badge className={getPriorityColor(feedback.priority)}>
                            {feedback.priority}
                          </Badge>
                          <Badge className={getSentimentColor(feedback.sentiment)}>
                            {feedback.sentiment}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">by {feedback.author}</p>
                        <p className="text-sm">{feedback.content}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(feedback.status)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">Submitted: {feedback.submittedDate}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {feedback.status === 'pending' && (
                          <>
                            <Button size="sm">Respond</Button>
                            <Button size="sm" variant="outline">Mark Resolved</Button>
                          </>
                        )}
                      </div>
                    </div>
                    {feedback.status === 'in_progress' && (
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <Textarea placeholder="Add your response..." className="mb-2" />
                        <div className="flex space-x-2">
                          <Button size="sm">Send Response</Button>
                          <Button size="sm" variant="outline">Save Draft</Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Staff Management */}
          <TabsContent value="staff" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Staff Directory</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search staff..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff Member</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffMembers.map((staff) => (
                  <TableRow key={staff.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{staff.name}</div>
                          <div className="text-sm text-muted-foreground">{staff.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{staff.department}</TableCell>
                    <TableCell>{staff.position}</TableCell>
                    <TableCell>{staff.courses}</TableCell>
                    <TableCell>{staff.students}</TableCell>
                    <TableCell>{getStatusBadge(staff.status)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{staff.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffPortal;