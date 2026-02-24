import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo_sb.png";
import isoBadge from "@/assets/iso-9001-badge.png";
import isoCertificate from "@/assets/iso-9001-certificate.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const hoverOpenTimeoutRef = useRef<number | null>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  // REMOVED: Background removal logic that was degrading logo quality
  // useEffect(() => { ... }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio", hasDropdown: true },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/projects", label: "Projects" },
    { path: "/technology-providers", label: "Technology Providers" },
    { path: "/lcts-partnership", label: "Our Partners" },
    { path: "/csr", label: "CSR" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  /* ... dropdown data ... */
  const servicesDropdown = {
    sections: [
      {
        title: "Services",
        items: [
          { label: "FEED", link: "/services#feed" },
          { label: "Detailed Engineering", link: "/services#detailed-engineering" },
          { label: "EPC", link: "/services#epc" },
          { label: "EPCM", link: "/services#epcm" },
          { label: "PMC", link: "/services#pmc" },
          { label: "Owner's Engineer", link: "/services#owners-engineer" },
          { label: "Process Technology Integration", link: "/services#process-technology" },
          { label: "Brownfield Modifications", link: "/services#brownfield" },
          { label: "Laser Scan & Digital Twins", link: "/services#laser-scan" },
        ],
      },

    ],
  };

  const projectsDropdown = {
    sections: [
      {
        title: "Project Categories",
        items: [
          { label: "Feed Engineering", link: "/projects/feed" },
          { label: "Detail Engineering", link: "/projects/detail" },
          { label: "As-built Engineering", link: "/projects/as-built" },
          { label: "Pre-bid Engineering", link: "/projects/pre-bid" },
          { label: "Digitalisation Projects", link: "/projects/digitalisation" },
        ],
      },
    ],
  };



  const contactDropdown = {
    sections: [
      {
        title: "Get in Touch",
        items: [
          { label: "Contact Us", link: "/contact" },
          { label: "Careers", link: "/careers" }
        ]
      }
    ]
  };

  const portfolioDropdown = {
    sections: [
      {
        title: "Portfolio",
        items: [
          { label: "Energy", link: "/portfolio?category=Energy" },
          { label: "Chemicals", link: "/portfolio?category=Chemicals" },
          { label: "Power", link: "/portfolio?category=Power" },
          { label: "Sustainability", link: "/portfolio?category=Sustainability" },
        ],
      },
    ],
  };

  const getDropdownContent = (label: string) => {
    switch (label) {
      case "Services":
        return servicesDropdown;
      case "Projects":
        return projectsDropdown;

      case "Contact":
        return contactDropdown;
      case "Portfolio":
        return portfolioDropdown;
      default:
        return null;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white shadow-sm">
      <div className="w-full px-4 md:px-8">
        <div className="flex h-16 items-center">
          {/* Logo Area */}
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white rounded-md p-1">
                <img src={logo} alt="Sayantrik Engineer India Logo" className="h-9 object-contain" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-black">Sayantrik Engineers</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group h-full flex items-center"
                onMouseEnter={() => {
                  if (!item.hasDropdown) return;
                  if (hoverCloseTimeoutRef.current) window.clearTimeout(hoverCloseTimeoutRef.current);
                  hoverOpenTimeoutRef.current = window.setTimeout(() => {
                    setHoveredMenu(item.label);
                  }, 200); // small open delay for smoother feel
                }}
                onMouseLeave={() => {
                  if (hoverOpenTimeoutRef.current) window.clearTimeout(hoverOpenTimeoutRef.current);
                  hoverCloseTimeoutRef.current = window.setTimeout(() => {
                    setHoveredMenu(null);
                  }, 150); // small close delay to avoid flicker
                }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary inline-flex items-center relative pb-1 text-black`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-700 ${isActive(item.path) || hoveredMenu === item.label ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && hoveredMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in-0 slide-in-from-top-2 duration-1000 ease-in-out">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-[300px]">
                      <div className={`gap-8 ${getDropdownContent(item.label)?.sections.length! > 1 ? 'flex' : 'space-y-1'}`}>
                        {getDropdownContent(item.label)?.sections.map((section, idx) => (
                          <div key={idx} className={getDropdownContent(item.label)?.sections.length! > 1 ? 'min-w-[200px]' : ''}>
                            {section.title && (
                              <h3 className="text-sm font-bold uppercase tracking-wide text-black mb-3 pb-2 border-b border-black/30">
                                {section.title}
                              </h3>
                            )}
                            <div className="space-y-1">
                              {section.items.map((subItem, subIdx) => {
                                const isSustainability = subItem.label === "Sustainability";
                                const textColorClass = isSustainability
                                  ? "text-[#40a829] font-semibold group-hover:text-[#40a829]"
                                  : "text-[#000000] group-hover:text-primary";

                                const content = (
                                  <p
                                    className={`text-sm font-normal transition-colors duration-500 ease-out ${isSustainability ? 'font-semibold !text-[#40a829] group-hover/subitem:!text-[#40a829]' : '!text-black group-hover/subitem:!text-[#ED2939]'}`}
                                  >
                                    {subItem.label}
                                  </p>
                                );

                                if ("link" in subItem && subItem.link) {
                                  return (
                                    <Link
                                      key={subIdx}
                                      to={subItem.link}
                                      onClick={() => setHoveredMenu(null)}
                                      className="group/subitem block p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-pointer select-none no-underline"
                                    >
                                      {content}
                                    </Link>
                                  );
                                }

                                return (
                                  <div
                                    key={subIdx}
                                    className="group/subitem block p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-default select-none text-[#000000]"
                                  >
                                    {content}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Area: ISO Certification (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div
              onClick={() => setShowCertificate(true)}
              className="flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Certified</span>
                <span className="text-xs font-black text-slate-900 tracking-tight leading-none">ISO 9001:2015</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center p-0.5 bg-white rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 border border-slate-200">
                <img src={isoBadge} alt="ISO 9001 Badge" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Mobile ISO Badge */}
          <div className="md:hidden flex items-center pr-2">
            <div
              onClick={() => setShowCertificate(true)}
              className="flex items-center gap-1.5 cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 active:bg-slate-100"
            >
              <span className="text-[9px] font-black text-slate-900 leading-none">ISO</span>
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm border border-slate-200">
                <img src={isoBadge} alt="ISO" className="w-full h-full object-contain p-0.5" />
              </div>
            </div>
          </div>

          <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
            <DialogContent className="sm:max-w-[480px] w-[95vw] border-none p-0 overflow-hidden bg-white/95 backdrop-blur-md h-[90vh] flex flex-col [&>button]:scale-90 [&>button]:text-[#ED2939] [&>button]:opacity-100 [&>button]:top-3 [&>button]:right-3 [&>button]:outline [&>button]:outline-[0.5px] [&>button]:outline-[#ED2939]/20 [&>button]:rounded-full [&>button]:p-1 [&>button]:bg-white [&>button:hover]:bg-[#ED2939]/5 [&>button]:transition-all">
              <DialogHeader className="p-4 bg-slate-900 text-white shrink-0">
                <DialogTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={isoBadge} alt="ISO" className="h-5 w-5 object-contain" />
                  </div>
                  ISO Certification
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-hidden p-4 md:p-8 flex flex-col items-center justify-center bg-slate-50/50">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ED2939]/5 to-blue-500/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
                  <img
                    src={isoCertificate}
                    alt="ISO 9001:2015 Certificate"
                    className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm border border-slate-200"
                  />
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Standard</span>
                  <span className="text-xs font-black text-slate-900 uppercase">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Verified</span>
                  <div className="w-[1px] h-3 bg-slate-200" />
                  <span>Accreditation: TUV SUD</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Mobile Nav Bar - Below Logo (Grid Layout) */}
      <div className="md:hidden border-t border-border/10 bg-white/95 backdrop-blur-sm">
        <div className="grid grid-cols-5 gap-y-1 gap-x-0 px-2 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[9px] font-black uppercase tracking-tight px-1 py-1.5 text-center flex items-center justify-center leading-tight transition-colors ${isActive(item.path) ? "text-primary" : "text-slate-500"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
