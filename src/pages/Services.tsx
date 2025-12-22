import { motion } from "framer-motion";
import { Check, Square, Diamond, ArrowRight } from "lucide-react";

const Services = () => {
  const disciplines = [
    {
      title: "Process Engineering",
      details: [
        "Feasibility Studies",
        "Heat & Mass Balance",
        "PFD & P&ID Development",
        "Hydraulic Calculations",
        "Flare & Relief System Design",
        "Process Simulation (HYSYS/UNISIM)"
      ]
    },
    {
      title: "Piping & Pipeline Engineering",
      details: [
        "Plot Plan Development",
        "Piping Layout & 3D Modeling",
        "Pipe Stress Analysis (CAESAR II)",
        "Material Specifications",
        "Pipeline Routing",
        "Support Design"
      ]
    },
    {
      title: "Mechanical & Static Equipment",
      details: [
        "Pressure Vessel Design (PV Elite)",
        "Heat Exchanger Design",
        "Storage Tank Design (API 650/620)",
        "Skidded Package Engineering",
        "Material Handling Systems"
      ]
    },
    {
      title: "Civil & Structural Engineering",
      details: [
        "Structural Analysis (STAAD.Pro)",
        "Foundation Design",
        "Pipe Rack & Equipment Support Structures",
        "Dynamic Analysis",
        "RCC/Steel Design"
      ]
    },
    {
      title: "Electrical & Instrumentation",
      details: [
        "Load Flow Analysis",
        "Single Line Diagrams (SLD)",
        "Instrument Index & Datasheets",
        "Control Philosophies (DCS/PLC/SCADA)",
        "Cable Routing"
      ]
    }
  ];

  const projectLifecycles = [
    { stage: "Stage 1: Identify", scope: "Opportunity Definition, Business Planning" },
    { stage: "Stage 2: Select", scope: "Concept Evaluation, Technology Selection" },
    { stage: "Stage 3: Define", scope: "FEED / Basic Engineering, Execution Planning" },
    { stage: "Stage 4: Execute", scope: "Detailed Engineering, Procurement, Construction" },
    { stage: "Stage 5: Operate", scope: "Commissioning, Start-up, Asset Management" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Header */}
      <div className="pt-32 pb-20 px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tight mb-6">
            OUR SERVICES
          </h1>
          <div className="h-2 w-24 bg-gray-900 mx-auto mb-8" />
          <h3 className="text-xl md:text-2xl font-bold text-[#ED2939] mb-8 max-w-4xl mx-auto leading-tight italic">
            Comprehensive Engineering Solutions Across the Project Lifecycle
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed border-l-4 border-[#ED2939] pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            "Sayantrik provides a full spectrum of engineering services, from conceptual studies to detailed design and construction support. Our multi-disciplinary approach ensures that every project is optimized for safety, efficiency, and technical integrity, adhering to the highest global standards."
          </p>
        </motion.div>
      </div>

      {/* Section 2: Engineering Disciplines Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {disciplines.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white border-t-4 border-[#ED2939] p-8 shadow-sm rounded-b-lg border-l border-r border-b border-gray-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-l-4 border-gray-900 pl-3">
                  {item.title}
                </h4>
                <ul className="space-y-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-gray-600 text-sm flex items-start">
                      <Square className="w-3 h-3 text-[#ED2939] mt-1.5 mr-3 flex-shrink-0 fill-current" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Project Lifecycle Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">Project Lifecycle</h2>

          <div className="overflow-x-auto border border-gray-200 shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-5 px-6 text-left font-bold uppercase tracking-wider w-[30%]">Project Stage</th>
                  <th className="py-5 px-6 text-left font-bold uppercase tracking-wider w-[70%]">Key Scope</th>
                </tr>
              </thead>
              <tbody>
                {projectLifecycles.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 align-top border-r border-gray-200 font-bold text-gray-900">
                      {row.stage}
                    </td>
                    <td className="py-5 px-6 align-top text-gray-700">
                      {row.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Technical Feature "Call-Outs" */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Diamond className="w-6 h-6 text-[#ED2939] mr-3 fill-current" />
                Software Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {["HYSYS / UNISIM", "CAESAR II", "PV Elite", "HTRI", "STAAD.Pro", "SP3D / E3D", "AutoCAD", "Navisworks"].map((sw, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#ED2939] transform rotate-45 mr-3" />
                    {sw}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Diamond className="w-6 h-6 text-[#ED2939] mr-3 fill-current" />
                Global Standards
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {["ASME", "API", "ASTM", "ANSI", "AISC", "NFPA", "IEC", "ISA"].map((std, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#ED2939] transform rotate-45 mr-3" />
                    {std}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Elevate Your Project?</h2>
          <button className="bg-[#ED2939] text-white font-bold py-4 px-10 text-lg uppercase tracking-wide hover:bg-black transition-colors duration-300 rounded-none shadow-xl">
            Contact Our Engineering Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

