import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  Users, 
  UserCheck,
  UserX,
  Building,
  Calendar,
  BookOpen,
  Briefcase,
  Heart,
  BarChart3,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Award,
  GraduationCap
} from "lucide-react";

const AdminPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pendingVerifications = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      type: "Alumni",
      batch: "2020",
      course: "Computer Science",
      submittedDate: "Dec 10, 2024",
      documents: ["Degree Certificate", "ID Proof"],
      status: "pending"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      type: "Staff",
      department: "Engineering",
      position: "Assistant Professor",
      submittedDate: "Dec 9, 2024",
      documents: ["Employment Letter", "ID Proof"],
      status: "pending"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@email.com",
      type: "Alumni",
      batch: "2019",
      course: "Business Administration",
      submittedDate: "Dec 8, 2024",
      documents: ["Degree Certificate", "Experience Letter"],
      status: "under_review"
    }
  ];

  const institutions = [
    {
      id: 1,
      name: "School of Engineering",
      established: "1985",
      students: 2500,
      faculty: 180,
      courses: 15,
      status: "active"
    },
    {
      id: 2,
      name: "Business School",
      established: "1990",
      students: 1800,
      faculty: 120,
      courses: 8,
      status: "active"
    },
    {
      id: 3,
      name: "Arts & Sciences",
      established: "1988",
      students: 3200,
      faculty: 220,
      courses: 25,
      status: "active"
    }
  ];

  const courses = [
    {
      id: 1,
      name: "Computer Science",
      duration: "4 years",
      department: "Engineering",
      students: 450,
      alumni: 1200,
      status: "active"
    },
    {
      id: 2,
      name: "Business Administration",
      duration: "2 years",
      department: "Business",
      students: 320,
      alumni: 890,
      status: "active"
    },
    {
      id: 3,
      name: "Data Science",
      duration: "4 years",
      department: "Engineering",
      students: 180,
      alumni: 45,
      status: "new"
    }
  ];

  const donations = [
    {
      id: 1,
      donor: "Sarah Johnson",
      amount: "$5,000",
      purpose: "Scholarship Fund",
      date: "Dec 12, 2024",
      status: "completed",
      method: "Bank Transfer"
    },
    {
      id: 2,
      donor: "Microsoft Corp",
      amount: "$50,000",
      purpose: "Infrastructure Development",
      date: "Dec 10, 2024",
      status: "completed",
      method: "Corporate Donation"
    },
    {
      id: 3,
      donor: "Alex Rivera",
      amount: "$1,500",
      purpose: "General Fund",
      date: "Dec 8, 2024",
      status: "pending",
      method: "Credit Card"
    }
  ];

  const events = [
    {
      id: 1,
      name: "Annual Alumni Meet",
      date: "Jan 15, 2025",
      location: "Main Campus",
      organizer: "Alumni Committee",
      attendees: 450,
      status: "upcoming"
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      date: "Dec 20, 2024",
      location: "Virtual",
      organizer: "Engineering Dept",
      attendees: 890,
      status: "active"
    },
    {
      id: 3,
      name: "Career Fair",
      date: "Nov 30, 2024",
      location: "Exhibition Hall",
      organizer: "Career Services",
      attendees: 650,
      status: "completed"
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      postedBy: "John Smith",
      applications: 45,
      date: "Dec 10, 2024",
      status: "active"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      postedBy: "Sarah Chen",
      applications: 23,
      date: "Dec 8, 2024",
      status: "active"
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Inc",
      postedBy: "Mike Davis",
      applications: 18,
      date: "Dec 5, 2024",
      status: "expired"
    }
  ];

  const dashboardStats = [
    { label: "Total Alumni", value: "15,240", change: "+12%", icon: Users, color: "text-blue-600" },
    { label: "Active Staff", value: "245", change: "+5%", icon: UserCheck, color: "text-green-600" },
    { label: "Pending Verifications", value: "23", change: "-8%", icon: Clock, color: "text-yellow-600" },
    { label: "Total Donations", value: "$127K", change: "+25%", icon: Heart, color: "text-red-600" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "expired":
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "under_review":
        return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>;
      case "new":
        return <Badge className="bg-purple-100 text-purple-800">New</Badge>;
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Admin Panel</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive system management and oversight dashboard
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="verifications">Verifications</TabsTrigger>
            <TabsTrigger value="institutions">Institutions</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>

          {/* Dashboard Overview */}
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
                          <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change} from last month
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
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Alumni verification approved</p>
                        <p className="text-xs text-muted-foreground">John Doe - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">New donation received</p>
                        <p className="text-xs text-muted-foreground">$5,000 - 4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="text-sm font-medium">Event created</p>
                        <p className="text-xs text-muted-foreground">Tech Conference - 6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Database Performance</span>
                        <span>98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>User Engagement</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>System Uptime</span>
                        <span>99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* User Verifications */}
          <TabsContent value="verifications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Pending Verifications</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {pendingVerifications.map((verification) => (
                <Card key={verification.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{verification.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{verification.name}</h3>
                          <p className="text-sm text-muted-foreground">{verification.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{verification.type}</Badge>
                            {verification.batch && <span className="text-xs text-muted-foreground">Batch {verification.batch}</span>}
                            {verification.course && <span className="text-xs text-muted-foreground">{verification.course}</span>}
                            {verification.department && <span className="text-xs text-muted-foreground">{verification.department}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(verification.status)}
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                      <p>Submitted: {verification.submittedDate}</p>
                      <p>Documents: {verification.documents.join(', ')}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Institutions Management */}
          <TabsContent value="institutions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Institution Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Institution
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Institution</TableHead>
                  <TableHead>Established</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Faculty</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {institutions.map((institution) => (
                  <TableRow key={institution.id}>
                    <TableCell className="font-medium">{institution.name}</TableCell>
                    <TableCell>{institution.established}</TableCell>
                    <TableCell>{institution.students.toLocaleString()}</TableCell>
                    <TableCell>{institution.faculty}</TableCell>
                    <TableCell>{institution.courses}</TableCell>
                    <TableCell>{getStatusBadge(institution.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Courses Management */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Course Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Current Students</TableHead>
                  <TableHead>Alumni</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell>{course.department}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.alumni}</TableCell>
                    <TableCell>{getStatusBadge(course.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Event Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Organizer</TableHead>
                  <TableHead>Attendees</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.organizer}</TableCell>
                    <TableCell>{event.attendees}</TableCell>
                    <TableCell>{getStatusBadge(event.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Donations Monitoring */}
          <TabsContent value="donations" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Donation Monitoring</h2>
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="font-medium">{donation.donor}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                    <TableCell>{donation.purpose}</TableCell>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>{donation.method}</TableCell>
                    <TableCell>{getStatusBadge(donation.status)}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Job Postings Management */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Job Postings Management</h2>
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Posted By</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Date Posted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobPostings.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{job.postedBy}</TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>{job.date}</TableCell>
                    <TableCell>{getStatusBadge(job.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
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

export default AdminPanel;