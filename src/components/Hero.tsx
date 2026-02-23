import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Using the 6 high-quality images provided by the user
import img1 from "@/assets/hero-1.jpg";
import img2 from "@/assets/hero-2.png";
import img3 from "@/assets/hero-3.jpg";
import img5 from "@/assets/hero-5.jpg";
import img6 from "@/assets/hero-6.jpg";
import img7 from "@/assets/hero-7.jpg";
import img8 from "@/assets/hero-8.jpg";

const Hero = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 6);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  const heroImages = [img8, img1, img6, img7, img3, img5];

  const frames = [
    {
      id: "frame-1",
      clipPath: "polygon(0 0, 27.5% 0, 22.5% 100%, 0 100%)",
    },
    {
      id: "frame-2",
      clipPath: "polygon(27.5% 0, 52.5% 0, 47.5% 100%, 22.5% 100%)",
    },
    {
      id: "frame-3",
      clipPath: "polygon(52.5% 0, 77.5% 0, 72.5% 100%, 47.5% 100%)",
    },
    {
      id: "frame-4",
      clipPath: "polygon(77.5% 0, 100% 0, 100% 100%, 72.5% 100%)",
    },
  ];

  return (
    <section className="relative min-h-[85vh] md:h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Sliders - Seamless Reconstruction Grid */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className="absolute inset-0"
            style={{
              clipPath: frame.clipPath,
              zIndex: 2
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${frame.id}-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Dark Overlay for Text Contrast */}
      <div
        className={`absolute inset-0 pointer-events-none z-[3] ${isMobile ? 'bg-gradient-to-b from-black/80 via-black/40 to-black/80' : 'bg-black/30'}`}
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 w-full flex flex-col items-center justify-center py-12">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading leading-tight text-white drop-shadow-md glow-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl break-words"
          >
            Engineering Excellence<br />
            Global Delivery<br />
            Innovation Leadership
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-semibold [text-shadow:0_0_10px_rgba(255,255,255,0.4)] px-2"
          >
            Your Trusted Partner for Engineering Excellence in <br className="hidden md:block" /> Energy & Chemicals.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center bg-white/50 backdrop-blur-md rounded-xl p-3 md:p-6 shadow-xl border border-white/20 mt-3 md:mt-8 mx-auto max-w-full"
          >
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-4xl font-heading font-extrabold text-primary">2012</div>
              <div className="text-[10px] md:text-sm text-foreground font-bold uppercase tracking-wide">Established</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-4xl font-heading font-extrabold text-primary">250+</div>
              <div className="text-[10px] md:text-sm text-foreground font-bold uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-4xl font-heading font-extrabold text-primary">15+</div>
              <div className="text-[10px] md:text-sm text-foreground font-bold uppercase tracking-wide">Global Projects</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-4xl font-heading font-extrabold text-primary">160+</div>
              <div className="text-[10px] md:text-sm text-foreground font-bold uppercase tracking-wide">Expert Engineers</div>
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6"
          >
            <Link to="/services" className="w-full md:w-auto flex justify-center">
              <Button size="lg" className="w-full md:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(237,41,57,0.5)] hover:shadow-[0_0_30px_rgba(237,41,57,0.7)] transition-all duration-300 whitespace-nowrap">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
