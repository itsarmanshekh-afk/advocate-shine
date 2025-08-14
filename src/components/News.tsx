import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const newsItems = [
  {
    category: "Tax Updates",
    title: "New GST Return Filing Guidelines Released",
    excerpt: "Latest guidelines from CBIC regarding monthly GST return filing procedures and compliance requirements for FY 2024-25.",
    date: "15 August 2024",
    readTime: "5 min read"
  },
  {
    category: "Legal Updates",
    title: "Supreme Court Ruling on Income Tax Exemptions",
    excerpt: "Landmark judgment clarifying the scope of Section 80C deductions and their impact on individual taxpayers.",
    date: "12 August 2024", 
    readTime: "7 min read"
  },
  {
    category: "Professional Development",
    title: "National Tax Conference 2024 Announced",
    excerpt: "Annual conference featuring leading tax experts, government officials, and industry leaders. Early bird registrations now open.",
    date: "10 August 2024",
    readTime: "3 min read"
  },
  {
    category: "Policy Changes",
    title: "Revised TDS Rates for FY 2024-25",
    excerpt: "Updated tax deduction at source rates and thresholds effective from the current financial year.",
    date: "08 August 2024",
    readTime: "4 min read"
  }
];

const News = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="badge-professional mb-4">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Informed with 
            <span className="heading-gradient block">Tax & Legal News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the latest updates on tax policy, legal developments, and 
            professional opportunities directly from industry experts.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="card-professional group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="btn-professional">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;