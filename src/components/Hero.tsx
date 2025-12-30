import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import heroEarth from "@/assets/hero-bg-new.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate animation progress based on viewport height
  // animate over the first 100vh of scrolling
  // We use 400 as a rough approximation of vh for smoother math, or window.innerHeight if dynamic
  const scrollRange = 400;
  const progress = Math.min(1, Math.max(0, scrollY / scrollRange));

  // Content slides in from top (-50px) to center (0px)
  // We want it to be fully hidden initially if requested "no content"
  // User said "slide in from top" and "content visible once user scrolls".
  // Let's translate from -100px and opacity 0.

  const contentTranslateY = (1 - progress) * -50; // starts at -50px, ends at 0
  const contentOpacity = Math.pow(progress, 1.5); // Ease in opacity

  // Image opacity fade
  const imageOpacity = 1 - (progress * 0.6); // Fades to 0.4

  return (
    // Outer container provides the scroll track (200vh height)
    <section className="relative h-[200vh]">

      {/* Sticky Inner Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-100 ease-out"
          style={{
            backgroundImage: `url(${heroEarth})`,
            backgroundPosition: "center 25%",
            backgroundSize: "100% 100%",
            opacity: imageOpacity
          }}
        />
        {/* Dark Overlay for Text Contrast */}
        <div
          className="absolute inset-0 bg-black/40 pointer-events-none"
          style={{ opacity: imageOpacity }}
        />

        {/* Content Layer */}
        <div
          className="relative z-10 container mx-auto px-6 pb-12"
          style={{
            transform: `translateY(${contentTranslateY}px)`,
            opacity: contentOpacity,
            willChange: "transform, opacity"
          }}
        >
          <div className="max-w-7xl mx-auto text-center space-y-8">
            {/* Main Headline */}
            <h1 className="font-heading leading-tight text-foreground glow-text">
              Engineering Excellence<br />
              Global Delivery<br />
              Innovation Leadership
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-semibold [text-shadow:0_0_10px_rgba(255,255,255,0.4)]">
              Your Trusted Partner for Engineering Excellence in <br /> Energy & Chemicals.
            </p>

            {/* CTAs */}
            {/* Stats Grid - Moved here */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 mt-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">2012</div>
                <div className="text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Established</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">250+</div>
                <div className="text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">15+</div>
                <div className="text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Global Presence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">160+</div>
                <div className="text-xs md:text-sm text-foreground font-bold uppercase tracking-wide">Expert Engineers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner - Moved to bottom of viewport and animated */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            transform: `translateY(${contentTranslateY}px)`,
            opacity: contentOpacity,
            willChange: "transform, opacity"
          }}
        >
          <div className="container mx-auto px-6 flex justify-center py-6 pb-20">
            <Link to="/services">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(237,41,57,0.5)] hover:shadow-[0_0_30px_rgba(237,41,57,0.7)] transition-all duration-300">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
