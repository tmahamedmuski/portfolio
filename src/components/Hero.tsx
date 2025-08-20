import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import CV from '@/assets/CV.svg';
import heroBg from '@/assets/hero-bg.avif';
import profileImage from '@/assets/profile-placeholder.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage}
                alt="Ahamed Muski"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow" />
            </div>
          </div>
          
          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Ahamed Muski
          </h1>
          
          <p className="text-xl md:text-2xl text-accent mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineering Intern
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about full-stack development, IoT systems, and AI-powered applications. 
            Building innovative solutions with modern technologies.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/muskitma" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/ahamed-muski-a23b09326/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.hackerrank.com/profile/tm_ahamedmuski" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={20} />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" >
              <Download size={20}/>
              <a
                href={CV}
                download
                style={{ color: 'inherit', textDecoration: 'none' }}
                >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;