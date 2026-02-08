import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BubbleNavLinkProps {
    id: string;
    label: string;
    isActive: boolean;
    index: number;
    totalItems: number;
    onClick?: () => void;
    to?: string;
    accentColor?: 'red' | 'green';
}

// Defined OUTSIDE to ensure stability and prevent re-animation on re-renders
const MotionButton = motion.button;
const MotionLink = motion.create(Link);

export const BubbleNavLink = ({
    id,
    label,
    isActive,
    index,
    totalItems,
    onClick,
    to,
    accentColor = 'red'
}: BubbleNavLinkProps) => {
    const centerIndex = Math.floor(totalItems / 2);

    const navItemVariants = {
        hidden: (i: number) => ({
            opacity: 0,
            y: (centerIndex - i) * 60,
            scale: 0.9,
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "tween" as const,
                ease: "linear" as const,
                duration: 0.8,
                delay: Math.abs(centerIndex - i) * 0.02,
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.7,
                duration: 1.5
            }
        }
    };

    const baseClasses = cn(
        "w-full text-left px-6 py-3.5 text-sm font-bold rounded-full transition-colors duration-300 border shadow-sm block relative group",
        isActive
            ? accentColor === 'green'
                ? "bg-gradient-to-r from-[#40a829]/10 to-white text-[#40a829] border-[#40a829] shadow-md"
                : "bg-gradient-to-r from-[#ED2939]/10 to-white text-[#ED2939] border-[#ED2939] shadow-md"
            : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
    );

    const content = (
        <motion.span
            variants={textVariants}
            className="whitespace-normal block"
        >
            {label}
        </motion.span>
    );

    if (to) {
        return (
            <MotionLink
                to={to}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className={baseClasses}
            >
                {content}
            </MotionLink>
        );
    }

    return (
        <MotionButton
            custom={index}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            onClick={onClick}
            className={baseClasses}
        >
            {content}
        </MotionButton>
    );
};
