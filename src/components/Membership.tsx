import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles, ArrowRight } from "lucide-react";

const membershipBenefits = [
  "Professional Development Programs",
  "Industry Recognition & Awards", 
  "Tax Updates & Legal Resources",
  "Networking Events & Conferences",
  "Government Representation",
  "Practice Management Support",
  "Continuing Education Credits",
  "Member Directory Access"
];

const membershipPlans = [
  {
    name: "Individual",
    icon: <Star className="w-6 h-6" />,
    price: "₹2,500",
    period: "per year",
    description: "Perfect for individual practitioners starting their professional journey",
    features: [
      "Access to all basic resources",
      "Monthly newsletters",
      "Local chapter events",
      "Basic certification programs"
    ],
    popular: false
  },
  {
    name: "Professional",
    icon: <Crown className="w-6 h-6" />,
    price: "₹5,000",
    period: "per year", 
    description: "Comprehensive benefits for established practitioners",
    features: [
      "Everything in Individual plan",
      "Priority event registration",
      "Advanced certification programs",
      "Direct government consultation access",
      "Practice management tools"
    ],
    popular: true
  },
  {
    name: "Corporate",
    icon: <Sparkles className="w-6 h-6" />,
    price: "₹15,000",
    period: "per year",
    description: "Enterprise solutions for firms and organizations",
    features: [
      "Everything in Professional plan",
      "Multiple practitioner access",
      "Corporate training programs",
      "Dedicated relationship manager",
      "Custom consultation services"
    ],
    popular: false
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="badge-professional mb-4">
            Join AIFTP
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become Part of India's
            <span className="heading-gradient block">Leading Tax Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who trust AIFTP for career growth, 
            industry insights, and professional excellence.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Membership Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg shadow-sm">
                <Check className="w-5 h-5 text-success shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {membershipPlans.map((plan, index) => (
            <Card key={index} className={`card-professional relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'btn-professional' : 'btn-accent'}`} 
                  size="lg"
                >
                  Choose {plan.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h3>
          <p className="text-lg mb-6 text-white/90">
            Join AIFTP today and become part of India's most respected tax professional community.
          </p>
          <Button size="lg" className="btn-accent">
            Start Your Membership Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;