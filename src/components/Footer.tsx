import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "#about" },
  { title: "Membership", href: "#membership" },
  { title: "Services", href: "#services" },
  { title: "Events", href: "#events" },
  { title: "News", href: "#news" },
  { title: "Contact", href: "#contact" }
];

const resources = [
  { title: "Tax Updates", href: "#" },
  { title: "Legal Resources", href: "#" },
  { title: "Professional Development", href: "#" },
  { title: "Member Portal", href: "#" },
  { title: "Certification Programs", href: "#" },
  { title: "Career Opportunities", href: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <Scale className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AIFTP</h3>
                <p className="text-sm text-primary-foreground/80">Tax Practitioners Federation</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering tax professionals across India with knowledge, resources, 
              and representation for over 25 years of excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <nav className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {resource.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>AIFTP Headquarters</p>
                  <p>New Delhi, India - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">+91-11-2345-6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">info@aiftp.org</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Subscribe to our newsletter for latest updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background text-foreground rounded text-sm"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover:bg-accent-hover transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 All India Federation of Tax Practitioners. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;