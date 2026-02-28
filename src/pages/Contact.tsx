import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e728c4e1-b9c6-44b4-92c2-cffa0635b9cd",
          subject: `New Contact Request from ${data.fullName}`,
          from_name: "Sayantrik Website",
          name: data.fullName,
          email: data.email,
          phone: data.contactNo,
          message: data.remarks
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Enquiry sent successfully!', {
          description: "We will get back to you at info@sayantrik.com soon."
        });

        // FIRE GOOGLE ANALYTICS CONVERSION EVENT
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'contact_form_india', {
            'event_category': 'lead',
            'event_label': 'India Contact Form',
            'business_entity': 'Sayantrik India'
          });
        }

        reset();
      } else {
        throw new Error(result.message || "Failed to submit");
      }
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
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Contact <span className="text-[#ED2939]">Us</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12">
            <div className="space-y-12">
              {/* HQ Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-[0_22px_60px_-20px_rgba(0,0,0,0.15)] border-2 border-[#ED2939]/10 group transition-all duration-500 hover:shadow-2xl hover:border-[#ED2939]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED2939]/5 -mr-16 -mt-16 rounded-full" />

                  <div className="flex flex-col gap-6 relative z-10">
                    <div>
                      <h3 className="text-xs font-black text-[#ED2939] uppercase tracking-[0.2em] mb-4">Head Office</h3>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                          Hyderabad <span className="text-[10px] font-bold text-[#ED2939] tracking-widest bg-red-50 px-2 py-0.5 rounded uppercase">HQ</span>
                        </h2>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          Sayantrik Engineers India Pvt Ltd<br />
                          Plot no. 56, Opp Srikara Hospitals Lane,<br />
                          Mythrinagar, Madinaguda, Hyderabad,<br />
                          Telangana India 500049
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a
                          href="mailto:info@sayantrik.com"
                          className="flex items-center gap-3 text-slate-600 hover:text-[#ED2939] transition-colors p-3 bg-slate-50 rounded-xl font-bold text-sm"
                          onClick={() => {
                            if (typeof window.gtag === 'function') {
                              window.gtag('event', 'email_click', { 'business_entity': 'Sayantrik India' });
                            }
                          }}
                        >
                          <Mail className="w-4 h-4" /> info@sayantrik.com
                        </a>
                        <a
                          href="tel:04035531580"
                          className="flex items-center gap-3 text-slate-600 hover:text-[#ED2939] transition-colors p-3 bg-slate-50 rounded-xl font-bold text-sm"
                          onClick={() => {
                            if (typeof window.gtag === 'function') {
                              window.gtag('event', 'phone_click', { 'business_entity': 'Sayantrik India' });
                            }
                          }}
                        >
                          <Phone className="w-4 h-4" /> 040 – 3553 1580
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-black text-[#ED2939] uppercase tracking-[0.2em]">Regional Offices</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {offices.slice(1).map((office, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{office.city}</h3>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info & Careers Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Business Hours */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-black text-[#ED2939] uppercase tracking-[0.2em]">Business Hours</h3>
                  </div>
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-black text-lg">Mon — Fri</p>
                        <p className="text-slate-500 text-xs font-medium">9:00 AM - 6:00 PM (IST)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Careers */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-black text-[#ED2939] uppercase tracking-[0.2em]">Careers</h3>
                  </div>
                  <div className="bg-[#ED2939] rounded-3xl p-6 shadow-[0_15px_40px_-15px_rgba(237,41,57,0.3)] flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-white font-black text-xl">Join Our Team</p>
                      <a
                        href="mailto:hr@sayantrik.com"
                        className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap w-fit"
                        onClick={() => {
                          if (typeof window.gtag === 'function') {
                            window.gtag('event', 'email_click', { 'business_entity': 'Sayantrik India' });
                          }
                        }}
                      >
                        <Mail className="w-3.5 h-3.5" /> hr@sayantrik.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="bg-white rounded-[40px] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full" />

              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-xs font-black text-[#ED2939] uppercase tracking-[0.2em]">Get In Touch</h3>
                </div>

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

                  <div className="pt-8">
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
                  </div>
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