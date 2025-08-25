import { useState } from "react";
import { Share2, Twitter, Facebook, Linkedin, Mail, Copy } from "lucide-react";
import presidentImage from "@/assets/president-samir-jani.jpg";

const Leadership = () => {
  const [showShare, setShowShare] = useState(false);

  const shareMessage = "Meet Mr. Samir S. Jani - National President of AIFTP (All India Federation of Tax Practitioners). Leading 11,000+ professionals across 29 states since 2025.";
  const currentUrl = window.location.href;

  const handleShare = (platform: string) => {
    const encodedMessage = encodeURIComponent(shareMessage);
    const encodedUrl = encodeURIComponent(currentUrl);
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=Meet AIFTP President&body=${encodedMessage} ${currentUrl}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareMessage} ${currentUrl}`);
        break;
    }
    setShowShare(false);
  };

  return (
    <section className="relative py-32 overflow-hidden" style={{
      backgroundImage: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%), url("https://www.transparenttextures.com/patterns/billie-holiday.png")`,
      backgroundBlendMode: "overlay",
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="floating-orb w-80 h-80 bg-primary/20 top-10 -right-20"></div>
        <div className="floating-orb w-96 h-96 bg-accent/15 bottom-10 -left-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="badge-glow inline-flex items-center gap-3 rounded-full px-8 py-4 mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-lg">Current Leadership</span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black heading-gradient mb-6 animate-shimmer">
            Meet Our President
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 animate-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* President Image */}
              <div className="relative group">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative w-96 h-96 mx-auto rounded-3xl overflow-hidden border-4 border-primary/40 shadow-2xl group-hover:border-primary/60 transition-all duration-500">
                    <img 
                      src={presidentImage} 
                      alt="Mr. Samir S. Jani - National President"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Social Share Buttons */}
                  <div className="flex justify-center mt-8 space-x-4">
                    <button 
                      onClick={() => setShowShare(!showShare)}
                      className="social-btn relative"
                      title="Share President's Profile"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    
                    {showShare && (
                      <div className="flex space-x-2 animate-scale-in">
                        <button 
                          onClick={() => handleShare('twitter')} 
                          className="social-btn"
                          title="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleShare('facebook')} 
                          className="social-btn"
                          title="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')} 
                          className="social-btn"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleShare('email')} 
                          className="social-btn"
                          title="Share via Email"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleShare('copy')} 
                          className="social-btn"
                          title="Copy Link"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* President Info */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black text-white text-glow">
                    Mr. Samir S. Jani
                  </h3>
                  <div className="space-y-2">
                    <div className="text-2xl text-primary font-bold text-glow">National President (2025)</div>
                    <div className="text-lg text-accent/90 font-medium">Advocate, Junagadh</div>
                  </div>
                </div>
                
                <div className="card-premium p-8 rounded-3xl">
                  <p className="text-xl text-white/90 leading-relaxed italic font-medium">
                    "AIFTP stands as a beacon of professional excellence, uniting tax practitioners across India. 
                    Our mission is to ensure that every member receives the support, knowledge, and representation 
                    they deserve in their professional journey. Together, we build a stronger tax fraternity."
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="glass-card px-6 py-3 rounded-full">
                    <span className="text-primary font-semibold">48+ Years Experience</span>
                  </div>
                  <div className="glass-card px-6 py-3 rounded-full">
                    <span className="text-accent font-semibold">11,000+ Members</span>
                  </div>
                  <div className="glass-card px-6 py-3 rounded-full">
                    <span className="text-primary font-semibold">29 States</span>
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

export default Leadership;