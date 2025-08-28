import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import presidentImage from "@/assets/president-samir-jani.jpg";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PresidentsMessage } from "./PresidentMessage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        <BackgroundBeamsWithCollision />

        {/* Custom Grid Background */}
        {/* Custom Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#000", // ek hi fill color (black)
            backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
            backgroundSize: "120px 120px", // box size (adjust as needed)
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 90%)",
            opacity: 0.5,
          }}
        />

      </div>

      {/* Main Content (always on top) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-14 animate-fade-in-up">

          {/* Hero Badge */}
          <div className="inline-flex mt-14 items-center gap-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-card/50 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Established 1976 • 48 Years of Excellence</span>
          </div>

          {/* Hero Title */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">

                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  All India Federation  of
                </span>
                <span className="block text-foreground text-4xl md:text-6xl lg:text-7xl mt-2 font-semibold">
                 Tax Practitioners
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering <span className="text-primary font-medium bg-primary/10 px-2 py-1 rounded">11,000+ professionals</span> across
              <span className="text-accent font-medium bg-accent/10 px-2 py-1 rounded"> 29 states</span> with unified advocacy,
              education, and welfare since 1976
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300">
              Join AIFTP Family
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button size="lg" variant="outline" className="px-8 py-4 border-border/50 hover:bg-card/50 transition-all duration-300">
              <TrendingUp className="mr-2 w-5 h-5" />
              Explore Benefits
            </Button>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "146", label: "Professional Bodies" },
              { number: "11K+", label: "Life Members" },
              { number: "29", label: "States Covered" },
              { number: "37+", label: "PILs Filed" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-card/70 hover:border-border/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}


          {/* Leadership Card */}
          {/* <div className="pt-20 max-w-5xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-card/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-center mb-8">Current Leadership</h3>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-80 h-80 rounded-xl overflow-hidden border-2 border-border/30">
                  <img
                    src={presidentImage}
                    alt="Mr. Samir S. Jani - National President"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">Mr. Samir S. Jani</div>
                    <div className="text-lg text-muted-foreground font-medium mb-2">National President (2025)</div>
                    <div className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-lg inline-block">Advocate, Junagadh</div>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-6 border border-border/20">
                    <p className="text-foreground leading-relaxed">
                      "AIFTP stands as a beacon of professional excellence, uniting tax practitioners across India.
                      Our mission is to ensure that every member receives the support, knowledge, and representation
                      they deserve in their professional journey."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        <PresidentsMessage />

        </div>
      </div>
    </section>
  );
};

export default Hero;
