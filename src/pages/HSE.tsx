import hseBg from "@/assets/hse-minimal-nature.png";
import Footer from "@/components/Footer";

const HSE = () => {
    const sections = [
        {
            title: "IT SECURITY",
            slogan: "Stay Cyber Safe – Protecting Information, Every Click Counts",
            items: [
                { title: "Phishing Awareness", desc: "Don't take the bait – verify links and email senders before clicking." },
                { title: "Password Policy", desc: "Use strong, unique passwords and update them regularly. Avoid reusing credentials." },
                { title: "Secure Browsing", desc: "Access only approved websites. Avoid downloading unauthorized software." },
                { title: "Report Suspicious Activity", desc: "If you suspect a breach, inform the IT team immediately. Better safe than sorry." }
            ]
        },
        {
            title: "FIRE SAFETY",
            slogan: "Be Fire Wise – Know What to Do, Before You Need To",
            items: [
                { title: "Evacuation Plan", desc: "Your nearest exit might be behind you. Follow posted exit maps during a drill or emergency." },
                { title: "Fire Extinguisher Use (PASS)", desc: "Pull – Aim – Squeeze – Sweep. Use only if trained and safe to do so." },
                { title: "Fire Wardens List", desc: "Know your department's designated fire warden. In emergencies, follow their instructions." },
                { title: "Emergency Assembly Area", desc: "Head directly to the designated area after evacuation. Stay calm and await further instructions." }
            ]
        },
        {
            title: "HR SAFETY & WELLNESS",
            slogan: "Safe Minds, Safe Spaces – Your Wellbeing Matters",
            items: [
                { title: "Emergency Contacts", desc: "Display internal emergency numbers and HR contacts." },
                { title: "Workplace Harassment Policy", desc: "Zero tolerance. Speak up, stay safe. Confidential reporting channels are available." },
                { title: "Mental Health Resources", desc: "You're not alone. Reach out to our wellness partner or HR for support." },
                { title: "Stress & Burnout Tips", desc: "Take micro-breaks, avoid excessive overtime, and talk to your manager if overwhelmed." }
            ]
        },
        {
            title: "ERGONOMICS & GENERAL SAFETY",
            slogan: "Work Smart – Prevent Injuries Before They Start",
            items: [
                { title: "Proper Sitting Posture", desc: "Align screen height with eye level. Keep feet flat and wrists straight." },
                { title: "Housekeeping Rules", desc: "Cluttered workspaces = trip hazards. Clean as you go." },
                { title: "Electrical Safety", desc: "Do not overload sockets. Report faulty equipment immediately." },
                { title: "Slip, Trip & Fall Prevention", desc: "Wipe spills, avoid running, use handrails on stairs." }
            ]
        },
        {
            title: "ENVIRONMENTAL RESPONSIBILITY",
            slogan: "Green Choices Today, Greener Planet Tomorrow",
            items: [
                { title: "Recycling Guidelines", desc: "Separate waste into paper, plastic, and e-waste bins. Follow signage." },
                { title: "Energy Saving Tips", desc: "Turn off lights, monitors, and ACs when not in use." },
                { title: "Water Conservation", desc: "Use water mindfully. Report any leaks to Admin immediately." },
                { title: "Sustainable Practices", desc: "Encourage carpooling, reduce printouts, and bring reusable water bottles." }
            ]
        },
        {
            title: "EMERGENCY RESPONSE",
            slogan: "In an Emergency – Act Fast, Stay Safe",
            items: [
                { title: "First Aid Kit Locations", desc: "Located near the reception and pantry area. Keep access clear." },
                { title: "Emergency Numbers", desc: "Ambulance – 108, Fire – 101, Police – 100, Internal emergency: 88858 02057" },
                { title: "CPR Steps", desc: "Push hard and fast in the center of the chest. Call for help immediately." },
                { title: "Disaster Response Tips", desc: "Stay low in case of smoke. Do not use elevators during a fire." }
            ]
        }
    ];

    return (
        <>
        <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
            {/* Animated Wallpaper Background */}
            <style>
                {`
          @keyframes subtleZoomPan {
            0% { transform: scale(1.05) translate(0%, 0%); }
            50% { transform: scale(1.1) translate(-2%, 2%); }
            100% { transform: scale(1.05) translate(0%, 0%); }
          }
          .animate-wallpaper {
            animation: subtleZoomPan 60s ease-in-out infinite alternate;
          }
        `}
            </style>
            <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center animate-wallpaper"
                    style={{ backgroundImage: `url(${hseBg})` }}
                />
                {/* Lighter overlay for "fresh" look */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#40a829] mb-6 drop-shadow-sm">
                            Health, Safety & Environment (HSE)
                        </h1>
                        <div className="h-1 w-24 bg-[#40a829] mb-8" />
                        <p className="lead text-xl text-slate-900 font-bold max-w-3xl drop-shadow-md">
                            Sayantrik Engineers is committed to the highest standards of Health, Safety, and Environmental protection.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <h2 className="text-xl font-bold text-[#40a829] mb-2 uppercase tracking-wide">
                                    {section.title}
                                </h2>
                                <p className="text-sm font-semibold text-slate-800 mb-6 italic border-l-4 border-primary pl-3">
                                    {section.slogan}
                                </p>
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIdx) => (
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
                    <div className="text-center p-8 bg-[#40a829]/10 backdrop-blur-md rounded-2xl border border-[#40a829]/20 shadow-inner">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#40a829] uppercase tracking-widest drop-shadow-sm">
                            REMEMBER: SAFETY FIRST, ALWAYS!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default HSE;
