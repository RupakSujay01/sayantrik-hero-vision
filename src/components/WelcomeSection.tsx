const WelcomeSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
          <h2 className="font-heading text-center text-foreground mb-8">
            Welcome to Sayantrik Engineers India Pvt Ltd
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center font-medium">
            Engineering services supporting projects across India and the United States.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
