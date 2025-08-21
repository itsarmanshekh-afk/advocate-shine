import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Award, Building } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
        
        {/* Minimal geometric accents */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Badge */}
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-lg px-8 py-4 font-medium">
            <Calendar className="w-5 h-5 mr-3" />
            Established 1976 • 48 Years of Excellence
          </Badge>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-foreground block">All India Federation</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent block mt-2">
                Tax Practitioners
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Uniting <span className="text-primary font-semibold">Advocates</span>, 
              <span className="text-accent font-semibold"> Chartered Accountants</span>, and 
              <span className="text-primary font-semibold"> Tax Practitioners</span> across India since 1976
            </p>
          </div>

          {/* Key Stats - Simplified */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">146</div>
              <div className="text-muted-foreground text-sm">Professional Bodies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">11K+</div>
              <div className="text-muted-foreground text-sm">Life Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">29</div>
              <div className="text-muted-foreground text-sm">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">37+</div>
              <div className="text-muted-foreground text-sm">PILs Filed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Join AIFTP Family
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300">
              Learn More
            </Button>
          </div>

          {/* Current Leadership - Clean */}
          <div className="pt-16 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">Leadership 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">Mr. Samir S. Jani</div>
                  <div className="text-muted-foreground">National President</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-accent">CA. S. Venkataramani</div>
                  <div className="text-muted-foreground">Deputy President</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;