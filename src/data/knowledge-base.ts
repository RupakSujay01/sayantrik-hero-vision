export interface KnowledgeEntry {
    category: string;
    question: string;
    keywords: string[];
    answer: string;
}

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
    // --- COMPANY OVERVIEW ---
    {
        category: "Company Overview",
        question: "Who is Sayantrik Engineers?",
        keywords: ["who are you", "what is sayantrik", "company profile", "about sayantrik", "history", "introduction"],
        answer: "Sayantrik Engineers is a premier ISO 9001:2015 engineering consultancy for Oil & Gas, Petrochemicals, and Chemicals. Founded in 2012, we have 160+ engineers across Hyderabad, Mumbai, Chennai, Malaysia, and the USA."
    },
    {
        category: "Company Overview",
        question: "When was the company founded?",
        keywords: ["founded", "established", "start date", "how long", "year"],
        answer: "Founded in 2012, delivering 10+ years of engineering excellence."
    },
    {
        category: "Company Overview",
        question: "Where are your offices located?",
        keywords: ["location", "office", "address", "where", "branches", "hyderabad", "mumbai", "chennai", "malaysia", "usa"],
        answer: "HQ: Hyderabad, India. Delivery Centers: Mumbai & Chennai. Regional: Kuala Lumpur, Malaysia & USA."
    },
    {
        category: "Company Overview",
        question: "What is your vision or mission?",
        keywords: ["vision", "mission", "goal", "objective", "aim"],
        answer: "Our mission is to provide comprehensive, tailored engineering solutions for the Oil & Gas, Petrochemicals, and Chemicals sectors, surpassing industry standards."
    },

    // --- SERVICES: ENGINEERING ---
    {
        category: "Services",
        question: "What services do you offer?",
        keywords: ["services", "what do you do", "offerings", "capabilities", "engineering"],
        answer: "We offer end-to-end lifecycle services: FEED (FEL-3), Detailed Engineering (FEL-4), EPC Support, EPCM, PMC, Owner's Engineer, Brownfield Modifications, and Laser Scanning."
    },
    {
        category: "Services",
        question: "What is FEED / FEL-3?",
        keywords: ["feed", "fel-3", "fel 3", "front end", "definition"],
        answer: "FEED (FEL-3) defines the project baseline. We provide investment-grade cost estimates (±10-15%) and execution-ready packages (P&IDs, 3D models) to support confident Investment Decisions (FID)."
    },
    {
        category: "Services",
        question: "Do you do Detailed Engineering?",
        keywords: ["detail", "detailed engineering", "fel-4", "fel 4", "design"],
        answer: "Yes. Our Detailed Engineering (FEL-4) delivers zero-rework designs, accurate Material Take-Offs (MTOs), and clash-free 3D models ready for construction."
    },
    {
        category: "Services",
        question: "What is your EPC capability?",
        keywords: ["epc", "engineering procurement construction", "turnkey"],
        answer: "For EPC, we support contractors with scalable engineering capacity and detailed design, or assist owners with 'Owner's EPC' teams."
    },
    {
        category: "Services",
        question: "What is EPCM?",
        keywords: ["epcm", "management", "construction management"],
        answer: "EPCM: We manage the project lifecycle (Engineering, Procurement, Construction Management) as your representative, ensuring cost control while you retain direct vendor contracts."
    },
    {
        category: "Services",
        question: "What are your specific engineering disciplines?",
        keywords: ["disciplines", "process", "piping", "mechanical", "electrical", "instrumentation", "civil", "structural"],
        answer: "Process, Piping, Mechanical (Static/Rotating), Civil & Structural, and Electrical & Instrumentation."
    },
    {
        category: "Services",
        question: "Do you handle Brownfield projects?",
        keywords: ["brownfield", "modification", "revamp", "debottlenecking", "shutdown"],
        answer: "Yes. We specialise in revamps, capacity expansions, and turnarounds, using laser scanning to ensure accurate as-built data and minimise downtime."
    },

    // --- TECHNOLOGY & PARTNERSHIPS ---
    {
        category: "Technology",
        question: "Do you work with Technology Licensors?",
        keywords: ["licensor", "technology", "partner", "foreign", "local arm"],
        answer: "Yes. We act as the 'Local Execution Arm' for global licensors in India, managing process design, local compliance, and vendor integration."
    },
    {
        category: "Technology",
        question: "What is your LCTS Partnership?",
        keywords: ["lcts", "strategic partnership", "houston"],
        answer: "Our partnership with LCTS (Low Carbon Technology Systems) provides Houston-based process engineering leadership with 80+ years of experience in refinery and LNG projects."
    },

    // --- CONTACT INFORMATION ---
    {
        category: "Contact",
        question: "How can I contact you?",
        keywords: ["contact", "email", "phone", "reach", "call"],
        answer: "Business: info@sayantrik.com | HR: hr@sayantrik.com | Phone: +91 79955 79900"
    },
    {
        category: "Contact",
        question: "What is your Hyderabad address?",
        keywords: ["address", "hyderabad", "head office"],
        answer: "Plot no. 56, Opp Srikara Hospitals Lane, Mythrinagar, Madinaguda, Hyderabad, Telangana, India 500049."
    },

    // --- HSE & QUALITY ---
    {
        category: "HSE",
        question: "What is your HSE policy?",
        keywords: ["hse", "safety", "health", "environment", "security"],
        answer: "We adhere to the highest HSE standards including IT Security and Fire Safety. 'Safety First, Always' is our motto."
    },
    {
        category: "Quality",
        question: "What describes your quality policy?",
        keywords: ["quality", "iso", "standards", "certification"],
        answer: "Excellence in every deliverable. We are ISO 9001:2015 certified and strictly follow global codes like ASME and API."
    },

    // --- CSR ---
    {
        category: "CSR",
        question: "What are your CSR initiatives?",
        keywords: ["csr", "social responsibility", "charity", "kadam", "ngo"],
        answer: "We partner with KADAM Public Charitable Trust to rehabilitate street children, providing education, food, and holistic care."
    },
    {
        category: "CSR",
        question: "What is the KADAM model?",
        keywords: ["kadam model", "street children", "education"],
        answer: "Identify street children -> Bridge Schooling (18-24 mos) -> Mainstream School Integration -> Long-term Holistic Support."
    },

    // --- CAREERS ---
    {
        category: "Careers",
        question: "Are you hiring?",
        keywords: ["hiring", "job", "career", "vacancy", "opening", "work"],
        answer: "We are often hiring Process Engineers, Piping Designers, and PMs. Email your resume to hr@sayantrik.com."
    },
    {
        category: "Careers",
        question: "What is it like to work at Sayantrik?",
        keywords: ["culture", "environment", "work life", "benefits"],
        answer: "We offer a collaborative culture with work-life balance, continuous learning, and exposure to international projects."
    }
];
