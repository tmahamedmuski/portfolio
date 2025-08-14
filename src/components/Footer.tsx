import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/ahamedmuski', 
      icon: Github 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/ahamed-muski', 
      icon: Linkedin 
    },
    { 
      name: 'HackerRank', 
      href: 'https://www.hackerrank.com/profile/tm_ahamedmuski', 
      icon: ExternalLink 
    },
    { 
      name: 'Email', 
      href: 'mailto:tm.ahamedmuski@gmail.com', 
      icon: Mail 
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
              >
                Ahamed Muski
              </button>
              <p className="text-sm text-accent font-medium">Software Engineering Intern</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about building innovative solutions with modern technologies. 
              Specializing in full-stack development, IoT systems, and AI-powered applications.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>University of Moratuwa</span>
              <span className="mx-2">•</span>
              <span>Class of 2027</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Currently interested in:</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Internships</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Freelance</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Collaborations</span>
              </div>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect With Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                📧 tm.ahamedmuski@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                📱 0776260935
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Ahamed Muski. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🎓 University of Moratuwa</span>
              <span>🇱🇰 Sri Lanka</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              This portfolio showcases my journey in software engineering and my passion for creating innovative solutions. 
              Feel free to reach out for collaborations, opportunities, or just to connect!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;