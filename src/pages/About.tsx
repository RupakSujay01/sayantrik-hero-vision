const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        {/* Who We Are */}
        <section className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h1>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              A story behind our company's growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              which talks on passion for engineering, how we have grown over challenges and what can we deliver to this world with our strengths.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Sayantrik Engineer India Pvt Ltd</span> is a name synonymous with engineering excellence in the dynamic and demanding fields of Oil & Gas, Petrochemicals, and Chemicals. Our journey, now spanning over a decade, is marked by a relentless commitment to delivering top-tier engineering solutions. We have risen as an emerging engineering consultancy with a reputation for excellence and innovation.
            </p>
          </div>
        </section>

        {/* Our Legacy */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Legacy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded in 2012, Sayantrik Engineer India Pvt Ltd has steadily evolved into a prominent player in the industry. With offices strategically located in Hyderabad, Mumbai, and Chennai, we have cultivated a team of over 150 dedicated permanent resources. Our experts bring a wealth of experience and technical prowess to the projects we undertake.
          </p>

          {/* Timeline */}
          <div className="bg-card border border-border rounded-lg p-8 overflow-x-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 min-w-max">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2012</div>
                <p className="text-sm text-muted-foreground">Establishment of Sayantrik</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2013</div>
                <p className="text-sm text-muted-foreground">First International work order</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2018</div>
                <p className="text-sm text-muted-foreground">First Global office in India</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2020</div>
                <p className="text-sm text-muted-foreground">First Branch</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2022</div>
                <p className="text-sm text-muted-foreground">500000 manhours milestone</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2023</div>
                <p className="text-sm text-muted-foreground">Entry into Green H2 market</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Sayantrik Engineers, our mission is straightforward but profound - to provide comprehensive engineering solutions that are meticulously tailored to meet the specific needs of our clients. The Oil & Gas, Petrochemicals, and Chemicals sectors are known for their unique challenges, and our team is not just well-versed in these challenges, but we thrive on surpassing industry standards.
          </p>
        </section>

        {/* We Support */}
        <section className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            We Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Owner operators",
              "EPC",
              "Technology providers",
              "Engineering consultants",
              "Piping and Steel Fabricators"
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <p className="text-lg font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
