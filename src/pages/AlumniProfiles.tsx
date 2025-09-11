import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
  Edit,
  Plus,
  Building,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Globe,
  Award,
  TrendingUp,
  Star,
  Download,
  FileText,
  Camera,
  Clock
} from "lucide-react";

const AlumniProfiles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const profileData = {
    personal: {
      name: "Sarah Johnson",
      batch: "2018",
      course: "Computer Science",
      currentTitle: "Senior Software Engineer",
      currentCompany: "Tech Corp",
      location: "San Francisco, CA",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/sarahjohnson",
      website: "sarahjohnson.dev",
      avatar: "/placeholder-avatar.jpg",
      joinedAlumni: "March 2018"
    },
    career: [
      {
        id: 1,
        company: "Tech Corp",
        position: "Senior Software Engineer",
        startDate: "Jan 2022",
        endDate: "Present",
        duration: "2+ years",
        description: "Leading development of cloud-native applications",
        current: true
      },
      {
        id: 2,
        company: "StartupX",
        position: "Software Engineer",
        startDate: "Jun 2020",
        endDate: "Dec 2021",
        duration: "1.5 years",
        description: "Full-stack development using React and Node.js",
        current: false
      },
      {
        id: 3,
        company: "InternCorp",
        position: "Software Development Intern",
        startDate: "May 2018",
        endDate: "Aug 2018",
        duration: "3 months",
        description: "Summer internship focusing on web development",
        current: false
      }
    ],
    achievements: [
      {
        id: 1,
        title: "Tech Innovation Award 2023",
        organization: "Tech Industry Association",
        date: "Oct 2023",
        description: "Recognized for outstanding contributions to cloud computing"
      },
      {
        id: 2,
        title: "Published Research Paper",
        organization: "IEEE Conference",
        date: "Mar 2023",
        description: "Machine Learning Applications in Healthcare"
      },
      {
        id: 3,
        title: "Team Leadership Excellence",
        organization: "Tech Corp",
        date: "Dec 2022",
        description: "Led successful migration of legacy systems"
      }
    ],
    skills: {
      technical: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      soft: ["Leadership", "Communication", "Project Management", "Mentoring"],
      certifications: ["AWS Solutions Architect", "Scrum Master", "Google Cloud Professional"]
    },
    education: [
      {
        degree: "Master of Science",
        field: "Computer Science",
        institution: "University",
        year: "2018",
        gpa: "3.8/4.0"
      },
      {
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "University",
        year: "2016",
        gpa: "3.7/4.0"
      }
    ]
  };

  const profileStats = [
    { label: "Years of Experience", value: "6+", icon: Clock },
    { label: "Companies Worked", value: "3", icon: Building },
    { label: "Awards Received", value: "5", icon: Award },
    { label: "Network Connections", value: "250+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileData.personal.avatar} />
                  <AvatarFallback className="text-2xl">
                    {profileData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{profileData.personal.name}</h1>
                <p className="text-xl text-muted-foreground mb-2">
                  {profileData.personal.currentTitle} at {profileData.personal.currentCompany}
                </p>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <span className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Batch of {profileData.personal.batch}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profileData.personal.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Profile
              </Button>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {profileStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="career">Career Journey</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="skills">Skills & Education</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced software engineer with 6+ years in developing scalable web applications 
                    and cloud-native solutions. Proven track record of leading cross-functional teams 
                    and delivering high-impact projects. Passionate about mentoring junior developers 
                    and contributing to open-source communities.
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.personal.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.personal.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Linkedin className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.personal.linkedin}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>{profileData.personal.website}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Role</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">{profileData.personal.currentTitle}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {profileData.personal.currentCompany}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge>Full-time</Badge>
                        <Badge variant="outline">Remote</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {profileData.skills.technical.slice(0, 5).map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{skill}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-muted rounded-full">
                              <div 
                                className="h-2 bg-primary rounded-full" 
                                style={{width: `${95 - index * 5}%`}}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Career Journey */}
          <TabsContent value="career" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Career Timeline</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>

            <div className="space-y-4">
              {profileData.career.map((job, index) => (
                <Card key={job.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-lg ${job.current ? 'bg-primary' : 'bg-muted'} flex items-center justify-center`}>
                            <Building className={`h-6 w-6 ${job.current ? 'text-white' : 'text-muted-foreground'}`} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{job.position}</h3>
                          <p className="text-primary font-medium">{job.company}</p>
                          <p className="text-sm text-muted-foreground">
                            {job.startDate} - {job.endDate} • {job.duration}
                          </p>
                          <p className="text-sm mt-2">{job.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {job.current && <Badge>Current</Badge>}
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Achievement
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.achievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Award className="h-8 w-8 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-primary">{achievement.organization}</p>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.date}</p>
                        <p className="text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills & Education */}
          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.technical.map((skill, index) => (
                        <Badge key={index} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.soft.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {profileData.skills.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profileData.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-primary">{edu.field}</p>
                          <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
                          <p className="text-sm">GPA: {edu.gpa}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Network */}
          <TabsContent value="network" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold">250+</p>
                  <p className="text-sm text-muted-foreground">Alumni Connections</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm text-muted-foreground">Mentees</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Mentor Rating</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Networking Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Connected with 3 new alumni this week</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Attended Tech Networking Event</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Started mentoring 2 new students</span>
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

export default AlumniProfiles;