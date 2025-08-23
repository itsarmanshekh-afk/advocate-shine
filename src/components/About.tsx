import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, Calendar, MapPin, BookOpen, Scale } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: foundationRef, isVisible: foundationVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: leadershipRef, isVisible: leadershipVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <Badge className="bg-primary/10 text-primary border border-primary/20 mb-6 text-base px-6 py-3">
            <Calendar className="w-4 h-4 mr-2" />
            Our Rich Heritage Since 1976
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AIFTP</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Born from the vision to unite tax practitioners across India, AIFTP was conceived by eminent professionals 
            who believed in the power of shared knowledge and collective growth.
          </p>
        </div>

        {/* Historical Foundation */}
        <div ref={foundationRef} className={`mb-20 transition-all duration-700 ${foundationVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-10 md:p-16 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">The Foundation Story</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  On November 11, 1976, at the National Conference organized by The Chamber of Income Tax Consultants, Mumbai, 
                  distinguished professionals christened AIFTP in the presence of former Chief Justice of India, Hon'ble Justice J. C. Shah.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With the blessings of Padma Vibhushan Dr. N. A. Palkhivala and Shri Ram Rao Adik, 
                  Shri N. C. Mehta became the Founder President, establishing what would become India's premier tax practitioners' federation.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-2">1976</div>
                  <div className="text-muted-foreground">Foundation Year</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-accent mb-2">48+</div>
                  <div className="text-muted-foreground">Years of Service</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-2">Mumbai</div>
                  <div className="text-muted-foreground">Registered HQ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div ref={valuesRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-700 ${valuesVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Unity</h3>
              <p className="text-muted-foreground">
                Bringing together Advocates, CAs, and Tax Practitioners from all states.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education Focus</h3>
              <p className="text-muted-foreground">
                Spreading education in taxation laws, other laws, and accountancy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Legal Advocacy</h3>
              <p className="text-muted-foreground">
                37+ Public Interest Petitions filed for better tax administration.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Welfare Support</h3>
              <p className="text-muted-foreground">
                ₹1 Crore corpus fund for member welfare and pandemic support.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership & Structure - Simplified */}
        <div ref={leadershipRef} className={`mb-20 transition-all duration-700 ${leadershipVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
          <div className="bg-gradient-to-br from-accent to-accent-hover text-accent-foreground rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <MapPin className="w-8 h-8 mr-3" />
              National Presence
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold mb-2">5 Zones</div>
                <div className="text-sm opacity-80">Central, Eastern, Northern, Southern, Western</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">146</div>
                <div className="text-sm opacity-80">Professional Associations</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">29 States</div>
                <div className="text-sm opacity-80">Plus 4 Union Territories</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">11,000+</div>
                <div className="text-sm opacity-80">Life Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-6 text-primary">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-5xl mx-auto text-muted-foreground">
              To spread education in matters relating to tax laws, other laws and accountancy, while fostering 
              professional excellence and national integration among tax practitioners across India. We believe in 
              professional brotherhood and serve as the symbol of unity for India's tax professional community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;