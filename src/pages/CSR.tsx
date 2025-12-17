import Footer from "@/components/Footer";

const CSR = () => {
  const initiatives = [
    {
      title: "EDUCATION & SKILL DEVELOPMENT",
      slogan: "Empowering Minds, Building Futures",
      items: [
        { title: "Technical Training", desc: "Providing vocational training to underprivileged youth in engineering and technical skills." },
        { title: "Scholarship Programs", desc: "Supporting meritorious students from economically weaker sections to pursue higher education." },
        { title: "School Infrastructure", desc: "Contributing to the development of educational infrastructure in rural areas." },
        { title: "Digital Literacy", desc: "Promoting computer education and digital awareness in underserved communities." }
      ]
    },
    {
      title: "ENVIRONMENTAL SUSTAINABILITY",
      slogan: "Engineering a Greener Tomorrow",
      items: [
        { title: "Tree Plantation Drives", desc: "Regular afforestation initiatives to increase green cover in industrial areas." },
        { title: "Waste Management", desc: "Implementing sustainable waste management practices and promoting recycling." },
        { title: "Energy Conservation", desc: "Adopting renewable energy solutions and promoting energy efficiency." },
        { title: "Water Conservation", desc: "Rainwater harvesting and water recycling initiatives in operational areas." }
      ]
    },
    {
      title: "COMMUNITY WELFARE",
      slogan: "Together We Grow, Together We Thrive",
      items: [
        { title: "Healthcare Camps", desc: "Organizing free medical camps and health awareness programs in local communities." },
        { title: "Rural Development", desc: "Supporting infrastructure development in nearby villages and communities." },
        { title: "Women Empowerment", desc: "Skill development and entrepreneurship programs for women in rural areas." },
        { title: "Disaster Relief", desc: "Providing assistance and support during natural calamities and emergencies." }
      ]
    },
    {
      title: "EMPLOYEE VOLUNTEERING",
      slogan: "Our People, Our Pride",
      items: [
        { title: "Volunteer Programs", desc: "Encouraging employees to participate in community service activities." },
        { title: "Blood Donation Drives", desc: "Regular blood donation camps organized with employee participation." },
        { title: "Mentorship Programs", desc: "Engineers mentoring students and young professionals in technical skills." },
        { title: "Community Service Days", desc: "Dedicated days for employees to engage in social welfare activities." }
      ]
    }
  ];

  return (
    <>
      <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50" />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 drop-shadow-sm">
                Corporate Social Responsibility
              </h1>
              <div className="h-1 w-24 bg-primary mb-8" />
              <p className="lead text-xl text-slate-900 font-bold max-w-3xl drop-shadow-md">
                At Sayantrik Engineers, we believe in giving back to society and creating a positive impact through sustainable and responsible business practices.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {initiatives.map((initiative, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">
                    {initiative.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-800 mb-6 italic border-l-4 border-primary pl-3">
                    {initiative.slogan}
                  </p>
                  <ul className="space-y-4">
                    {initiative.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <span className="font-bold text-slate-900 min-w-fit">{item.title}:</span>
                        <span className="text-slate-700 text-sm font-medium">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center p-8 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 shadow-inner">
              <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-widest drop-shadow-sm">
                ENGINEERING A BETTER WORLD
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CSR;