

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        {/* Who We Are */}
        <section className="mb-16 animate-fade-in">
          <h1 className="font-heading text-foreground mb-8">
            Who We Are
          </h1>
          <div className="space-y-6">
            <h2 className="font-heading text-foreground">
              A story behind our company's growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Sayantrik Engineers India Pvt Ltd</span> is a name synonymous with engineering excellence in the dynamic and demanding fields of Oil & Gas, Petrochemicals, and Chemicals. Our journey, now spanning over a decade, is marked by a relentless commitment to delivering top-tier engineering solutions. We have risen as an emerging engineering consultancy with a reputation for excellence and innovation.
            </p>
          </div>
        </section>

        {/* Our Legacy */}
        <section className="mb-16 animate-fade-in">
          <h2 className="font-heading text-foreground mb-6">
            Our Legacy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded in 2012, Sayantrik Engineers India Pvt Ltd has steadily evolved into a prominent player in the industry. With offices strategically located in Hyderabad, Mumbai, and Chennai, we have cultivated a team of over 150 dedicated permanent resources. Our experts bring a wealth of experience and technical prowess to the projects we undertake.
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
          <h2 className="font-heading text-foreground mb-6">
            What We Offer
          </h2>
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
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Head Office</span>
              <h3 className="font-heading text-foreground mb-4">Hyderabad, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Plot no. 56, Opp Srikara Hospitals Lane, Mythrinagar, Madinaguda
              </p>
              <span className="text-primary font-semibold">120+ Engineers</span>
            </div>

            {/* Delivery Center - Mumbai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Delivery Center</span>
              <h3 className="font-heading text-foreground mb-4">Mumbai, India</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Engineering support and project coordination
              </p>
              <span className="text-primary font-semibold">25+ Engineers</span>
            </div>

            {/* Delivery Center - Chennai */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg hover:border-border transition-all">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Delivery Center</span>
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

      </div>
    </main>
  );
};

export default About;
