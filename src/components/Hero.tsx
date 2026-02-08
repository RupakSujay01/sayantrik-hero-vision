import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroEarth from "@/assets/hero-bg-new.jpg";

const Hero = () => {
  const { scrollY } = useScroll();

  // Animation Physics - "Butter Smooth"
  // Range: 0 to 300px scroll
  const scrollRange = [0, 300];

  // 1. Content fades in cleanly
  const contentOpacity = useTransform(scrollY, scrollRange, [0, 1]);

  // 2. Content slides UP from 60px to 0px (Grounded feel)
  const contentY = useTransform(scrollY, scrollRange, [60, 0]);

  // 3. Subtle scale up effectively "lands" the content (Premium feel)
  const contentScale = useTransform(scrollY, scrollRange, [0.95, 1]);

  // 4. Background fades out slightly to focus attention on content
  const imageOpacity = useTransform(scrollY, scrollRange, [1, 0.4]);

  return (
    // Outer container provides the scroll track (200vh height)
    <section className="relative h-[200vh]">

      {/* Sticky Inner Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background Image Layer */}
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${heroEarth})`,
            backgroundPosition: "center 25%",
            backgroundSize: "cover",
            opacity: imageOpacity
          }}
        />
        {/* Dark Overlay for Text Contrast */}
        <motion.div
          className="absolute inset-0 bg-black/40 pointer-events-none"
          style={{ opacity: imageOpacity }}
        />

        {/* Content Layer */}
        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 pb-12"
          style={{
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale
          }}
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="font-heading leading-tight text-foreground glow-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Engineering Excellence<br />
              Global Delivery<br />
              Innovation Leadership
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-semibold [text-shadow:0_0_10px_rgba(255,255,255,0.4)]">
              Your Trusted Partner for Engineering Excellence in Energy & Chemicals.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 mt-6 sm:mt-8">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary">2012</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Established</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary">250+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary">15+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Global Projects</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-primary">160+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Expert Engineers</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Banner CTA - Synchronized with content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale
          }}
        >
          <div className="container mx-auto px-6 flex justify-center py-6 pb-20">
            <Link to="/services">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(237,41,57,0.5)] hover:shadow-[0_0_30px_rgba(237,41,57,0.7)] transition-all duration-300">
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
