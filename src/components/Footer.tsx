import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Sayantrik Engineers India Pvt Ltd
            </h3>

            <div className="flex gap-4">
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




          {/* C&C Plant Process Info - Center */}
          <div className="text-left flex flex-col items-start justify-start">
            <h3 className="text-xl font-bold text-primary mb-3">
              C&C Plant Process Inc (USA)
            </h3>
            <p className="text-black font-bold text-xs mb-4 tracking-wide uppercase">
              100% Subsidiary of Sayantrik India
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              5900 Balcones Drive,<br />
              Austin, TX 78731,<br />
              United States
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:text-right md:flex md:flex-col md:items-end">
            <h3 className="text-xl font-bold text-primary mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground md:flex-row-reverse">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@sayantrik.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground md:flex-row-reverse">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 79955 79900</span>
              </li>
              <li className="text-sm text-muted-foreground">
                Hyderabad, Mumbai, Chennai , Kuala Lumpur, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sayantrik Engineers India Pvt Ltd. All rights reserved.
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
