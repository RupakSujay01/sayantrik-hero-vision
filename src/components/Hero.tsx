import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import leftImage from "@/assets/rose-bank-fpso.jpg";
import rightImage from "@/assets/oil-plant.png";

const Hero = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [step, setStep] = useState(0); // 0: Left, 1: None, 2: Right, 3: None

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Sliders */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {/* Left/Top Diagonal Slider */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 70% 0, 30% 100%, 0 100%)",
            zIndex: 2
          }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="left-image"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${leftImage})`,
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right/Bottom Diagonal Slider */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(70% 0, 100% 0, 100% 100%, 30% 100%)",
            zIndex: 2
          }}
        >
          <AnimatePresence mode="wait">
            {step === 2 && (
              <motion.div
                key="right-image"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${rightImage})`,
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Precise Diagonal Divider Line */}
      <svg
        className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1="70"
          y1="0"
          x2="30"
          y2="100"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.2"
        />
      </svg>

      {/* Dark Overlay for Text Contrast */}
      <div
        className={`absolute inset-0 pointer-events-none z-[3] ${isMobile ? 'bg-gradient-to-b from-black/60 via-black/40 to-black' : 'bg-black/30'}`}
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

