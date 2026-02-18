import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Company Info & Corporate Responsibility */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full">
              <h3 className="text-xl font-bold text-primary mb-4">
                Sayantrik Engineer India Pvt Ltd
              </h3>

              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:info@sayantrik.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sayantrikengineers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>


          </div>




          {/* C&C Plant Process Info - Center */}
          <div className="text-center flex flex-col items-center justify-start">
            <h3 className="text-xl font-bold text-primary mb-0 leading-tight">
              C&C Process Plants Inc (USA)
            </h3>
            <p className="text-muted-foreground text-xs mb-4 leading-normal mt-1">
              (100% Subsidiary of Sayantrik India)
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              5900 Balcones Drive,<br />
              Austin, TX 78731,<br />
              United States
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end justify-start">
            <h3 className="text-xl font-bold text-primary mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 w-full">
              <li className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-end">
                <span>info@sayantrik.com</span>
                <Mail className="h-4 w-4 flex-shrink-0" />
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-end">
                <span>+91 79955 79900</span>
                <Phone className="h-4 w-4 flex-shrink-0" />
              </li>
              <li className="text-sm text-muted-foreground">
                India, USA and Malaysia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Sayantrik Engineer India Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Engineering Excellence, Your Vision, Our Commitment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
