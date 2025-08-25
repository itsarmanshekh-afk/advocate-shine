import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%), url("https://www.transparenttextures.com/patterns/billie-holiday.png")`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        
        {/* Animated Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent/80 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/60 rounded-full animate-ping delay-700"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in-up">
          
          {/* Hero Badge */}
          <div className="badge-glow inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium hover:scale-105 transition-all duration-300 animate-glow">
            <Sparkles className="w-5 h-5 text-white animate-spin" />
            <span className="text-white font-semibold">Established 1976 • 48 Years of Excellence</span>
          </div>

          {/* Main Title */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-10xl font-black tracking-tight">
                <span className="block text-foreground text-glow animate-fade-in-up">All India</span>
                <span className="block heading-gradient animate-shimmer text-glow animate-fade-in-up delay-300">
                  Federation
                </span>
                <span className="block text-foreground/90 text-5xl md:text-6xl lg:text-8xl mt-4 animate-fade-in-up delay-500">
                  Tax Practitioners
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-700">
              Empowering <span className="text-primary font-bold text-glow">11,000+ professionals</span> across 
              <span className="text-accent font-bold text-glow"> 29 states</span> with unified advocacy, 
              education, and welfare since 1976
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 animate-scale-in delay-1000">
            {[
              { number: "146", label: "Professional Bodies", color: "text-primary", bgColor: "from-primary/20 to-primary/5" },
              { number: "11K+", label: "Life Members", color: "text-accent", bgColor: "from-accent/20 to-accent/5" },
              { number: "29", label: "States Covered", color: "text-primary", bgColor: "from-primary/20 to-primary/5" },
              { number: "37+", label: "PILs Filed", color: "text-accent", bgColor: "from-accent/20 to-accent/5" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`glass-card bg-gradient-to-br ${stat.bgColor} rounded-3xl p-8 hover:shadow-2xl animate-glow`}>
                  <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-3 group-hover:scale-125 transition-all duration-500 text-glow`}>
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fade-in-up delay-1200">
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold rounded-full shadow-2xl hover:shadow-primary/20 transition-all duration-500 group hover:scale-110 animate-glow relative overflow-hidden"
            >
              <span className="relative z-10">Join AIFTP Family</span>
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            
            <Button 
              size="lg" 
              className="btn-glass text-lg px-12 py-8 font-semibold rounded-full group hover:scale-105"
            >
              <TrendingUp className="mr-4 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Benefits</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;