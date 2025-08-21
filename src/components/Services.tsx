import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  FileText,
  Gavel,
  Globe,
  Newspaper,
  Calendar,
  Shield,
  Heart,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Monthly Publications",
    description: "AIFTP Journal covering Supreme Court, High Court & ITAT decisions, plus quarterly digest of 33 tax magazines.",
    features: ["Monthly Tax Journal", "Indirect Tax Journal", "Case Law Digest", "Yearly Archives (2003+)"],
    highlight: "Premium Content"
  },
  {
    icon: Newspaper,
    title: "AIFTP Times Newsletter",
    description: "Monthly newsletter with notifications, circulars, and federation activities sent free to all members.",
    features: ["Important Notifications", "Circulars Update", "Activity Reports", "Free Email Delivery"],
    highlight: "Free for Members"
  },
  {
    icon: Calendar,
    title: "Conferences & Seminars",
    description: "National seminars and conventions across India with self-funded faculties ensuring quality content.",
    features: ["National Conferences", "Regional Seminars", "200+ COVID Webinars", "Expert Speakers"],
    highlight: "Self-Funded Quality"
  },
  {
    icon: Gavel,
    title: "Legal Advocacy",
    description: "37+ Public Interest Petitions filed for better tax administration and upholding judicial independence.",
    features: ["Public Interest Litigation", "Policy Representations", "Pre & Post Budget Memorandums", "Court Advocacy"],
    highlight: "37+ PILs Filed"
  },
  {
    icon: Globe,
    title: "International Exposure",
    description: "Regular study tours since 2004, including seminars at prestigious institutions like Law Society of England.",
    features: ["International Study Tours", "Global Business Seminars", "Cross-border Learning", "Cultural Exchange"],
    highlight: "Since 2004"
  },
  {
    icon: FileText,
    title: "Publications & Books",
    description: "48+ publications in simple language and Q&A format, including specialized books at affordable costs.",
    features: ["48+ Publications", "Simple Language Format", "Q&A Style Books", "Affordable Pricing"],
    highlight: "48+ Books Published"
  },
  {
    icon: Users,
    title: "National Integration",
    description: "5 zonal divisions with 146 professional associations fostering brotherhood across 29 states.",
    features: ["5 Zonal Divisions", "146 Member Associations", "29 States Coverage", "Professional Brotherhood"],
    highlight: "National Unity"
  },
  {
    icon: Shield,
    title: "Professional Ethics",
    description: "Voluntary Code of Ethics adoption ensuring highest standards of professional conduct.",
    features: ["Ethical Guidelines", "Professional Standards", "Conduct Code", "Quality Assurance"],
    highlight: "Ethics First"
  },
  {
    icon: Heart,
    title: "Welfare Support",
    description: "₹1 Crore corpus fund for member welfare with financial aid during emergencies and pandemic support.",
    features: ["₹1 Crore Corpus Fund", "Emergency Financial Aid", "Pandemic Support", "Group Insurance Plans"],
    highlight: "₹1 Crore Fund"
  },
  {
    icon: Trophy,
    title: "Recognition Programs",
    description: "Memorial awards sponsored by members in various categories including Best Conference, Best Zone achievements.",
    features: ["Memorial Awards", "Best Conference Awards", "Zone Recognition", "Speaker Excellence"],
    highlight: "Member Sponsored"
  },
  {
    icon: GraduationCap,
    title: "Educational Committees",
    description: "Specialized committees for Journal, Law & Representation, ITAT coordination, and membership development.",
    features: ["Journal Committee", "Law Representation", "ITAT Coordination", "Membership Development"],
    highlight: "Specialized Focus"
  },
  {
    icon: Briefcase,
    title: "Digital Platform",
    description: "Revamped website (2023) with online membership applications, journal subscriptions, and ID card services.",
    features: ["Online Membership", "Digital Subscriptions", "E-ID Cards", "Regular Updates"],
    highlight: "2023 Revamp"
  }
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <Badge className="bg-accent/10 text-accent border border-accent/20 mb-6 text-base px-6 py-3">
            <Briefcase className="w-4 h-4 mr-2" />
            Comprehensive Services & Benefits
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From monthly publications to international exposure, AIFTP provides comprehensive support 
            for tax practitioners across India with 48 years of dedicated service.
          </p>
        </div>

        <div ref={servicesRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 transition-all duration-700 ${servicesVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 text-xs bg-accent text-accent-foreground">
                    {service.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-700 ${statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">48+</div>
            <div className="text-muted-foreground">Years of Service</div>
          </div>
          <div className="text-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">COVID Webinars</div>
          </div>
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">37+</div>
            <div className="text-muted-foreground">PILs Filed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">₹11L</div>
            <div className="text-muted-foreground">PM Cares Fund</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary via-primary-hover to-accent text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Join the AIFTP Family</h3>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Become part of India's most prestigious tax practitioners' federation 
                with 48 years of excellence and commitment to professional growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full group">
                  Apply for Membership
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full backdrop-blur-sm">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;