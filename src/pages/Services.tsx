const Services = () => {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
          Our Services
        </h1>

        {/* Business Verticals */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Business Verticals
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our suite of services is extensive and includes, but is not limited to:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Feasibility Studies", desc: "Assessing the viability of your projects is our first step in ensuring their success." },
              { title: "FEED Engineering", desc: "Our experts meticulously plan the front-end engineering design to provide a strong foundation for your projects." },
              { title: "Basic Engineering", desc: "We create detailed plans that form the basis for the successful execution of your projects." },
              { title: "Detailed Engineering", desc: "Our attention to detail ensures the seamless implementation of your projects." },
              { title: "As-Built 3D Modelling", desc: "We document every project as it was constructed, providing a clear picture of the final product." },
              { title: "Project Management and Execution", desc: "We offer full-spectrum project management services to ensure your vision becomes a reality." }
            ].map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Multi-discipline Engineering Services */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Multi-discipline Engineering Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Process Engineering",
              "Piping Engineering",
              "Mechanical Engineering",
              "Electrical Engineering",
              "Instrumentation Engineering",
              "Civil and Structural Engineering",
              "HSE"
            ].map((discipline, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <p className="font-medium">{discipline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Green Hydrogen Plants",
              "LNG / LPG Regasification Plants",
              "Sulphuric Acid Plant",
              "Sulphur Recovery Unit",
              "Tankages",
              "Onshore Pipelines",
              "PSV adequacy checks",
              "Digitalization of plants"
            ].map((expertise, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <p className="text-lg font-medium text-foreground">{expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer-Centric Approach */}
        <section className="animate-fade-in bg-card border border-border rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Customer-Centric Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Sayantrik Engineer, we prioritize building robust partnerships with our clients. We believe in open communication and collaboration throughout every project. Our customer-centric approach ensures that we thoroughly understand your requirements and work closely with you to achieve optimal results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Thank you for visiting our website. We invite you to explore the wealth of information about our services and the expertise we bring to the table. When you partner with Sayantrik Engineer India Pvt Ltd, you're partnering with excellence in engineering.
          </p>
          <p className="text-xl font-bold text-primary text-center">
            Engineering Excellence, Trusted Partnerships, Lasting Success.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Services;
