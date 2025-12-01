import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { 
  Building2, 
  Gauge, 
  Flame, 
  Lightbulb, 
  Factory, 
  Wrench,
  Database,
  Shield,
  Users,
  Award
} from "lucide-react";
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
        console.error('Failed to remove logo background:', error);
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
          { icon: Flame, label: "Oil & Gas", link: "/services#oil-gas" },
          { icon: Factory, label: "Refineries", link: "/services#refineries" },
          { icon: Building2, label: "Petrochemical & Chemical Plants", link: "/services#petrochemical" },
          { icon: Gauge, label: "Fertilizer & Methanol Units", link: "/services#fertilizer" },
          { icon: Database, label: "Terminals & Tank Farms", link: "/services#terminals" },
          { icon: Wrench, label: "Utility & Offsite Systems", link: "/services#utility" },
        ]
      },
      {
        title: "Specialized Services",
        items: [
          { icon: Wrench, label: "Pre-bid Eng Services" },
          { icon: Factory, label: "Pharmaceutical" },
          { icon: Wrench, label: "Laser Scanning" },
          { 
            icon: Shield, 
            label: "PSV Adequecy check"
          }
        ]
      }
    ]
  };

  const projectsDropdown = {
    sections: [
      {
        title: "Project Categories",
        items: [
          { icon: Building2, label: "Oil & Gas", description: "Upstream & downstream" },
          { icon: Factory, label: "Petrochemicals", description: "Process engineering" },
          { icon: Flame, label: "Refineries", description: "Refining solutions" },
          { icon: Lightbulb, label: "Energy Transition", description: "Sustainable projects" },
        ]
      }
    ]
  };

  const aboutDropdown = {
    sections: [
      {
        title: "Company",
        items: [
          { icon: Building2, label: "Who We Are", description: "Our story and values" },
          { icon: Lightbulb, label: "Our Vision", description: "Future aspirations" },
        ]
      },
      {
        title: "Leadership",
        items: [
          { icon: Users, label: "Leadership Team", description: "Meet our leadership team" },
          { icon: Award, label: "Certifications & Achievements", description: "Our credentials and awards" },
        ]
      }
    ]
  };

  const careersDropdown = {
    sections: [
      {
        title: "Careers",
        items: [
          { icon: Users, label: "Life at SEIPL", description: "Our work culture" },
          { icon: Building2, label: "Hiring", description: "Current job openings" },
        ]
      }
    ]
  };

  const getDropdownContent = (label: string) => {
    switch(label) {
      case "Services": return servicesDropdown;
      case "Projects": return projectsDropdown;
      case "About Us": return aboutDropdown;
      case "Careers": return careersDropdown;
      default: return null;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoUrl} alt="Sayantrik Engineer India Logo" className="h-14 w-14 object-contain" />
            <span className="text-xl md:text-2xl font-bold text-black">
              Sayantrik Engineer India Pvt Ltd
            </span>
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
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary inline-flex items-center relative pb-1 text-zinc-700`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.path) || hoveredMenu === item.label
                        ? 'w-full'
                        : 'w-0'
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
                            <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">
                              {section.title}
                            </h3>
                            <div className="space-y-2">
                              {section.items.map((subItem, subIdx) => {
                                const content = (
                                  <>
                                    <subItem.icon className="h-5 w-5 text-primary mt-0.5 transition-transform duration-500 ease-out group-hover:scale-110" />
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-500 ease-out">
                                        {subItem.label}
                                      </p>
                                      {'subItems' in subItem && subItem.subItems && Array.isArray(subItem.subItems) && (
                                        <ul className="mt-2 ml-4 list-disc text-xs text-muted-foreground space-y-1 cursor-default select-none">
                                          {(subItem.subItems as string[]).map((s: string, i: number) => (
                                            <li key={i} className="cursor-default select-none">{s}</li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  </>
                                );

                                if ('link' in subItem && subItem.link) {
                                  return (
                                    <Link
                                      key={subIdx}
                                      to={subItem.link}
                                      onClick={() => setHoveredMenu(null)}
                                      className="group flex items-start gap-3 p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-pointer select-none no-underline"
                                    >
                                      {content}
                                    </Link>
                                  );
                                }

                                return (
                                  <div
                                    key={subIdx}
                                    className="group flex items-start gap-3 p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50 cursor-default select-none"
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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary text-zinc-700`}
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
