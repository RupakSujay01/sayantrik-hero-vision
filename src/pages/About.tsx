import { motion } from "framer-motion";
import { Users, Building2, Heart, Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const About = () => {
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
              <span className="text-primary font-bold tracking-widest uppercase text-lg mb-1 block">Who We Are</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-tight mb-2 font-heading">
                SAYANTRIK <span className="text-slate-400">ENGINEERS</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed whitespace-normal md:whitespace-nowrap">
                Engineering Excellence. <span className="text-foreground font-medium">Founder-Led Accountability.</span> Global Delivery.
              </p>
              <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
            </motion.div>
          </div>
        </div>

        {/* Metric Grid - White Strip */}
        <div className="w-full bg-slate-50 border-y border-border -mx-6 md:-mx-0 px-6 md:rounded-lg mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-border">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-12 px-4 flex flex-col items-center justify-center text-center hover:bg-white transition-colors group"
              >
                <span className="text-3xl md:text-4xl font-bold text-[#1B264F] mb-3 font-heading tracking-tight group-hover:scale-110 transition-transform duration-300">{metric.value}</span>
                <span className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide leading-tight">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Our Story */}
        <section className="grid md:grid-cols-12 gap-12 items-start border-t border-border pt-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              From a vision of efficient engineering to a global delivery partner.
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-slate-700 leading-relaxed text-justify">
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

        {/* 3. Founding Inspiration */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 -mx-6 px-6 py-20 md:mx-0 md:px-0 md:bg-transparent md:py-0">
          <div className="relative aspect-[3/4] md:aspect-square bg-slate-200 rounded-lg overflow-hidden border border-border shadow-sm">
            {/* Placeholder for Founder Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
              Founder Portrait
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">The Catalyst</h2>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Founding Inspiration</p>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
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

        {/* 4. Company Evolution & Capabilities */}
        <section className="space-y-12 pt-12 border-t border-border">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Evolution of Capabilities</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We have systematically expanded our competencies to offer a full-spectrum EPCM portfolio, evolving from process design specialists to integrated project delivery partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-border bg-border gap-px">
            {[
              "Feasibility Studies (FEL-1/2/3)",
              "Basic Engineering Design",
              "Front-End Engineering Design (FEED)",
              "Detailed Engineering",
              "Procurement Support",
              "Construction Management",
              "Safety Studies (HAZOP/SIL)",
              "3D Modelling & Laser Scanning",
              "As-Built Documentation"
            ].map((capability, idx) => (
              <div key={idx} className="bg-background p-6 flex items-center shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="font-medium text-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Values */}
        <section className="space-y-12 pb-12 border-b border-border">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Core Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide every decision, design, and delivery.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Technical Integrity",
                desc: "We adhere to the highest engineering standards. Accuracy, compliance, and safety are non-negotiable in our deliverables."
              },
              {
                title: "Client-Centric Agility",
                desc: "We adapt to our clients' needs without compromising quality, offering flexible engagement models that large EPCs cannot match."
              },
              {
                title: "Transparency",
                desc: "Open communication is the bedrock of our relationships. We believe in proactive reporting and honest stakeholder management."
              },
              {
                title: "Sustainable Innovation",
                desc: "We integrate sustainability into our designs, constantly seeking efficient, future-proof solutions for the energy transition."
              }
            ].map((value, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Leadership */}
        <section className="space-y-16 border-t border-border pt-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground">Guided by industry veterans with decades of global EPC experience.</p>
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

          {/* c) Engineering Leadership */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary uppercase tracking-widest border-b border-border pb-2">Engineering Leadership</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Process', 'Piping', 'Electrical', 'Instrumentation', 'Civil/Structural', 'Mechanical', 'Project Mgmt', 'Digital Twin'].map((dept, i) => (
                <div key={i} className="text-center p-4 border border-border rounded bg-white hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full mb-3"></div>
                  <h5 className="font-bold text-foreground text-sm">{dept} Lead</h5>
                  <p className="text-xs text-muted-foreground">Heading {dept}</p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-200">
                  CLIENT LOGO
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">End Clients / Owner Operators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-200">
                  CLIENT LOGO
                </div>
              ))}
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

        {/* 11. Industry Sectors */}
        <section className="space-y-12 border-t border-border pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Sectors Served</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Oil & Gas', 'Refining', 'Petrochemicals', 'Chemicals', 'Green Energy', 'Infrastructure'].map((sector, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 hover:border-primary/50 hover:shadow-lg transition-all rounded-lg group text-center space-y-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {/* Icon placeholder - using generic div for now, likely use Lucide in real scenario if available */}
                  <div className="w-6 h-6 bg-slate-300 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{sector}</h3>
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
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Ready to Engineer the Future?</h2>
            <p className="text-lg md:text-xl text-slate-300">
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
