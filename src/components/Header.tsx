import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { removeBackground, loadImageFromUrl } from "@/utils/removeBackground";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string>(logo);
  const hoverOpenTimeoutRef = useRef<number | null>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const processLogo = async () => {
      try {
        const img = await loadImageFromUrl(logo);
        const blob = await removeBackground(img);
        const url = URL.createObjectURL(blob);
        setLogoUrl(url);
      } catch (error) {
        console.error("Failed to remove logo background:", error);
        // Keep original logo on error
      }
    };

    processLogo();
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us", hasDropdown: true },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/projects", label: "Projects", hasDropdown: true },
    { path: "/careers", label: "Careers", hasDropdown: true },
    { path: "/contact", label: "Contact" },
  ];

  const servicesDropdown = {
    sections: [
      {
        title: "Engineering Services",
        items: [
          { label: "Oil & Gas", link: "/services#oil-gas" },
          { label: "Refineries", link: "/services#refineries" },
          { label: "Petrochemical & Chemical Plants", link: "/services#petrochemical" },
          { label: "Fertilizer & Methanol Units", link: "/services#fertilizer" },
          { label: "Terminals & Tank Farms", link: "/services#terminals" },
          { label: "Utility & Offsite Systems", link: "/services#utility" },
        ],
      },
      {
        title: "Specialized Services",
        items: [
          { label: "Pre-bid Eng Services" },
          { label: "Pharmaceutical" },
          { label: "Laser Scanning" },
          { label: "PSV Adequecy check" },
        ],
      },
    ],
  };

  const projectsDropdown = {
    sections: [
      {
        title: "Project Categories",
        items: [
          { label: "Oil & Gas" },
          { label: "Petrochemicals" },
          { label: "Refineries" },
          { label: "Energy Transition" },
        ],
      },
    ],
  };

  const aboutDropdown = {
    sections: [
      {
        title: "Company",
        items: [{ label: "Who We Are" }, { label: "Our Vision" }],
      },
      {
        title: "Leadership",
        items: [{ label: "Leadership Team" }, { label: "Certifications & Achievements" }],
      },
    ],
  };

  const careersDropdown = {
    sections: [
      {
        title: "Careers",
        items: [{ label: "Life at Sayantrik" }, { label: "Hiring" }],
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
      case "Careers":
        return careersDropdown;
      default:
        return null;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <img src={logoUrl} alt="Sayantrik Engineer India Logo" className="h-12 w-14 object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">Sayantrik Engineer India Pvt Ltd</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
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
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary inline-flex items-center relative pb-1 text-white`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.path) || hoveredMenu === item.label ? "w-full" : "w-0"
                    }`}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && hoveredMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in-0 slide-in-from-top-2 duration-700 ease-in-out">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        {getDropdownContent(item.label)?.sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 pb-2 border-b border-foreground/30">
                              {section.title}
                            </h3>
                            <div className="space-y-1">
                              {section.items.map((subItem, subIdx) => {
                                const content = (
                                  <p className="text-sm font-normal text-muted-foreground group-hover:text-primary transition-colors duration-500 ease-out">
                                    {subItem.label}
                                  </p>
                                );

                                if ("link" in subItem && subItem.link) {
                                  return (
                                    <Link
                                      key={subIdx}
                                      to={subItem.link}
                                      onClick={() => setHoveredMenu(null)}
                                      className="group block p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-pointer select-none no-underline"
                                    >
                                      {content}
                                    </Link>
                                  );
                                }

                                return (
                                  <div
                                    key={subIdx}
                                    className="group block p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-default select-none"
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
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary text-white`}
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
