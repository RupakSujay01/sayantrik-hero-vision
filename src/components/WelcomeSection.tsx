const WelcomeSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Welcome to Sayantrik Engineer India Pvt Ltd
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Sayantrik Engineer India Pvt Ltd is an emerging engineering consultancy with a stellar reputation for delivering multi-discipline global and domestic engineering consulting services. Based in India, we operate from strategic offices in Hyderabad (head office), delivery centres in Hyderabad, Mumbai, and Chennai with a representation office in Malaysia and a subsidiary company "C&C Engineering INC" in USA. With over a decade of experience in Engineering Consultancy Services, we are proud to be a part of the industry's landscape for the past 13+ years. Our dedicated team comprises more than 200 permanent resources, bringing their expertise to every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
