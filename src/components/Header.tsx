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
    { path: "/business", label: "Business", hasDropdown: true },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/disciplines", label: "Disciplines" },
    { path: "/projects", label: "Projects", hasDropdown: true },
    { path: "/careers", label: "Careers", hasDropdown: true },
    { path: "/hse", label: "HSE" },
    { path: "/csr", label: "CSR" },
    { path: "/contact", label: "Contact" },
  ];

  const servicesDropdown = {
    sections: [
      {
        title: "",
        items: [
          { label: "FEED", link: "/services#feed" },
          { label: "Detail Engineering", link: "/services#detail-engineering" },
          { label: "PMC Support", link: "/services#pmc-support" },
          { label: "EPC Support", link: "/services#epc-support" },
          { label: "EPCM Support", link: "/services#epcm-support" },
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
        items: [{ label: "Who We Are" }, { label: "Our Vision" }],
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

  const businessDropdown = {
    sections: [
      {
        title: "",
        items: [
          { label: "Refinery", link: "/business#refinery" },
          { label: "Oil & Gas - Onshore", link: "/business#oil-gas-onshore" },
          { label: "Oil & Gas - Offshore", link: "/business#oil-gas-offshore" },
          { label: "Cross Counter Pipelines", link: "/business#pipelines" },
          { label: "Storage Terminals", link: "/business#storage-terminals" },
          { label: "Gas Compressor Station", link: "/business#gas-compressor" },
          { label: "Chemicals", link: "/business#chemicals" },
          { label: "Speciality Chemicals", link: "/business#speciality-chemicals" },
          { label: "Green Hydrogen", link: "/business#green-hydrogen" },
          { label: "Powerplants", link: "/business#powerplants" },
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
      case "Careers":
        return careersDropdown;
      case "Business":
        return businessDropdown;
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
            <div className="bg-white rounded-md p-1">
              <img src={logoUrl} alt="Sayantrik Engineer India Logo" className="h-9 object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">Sayantrik Engineers</span>
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
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary inline-flex items-center relative pb-1 text-foreground`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.path) || hoveredMenu === item.label ? "w-full" : "w-0"
                      }`}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && hoveredMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in-0 slide-in-from-top-2 duration-700 ease-in-out">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-[300px]">
                      <div className="space-y-1">
                        {getDropdownContent(item.label)?.sections.map((section, idx) => (
                          <div key={idx}>
                            {section.title && (
                              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 pb-2 border-b border-foreground/30">
                                {section.title}
                              </h3>
                            )}
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
          <Button variant="ghost" size="icon" className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary text-foreground`}
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
