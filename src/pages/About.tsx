import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Users, Building2, Heart, Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import placeholder from "@/assets/logo.png"; // Fallback

/*
import clientCgc from "@/assets/cgc-logo.jpg";
import clientDynaciate from "@/assets/dynaciate-logo.png";
import clientIsgec from "@/assets/isgec-logo.png";
import clientKbr from "@/assets/kbr-logo.png";
import clientLnt from "@/assets/lnt-logo.jpg";
import clientLntSnl from "@/assets/lnt-snl-logo.jpg";
import clientMaire from "@/assets/maire-tecnimont-logo.jpg";
import clientMcdermott from "@/assets/mcdermott-logo.png";
import clientMeil from "@/assets/meil-logo.jpg";
import clientPunj from "@/assets/punj-lloyd-logo.jpg";
import clientSidvin from "@/assets/sidvin-logo.jpg";
import clientStandard from "@/assets/standard-group-logo.png";
import clientTata from "@/assets/tata-technologies-logo.jpg";
import clientTecnimont from "@/assets/tecnimont-logo.png";
import clientThermax from "@/assets/thermax-logo.jpg";
import clientThermosystems from "@/assets/thermosystems-logo.png";
import clientThyssenkrupp from "@/assets/thyssenkrupp-logo.png";
import clientWorley from "@/assets/worley-logo.jpg";
import clientPoratha from "@/assets/poratha-logo.png";
*/

const directClients = [
  placeholder, placeholder, placeholder, placeholder, placeholder,
  placeholder, placeholder, placeholder, placeholder, placeholder
];

const About = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timeoutId = setTimeout(() => {
        scrollToSection(id);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Learn about Sayantrik Engineers' journey, leadership, and commitment to engineering excellence and founder-led accountability."
        url="/about"
      />
      <div className="container mx-auto px-6 py-10 md:py-20 space-y-24">

        {/* 1. Hero Section - Modern Clean Style */}
        <div className="w-full bg-white pt-0 pb-8 text-center relative overflow-hidden">
          {/* Subtle Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm md:text-lg mb-1 block">Who We Are</span>
              <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-tight mb-2 font-heading">
                SAYANTRIK <span className="text-slate-400">ENGINEERS</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              <p className="text-base md:text-2xl text-slate-600 font-light leading-relaxed whitespace-normal md:whitespace-nowrap">
                Engineering Excellence. <span className="text-foreground font-medium">Founder-Led Accountability.</span> Global Delivery.
              </p>
              <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
            </motion.div>
          </div>
        </div>

        {/* Metric Grid - Centered Box Style */}
        <div className="w-full max-w-6xl mx-auto bg-slate-50 border border-border rounded-xl mb-24 p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { value: "13+", label: "Years in Operation" },
              { value: "150+", label: "Engineering Professionals" },
              { value: "500,000+", label: "Man-Hours Delivered" },
              { value: "200+", label: "Projects Completed" },
              { value: "5", label: "Countries Served" },
              { value: "ISO 9001", label: "Certified (TÜV SÜD)" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center text-center group"
              >
                <span className="text-3xl md:text-4xl font-bold text-[#1B264F] mb-2 font-heading tracking-tight group-hover:text-primary transition-colors duration-300">{metric.value}</span>
                <span className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide leading-tight">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Our Story */}
        <section id="who-we-are" className="grid md:grid-cols-12 gap-12 items-start border-t border-border pt-16">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              From a vision of efficient engineering to a global delivery partner.
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-base md:text-lg text-slate-700 leading-relaxed text-justify">
            <p>
              Sayantrik Engineers India Pvt Ltd began with a singularity of purpose: to bridge the gap between complex industrial challenges and seamless execution. Founded over a decade ago, we recognized a critical need in the Oil & Gas and Petrochemical sectors for an engineering partner that could combine deep technical expertise with the agility of a founder-led organization.
            </p>
            <p>
              We moved beyond the traditional consultancy model, embedding ourselves as true extensions of our clients' teams. By prioritizing accountability and technical precision, we have grown from a niche consultancy into a multi-disciplinary powerhouse, trusted by Tier-1 EPC contractors and global owner-operators.
            </p>
            <p>
              Today, our footprint spans continents, yet our core philosophy remains unchanged: every project, regardless of scale, receives the same rigorous attention to detail and commitment to safety that defined our very first assignment.
            </p>
          </div>
        </section>

        {/* 3. Our Vision */}
        <section id="vision" className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 -mx-6 px-6 py-20 md:mx-0 md:px-0 md:bg-transparent md:py-0">
          <div className="relative aspect-[3/4] md:aspect-square bg-slate-200 rounded-lg overflow-hidden border border-border shadow-sm">
            {/* Placeholder for Founder Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
              Founder Portrait
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Our Vision</h2>
              <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Growth & Excellence</p>
            </div>
            <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
              <p>
                Our story is rooted in the belief that engineering excellence is not just about calculations, but about ownership. The founding team, comprised of veterans from major EPC organizations, saw an opportunity to create a firm where "good enough" was never acceptable.
              </p>
              <p>
                Driven by a desire to bring institutional-grade engineering standards to a more agile, client-focused delivery model, Sayantrik was born. The goal was clear: to offer the technical depth of a large multinational with the responsiveness and personal commitment of a specialized boutique firm.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-slate-600 my-6">
                "We didn't just want to build a company; we wanted to build a legacy of trust, where engineering integrity is the currency of our success."
              </blockquote>
            </div>
          </div>
        </section>



        {/* 6. Leadership */}
        <section className="space-y-16 border-t border-border pt-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Leadership</h2>
            <p className="text-base md:text-lg text-muted-foreground">Guided by industry veterans with decades of global EPC experience.</p>
          </div>

          {/* a) Board of Directors */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary uppercase tracking-widest border-b border-border pb-2">Board of Directors</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white border border-border p-6 flex gap-6 items-start rounded-lg shadow-sm">
                  <div className="w-24 h-24 bg-slate-200 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Director Name</h4>
                    <p className="text-primary font-medium text-sm mb-2">Executive Director</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">M.Tech, IIT | 25+ Years Exp</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Visionary leader with extensive experience in scaling engineering operations across global markets.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* b) Advisory Board */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary uppercase tracking-widest border-b border-border pb-2">Advisory Board</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-slate-50 border border-border p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Advisor Name</h4>
                      <p className="text-sm text-slate-500">Subject Matter Expert - Process</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Providing strategic guidance on complex technical challenges and technology adoption.
                  </p>
                </div>
              ))}
            </div>
          </div>


        </section>

        {/* 7. Clients */}
        <section className="space-y-12 border-t border-border pt-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Trusted Partners</h2>
            <p className="text-lg text-muted-foreground">Collaborating with industry leaders to deliver world-class projects.</p>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold text-purple-600 uppercase tracking-widest">Direct Clients / EPC Contractors</h3>
            {/* Scrolling Marquee Container */}
            <div className="w-full bg-white border-y border-gray-100 py-10 overflow-hidden relative group">
              {/* Gradient Masks for smooth fade at edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-16 items-center flex-nowrap pl-16"
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Adjust speed as needed
                    repeatType: "loop"
                  }}
                  style={{ width: "fit-content" }}
                >
                  {[...directClients, ...directClients, ...directClients, ...directClients].map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0 h-16 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">End Clients / Owner Operators</h3>
            {/* Scrolling Marquee Container */}
            <div className="w-full bg-white border-y border-gray-100 py-10 overflow-hidden relative group">
              {/* Gradient Masks for smooth fade at edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-16 items-center flex-nowrap pl-16"
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Adjust speed as needed
                    repeatType: "loop"
                  }}
                  style={{ width: "fit-content" }}
                >
                  {[...directClients, ...directClients, ...directClients, ...directClients].map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0 h-16 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Journey Timeline */}
        <section className="space-y-12 border-t border-border pt-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">A decade of milestones and continuous growth.</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-12 space-y-12 py-4">
            {[
              { year: "2012", title: "Inception", desc: "Established Sayantrik Engineers with a core team of 5." },
              { year: "2013", title: "Global Debut", desc: "Secured first international work order for a Middle East refinery." },
              { year: "2018", title: "Strategic Partnership", desc: "Formed first global delivery partnership with top-tier EPC." },
              { year: "2020", title: "Expansion", desc: "Opened first branch office to support growing workforce." },
              { year: "2022", title: "Milestone", desc: "Crossed 500,000 man-hours delivered safely." },
              { year: "2023", title: "Sustainability", desc: "Entered Green Hydrogen market with pilot project engineering." },
              { year: "2025", title: "Looking Ahead", desc: "Targeting 1M man-hours and expanding digital twin portfolio." },
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
                  <span className="text-2xl font-bold text-primary font-heading w-24 flex-shrink-0">{item.year}</span>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Certifications & Accreditations */}
        <section className="py-12 border-y border-border bg-slate-50 -mx-6 px-6 md:mx-0 md:px-8 md:rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Accreditations</h2>
              <p className="text-slate-600 text-sm">Commitment to quality and safety standards.</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="px-6 py-3 bg-white border border-slate-200 rounded font-bold text-slate-700 shadow-sm flex items-center gap-2">
                {/* ISO Icon placeholder */}
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">ISO</span>
                <span>ISO 9001:2015</span>
              </div>
              <div className="px-6 py-3 bg-white border border-slate-200 rounded font-bold text-slate-700 shadow-sm opacity-50 border-dashed">
                <span>Review Pending</span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Testimonials */}
        <section className="space-y-12 pt-12">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Sayantrik's team functioned as a seamless extension of our own. Their attention to detail in the FEED stage saved us significant rework during construction.",
                author: "Project Director",
                company: "Leading EPC Contractor, Middle East"
              },
              {
                quote: "Their responsiveness and technical depth in piping stress analysis are unmatched for a firm of their size.",
                author: "Engineering Manager",
                company: "Fortune 500 Chemical Company"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-primary shadow-sm rounded-r-lg">
                <p className="text-lg italic text-slate-700 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Global Presence */}
        <section className="mb-16 animate-fade-in border border-border rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-foreground mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategic offices and delivery centers across multiple regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Head Office - Hyderabad */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Head Office</span>
              <h3 className="font-heading text-foreground mb-4">Hyderabad, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Global Headquarters & Engineering Centre. Coordinating with international branches in USA & Malaysia.
              </p>
              <span className="text-primary font-semibold">120+ Engineers</span>
            </div>

            {/* Delivery Center - Mumbai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Delivery Centre</span>
              <h3 className="font-heading text-foreground mb-4">Mumbai, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Engineering support and project coordination
              </p>
              <span className="text-primary font-semibold">25+ Engineers</span>
            </div>

            {/* Delivery Center - Chennai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Delivery Centre</span>
              <h3 className="font-heading text-foreground mb-4">Chennai, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Multi-discipline engineering services
              </p>
              <span className="text-primary font-semibold">15+ Engineers</span>
            </div>

            {/* Regional Office - Malaysia */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Regional Office</span>
              <h3 className="font-heading text-foreground mb-4">Kuala Lumpur, Malaysia</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Business development and client interface
              </p>
              <span className="text-primary font-semibold">5+ Engineers</span>
            </div>
          </div>
        </section>

        {/* 12. Call to Action */}
        <section className="bg-slate-900 -mx-6 px-6 py-20 text-center md:mx-0 md:rounded-xl text-white space-y-8 relative overflow-hidden">
          {/* Abstract Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-purple-600"></div>

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl md:text-5xl font-heading font-bold leading-tight">Ready to Engineer the Future?</h2>
            <p className="text-base md:text-xl text-slate-300">
              Whether you need a partner for your next complex project or looking to join a team of innovators.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
              <button className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg shadow-red-900/20">
                Contact Us
              </button>
              <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded font-bold text-lg transition-colors">
                View Career Openings
              </button>
            </div>
          </div>

          <div className="pt-8 text-sm text-slate-500 border-t border-white/10 mt-8">
            <p>Direct Inquiries: <a href="mailto:info@sayantrik.com" className="text-primary hover:underline">info@sayantrik.com</a></p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
