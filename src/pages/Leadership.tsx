const Leadership = () => {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
          Leadership Team
        </h1>
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Organization Chart</h2>
          <p className="text-muted-foreground">
            Our leadership team brings decades of combined experience in engineering excellence and project delivery.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Leadership;
