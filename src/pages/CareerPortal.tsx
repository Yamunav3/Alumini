import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Building,
  Calendar,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  Star,
  Bookmark,
  Share,
  Eye,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const CareerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $180K",
      postedBy: "John Smith (2015)",
      postedDate: "2 days ago",
      applications: 23,
      isUrgent: true,
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      description: "Join our engineering team to build next-generation products..."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140K - $200K",
      postedBy: "Sarah Chen (2012)",
      postedDate: "1 week ago",
      applications: 45,
      isUrgent: false,
      skills: ["Product Strategy", "Analytics", "Agile", "Leadership"],
      description: "Lead product development for our flagship platform..."
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "Growth Co",
      location: "Remote",
      type: "Internship",
      salary: "$20/hour",
      postedBy: "Mike Johnson (2018)",
      postedDate: "3 days ago",
      applications: 12,
      isUrgent: false,
      skills: ["Digital Marketing", "Content Creation", "Analytics"],
      description: "Gain hands-on experience in digital marketing..."
    }
  ];

  const applications = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Startup",
      appliedDate: "Dec 1, 2024",
      status: "Interview Scheduled",
      nextStep: "Technical Round - Dec 15",
      progress: 60
    },
    {
      id: 2,
      jobTitle: "Product Designer",
      company: "Design Agency",
      appliedDate: "Nov 28, 2024",
      status: "Under Review",
      nextStep: "Waiting for response",
      progress: 30
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "Analytics Corp",
      appliedDate: "Nov 25, 2024",
      status: "Offer Received",
      nextStep: "Negotiating terms",
      progress: 90
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: "Full Stack Development Bootcamp",
      provider: "TechSkills Academy",
      duration: "12 weeks",
      level: "Intermediate",
      enrolled: 150,
      rating: 4.8,
      price: "$2,999",
      skills: ["React", "Node.js", "MongoDB", "DevOps"],
      startDate: "Jan 15, 2025"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      provider: "AI Institute",
      duration: "16 weeks",
      level: "Advanced",
      enrolled: 89,
      rating: 4.9,
      price: "$3,499",
      skills: ["Python", "TensorFlow", "Statistics", "Deep Learning"],
      startDate: "Feb 1, 2025"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      provider: "Marketing Pro",
      duration: "8 weeks",
      level: "Beginner",
      enrolled: 200,
      rating: 4.7,
      price: "$1,899",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      startDate: "Jan 22, 2025"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Breaking into Tech: A Complete Guide",
      speaker: "Jennifer Liu (2016) - Google PM",
      date: "Dec 20, 2024",
      time: "7:00 PM EST",
      attendees: 245,
      type: "Career Development",
      isLive: false
    },
    {
      id: 2,
      title: "Salary Negotiation Strategies",
      speaker: "Robert Chen (2014) - HR Director",
      date: "Dec 18, 2024",
      time: "6:30 PM EST",
      attendees: 189,
      type: "Professional Skills",
      isLive: true
    },
    {
      id: 3,
      title: "Building Your Personal Brand",
      speaker: "Lisa Wang (2013) - Marketing VP",
      date: "Dec 22, 2024",
      time: "8:00 PM EST",
      attendees: 156,
      type: "Personal Development",
      isLive: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Offer Received":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Career Portal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities, track applications, and advance your career with alumni connections
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Job Board</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
          </TabsList>

          {/* Job Board */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Briefcase className="h-4 w-4 mr-2" />
                Post Job
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobListings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          {job.isUrgent && (
                            <Badge variant="destructive" className="text-xs">Urgent</Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Skills Required:</p>
                        <div className="flex flex-wrap gap-1">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.description}
                      </p>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <p>Posted by {job.postedBy}</p>
                          <p>{job.postedDate} • {job.applications} applications</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tracking */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Application Tracker</h2>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{app.jobTitle}</h3>
                        <p className="text-muted-foreground">{app.company}</p>
                        <p className="text-sm text-muted-foreground">Applied on {app.appliedDate}</p>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Application Progress</span>
                          <span className="text-sm text-muted-foreground">{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Next Step:</p>
                          <p className="text-sm text-muted-foreground">{app.nextStep}</p>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Training Programs */}
          <TabsContent value="training" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Professional Development</h2>
              <Button>
                <BookOpen className="h-4 w-4 mr-2" />
                Browse All Courses
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {program.duration}
                          </span>
                          <Badge variant="outline">{program.level}</Badge>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{program.rating}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">You'll Learn:</p>
                        <div className="flex flex-wrap gap-1">
                          {program.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.enrolled} enrolled
                        </span>
                        <span>Starts {program.startDate}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{program.price}</span>
                        <Button>Enroll Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Webinars & Workshops */}
          <TabsContent value="webinars" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Upcoming Webinars</h2>
              <Button>
                <Video className="h-4 w-4 mr-2" />
                Host Webinar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{webinar.title}</CardTitle>
                        <CardDescription className="mt-2">
                          by {webinar.speaker}
                        </CardDescription>
                      </div>
                      {webinar.isLive && (
                        <Badge variant="destructive" className="text-xs">Live</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {webinar.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {webinar.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{webinar.type}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {webinar.attendees} registered
                          </span>
                        </div>
                      </div>

                      <Button className="w-full">
                        {webinar.isLive ? "Join Now" : "Register"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerPortal;