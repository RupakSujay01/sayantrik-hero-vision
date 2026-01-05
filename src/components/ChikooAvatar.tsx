import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChikooAvatarProps {
    className?: string;
    state?: 'idle' | 'thinking' | 'speaking';
}

export const ChikooAvatar = ({ className, state = 'idle' }: ChikooAvatarProps) => {
    const [isBlinking, setIsBlinking] = useState(false);

    // Random blinking effect
    useEffect(() => {
        const blinkLoop = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150); // Close eyes

            // Random interval between 2s and 5s
            const nextBlink = Math.random() * 3000 + 2000;
            setTimeout(blinkLoop, nextBlink);
        };

        const timeout = setTimeout(blinkLoop, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const floatTransition = {
        y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <div className={className}>
            <motion.svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-md"
                animate={state === 'thinking' ? {
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5, repeat: Infinity }
                } : {
                    y: [0, -3, 0]
                }}
                transition={state === 'thinking' ? {} : floatTransition as any}
            >
                {/* Body/Head - Larger, Rounder, Cuter */}
                <ellipse cx="50" cy="52" rx="46" ry="42" fill="#ED2939" />

                {/* Face Area - Soft definition */}
                <ellipse cx="50" cy="62" rx="35" ry="25" fill="#FFE5E5" opacity="0.1" />

                {/* Eyes Container - "Kawaii" Style (Solid dark with sparkles) */}
                <g transform="translate(0, 8)">
                    {/* Left Eye */}
                    <motion.ellipse
                        cx="32"
                        cy="45"
                        rx="6"
                        ry={isBlinking ? 0.5 : 8}
                        fill="#2D0A0A" // Dark brownish/black for softness
                        animate={{ ry: isBlinking ? 0.5 : 8 }}
                        transition={{ duration: 0.1 }}
                    />
                    {/* Eye Sparkles */}
                    {!isBlinking && (
                        <>
                            <circle cx="34" cy="42" r="2.5" fill="white" />
                            <circle cx="31" cy="47" r="1" fill="white" opacity="0.7" />
                        </>
                    )}

                    {/* Right Eye */}
                    <motion.ellipse
                        cx="68"
                        cy="45"
                        rx="6"
                        ry={isBlinking ? 0.5 : 8}
                        fill="#2D0A0A"
                        animate={{ ry: isBlinking ? 0.5 : 8 }}
                        transition={{ duration: 0.1 }}
                    />
                    {/* Eye Sparkles */}
                    {!isBlinking && (
                        <>
                            <circle cx="70" cy="42" r="2.5" fill="white" />
                            <circle cx="67" cy="47" r="1" fill="white" opacity="0.7" />
                        </>
                    )}
                </g>

                {/* Mouth - Tiny, Cute Smile */}
                <motion.path
                    d="M 40 65 Q 50 72 60 65"
                    stroke="#2D0A0A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    animate={state === 'speaking' ? {
                        d: ["M 40 65 Q 50 72 60 65", "M 40 65 Q 50 78 60 65", "M 40 65 Q 50 72 60 65"],
                        transition: { duration: 0.2, repeat: Infinity }
                    } : {}}
                />

                {/* Blush */}
                <circle cx="25" cy="58" r="5" fill="#FFC0CB" opacity="0.5" />
                <circle cx="75" cy="58" r="5" fill="#FFC0CB" opacity="0.5" />

                {/* Leaf/Sprout Antenna - Adjusted for larger head */}
                <motion.g
                    animate={state === 'thinking' ? {
                        rotate: [-5, 5, -5],
                        transition: { duration: 0.2, repeat: Infinity }
                    } : {}}
                    style={{ originX: "50px", originY: "10px" }}
                >
                    <path d="M 50 12 Q 50 -2 65 0 Q 55 8 50 12" fill="#4ADE80" stroke="#22c55e" strokeWidth="1" />
                    <path d="M 50 12 Q 50 2 38 6 Q 46 10 50 12" fill="#86EFAC" stroke="#4ade80" strokeWidth="1" />
                </motion.g>

            </motion.svg>
        </div>
    );
};
