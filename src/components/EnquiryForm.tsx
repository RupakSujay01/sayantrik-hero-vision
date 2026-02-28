import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, HardHat, Building2, Users, Radio, Zap, Database, FlaskConical } from 'lucide-react';

interface EnquiryFormProps {
    isOpen: boolean;
    onClose: () => void;
    initialClientType?: string;
}

type FormData = {
    client_type: string;
    sectors: string[];
    full_name: string;
    company: string;
    email: string;
    dial_code: string;
    phone: string;
    query: string;
    reference?: string;
};

const dialCodes = [
    { code: '+91', label: '+91 🇮🇳' },
    { code: '+1', label: '+1 🇺🇸' },
    { code: '+44', label: '+44 🇬🇧' },
    { code: '+60', label: '+60 🇲🇾' },
    { code: '+971', label: '+971 🇦🇪' },
    { code: '+966', label: '+966 🇸🇦' },
    { code: '+974', label: '+974 🇶🇦' },
    { code: '+65', label: '+65 🇸🇬' },
    { code: '+49', label: '+49 🇩🇪' },
    { code: '+31', label: '+31 🇳🇱' },
    { code: '+90', label: '+90 🇹🇷' },
    { code: '+27', label: '+27 🇿🇦' },
    { code: '+234', label: '+234 🇳🇬' },
    { code: '+20', label: '+20 🇪🇬' },
];

export const EnquiryForm = ({ isOpen, onClose, initialClientType }: EnquiryFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<FormData>({
        defaultValues: {
            dial_code: '+91',
            sectors: [],
            client_type: initialClientType || ''
        }
    });

    // Update form when initialClientType changes or form opens
    useEffect(() => {
        if (isOpen && initialClientType) {
            setValue('client_type', initialClientType);
        }
    }, [isOpen, initialClientType, setValue]);

    const onSubmit = async (data: FormData) => {
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
                    subject: `New Project Enquiry from ${data.company}`,
                    from_name: "Sayantrik Website",
                    name: data.full_name,
                    email: data.email,
                    company: data.company,
                    phone: `${data.dial_code} ${data.phone}`,
                    client_type: data.client_type,
                    target_sectors: data.sectors.join(', '),
                    message: data.query,
                    reference_rfq: data.reference || "None provided"
                }),
            });

            const result = await response.json();

            if (result.success) {
                // FIRE GOOGLE ANALYTICS CONVERSION EVENT
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'enquiry_form_india', {
                        'event_category': 'lead',
                        'event_label': 'India Enquiry Drawer',
                        'business_entity': 'Sayantrik India'
                    });
                }

                setIsSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setIsSubmitted(false);
                    reset();
                }, 2000);
            } else {
                throw new Error(result.message || "Failed to submit");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send enquiry. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0a0d12]/90 backdrop-blur-sm"
                    />

                    {/* Container Wrapper for Gradient Border */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-3xl p-[1px] bg-gradient-to-br from-[#ED2939]/40 via-[#ED2939]/10 to-[#ED2939]/30 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Form Content Container with internal outline and hidden scrollbar */}
                        <div className="relative w-full max-h-[90vh] overflow-y-auto bg-[#111620] rounded-2xl scrollbar-none outline outline-1 outline-[#ED2939]/20">
                            {/* Cancel Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 flex items-center gap-1.5 text-[#94a3b8] hover:text-white bg-white/5 hover:bg-white/10 border border-[#1e2840] hover:border-[#ED2939]/50 transition-all rounded px-3 py-1.5 z-20 group"
                            >
                                <X className="w-3.5 h-3.5 group-hover:text-[#ED2939] transition-colors" />
                                <span className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-wider">Cancel</span>
                            </button>

                            <div className="p-8 md:p-12 font-['Barlow'] font-light text-[#d8dde8]">
                                {/* Header */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-3 text-[#ED2939] font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[4px] mb-3">
                                        <div className="w-8 h-[1px] bg-[#ED2939]" />
                                        Get in Touch
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-['Barlow_Condensed'] font-bold text-white uppercase tracking-tighter leading-none mb-4">
                                        Submit Your <span className="text-[#ED2939]">Enquiry</span>
                                    </h2>
                                    <p className="text-[#94a3b8] text-sm leading-relaxed max-w-lg">
                                        Tell us about your project. Our engineering team will respond within 24 hours.
                                    </p>
                                </div>

                                {/* Form Content */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                                    {/* Organization Type */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[3px] text-[#94a3b8] whitespace-nowrap">You Are A</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>
                                        <div className="flex flex-wrap gap-2.5">
                                            {[
                                                { id: 'EPC', label: 'EPC Contractor', icon: HardHat },
                                                { id: 'Owner', label: 'Owner / Operator', icon: Building2 },
                                                { id: 'Consultant', label: 'Consultant / PMC', icon: Users },
                                                { id: 'Technology Provider', label: 'Technology Provider', icon: Zap },
                                                { id: 'Laser Scan', label: 'Laser Scan Enquiry', icon: Radio },
                                            ].map((type) => (
                                                <label
                                                    key={type.id}
                                                    className={`flex items-center gap-2 px-4 py-2.5 border transition-all cursor-pointer select-none font-['Barlow_Condensed'] text-[13px] font-semibold uppercase tracking-wider ${watch('client_type') === type.id
                                                        ? 'bg-[#ED2939] border-[#ED2939] text-white'
                                                        : 'border-[#1e2840] text-[#94a3b8] hover:border-[#ED2939] hover:text-[#ED2939]'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        {...register('client_type', { required: 'Please select organization type' })}
                                                        value={type.id}
                                                        className="hidden"
                                                    />
                                                    <type.icon className="w-4 h-4" />
                                                    {type.label}
                                                </label>
                                            ))}
                                        </div>
                                        {errors.client_type && <p className="text-[11px] text-[#e05050] font-['Barlow_Condensed'] tracking-wider uppercase">{errors.client_type.message as string}</p>}
                                    </div>

                                    {/* Industry Sector */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[3px] text-[#94a3b8] whitespace-nowrap">Industry Sector</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>
                                        <div className="flex flex-wrap gap-2.5">
                                            {[
                                                { id: 'Oil & Gas', label: 'Oil & Gas', icon: Database },
                                                { id: 'Chemicals', label: 'Chemicals', icon: FlaskConical },
                                                { id: 'Power', label: 'Power', icon: Zap },
                                                { id: 'Data Centers', label: 'Data Centers', icon: Database },
                                            ].map((sector) => (
                                                <label
                                                    key={sector.id}
                                                    className={`flex items-center gap-2 px-4 py-2.5 border transition-all cursor-pointer select-none font-['Barlow_Condensed'] text-[13px] font-semibold uppercase tracking-wider ${watch('sectors')?.includes(sector.id)
                                                        ? 'bg-[#ED2939] border-[#ED2939] text-white'
                                                        : 'border-[#1e2840] text-[#94a3b8] hover:border-[#ED2939] hover:text-[#ED2939]'
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        {...register('sectors', { required: 'Select at least one sector' })}
                                                        value={sector.id}
                                                        className="hidden"
                                                    />
                                                    <sector.icon className="w-4 h-4" />
                                                    {sector.label}
                                                </label>
                                            ))}
                                        </div>
                                        {errors.sectors && <p className="text-[11px] text-[#e05050] font-['Barlow_Condensed'] tracking-wider uppercase">{errors.sectors.message as string}</p>}
                                    </div>

                                    {/* Contact Details */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-[#94a3b8]">
                                            <span className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[3px] whitespace-nowrap">Contact Details</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Full Name <span className="text-[#ED2939]">*</span></label>
                                                <input
                                                    {...register('full_name', { required: 'Name is required' })}
                                                    placeholder="Enter your full name"
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none ${errors.full_name ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Company / Organisation <span className="text-[#ED2939]">*</span></label>
                                                <input
                                                    {...register('company', { required: 'Company is required' })}
                                                    placeholder="Enter your company name"
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none ${errors.company ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Email Address <span className="text-[#ED2939]">*</span></label>
                                                <input
                                                    type="email"
                                                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                                                    placeholder="Enter your email address"
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none ${errors.email ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Phone Number <span className="text-[#ED2939]">*</span></label>
                                                <div className="flex">
                                                    <div className="bg-white/5 border border-r-0 border-[#1e2840] px-3 flex items-center gap-2">
                                                        <span className="text-sm">🌐</span>
                                                        <select
                                                            {...register('dial_code')}
                                                            className="bg-transparent border-none text-[#94a3b8] font-['Barlow_Condensed'] text-xs font-semibold focus:outline-none cursor-pointer p-0"
                                                        >
                                                            {dialCodes.map(code => (
                                                                <option key={code.code} value={code.code} className="bg-[#111620]">{code.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        {...register('phone', { required: 'Phone is required' })}
                                                        placeholder="Enter your contact number"
                                                        className={`flex-1 bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none ${errors.phone ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Your Query */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-[#94a3b8]">
                                            <span className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[3px] whitespace-nowrap">Your Query</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Briefly describe your requirement <span className="text-[#ED2939]">*</span></label>
                                                <textarea
                                                    {...register('query', { required: 'Please describe your requirement', minLength: { value: 10, message: 'Minimum 10 characters' } })}
                                                    placeholder="Describe your project scope, location, timeline, or any specific services you're looking for…"
                                                    rows={4}
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none resize-none ${errors.query ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[2.5px] text-[#94a3b8]">Project Reference / RFQ Number <small className="font-light lowercase normal-case opacity-60">(Optional)</small></label>
                                                <input
                                                    {...register('reference')}
                                                    placeholder="e.g. RFQ-2025-001"
                                                    className="w-full bg-white/5 border border-[#1e2840] px-4 py-3 text-sm focus:outline-none focus:border-[#ED2939] transition-colors rounded-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer / Submit */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                        <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                                            Fields marked <span className="text-[#ED2939]">*</span> are required.<br />
                                            We respond within 1 business day.
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <AnimatePresence>
                                                {isSubmitted && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        className="flex items-center gap-2 text-[#2eb87e] font-['Barlow_Condensed'] font-semibold text-sm uppercase tracking-wide"
                                                    >
                                                        <CheckCircle2 className="w-5 h-5" />
                                                        Enquiry Submitted!
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {!isSubmitted && (
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`group relative bg-[#ED2939] hover:bg-[#ff3b4b] text-white font-['Barlow_Condensed'] font-bold uppercase tracking-[3px] py-4 px-10 transition-all flex items-center gap-3 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                                                >
                                                    {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                                                    {!isSubmitting && <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
