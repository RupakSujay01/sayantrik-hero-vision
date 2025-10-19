const WelcomeSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-text mb-8 animate-fade-in-up">
            Welcome to Sayantrik Engineer India Pvt Ltd
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sayantrik Engineer India Pvt Ltd is an emerging engineering consultancy with a stellar reputation for delivering multi-discipline global and domestic engineering consulting services. Based in India, we operate from strategic offices in Hyderabad (head office), delivery centres in Hyderabad, Mumbai, and Chennai with a representation office in Malaysia and a subsidiary company "C&C Engineering INC" in USA. With over a decade of experience in Engineering Consultancy Services, we are proud to be a part of the industry's landscape for the past 13+ years. Our dedicated team comprises more than 200 permanent resources, bringing their expertise to every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
