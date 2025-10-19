import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-text border-t border-dark-text/10 mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Sayantrik Engineer India Pvt Ltd
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Engineering Excellence in Oil & Gas, Refinery, Petrochemicals, Chemicals, and Pharmaceutical industries.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@sayantrik.com"
                className="text-white/70 hover:text-samsung-blue transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/sayantrikengineers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-samsung-blue transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-samsung-blue transition-colors duration-300 text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-white/70">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-samsung-blue" />
                <span>info@sayantrik.com</span>
              </li>
              <li className="flex items-start gap-3 text-base text-white/70">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-samsung-blue" />
                <span>+91 79955 79900</span>
              </li>
              <li className="text-base text-white/70">
                Hyderabad, Mumbai, Chennai , Malaysia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-base text-white/70">
            © {new Date().getFullYear()} Sayantrik Engineer India Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm text-white/50 mt-3">
            Engineering Excellence, Your Vision, Our Commitment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
