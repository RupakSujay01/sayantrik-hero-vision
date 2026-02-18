import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroEarth from "@/assets/hero-bg-new.jpg";

const Hero = () => {
  const { scrollY } = useScroll();

  // Animation Physics - "Butter Smooth"
  // Range: 0 to 300px scroll (adjusted for mobile)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scrollRange = [0, 300];

  // Animated values (Only apply on Desktop)
  const contentOpacity = useTransform(scrollY, scrollRange, [0, 1]);
  const contentY = useTransform(scrollY, scrollRange, [60, 0]);
  const contentScale = useTransform(scrollY, scrollRange, [0.95, 1]);
  const imageOpacity = useTransform(scrollY, scrollRange, [1, 0.4]);

  return (
    // Mobile: Auto height, normal scroll. Desktop: 200vh for scroll effect.
    <section className="relative min-h-screen md:h-[200vh] bg-black">

      {/* 
        Container:
        - Mobile: Relative, static flow.
        - Desktop: Sticky for scroll effect.
      */}
      <div className={`${isMobile ? 'relative min-h-screen flex flex-col' : 'sticky top-0 h-screen'} w-full flex items-center justify-center overflow-hidden`}>

        {/* Background Image Layer */}
        <motion.div
          className="absolute inset-0 bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${heroEarth})`,
            // Mobile: Fit width (100% auto) to avoid zoom, aligned top.
            // Desktop: 100% 100% fixed aspect.
            backgroundSize: isMobile ? "100% auto" : "100% 100%",
            backgroundPosition: isMobile ? "top center" : "center 25%",
            // Disable opacity transition on mobile
            opacity: isMobile ? 1 : imageOpacity
          }}
        />

        {/* Dark Overlay for Text Contrast - gradient on mobile for better text readability over black */}
        <motion.div
          className={`absolute inset-0 pointer-events-none z-0 ${isMobile ? 'bg-gradient-to-b from-black/60 via-black/40 to-black' : 'bg-black/40'}`}
          style={{ opacity: isMobile ? 1 : imageOpacity }}
        />

        {/* Content Layer */}
        <motion.div
          className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:pb-12 w-full flex-grow flex flex-col justify-center"
          style={{
            y: isMobile ? 0 : contentY,
            opacity: isMobile ? 1 : contentOpacity,
            scale: isMobile ? 1 : contentScale
          }}
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8 mt-16 md:mt-0">
            {/* Main Headline */}
            <h1 className="font-heading leading-tight text-foreground glow-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl break-words">
              Engineering Excellence<br />
              Global Delivery<br />
              Innovation Leadership
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-semibold [text-shadow:0_0_10px_rgba(255,255,255,0.4)] px-2">
              Your Trusted Partner for Engineering Excellence in <br className="hidden md:block" /> Energy & Chemicals.
            </p>

            {/* CTAs */}
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center bg-white/50 backdrop-blur-md rounded-xl p-3 md:p-6 shadow-xl border border-white/20 mt-6 md:mt-8 mx-auto max-w-full">
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
            </div>
          </div>
        </motion.div>

        {/* Stats Banner CTA - Synchronized with content */}
        <motion.div
          className={`${isMobile ? 'relative pb-12' : 'absolute bottom-0 left-0 right-0'} z-10`}
          style={{
            y: isMobile ? 0 : contentY,
            opacity: isMobile ? 1 : contentOpacity,
            scale: isMobile ? 1 : contentScale
          }}
        >
          <div className="container mx-auto px-6 flex justify-center py-6 md:pb-20">
            <Link to="/services" className="w-full md:w-auto flex justify-center">
              <Button size="lg" className="w-full md:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(237,41,57,0.5)] hover:shadow-[0_0_30px_rgba(237,41,57,0.7)] transition-all duration-300 whitespace-nowrap">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
