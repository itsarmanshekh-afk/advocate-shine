import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, TrendingUp, Calendar, BookOpen, Globe, Shield, Building } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-12 animate-pulse blur-sm"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full animate-pulse delay-1000 blur-lg"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-2xl -rotate-45 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Badge */}
            <Badge className="bg-primary/10 text-primary border border-primary/20 text-base px-6 py-3 font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Established 1976 • Leading India for 48 Years
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">All India</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Federation of
                </span>
                <br />
                <span className="text-foreground">Tax Practitioners</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering <span className="font-semibold text-primary">Advocates</span>, 
                <span className="font-semibold text-accent"> Chartered Accountants</span>, and 
                <span className="font-semibold text-primary"> Tax Practitioners</span> across India 
                through knowledge, unity, and professional excellence.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Monthly Journal</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-accent/10">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">Global Tours</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Legal Advocacy</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Join AIFTP Community
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl transition-all duration-300">
                Explore Our Legacy
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Main Stats Card */}
            <Card className="p-8 bg-gradient-to-br from-white to-primary/5 border border-primary/20 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Our National Impact</h3>
                <p className="text-muted-foreground">Leading tax professionals across India</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">146</div>
                  <div className="text-sm text-muted-foreground">Professional Associations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">11K+</div>
                  <div className="text-sm text-muted-foreground">Life Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">29</div>
                  <div className="text-sm text-muted-foreground">States & UTs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Zonal Divisions</div>
                </div>
              </div>
            </Card>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">37+</div>
                    <div className="text-sm text-muted-foreground">PILs Filed</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">₹1Cr</div>
                    <div className="text-sm text-muted-foreground">Welfare Fund</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Leadership Card */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-4">Current Leadership 2025</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">National President</span>
                  <span className="text-sm font-medium text-primary">Mr. Samir S. Jani</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Deputy President</span>
                  <span className="text-sm font-medium text-accent">CA. S. Venkataramani</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">75 National Executive Members</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;