import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Eye } from "lucide-react";

const achievements = [
  "50,000+ Active Members Nationwide",
  "25+ Years of Professional Excellence", 
  "Recognition from Government Bodies",
  "Pan-India Presence in All States",
  "Continuous Professional Development Programs",
  "Strong Industry Partnerships"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <Badge className="badge-professional mb-4">
              About AIFTP
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading India's
              <span className="heading-gradient block">Tax Professionals</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The All India Federation of Tax Practitioners (AIFTP) stands as the premier 
              association uniting Advocates, Chartered Accountants, and Tax Practitioners 
              across India. We are committed to advancing professional standards, providing 
              continuous education, and representing our members' interests at the highest levels.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission extends beyond mere representation – we actively shape tax policy, 
              ensure ethical practice standards, and provide our members with the tools and 
              knowledge necessary to excel in an ever-evolving regulatory landscape.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="btn-professional text-lg px-8 py-3">
              Learn More About Us
            </Button>
          </div>

          {/* Cards Side */}
          <div className="space-y-6">
            {/* Mission Card */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To empower tax professionals with knowledge, resources, and representation 
                  while maintaining the highest standards of professional excellence and ethics.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be India's most trusted and influential association of tax practitioners, 
                  driving innovation and excellence in tax practice and policy.
                </p>
              </CardContent>
            </Card>

            {/* Community Card */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Community</h3>
                </div>
                <p className="text-muted-foreground">
                  A vibrant network of professionals supporting each other through knowledge 
                  sharing, mentorship, and collaborative problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;