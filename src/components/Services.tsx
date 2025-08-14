import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Scale, 
  Calculator, 
  GraduationCap, 
  Users, 
  BookOpen,
  Award,
  Briefcase 
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Tax Advisory Services",
    description: "Expert guidance on complex tax matters, compliance, and regulatory requirements for individuals and businesses."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal Representation",
    description: "Professional legal representation in tax tribunals, high courts, and other judicial proceedings."
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Chartered Accountancy",
    description: "Comprehensive accounting, auditing, and financial advisory services by certified professionals."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Professional Development",
    description: "Continuing education programs, workshops, and certifications to enhance professional skills."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Networking Opportunities",
    description: "Connect with industry peers, share best practices, and build professional relationships."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Knowledge Resources",
    description: "Access to latest tax updates, circulars, case laws, and comprehensive professional libraries."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professional Recognition",
    description: "Industry awards, certifications, and recognition programs for outstanding contributions."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business Support",
    description: "Practice management tools, client referrals, and business development resources."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="badge-professional mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Professional 
            <span className="heading-gradient block">Support & Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering tax practitioners, chartered accountants, and advocates 
            with the tools, knowledge, and support needed to excel in their practice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-professional group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;