import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideImage {
  src: string;
  alt: string;
  caption: string;
  description?: string;
}

const ImageSlider3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample images - replace with actual images
  const images: SlideImage[] = [
    {
      src: "/api/placeholder/800/500",
      alt: "AIFTP Conference 2024",
      caption: "Annual National Conference 2024",
      description: "Bringing together tax practitioners from across India"
    },
    {
      src: "/api/placeholder/800/500", 
      alt: "Tax Workshop",
      caption: "Professional Development Workshop",
      description: "Continuous learning and skill enhancement programs"
    },
    {
      src: "/api/placeholder/800/500",
      alt: "Member Awards",
      caption: "Excellence Awards Ceremony", 
      description: "Recognizing outstanding contributions to the profession"
    },
    {
      src: "/api/placeholder/800/500",
      alt: "Legal Advocacy",
      caption: "Legal Advocacy & PIL Filing",
      description: "Fighting for practitioners' rights and professional interests"
    },
    {
      src: "/api/placeholder/800/500",
      alt: "Training Session",
      caption: "Technical Training Programs",
      description: "Keeping members updated with latest tax regulations"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AIFTP in Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey of empowering tax practitioners across India through conferences, 
            training programs, and professional development initiatives.
          </p>
        </div>

        {/* 3D Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative h-[500px] md:h-[600px] perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Slides */}
            <div className="relative w-full h-full preserve-3d">
              {images.map((image, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                const isNext = index === (currentIndex + 1) % images.length;
                
                let transform = '';
                let zIndex = 1;
                let opacity = 0.3;
                
                if (isActive) {
                  transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                  zIndex = 3;
                  opacity = 1;
                } else if (isPrev) {
                  transform = 'translateX(-60%) translateZ(-200px) rotateY(25deg) scale(0.8)';
                  zIndex = 2;
                  opacity = 0.7;
                } else if (isNext) {
                  transform = 'translateX(60%) translateZ(-200px) rotateY(-25deg) scale(0.8)';
                  zIndex = 2;
                  opacity = 0.7;
                } else {
                  transform = 'translateX(0) translateZ(-400px) scale(0.6)';
                  zIndex = 1;
                  opacity = 0;
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      transformStyle: 'preserve-3d'
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                  >
                    <div className="relative w-full h-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-3/4 object-cover"
                      />
                      
                      {/* Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {image.caption}
                        </h3>
                        {image.description && (
                          <p className="text-gray-200 text-sm">
                            {image.description}
                          </p>
                        )}
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-card/80"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-card/80"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <button
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
          >
            {isAutoPlay ? 'Pause' : 'Resume'} Auto-play
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider3D;