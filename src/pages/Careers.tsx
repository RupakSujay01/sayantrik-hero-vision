"use client"; // Add this if you are using Next.js App Router

import React, { useEffect } from "react";
import { Users, Building2, Heart, Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const Careers = () => {
  useEffect(() => {
    // 1. Load the Zoho CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
    document.head.appendChild(link);

    // 2. Load the Zoho Script
    const script = document.createElement("script");
    script.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
    script.async = true;

    // 3. Initialize the widget once the script loads
    script.onload = () => {
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: "rec_job_listing_div",
          page_name: "Careers",
          source: "CareerSite",
          site: "https://sayantrik.zohorecruit.in",
          brand_color: "#E11D48", // Using the closest hex to hsl(355 84% 55%) Tailwind rose-600/Sayantrik Primary
          empty_job_msg: "No current Openings",
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup function to prevent duplicate scripts if the component unmounts
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Careers"
        description="Join Sayantrik Engineers. Explore exciting career opportunities in engineering, project management, and design."
        url="/careers"
      />
      <div className="container mx-auto px-6 py-10 md:py-20">
        {/* Life at SEIPL Section */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Life at SEIPL
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Sayantrik Engineers, we believe that our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning that empowers our team members to grow both personally and professionally.
            </p>

            {/* Culture Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Collaborative Environment",
                  description: "Work with talented professionals in a supportive team environment"
                },
                {
                  icon: Heart,
                  title: "Work-Life Balance",
                  description: "We understand the importance of maintaining a healthy work-life balance"
                },
                {
                  icon: Briefcase,
                  title: "Career Growth",
                  description: "Continuous learning opportunities and clear career progression paths"
                },
                {
                  icon: Building2,
                  title: "Innovation Focus",
                  description: "Encourage creative thinking and innovative solutions to complex problems"
                },
                {
                  icon: Calendar,
                  title: "Flexible Work",
                  description: "Flexible working arrangements to support diverse needs"
                },
                {
                  icon: MapPin,
                  title: "Multiple Locations",
                  description: "Work from our offices in Hyderabad, Mumbai, Chennai, or Malaysia"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Section */}
        <section className="animate-fade-in relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Current Openings
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Join our team of engineering professionals and be part of exciting projects that shape the future of the industry. We're always looking for talented individuals who share our passion for excellence.
            </p>

            {/* ZOHO RECRUIT WIDGET INTEGRATION */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm mt-8 relative z-10">
              <div id="rec_job_listing_div" className="min-h-[300px]"></div>
            </div>

            {/* Application Process */}
            <div className="bg-card border border-border rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">How to Apply</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">Apply directly through the open roles listed above</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Initial Screening</h4>
                  <p className="text-sm text-muted-foreground">We'll review your application and conduct initial interviews</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Final Interview</h4>
                  <p className="text-sm text-muted-foreground">Meet with our technical team and leadership for final assessment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Careers;