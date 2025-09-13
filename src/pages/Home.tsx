import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  MapPin,
  Mail,
  Phone,
  Trophy,
  Heart,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const recentPlacements = [
    { name: "John Smith", company: "Google", position: "Software Engineer", batch: "2023", location: "Mountain View, CA" },
    { name: "Sarah Johnson", company: "Microsoft", position: "Product Manager", batch: "2022", location: "Seattle, WA" },
    { name: "Mike Chen", company: "Tesla", position: "Data Scientist", batch: "2023", location: "Austin, TX" },
    { name: "Emily Davis", company: "Amazon", position: "UX Designer", batch: "2021", location: "Seattle, WA" },
  ];

  const upcomingEvents = [
    { title: "Alumni Networking Night", date: "Dec 15, 2024", location: "Campus Center", attendees: 150 },
    { title: "Career Fair 2024", date: "Dec 20, 2024", location: "Main Auditorium", attendees: 500 },
    { title: "Tech Talk: AI in Industry", date: "Jan 10, 2025", location: "Virtual", attendees: 300 },
    { title: "Annual Alumni Reunion", date: "Jan 25, 2025", location: "Grand Ballroom", attendees: 800 },
  ];

  const stats = [
    { label: "Active Alumni", value: "15,000+", icon: Users },
    { label: "Companies Hiring", value: "500+", icon: Briefcase },
    { label: "Placement Rate", value: "95%", icon: Trophy },
    { label: "Average Salary", value: "$85K", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Welcome to Asthra
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connect. <span className="text-primary">Grow.</span> <span className="text-secondary">Succeed.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join our thriving community of alumni, discover career opportunities, 
              and build meaningful connections that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/alumni">
                <Button size="lg" className="w-full sm:w-auto">
                  <Users className="h-5 w-5 mr-2" />
                  Join Alumni Network
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Explore Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate our alumni's achievements and get inspired by their career journeys
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPlacements.map((placement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{placement.name}</CardTitle>
                      <CardDescription>Batch of {placement.batch}</CardDescription>
                    </div>
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">{placement.position}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{placement.company}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{placement.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/alumni">
              <Button variant="outline">
                View All Success Stories
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with exciting events, workshops, and networking opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                    <Button className="w-full mt-4">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Our Institution</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 1985, our institution has been at the forefront of education excellence, 
                producing industry leaders, innovators, and change-makers. With a strong alumni network 
                spanning across the globe, we continue to foster connections that drive success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>40+ years of educational excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>15,000+ successful alumni worldwide</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>95% placement rate in top companies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Strong industry partnerships</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-secondary" />
                    Support Our Mission
                  </CardTitle>
                  <CardDescription>
                    Help us continue our legacy of excellence through your contributions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/donations">
                    <Button className="w-full mb-4">
                      Make a Donation
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground text-center">
                    Every contribution makes a difference in shaping futures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>alumni@institution.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>123 University Ave, Education City, EC 12345</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;