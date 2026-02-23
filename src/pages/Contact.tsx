import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Globe2, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import contactHero from "@/assets/contact-hero.png";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  contactNo: z.string().min(10, "Please enter a valid contact number"),
  email: z.string().email("Please enter a valid email address"),
  remarks: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate API call to send email to info@sayantrik.com
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Enquiry sent successfully!', {
        description: "We will get back to you at info@sayantrik.com soon."
      });
      reset();
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Hyderabad (HQ)",
      isHQ: true,
      address: "Plot no. 56, Opp Srikara Hospitals Lane, Mythrinagar, Madinaguda, Hyderabad, Telangana India 500049",
      phone: "040 – 3553 1580",
      email: "info@sayantrik.com"
    },
    {
      city: "Mumbai Office",
      address: "Solus 303, Hiranandani Estate, Thane West, Navi Mumbai 400607. Maharashtra, India.",
      phone: "040 – 3553 1580",
      email: "info@sayantrik.com"
    },
    {
      city: "Chennai Office",
      address: "W block no 77, Second floor 4th Street, Anna nagar, Chennai 600040",
      phone: "040 – 3553 1580",
      email: "info@sayantrik.com"
    },
    {
      city: "Kuala Lumpur Office",
      address: "B01-A-09, Menara 2 KL Eco City, 3, Jalan Bangsar, 59200, Kuala Lumpur, Malaysia.",
      phone: "040 – 3553 1580",
      email: "info@sayantrik.com"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50/50">
      <SEO
        title="Contact Us"
        description="Global engineering support from Hyderabad, Mumbai, Chennai, and Kuala Lumpur."
        url="/contact"
      />

      {/* Industrial Hero Header */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contactHero})` }}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 to-black/40" />
        <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-[#ED2939]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 z-[2]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ED2939]/10 border border-[#ED2939]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ED2939]">Global Reach</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Contact <span className="text-[#ED2939]">Us</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid md:grid-cols-1 gap-8">
              {/* HQ Card */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                      Head Office <span className="text-xs font-bold text-[#ED2939] tracking-widest bg-red-50 px-2 py-0.5 rounded font-bold">HQ</span>
                    </h2>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6">
                      Sayantrik Engineers India Pvt Ltd<br />
                      Plot no. 56, Opp Srikara Hospitals Lane,<br />
                      Mythrinagar, Madinaguda, Hyderabad,<br />
                      Telangana India 500049
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a href="mailto:info@sayantrik.com" className="flex items-center gap-3 text-slate-600 hover:text-[#ED2939] transition-colors p-3 bg-slate-50 rounded-xl font-bold text-sm">
                        <Mail className="w-4 h-4" /> info@sayantrik.com
                      </a>
                      <a href="tel:04035531580" className="flex items-center gap-3 text-slate-600 hover:text-[#ED2939] transition-colors p-3 bg-slate-50 rounded-xl font-bold text-sm">
                        <Phone className="w-4 h-4" /> 040 – 3553 1580
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offices.slice(1).map((office, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:text-[#ED2939] transition-colors">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{office.city}</h3>
                    <p className="text-slate-500 text-sm font-medium mb-4">{office.address}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#ED2939] flex items-center gap-2">
                        <Mail className="w-3 h-3" /> {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-sm font-black text-[#ED2939] uppercase tracking-[0.2em] mb-4">Business Hours</h3>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black">Mon — Fri</p>
                    <p className="text-slate-500 text-sm font-medium">9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#ED2939] rounded-3xl p-8 shadow-[0_20px_50px_-15px_rgba(237,41,57,0.3)]">
                <h3 className="text-sm font-black text-white/60 uppercase tracking-[0.2em] mb-4">Careers</h3>
                <p className="text-white font-black text-xl mb-4">Join Our Team</p>
                <a href="mailto:hr@sayantrik.com" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  <Mail className="w-3 h-3" /> hr@sayantrik.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="bg-white rounded-[40px] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full" />

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">Get In Touch</h2>
                <div className="w-12 h-1 bg-[#ED2939] mb-8" />

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Full Name</label>
                    <Input
                      {...register("fullName")}
                      placeholder="John Doe"
                      className={`bg-slate-50 border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-[#ED2939]/20 transition-all text-slate-900 font-bold ${errors.fullName ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500 font-bold pl-4 uppercase">{errors.fullName.message}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Contact No</label>
                      <Input
                        {...register("contactNo")}
                        placeholder="+91 00000 00000"
                        className={`bg-slate-50 border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-[#ED2939]/20 transition-all text-slate-900 font-bold ${errors.contactNo ? 'ring-2 ring-red-500' : ''}`}
                      />
                      {errors.contactNo && <p className="text-[10px] text-red-500 font-bold pl-4 uppercase">{errors.contactNo.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Email Address</label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="john@company.com"
                        className={`bg-slate-50 border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-[#ED2939]/20 transition-all text-slate-900 font-bold ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold pl-4 uppercase">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Remarks</label>
                    <Textarea
                      {...register("remarks")}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className={`bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#ED2939]/20 transition-all text-slate-900 font-bold resize-none ${errors.remarks ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {errors.remarks && <p className="text-[10px] text-red-500 font-bold pl-4 uppercase">{errors.remarks.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-slate-900 hover:bg-[#ED2939] text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-[#ED2939]/30 group disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
