import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import waterCompanionImg from '@/assets/water-companion.jpg';
import parksnapImg from '@/assets/parksnap.jpg';
import campusCopilotImg from '@/assets/campus-copilot.jpg';
import ecommerceImg from '@/assets/ecommerce.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Smart Water Companion",
      description: "First-year microcontroller-based hardware project. ESP32-powered water management system with sensor integration, automated control via solenoid valves, and real-time Firebase monitoring.",
      image: waterCompanionImg,
      technologies: ["ESP32", "Arduino IDE", "Firebase", "React", "Easy EDA", "WiFi"],
      category: "IoT & Hardware",
      date: "2024",
      github: "#",
      demo: "https://lnkd.in/gF4kUUM3",
      highlights: [
        "Multiple sensor integration (ultrasonic, turbidity, temperature, rainwater, flow)",
        "Automated water flow control with solenoid valves",
        "Real-time data storage and monitoring via Firebase",
        "Custom web interface for remote system control"
      ]
    },
    {
      title: "ParkSnap - Parking Reservation System",
      description: "Industry Reconnaissance and Engagement module project. Full-stack parking lot reservation application with authentication, weather integration, and comprehensive admin dashboard.",
      image: parksnapImg,
      technologies: ["Spring Boot", "React", "MySQL", "Bootstrap", "JWT", "Maven"],
      category: "Full Stack Web",
      date: "2024",
      github: "https://lnkd.in/gSTsVJnR",
      demo: "#",
      highlights: [
        "User registration, login, and authentication system",
        "Parking space reservation with real-time availability",
        "Weather details integration for better planning",
        "Admin dashboard with past statistics and analytics"
      ]
    },
    {
      title: "Chat Box Website",
      description: "Simple and interactive chat box website hosted on GitHub Pages. Built with vanilla web technologies focusing on real-time user interaction and clean design.",
      image: ecommerceImg,
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      category: "Frontend Web",
      date: "2024",
      github: "#",
      demo: "https://lnkd.in/gNR9sQfU",
      highlights: [
        "Interactive chat interface with real-time messaging",
        "Clean and responsive design",
        "Vanilla JavaScript implementation",
        "Hosted on GitHub Pages for easy access"
      ]
    },
    {
      title: "E-Commerce Website - MERN + Ballerina",
      description: "Cutting-edge e-commerce platform built with MERN Stack and Ballerina. Features seamless shopping experience with modern UI/UX and robust backend functionality.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Ballerina"],
      category: "Full Stack Web",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "Complete e-commerce functionality with shopping cart",
        "User authentication and profile management",
        "Product catalog with search and filtering",
        "Integration with Ballerina for enhanced backend services"
      ]
    },
    {
      title: "Filmlane - Movie Website",
      description: "Sleek and user-friendly movie browsing website with modern touch. Features clean responsive design, movie search & filtering, and intuitive navigation for film enthusiasts.",
      image: ecommerceImg,
      technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      category: "Frontend Web",
      date: "2024",
      github: "#",
      demo: "https://lnkd.in/gSVatVss",
      highlights: [
        "Clean and responsive design optimized for all devices",
        "Advanced movie search and filtering capabilities",
        "Smooth UI/UX with intuitive navigation",
        "Modern design approach with focus on user experience"
      ]
    },
    {
      title: "Student Registration System",
      description: "Laravel-based education website focusing on student registration system. Features secure registration, responsive interface, and efficient database management with MySQL.",
      image: ecommerceImg,
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "XAMPP", "Blade"],
      category: "Full Stack Web",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "Secure and dynamic student registration system",
        "Responsive and user-friendly interface",
        "Efficient database management with MySQL",
        "Laravel Blade templating for dynamic content"
      ]
    },
    {
      title: "Campus Copilot - AI Assistant",
      description: "Award-winning AI-powered campus assistant built for Nexora Binary Bytes Competition. Features AI chatbot, gamification, real-time forums, and comprehensive admin dashboard.",
      image: campusCopilotImg,
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "AI/ML", "TailwindCSS"],
      category: "AI & Competition",
      date: "2024",
      github: "https://lnkd.in/gWkdA_6Q",
      demo: "#",
      highlights: [
        "AI-powered chatbot for campus support (bus, canteen, events, FAQs)",
        "Real-time peer-to-peer Q&A forum with WebSockets",
        "Gamification system with quizzes and points",
        "Role-based authentication and admin dashboard"
      ]
    },
    {
      title: "Translation Inventory Tool",
      description: "Award-winning translation management platform developed in collaboration with GTN Tech and University of Moratuwa. Features NLP-powered semantic translation memory and RTL language support.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Socket.IO", "NLP"],
      category: "Enterprise Collaboration",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "NLP-powered semantic translation memory system",
        "RTL language support for Arabic and Sinhala",
        "Bulk JSON/CSV data processing for enterprise-scale projects",
        "Award-winning collaboration with GTN Tech"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, IoT systems, and AI-powered applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border bg-card shadow-card hover:shadow-glow transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.github !== "#" && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo !== "#" && (
                    <Button variant="default" size="sm" asChild className="flex-1 bg-gradient-primary">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a href="https://github.com/ahamedmuski" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
