import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          We're Here to Serve You
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Head Office */}
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <MapPin className="h-6 w-6 group-hover:text-primary-glow transition-colors duration-300" />
                Head Office Address
              </h2>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Sayantrik Engineers India Pvt Ltd<br />
                Plot no. 56, Opp Srikara Hospitals Lane,<br />
                Mythrinagar, Madinaguda, Hyderabad<br />
                Telangana India 500049
              </p>
            </div>

            {/* Mumbai & Chennai Offices */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Mumbai Office</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Sayantrik Engineers India Pvt Ltd</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Chennai Office</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Sayantrik Engineers India Pvt Ltd</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Inquiries:</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <a href="mailto:info@sayantrik.com" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Email: info@sayantrik.com
                    </a>
                    <a href="tel:04035531580" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Phone: 040 – 3553 1580
                    </a>
                    <a href="tel:+917995579900" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Mobile: +91 79955 79900
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Career:</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <a href="mailto:hr@sayantrik.com" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Email: hr@sayantrik.com
                    </a>
                    <a href="tel:04035531580" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Phone: 040-3553 1580
                    </a>
                    <a href="tel:+918885802057" className="flex items-center gap-2 hover:text-primary hover:gap-3 transition-all duration-300 group">
                      <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Mobile: +91 88858 02057
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Business Hours
              </h2>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Monday to Friday: 9:00 AM - 6:00 PM (IST)
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary mb-4">Connect with Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/sayantrikengineers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            <form className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="transition-all duration-300 focus:scale-[1.02]" />
              </div>

              <div className="group">
                <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Contact No
                </label>
                <Input id="contact" placeholder="Your contact number" className="transition-all duration-300 focus:scale-[1.02]" />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Email ID
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="transition-all duration-300 focus:scale-[1.02]" />
              </div>

              <div className="group">
                <label htmlFor="remarks" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Remarks
                </label>
                <Textarea
                  id="remarks"
                  placeholder="Your message..."
                  rows={6}
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <Button size="lg" className="w-full hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                Send Message
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-8">
              Thank you for considering Sayantrik Engineers India Pvt Ltd as your engineering partner.
            </p>
            <p className="text-center text-primary font-semibold mt-2">
              Engineering Excellence, Your Vision, Our Commitment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
