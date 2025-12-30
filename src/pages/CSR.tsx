import { motion, useMotionValue, useTransform, animate, useInView, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  AlertTriangle, HeartCrack, Ban, Zap, UtensilsCrossed, Flag,
  Search, BookOpen, GraduationCap, Briefcase, Heart, Home,
  ShieldCheck, Activity, Users, CheckCircle2, MapPin, Globe2,
  ArrowRight, HeartHandshake, School, UserPlus
} from "lucide-react";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const CountUp = ({ end, suffix = "", label, className }: { end: number, suffix?: string, label: string, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
  });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("text-center", className)}
    >
      <div className="flex items-center justify-center text-4xl md:text-5xl font-black text-white mb-2">
        <motion.span>{displayValue}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-sm text-slate-400 uppercase tracking-widest">{label}</div>
    </motion.div>
  );
};

const CSR = () => {
  // Section 2: The Problem Data
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      title: "Child Labor",
      desc: "Rag picking and petty jobs to feed families, stealing their childhood."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Human Trafficking",
      desc: "Extreme vulnerability to networks preying on unprotected children."
    },
    {
      icon: <Ban className="w-8 h-8 text-purple-500" />,
      title: "Child Marriage",
      desc: "27% of girls in India are married before age 18, ending their education."
    },
    {
      icon: <HeartCrack className="w-8 h-8 text-pink-500" />,
      title: "Domestic Violence",
      desc: "Daily exposure impacting physical and mental health."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-orange-500" />,
      title: "Malnutrition & Homelessness",
      desc: "Chronic illness and no safe place to call home."
    }
  ];

  // Section 3: Kadam Model Data
  const steps = [
    {
      id: "01",
      title: "IDENTIFY & MOTIVATE",
      desc: "Find street children in slums and motivate families to trust the system.",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      id: "02",
      title: "BRIDGE SCHOOLING",
      desc: "18-24 month special training program to close the education gap.",
      icon: <School className="w-6 h-6 text-white" />
    },
    {
      id: "03",
      title: "MAINSTREAM INTEGRATION",
      desc: "Integration into regular CBSE English medium schools via partnerships.",
      icon: <BookOpen className="w-6 h-6 text-white" />
    },
    {
      id: "04",
      title: "LONG-TERM SUPPORT",
      desc: "Continued guidance until career aspirations are fully met.",
      icon: <Briefcase className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* SECTION 1: HERO & PHILOSOPHY */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#ED2939] rounded-full blur-[120px]" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 font-[sans-serif]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ED2939]/20 border border-[#ED2939]/40 rounded-full text-[#ED2939] text-xs font-bold uppercase tracking-widest mb-6">
              <HeartHandshake className="w-4 h-4" />
              <span>Let These Smiles Never Fade</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
              Corporate Social <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Responsibility</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-8">
              Building Tomorrow's Future, Today
            </h2>

            <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed mb-12 max-w-3xl text-justify">
              <p className="mb-4">
                At Sayantrik Engineers, we believe that true success extends beyond business metrics. As an organization that has grown from a small startup in 2012 to a multinational engineering consultancy, we recognize our responsibility to give back to the communities that have supported our journey.
              </p>
              <p className="border-l-4 border-[#ED2939] pl-4 italic text-white font-medium">
                Our CSR philosophy is simple: invest in children, and you invest in the future of the nation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center gap-6 max-w-2xl">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-[#ED2939]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">In Partnership With</p>
                <h3 className="text-xl font-bold text-white">KADAM PUBLIC CHARITABLE TRUST</h3>
                <a href="https://kadampct.org" target="_blank" rel="noopener noreferrer" className="text-[#ED2939] text-sm hover:underline mt-1 inline-flex items-center gap-1">
                  Visit kadampct.org <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mb-2">The Reality</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
                The Problem Kadam Addresses
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 text-justify">
                While more children in India are being enrolled in schools today, a significant number—particularly girls—drop out within a few years. They become invisible, lost in the cracks of our society.
              </p>
              <div className="w-full h-64 bg-slate-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                <span className="text-slate-400 font-bold uppercase">Image Placeholder: Street Child Reality</span>
              </div>
            </div>

            <div className="grid gap-6">
              {problems.map((prob, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-slate-50 rounded-lg shrink-0">
                    {prob.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{prob.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE KADAM MODEL */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mb-2">Our Approach</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              How Kadam Works
            </h3>
            <p className="text-slate-500 mt-2 font-medium">Streets to School to Success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-16 h-16 bg-[#ED2939] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-200 mb-6 mx-auto relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-center px-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOLISTIC CARE */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Beyond Education: <span className="text-[#ED2939]">Holistic Development</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                What Children Receive
              </h3>
              <ul className="space-y-4">
                {[
                  "Education until graduation",
                  "Nutritious Meals (2 free daily)",
                  "Medical Care & Health Checkups",
                  "Safety & Protection",
                  "Mental Health Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Home className="w-8 h-8 text-green-400" />
                What Parents Receive
              </h3>
              <ul className="space-y-4">
                {[
                  "Employment Opportunities",
                  "Medical Resources for the family",
                  "Housing Assistance for homeless families",
                  "Access to Government Services"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <CountUp end={80} suffix="+" label="Bridge School Grads" />
            <CountUp end={76} label="Mainstream Integrated" className="md:border-l border-white/10" />
            <CountUp end={10} suffix="+" label="Years of Operation" className="md:border-l border-white/10" />
          </div>
        </div>
      </section>

      {/* SECTION 5: SUCCESS STORY */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#ED2939]/5 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-slate-400 font-bold uppercase text-center px-4">
                Image: <br />Lakshmi
              </span>
            </div>
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Lakshmi’s Journey: <br />
                From Orphan to School Topper
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                <p>
                  Found as a fragile orphan battling severe tuberculosis, Lakshmi's future seemed bleak. KADAM intervened with one year of isolation housing, dedicated medical treatment, and unwavering care.
                </p>
                <div className="border-l-4 border-green-500 pl-6 py-2 bg-green-50 rounded-r-lg">
                  <p className="font-bold text-green-900">
                    The Result?
                  </p>
                  <p className="text-green-800">
                    Lakshmi completed her 10th class with a perfect <strong>10/10 CGPA</strong>, topped her school, and is now pursuing higher education with dreams of becoming an engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SAYANTRIK + KADAM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Sayantrik + Kadam Partnership
            </h2>
            <div className="w-24 h-1 bg-[#ED2939] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">Local Impact</h3>
              <p className="text-sm text-slate-500">
                Directly impacting lives in Hyderabad, close to our engineering headquarters.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">Complete Transparency</h3>
              <p className="text-sm text-slate-500">
                Open books and live monitoring ensure every rupee reaches the child.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold mb-3">Run by Professionals</h3>
              <p className="text-sm text-slate-500">
                Managed by 25+ IT and industry experts bringing corporate efficiency to social work.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Our Contribution</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              {["Financial Support", "Employee Volunteering", "Mentorship", "Industry Exposure"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#ED2939]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA FOOTER */}
      <section className="py-20 px-6 bg-[#ED2939] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Join Us in Making a Difference
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Donate", "Volunteer", "Partner", "Spread the Word"].map((action, i) => (
              <button key={i} className="px-8 py-3 bg-white text-[#ED2939] font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-slate-100 transition-colors">
                {action}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80 font-medium">
            <a href="https://kadampct.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Globe2 className="w-5 h-5" /> kadampct.org
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Rail Vihar, Hyderabad
            </div>
          </div>

          <p className="mt-12 text-sm text-white/60 uppercase tracking-widest">
            Building Tomorrow's Infrastructure, Supporting Tomorrow's Leaders.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CSR;