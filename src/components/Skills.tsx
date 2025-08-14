import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu, 
  GitBranch,
  Palette,
  Award
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["PHP", "Python", "Java", "C", "JavaScript", "TypeScript", "C#", "HTML", "CSS"],
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Frameworks & Tools",
      skills: ["Laravel", "React", "Vue", "Next.js", "TailwindCSS", "Laravel (Blade)", "Bootstrap"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MSSQL", "MongoDB", "Firebase"],
      color: "text-purple-500"
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      skills: ["GitHub", "Docker", "Postman", "XAMPP", "Git", "Arduino IDE", "Easy EDA"],
      color: "text-orange-500"
    },
    {
      icon: Smartphone,
      title: "Development Areas",
      skills: ["User Experience", "User Interface", "Full Stack Development", "IoT Systems", "Embedded Systems"],
      color: "text-pink-500"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub", "Project Management", "Jira"],
      color: "text-cyan-500"
    }
  ];

  const achievements = [
    {
      title: "HackerRank Certifications",
      description: "Multiple programming and problem-solving certifications",
      link: "https://www.hackerrank.com/profile/tm_ahamedmuski"
    },
    {
      title: "SpiritX 2025 Participant",
      description: "Stage 1 – Xcelerate competition with Team NeXT",
      link: "#"
    },
    {
      title: "Nexora Competition Finalist",
      description: "Top 7 finalist status in university tech competition",
      link: "#"
    },
    {
      title: "GTN Tech Collaboration",
      description: "Award-winning translation management platform",
      link: "#"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and achievements in software development
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="border-border bg-card shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Achievements Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-2">
              <Award className="h-8 w-8" />
              Achievements & Certifications
            </h3>
            <p className="text-muted-foreground">
              Recognition and accomplishments in competitive programming and project development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="border-border bg-card shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer"
                onClick={() => achievement.link !== "#" && window.open(achievement.link, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="mb-6 opacity-90">
              I'm always excited to work on challenging projects and learn new technologies. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:tm.ahamedmuski@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors duration-300 font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/ahamedmuski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-background/20 text-primary-foreground rounded-lg hover:bg-background/10 transition-colors duration-300 font-medium"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;