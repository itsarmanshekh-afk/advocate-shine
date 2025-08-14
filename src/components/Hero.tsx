import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional tax practitioners and advocates" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge className="badge-professional mb-6 text-sm px-4 py-2">
            🏆 India's Premier Tax Practitioners Association
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering
            <span className="block heading-gradient">
              Tax Professionals
            </span>
            Across India
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Join the All India Federation of Tax Practitioners - uniting Advocates, 
            Chartered Accountants, and Tax Practitioners for professional excellence 
            and industry advancement.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mb-10">
            <div className="flex items-center space-x-2 text-white">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">50,000+</span>
              <span className="text-white/80">Members</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">25+</span>
              <span className="text-white/80">Years</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">All</span>
              <span className="text-white/80">States</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-accent text-lg px-8 py-4 group">
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;