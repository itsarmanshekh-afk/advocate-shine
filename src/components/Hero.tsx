import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in-up">
          
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:border-primary/30 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Established 1976 • 48 Years of Excellence</span>
          </div>

          {/* Main Title */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="block text-foreground">All India</span>
                <span className="block bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
                  Federation
                </span>
                <span className="block text-foreground/90 text-5xl md:text-6xl lg:text-7xl mt-2">
                  Tax Practitioners
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering <span className="text-primary font-semibold">11,000+ professionals</span> across 
              <span className="text-accent font-semibold"> 29 states</span> with unified advocacy, 
              education, and welfare since 1976
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {[
              { number: "146", label: "Professional Bodies", color: "text-primary" },
              { number: "11K+", label: "Life Members", color: "text-accent" },
              { number: "29", label: "States Covered", color: "text-primary" },
              { number: "37+", label: "PILs Filed", color: "text-accent" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-card/50 hover:border-border/50 transition-all duration-300 hover:scale-105">
                  <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105"
            >
              <span>Join AIFTP Family</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <TrendingUp className="mr-3 w-5 h-5" />
              <span>Explore Benefits</span>
            </Button>
          </div>

          {/* Leadership Card */}
          <div className="pt-20 max-w-2xl mx-auto">
            <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-3xl p-8 hover:bg-card/60 hover:border-border/60 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-foreground">Current Leadership</h3>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-primary">Mr. Samir S. Jani</div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wide">National President</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-accent">CA. S. Venkataramani</div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wide">Deputy President</div>
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