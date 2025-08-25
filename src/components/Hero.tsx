import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import presidentImage from "@/assets/president-samir-jani.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: `var(--hero-gradient), var(--bg-texture)`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-3xl float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 to-accent-glow/8 rounded-full blur-3xl float-delay"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/6 rounded-full blur-3xl float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl pulse-glow"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in-up">
          
          {/* Premium Hero Badge */}
          <div className="inline-flex items-center gap-3 bg-glass-bg backdrop-blur-md border border-glass-border rounded-full px-8 py-4 text-sm font-medium text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-500 pulse-glow">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="tracking-wide">Established 1976 • 48 Years of Excellence</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Main Title */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none">
                <span className="block text-foreground text-glow">All India</span>
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-700">
                  Federation
                </span>
                <span className="block text-foreground/95 text-5xl md:text-7xl lg:text-8xl mt-4 font-bold tracking-normal">
                  Tax Practitioners
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Empowering <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">11,000+ professionals</span> across 
              <span className="text-accent font-bold bg-accent/10 px-3 py-1 rounded-full"> 29 states</span> with unified advocacy, 
              education, and welfare since 1976
            </p>
          </div>

          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16">
            {[
              { number: "146", label: "Professional Bodies", color: "text-primary", gradient: "from-primary/20 to-primary-glow/10" },
              { number: "11K+", label: "Life Members", color: "text-accent", gradient: "from-accent/20 to-accent-glow/10" },
              { number: "29", label: "States Covered", color: "text-primary", gradient: "from-primary/20 to-primary-glow/10" },
              { number: "37+", label: "PILs Filed", color: "text-accent", gradient: "from-accent/20 to-accent-glow/10" }
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-md border border-glass-border rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}>
                  <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-3 group-hover:scale-125 transition-transform duration-500 text-glow`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-semibold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 bg-gradient-to-r from-primary via-primary-hover to-primary-glow text-primary-foreground font-bold rounded-full shadow-2xl hover:shadow-glow transition-all duration-500 group hover:scale-110 hover:-translate-y-1 border border-primary/20"
            >
              <span className="tracking-wide">Join AIFTP Family</span>
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
            </Button>
            
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 bg-glass-bg backdrop-blur-md border-2 border-glass-border text-foreground hover:bg-white/10 hover:border-white/25 rounded-full transition-all duration-500 group hover:scale-105 hover:-translate-y-1"
            >
              <TrendingUp className="mr-4 w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              <span className="font-semibold tracking-wide">Explore Benefits</span>
            </Button>
          </div>

          {/* Premium President Leadership Card */}
          <div className="pt-24 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-glass-bg to-white/5 backdrop-blur-xl border border-glass-border rounded-[2rem] p-12 hover:bg-white/8 hover:border-white/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-glow">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse"></div>
                <h3 className="text-4xl font-bold text-foreground tracking-wide">Current Leadership</h3>
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent-glow rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="relative group">
                  <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-gradient-to-r from-primary/40 to-accent/40 shadow-2xl group-hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={presidentImage} 
                      alt="Mr. Samir S. Jani - National President"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Mr. Samir S. Jani</div>
                    <div className="text-xl text-muted-foreground font-semibold tracking-wide mb-2">National President (2025)</div>
                    <div className="text-base text-muted-foreground bg-accent/10 px-4 py-2 rounded-full inline-block">Advocate, Junagadh</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl p-8 border border-primary/20 hover:border-primary/30 transition-all duration-300">
                    <p className="text-foreground leading-relaxed text-lg italic font-light">
                      "AIFTP stands as a beacon of professional excellence, uniting tax practitioners across India. 
                      Our mission is to ensure that every member receives the support, knowledge, and representation 
                      they deserve in their professional journey. Together, we build a stronger tax fraternity."
                    </p>
                  </div>
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