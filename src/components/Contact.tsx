import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/page/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I’ll get back to you soon!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "tm.ahamedmuski@gmail.com", link: "mailto:tm.ahamedmuski@gmail.com" },
    { icon: Phone, title: "Phone", value: "0776620955", link: "tel:0776620955" },
    { icon: MapPin, title: "Location", value: "Sri Lanka", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, title: "GitHub", value: "@ahamedmuski", link: "https://github.com/muskitma" },
    { icon: Linkedin, title: "LinkedIn", value: "Ahamed Muski", link: "https://www.linkedin.com/in/ahamed-muski-a23b09326/" },
    { icon: ExternalLink, title: "HackerRank", value: "tm_ahamedmuski", link: "https://www.hackerrank.com/profile/tm_ahamedmuski" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me more about your project or just say hello!" rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card className="border-border bg-card shadow-card">
              <CardHeader><CardTitle className="text-xl">Contact Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center space-x-4 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        {item.link !== "#" ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors duration-300">{item.value}</a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardHeader><CardTitle className="text-xl">Connect With Me</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group hover:bg-muted/50 p-2 rounded-lg transition-all duration-300">
                      <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors duration-300">{item.title}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
