import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate software engineering student with hands-on experience in building innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education & Info */}
          <div className="space-y-6">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">University of Moratuwa</p>
                        <p className="text-sm text-muted-foreground">BSc. (Hons) in Information Technology and Management</p>
                        <p className="text-sm text-muted-foreground">2023 - Present</p>
                      </div>
                      <div>
                        <p className="font-medium">President Science College</p>
                        <p className="text-sm text-muted-foreground">GCE Advanced Level - Physical Science Stream</p>
                        <p className="text-sm text-muted-foreground">2018 - 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>📧 tm.ahamedmuski@gmail.com</p>
                      <p>📱 0776260935</p>
                      <p>🌐 LinkedIn: Ahamed Muski</p>
                      <p>💻 GitHub: @ahamedmuski</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Profile Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Software Engineering Student</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my degree at the University of Moratuwa, I'm a dedicated software engineering student 
                with a strong foundation in full-stack development, embedded systems, and innovative project development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Passionate about learning new technologies and contributing to innovative projects. I excel at building 
                user-centric applications, optimizing system performance, and ensuring secure data management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across modern web technologies, IoT systems, AI-powered applications, and collaborative 
                team development. I'm always eager to take on challenging projects that push the boundaries of what's possible.
              </p>
            </div>
            
            {/* Languages */}
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Languages</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>🇬🇧 English (Fluent)</div>
                  <div>🇱🇰 Tamil (Native)</div>
                  <div>🇱🇰 Sinhala (Conversational)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;