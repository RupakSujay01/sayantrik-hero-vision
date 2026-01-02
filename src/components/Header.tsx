import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo_sb.png";
// import { removeBackground, loadImageFromUrl } from "@/utils/removeBackground";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  // const [logoUrl, setLogoUrl] = useState<string>(logo); // REMOVED
  const hoverOpenTimeoutRef = useRef<number | null>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  // REMOVED: Background removal logic that was degrading logo quality
  // useEffect(() => { ... }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us", hasDropdown: true },
    { path: "/portfolio", label: "Portfolio", hasDropdown: true },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/projects", label: "Projects", hasDropdown: true },
    { path: "/technology-providers", label: "Technology Providers" },
    { path: "/lcts-partnership", label: "Our Partners" },
    { path: "/contact", label: "Contact", hasDropdown: true },
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
      {
        title: "Disciplines",
        items: [
          { label: "Process", link: "/disciplines#process" },
          { label: "Mechanical - Static", link: "/disciplines#mechanical-static" },
          { label: "Mechanical - Rotary", link: "/disciplines#mechanical-rotary" },
          { label: "Mechanical - HVAC", link: "/disciplines#mechanical-hvac" },
          { label: "Piping", link: "/disciplines#piping" },
          { label: "Civil / Structural / Architectural", link: "/disciplines#civil-structural" },
          { label: "Electrical", link: "/disciplines#electrical" },
          { label: "Instrumentation", link: "/disciplines#instrumentation" },
          { label: "Fire & Gas", link: "/disciplines#fire-gas" },
          { label: "Telecom", link: "/disciplines#telecom" },
        ],
      },
    ],
  };

  const projectsDropdown = {
    sections: [
      {
        title: "Project Categories",
        items: [
          { label: "Feed Engineering", link: "/projects#feed-engineering" },
          { label: "Detail Engineering", link: "/projects#detail-engineering" },
          { label: "As-built Engineering", link: "/projects#as-built-engineering" },
          { label: "Pre-bid Engineering", link: "/projects#pre-bid-engineering" },
        ],
      },
    ],
  };

  const aboutDropdown = {
    sections: [
      {
        title: "Company",
        items: [{ label: "Who We Are", link: "/about#who-we-are" }, { label: "Our Vision", link: "/about#vision" }],
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
      case "About Us":
        return aboutDropdown;
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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white rounded-md p-1">
              <img src={logo} alt="Sayantrik Engineer India Logo" className="h-9 object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-black">Sayantrik Engineers</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in bg-background/90 backdrop-blur-sm rounded-lg px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary text-black`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
