import { Building2, Award, Target, Users } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        {/* Who We Are */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-muted rounded-lg">
              <Building2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="font-heading text-foreground">
              Who We Are
            </h1>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-foreground">
              A story behind our company's growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Sayantrik Engineer India Pvt Ltd</span> is a name synonymous with engineering excellence in the dynamic and demanding fields of Oil & Gas, Petrochemicals, and Chemicals. Our journey, now spanning over a decade, is marked by a relentless commitment to delivering top-tier engineering solutions. We have risen as an emerging engineering consultancy with a reputation for excellence and innovation.
            </p>
          </div>
        </section>

        {/* Our Legacy */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Our Legacy
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded in 2012, Sayantrik Engineer India Pvt Ltd has steadily evolved into a prominent player in the industry. With offices strategically located in Hyderabad, Mumbai, and Chennai, we have cultivated a team of over 150 dedicated permanent resources. Our experts bring a wealth of experience and technical prowess to the projects we undertake.
          </p>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-lg p-8 overflow-x-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 min-w-max">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2012</div>
                <p className="text-sm text-muted-foreground font-medium">Establishment of Sayantrik</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2013</div>
                <p className="text-sm text-muted-foreground font-medium">First International work order</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2018</div>
                <p className="text-sm text-muted-foreground font-medium">First Global office in India</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2020</div>
                <p className="text-sm text-muted-foreground font-medium">First Branch</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2022</div>
                <p className="text-sm text-muted-foreground font-medium">500000 manhours milestone</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-foreground">2023</div>
                <p className="text-sm text-muted-foreground font-medium">Entry into Green H2 market</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              What We Offer
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Sayantrik Engineers, our mission is straightforward but profound - to provide comprehensive engineering solutions that are meticulously tailored to meet the specific needs of our clients. The Oil & Gas, Petrochemicals, and Chemicals sectors are known for their unique challenges, and our team is not just well-versed in these challenges, but we thrive on surpassing industry standards.
          </p>
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
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Head Office</span>
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-foreground mb-4">Hyderabad, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Plot no. 56, Opp Srikara Hospitals Lane, Mythrinagar, Madinaguda
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-4 h-4" />
                <span>120+ Engineers</span>
              </div>
            </div>

            {/* Delivery Center - Mumbai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Delivery Center</span>
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-foreground mb-4">Mumbai, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Engineering support and project coordination
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-4 h-4" />
                <span>25+ Engineers</span>
              </div>
            </div>

            {/* Delivery Center - Chennai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Delivery Center</span>
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-foreground mb-4">Chennai, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Multi-discipline engineering services
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-4 h-4" />
                <span>15+ Engineers</span>
              </div>
            </div>

            {/* Regional Office - Malaysia */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Regional Office</span>
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-foreground mb-4">Kuala Lumpur, Malaysia</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Business development and client interface
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-4 h-4" />
                <span>5+ Engineers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Leadership Team
            </h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading text-foreground mb-4">Organization Chart</h3>
            <p className="text-muted-foreground mb-6">
              Our leadership team brings decades of combined experience in engineering excellence and project delivery. They guide our strategic vision and ensure we maintain the highest standards of quality and innovation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Executive Leadership</h4>
                <p className="text-sm text-muted-foreground">Strategic direction and company vision</p>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Technical Directors</h4>
                <p className="text-sm text-muted-foreground">Engineering excellence and innovation</p>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-10 h-10 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Project Leaders</h4>
                <p className="text-sm text-muted-foreground">Project delivery and client success</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
