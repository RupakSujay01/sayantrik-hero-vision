import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, HardHat, Building2, Users, Radio, Zap, Database, FlaskConical } from 'lucide-react';

interface EnquiryFormProps {
    isOpen: boolean;
    onClose: () => void;
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

export const EnquiryForm = ({ isOpen, onClose }: EnquiryFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>({
        defaultValues: {
            dial_code: '+91',
            sectors: []
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form Submitted:', data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            reset();
        }, 2000);
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
                        className="relative w-full max-w-3xl p-[1px] bg-gradient-to-br from-[#e8a020]/40 via-[#e8a020]/10 to-[#e8a020]/30 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Form Content Container with internal outline and hidden scrollbar */}
                        <div className="relative w-full max-h-[90vh] overflow-y-auto bg-[#111620] rounded-2xl scrollbar-none outline outline-1 outline-[#e8a020]/20">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-[#5a6480] hover:text-white transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-12 font-['Barlow'] font-light text-[#d8dde8]">
                                {/* Header */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-3 text-[#e8a020] font-['Barlow_Condensed'] text-[11px] font-semibold uppercase tracking-[4px] mb-3">
                                        <div className="w-8 h-[1px] bg-[#e8a020]" />
                                        Get in Touch
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-['Barlow_Condensed'] font-bold text-white uppercase tracking-tighter leading-none mb-4">
                                        Submit Your <span className="text-[#e8a020]">Enquiry</span>
                                    </h2>
                                    <p className="text-[#5a6480] text-sm leading-relaxed max-w-lg">
                                        Tell us about your project. Our engineering team will respond within 24 hours.
                                    </p>
                                </div>

                                {/* Form Content */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                                    {/* Organization Type */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[3px] text-[#5a6480] whitespace-nowrap">You Are A</span>
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
                                                            ? 'bg-[#e8a020] border-[#e8a020] text-[#0a0d12]'
                                                            : 'border-[#1e2840] text-[#5a6480] hover:border-[#e8a020] hover:text-[#e8a020]'
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
                                            <span className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[3px] text-[#5a6480] whitespace-nowrap">Industry Sector</span>
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
                                                            ? 'bg-[#e8a020] border-[#e8a020] text-[#0a0d12]'
                                                            : 'border-[#1e2840] text-[#5a6480] hover:border-[#e8a020] hover:text-[#e8a020]'
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
                                        <div className="flex items-center gap-4 text-[#5a6480]">
                                            <span className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[3px] whitespace-nowrap">Contact Details</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Full Name <span className="text-[#e8a020]">*</span></label>
                                                <input
                                                    {...register('full_name', { required: 'Name is required' })}
                                                    placeholder="John Smith"
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none ${errors.full_name ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Company / Organisation <span className="text-[#e8a020]">*</span></label>
                                                <input
                                                    {...register('company', { required: 'Company is required' })}
                                                    placeholder="Acme Engineering Ltd."
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none ${errors.company ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Email Address <span className="text-[#e8a020]">*</span></label>
                                                <input
                                                    type="email"
                                                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                                                    placeholder="john@company.com"
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none ${errors.email ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Phone Number <span className="text-[#e8a020]">*</span></label>
                                                <div className="flex">
                                                    <div className="bg-white/5 border border-r-0 border-[#1e2840] px-3 flex items-center gap-2">
                                                        <span className="text-sm">🌐</span>
                                                        <select
                                                            {...register('dial_code')}
                                                            className="bg-transparent border-none text-[#5a6480] font-['Barlow_Condensed'] text-xs font-semibold focus:outline-none cursor-pointer p-0"
                                                        >
                                                            {dialCodes.map(code => (
                                                                <option key={code.code} value={code.code} className="bg-[#111620]">{code.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        {...register('phone', { required: 'Phone is required' })}
                                                        placeholder="98765 43210"
                                                        className={`flex-1 bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none ${errors.phone ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Your Query */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-[#5a6480]">
                                            <span className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[3px] whitespace-nowrap">Your Query</span>
                                            <div className="flex-1 h-[1px] bg-[#1e2840]" />
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Briefly describe your requirement <span className="text-[#e8a020]">*</span></label>
                                                <textarea
                                                    {...register('query', { required: 'Please describe your requirement', minLength: { value: 10, message: 'Minimum 10 characters' } })}
                                                    placeholder="Describe your project scope, location, timeline, or any specific services you're looking for…"
                                                    rows={4}
                                                    className={`w-full bg-white/5 border px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none resize-none ${errors.query ? 'border-[#e05050]' : 'border-[#1e2840]'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-['Barlow_Condensed'] text-[10px] font-semibold uppercase tracking-[2.5px] text-[#5a6480]">Project Reference / RFQ Number <small className="font-light lowercase normal-case opacity-60">(Optional)</small></label>
                                                <input
                                                    {...register('reference')}
                                                    placeholder="e.g. RFQ-2025-001"
                                                    className="w-full bg-white/5 border border-[#1e2840] px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020] transition-colors rounded-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer / Submit */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                        <p className="text-[#5a6480] text-[11px] leading-relaxed">
                                            Fields marked <span className="text-[#e8a020]">*</span> are required.<br />
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
                                                    className={`group relative bg-[#e8a020] hover:bg-[#f0c050] text-[#0a0d12] font-['Barlow_Condensed'] font-bold uppercase tracking-[3px] py-4 px-10 transition-all flex items-center gap-3 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
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
