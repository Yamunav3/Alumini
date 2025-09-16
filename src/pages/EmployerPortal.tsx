import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Calendar,
  Users,
  Eye,
  Plus,
  Building,
  Mail,
  Phone,
  Linkedin,
  Star,
  Download,
  FileText,
  TrendingUp,
  Award,
  Clock
} from "lucide-react";

const EmployerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const talentPool = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      batch: "2018",
      skills: ["React", "Node.js", "Python", "AWS"],
      experience: "6 years",
      location: "San Francisco, CA",
      achievements: ["Tech Innovation Award 2023", "Published 5 research papers"],
      education: "MS Computer Science",
      available: true,
      avatar: "/placeholder-avatar.jpg",
      rating: 4.9
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Innovation Labs",
      batch: "2016",
      skills: ["Product Strategy", "Data Analytics", "Agile", "Leadership"],
      experience: "8 years",
      location: "New York, NY",
      achievements: ["Product of the Year 2022", "Led 3 successful product launches"],
      education: "MBA Business Administration",
      available: false,
      avatar: "/placeholder-avatar.jpg",
      rating: 4.8
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Data Scientist",
      company: "Analytics Inc",
      batch: "2020",
      skills: ["Machine Learning", "Python", "R", "TensorFlow"],
      experience: "4 years",
      location: "Seattle, WA",
      achievements: ["AI Research Excellence Award", "3 ML patents"],
      education: "PhD Data Science",
      available: true,
      avatar: "/placeholder-avatar.jpg",
      rating: 4.7
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechStart Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      applications: 23,
      postedDate: "Dec 10, 2024",
      status: "active",
      requirements: ["5+ years experience", "React", "Node.js", "AWS"]
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "Growth Co",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$95,000 - $125,000",
      applications: 18,
      postedDate: "Dec 8, 2024", 
      status: "active",
      requirements: ["3+ years marketing", "B2B experience", "Analytics"]
    },
    {
      id: 3,
      title: "Data Science Consultant",
      company: "Consulting Firm",
      location: "Chicago, IL",
      type: "Contract",
      salary: "$80/hour",
      applications: 12,
      postedDate: "Dec 5, 2024",
      status: "closed",
      requirements: ["PhD preferred", "Python", "ML expertise"]
    }
  ];

  const recruitmentStats = [
    { label: "Available Talent", value: "2,340", change: "+120", icon: Users },
    { label: "Active Job Posts", value: "45", change: "+8", icon: Briefcase },
    { label: "Successful Hires", value: "156", change: "+23", icon: Award },
    { label: "Response Rate", value: "78%", change: "+5%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Employer Portal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with exceptional alumni talent and build your team with qualified professionals
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="talent" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="talent">Talent Pool</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
          </TabsList>

          {/* Talent Pool */}
          <TabsContent value="talent" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by skills, location, or experience..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export Profiles
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {talentPool.map((person) => (
                <Card key={person.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{person.name}</h3>
                        <p className="text-sm text-muted-foreground">Batch of {person.batch}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{person.rating}</span>
                        </div>
                      </div>
                      <Badge variant={person.available ? "default" : "secondary"}>
                        {person.available ? "Available" : "Not Available"}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium">{person.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {person.company}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {person.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {person.experience} experience
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {person.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Recent Achievements:</p>
                      <p className="text-xs text-muted-foreground">
                        {person.achievements[0]}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Job Postings */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Job Postings Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </div>

            <div className="space-y-4">
              {jobPostings.map((job) => (
                <Card key={job.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                            {job.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.postedDate}
                          </span>
                        </div>

                        <div className="mb-3">
                          <p className="font-medium text-primary">{job.salary}</p>
                          <p className="text-sm text-muted-foreground">
                            {job.applications} applications received
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-1">Requirements:</p>
                          <div className="flex flex-wrap gap-1">
                            {job.requirements.map((req, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          Applications
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recruitmentStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'}`}>
                            {stat.change} this month
                          </p>
                        </div>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Skills in Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["React/JavaScript", "Python/ML", "Product Management", "Cloud Computing", "Data Analytics"].map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{skill}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-muted rounded-full">
                            <div 
                              className="h-2 bg-primary rounded-full" 
                              style={{width: `${90 - index * 15}%`}}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{90 - index * 15}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hiring Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">78%</p>
                      <p className="text-sm text-muted-foreground">Overall Success Rate</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-semibold">156</p>
                        <p className="text-xs text-muted-foreground">Successful Hires</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold">3.2</p>
                        <p className="text-xs text-muted-foreground">Avg. Time to Hire (weeks)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Partnerships */}
          <TabsContent value="partnerships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
                <CardDescription>
                  Explore partnership programs with Asthra to enhance recruitment and collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Corporate Partnership Benefits:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Priority access to top alumni talent</li>
                      <li>• Campus recruitment programs</li>
                      <li>• Industry-specific networking events</li>
                      <li>• Internship and co-op programs</li>
                      <li>• Research collaboration opportunities</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Get Started:</h3>
                    <div className="space-y-2">
                      <Button className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Partnership Team
                      </Button>
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Partnership Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployerPortal;