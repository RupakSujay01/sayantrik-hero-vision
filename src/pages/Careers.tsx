import { Users, Building2, Heart, Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const Careers = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Life at SEIPL
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
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
        <section className="animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Current Openings
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our team of engineering professionals and be part of exciting projects that shape the future of the industry. We're always looking for talented individuals who share our passion for excellence.
            </p>

            {/* Job Listings */}
            <div className="space-y-4">
              {[
                {
                  title: "Senior Process Engineer",
                  location: "Hyderabad, Mumbai, Chennai",
                  type: "Full-time",
                  experience: "5-8 years",
                  description: "Lead process design and optimisation for oil & gas projects"
                },
                {
                  title: "Piping Design Engineer",
                  location: "Hyderabad, Chennai",
                  type: "Full-time",
                  experience: "3-6 years",
                  description: "Design and analyse piping systems for petrochemical facilities"
                },
                {
                  title: "Project Manager",
                  location: "Mumbai, Malaysia",
                  type: "Full-time",
                  experience: "8-12 years",
                  description: "Manage end-to-end project delivery and client relationships"
                },
                {
                  title: "Electrical Engineer",
                  location: "Hyderabad, Mumbai",
                  type: "Full-time",
                  experience: "4-7 years",
                  description: "Design electrical systems and instrumentation for industrial projects"
                }
              ].map((job, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Process */}
            <div className="bg-card border border-border rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">How to Apply</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">Send your resume and cover letter to our HR team</p>
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
