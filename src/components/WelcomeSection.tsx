const WelcomeSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in flex flex-col items-center text-center">

          <div className="space-y-6 w-full">
            <h2 className="font-heading text-center text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Welcome to <span className="text-primary">Sayantrik Engineers</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          {/* Vision & Mission Blocks */}
          <div className="grid md:grid-cols-2 gap-8 w-full text-left">
            {/* Vision Block */}
            <div className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                {/* Decorative element could go here */}
              </div>
              <h3 className="font-heading text-slate-900 mb-6 text-3xl font-bold group-hover:text-primary transition-colors">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                By 2030, to be recognized globally as the premier engineering and integration partner in the energy and chemicals sector—trusted by Owner-operators, Engineering Consultants, EPC Contractors, and Technology Licensors for our technical depth, digital capabilities, and uncompromising commitment to quality and safety.
              </p>
            </div>

            {/* Mission Block */}
            <div className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary relative overflow-hidden">
              <h3 className="font-heading text-slate-900 mb-6 text-3xl font-bold group-hover:text-primary transition-colors">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                To deliver engineering excellence across the oil & gas, refinery, petrochemical, and chemical industries through multi-disciplinary engineering consulting, digital engineering, and integrated project support services—enabling our clients to achieve operational excellence, reduce project risk, and drive sustainable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
