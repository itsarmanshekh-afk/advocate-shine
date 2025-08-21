import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, TrendingUp, Calendar, BookOpen, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-accent/20 animate-fade-in-up">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <Badge className="bg-white/10 text-white border border-white/20 mb-8 text-base px-6 py-3 font-medium backdrop-blur-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Est. 1976 • 48 Years of Excellence
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9]">
            All India Federation
            <span className="block bg-gradient-to-r from-accent via-accent-hover to-white bg-clip-text text-transparent">
              Tax Practitioners
            </span>
          </h1>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed font-light">
            Uniting Advocates, Chartered Accountants, and Tax Practitioners since 1976. 
            <span className="block mt-2 text-accent font-medium">One platform. Endless possibilities.</span>
          </p>

          {/* Modern Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">146</div>
              <div className="text-white/80 text-sm">Associated Bodies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">11,000+</div>
              <div className="text-white/80 text-sm">Life Members</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">29</div>
              <div className="text-white/80 text-sm">States Covered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-white/80 text-sm">Zonal Divisions</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-6 mb-12 text-white/90">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-accent" />
              <span>Monthly Journal</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-accent" />
              <span>International Tours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-accent" />
              <span>Professional Ethics</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 group">
              Join AIFTP Family
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full">
              Explore Heritage
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;