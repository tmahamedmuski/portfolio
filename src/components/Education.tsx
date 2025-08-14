import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
    const education = [
    {
        institution: "University of Moratuwa",
        degree: "BSc. (Hons) in Information Technology and Management",
        period: "2023 - Present",
        status: "Current"
    },
    {
        institution: "President Science College",
        degree: "GCE Advanced Level Physical Science Stream",
        period: "2018 - 2021",
        status: "Completed"
    }
    ];

    return (
    <section 
        id="education" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey building strong foundations in technology and engineering
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                <div className="flex items-start justify-between mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <Badge 
                    variant={edu.status === "Current" ? "default" : "secondary"}
                    className={edu.status === "Current" ? "bg-green-500 text-white hover:bg-green-600 transition-colors" : ""}
                    >
                    {edu.status}
                    </Badge>
                </div>
                <CardTitle className="text-xl">{edu.institution}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground mb-3">{edu.degree}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                </div>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>
    );
};

export default Education;