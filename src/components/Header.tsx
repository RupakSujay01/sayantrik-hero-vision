import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo_sb.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const hoverOpenTimeoutRef = useRef<number | null>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us", hasDropdown: true },
    { path: "/portfolio", label: "Portfolio", hasDropdown: true },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/projects/feed", label: "Projects", hasDropdown: true },
    { path: "/technology-providers", label: "Technology Providers" },
    { path: "/lcts-partnership", label: "Our Partners" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const servicesDropdown = {
    sections: [{
      title: "Services",
      items: [
        { label: "FEED", link: "/services#feed" },
        { label: "Detailed Engineering", link: "/services#feed" },
        { label: "EPC", link: "/services#epc" },
        { label: "EPCM", link: "/services#epcm" },
        { label: "PMC", link: "/services#epcm" },
        { label: "Owner's Engineer", link: "/services#epcm" },
        { label: "Process Technology Integration", link: "/services#process-technology" },
        { label: "Brownfield Modifications", link: "/services#epcm" },
        { label: "Laser Scan & Digital Twins", link: "/services#laser-scan" },
      ],
    }],
  };

  const projectsDropdown = {
    sections: [{
      title: "Project Categories",
      items: [
        { label: "Feed Engineering", link: "/projects/feed" },
        { label: "Detail Engineering", link: "/projects/detail" },
        { label: "As-built Engineering", link: "/projects/as-built" },
        { label: "Pre-bid Engineering", link: "/projects/pre-bid" },
      ],
    }],
  };

  const aboutDropdown = {
    sections: [{
      title: "Company",
      items: [
        { label: "Who We Are", link: "/about#who-we-are" },
        { label: "Our Vision", link: "/about#vision" },
      ],
    }],
  };

  const portfolioDropdown = {
    sections: [{
      title: "Portfolio",
      items: [
        { label: "Energy", link: "/portfolio?category=Energy" },
        { label: "Chemicals", link: "/portfolio?category=Chemicals" },
        { label: "Power", link: "/portfolio?category=Power" },
        { label: "Sustainability", link: "/portfolio?category=Sustainability" },
      ],
    }],
  };

  const getDropdownContent = (label: string) => {
    switch (label) {
      case "Services": return servicesDropdown;
      case "Projects": return projectsDropdown;
      case "About Us": return aboutDropdown;
      case "Portfolio": return portfolioDropdown;
      default: return null;
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu(prev => prev === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white shadow-sm">
      <div className="w-full px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="bg-white rounded-md p-1 flex-shrink-0">
              <img src={logo} alt="Sayantrik Engineer India Logo" className="h-8 sm:h-9 object-contain" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground truncate">Sayantrik Engineers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group h-full flex items-center"
                onMouseEnter={() => {
                  if (!item.hasDropdown) return;
                  if (hoverCloseTimeoutRef.current) window.clearTimeout(hoverCloseTimeoutRef.current);
                  hoverOpenTimeoutRef.current = window.setTimeout(() => setHoveredMenu(item.label), 200);
                }}
                onMouseLeave={() => {
                  if (hoverOpenTimeoutRef.current) window.clearTimeout(hoverOpenTimeoutRef.current);
                  hoverCloseTimeoutRef.current = window.setTimeout(() => setHoveredMenu(null), 150);
                }}
              >
                <Link
                  to={item.path}
                  className="text-xs xl:text-sm font-medium transition-all duration-300 hover:text-primary inline-flex items-center relative pb-1 text-foreground whitespace-nowrap"
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-700 ${isActive(item.path) || hoveredMenu === item.label ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>

                {/* Desktop Dropdown */}
                {item.hasDropdown && hoveredMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in-0 slide-in-from-top-2 duration-1000 ease-in-out">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-[280px]">
                      {getDropdownContent(item.label)?.sections.map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 pb-2 border-b border-border">
                              {section.title}
                            </h3>
                          )}
                          <div className="space-y-1">
                            {section.items.map((subItem, subIdx) => {
                              const isSustainability = subItem.label === "Sustainability";
                              return (
                                <Link
                                  key={subIdx}
                                  to={subItem.link}
                                  onClick={() => setHoveredMenu(null)}
                                  className="group/subitem block p-3 rounded-md transition-all duration-500 ease-out hover:bg-secondary/50"
                                >
                                  <p className={`text-sm font-normal transition-colors duration-500 ease-out ${isSustainability ? 'font-semibold !text-[#40a829]' : 'text-foreground group-hover/subitem:text-primary'}`}>
                                    {subItem.label}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-1 animate-fade-in bg-background rounded-lg px-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={() => { if (!item.hasDropdown) setIsMenuOpen(false); }}
                    className={`flex-1 py-3 px-3 text-sm font-medium transition-colors hover:text-primary rounded-md ${isActive(item.path) ? 'text-primary bg-primary/5' : 'text-foreground'}`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMobileMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {/* Mobile Submenu */}
                {item.hasDropdown && expandedMobileMenu === item.label && (
                  <div className="ml-4 pl-3 border-l-2 border-primary/20 space-y-1 pb-2">
                    {getDropdownContent(item.label)?.sections.map((section, idx) => (
                      <div key={idx}>
                        {section.title && (
                          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-3 py-2">{section.title}</p>
                        )}
                        {section.items.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.link}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-3 text-sm text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
