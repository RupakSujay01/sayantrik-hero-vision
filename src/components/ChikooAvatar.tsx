import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ChikooAvatarProps {
    className?: string;
    state?: 'idle' | 'thinking' | 'speaking';
}

export const ChikooAvatar = ({ className, state = 'idle' }: ChikooAvatarProps) => {
    const [isBlinking, setIsBlinking] = useState(false);

    // Independent Blink Loop
    useEffect(() => {
        const blinkLoop = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
            const nextBlink = Math.random() * 3000 + 2000;
            setTimeout(blinkLoop, nextBlink);
        };
        const timeout = setTimeout(blinkLoop, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={className}>
            <motion.svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-lg"
                animate={state === 'thinking' ? {
                    y: [0, -3, 0],
                    rotate: [0, 2, -2, 0]
                } : {
                    y: [0, -4, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* 
                  REALISTIC MONKEY DESIGN
                  - Detailed Ear Structures (Helix, Antihelix)
                  - Larger Head (Filling viewbox)
                  - Deep rich colors
                */}

                {/* Left Ear - Realistic Structure */}
                <motion.g
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ originX: "18px", originY: "60px" }}
                >
                    {/* Outer Ear / Helix */}
                    <path
                        d="M 28 45 C 10 40 0 55 2 70 C 4 82 15 90 28 85"
                        fill="#6D2E2E" stroke="#4A1F1F" strokeWidth="2" strokeLinecap="round"
                    />
                    {/* Inner Ear Detail */}
                    <path
                        d="M 25 50 C 18 50 12 58 14 70 C 15 78 20 80 25 78"
                        fill="#E5C4A8" opacity="0.8"
                    />
                    <path
                        d="M 20 60 C 22 62 24 60 25 55"
                        stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                    />
                </motion.g>

                {/* Right Ear - Realistic Structure */}
                <motion.g
                    animate={{ rotate: [3, -3, 3] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "102px", originY: "60px" }}
                >
                    {/* Outer Ear / Helix */}
                    <path
                        d="M 92 45 C 110 40 120 55 118 70 C 116 82 105 90 92 85"
                        fill="#6D2E2E" stroke="#4A1F1F" strokeWidth="2" strokeLinecap="round"
                    />
                    {/* Inner Ear Detail */}
                    <path
                        d="M 95 50 C 102 50 108 58 106 70 C 105 78 100 80 95 78"
                        fill="#E5C4A8" opacity="0.8"
                    />
                    <path
                        d="M 100 60 C 98 62 96 60 95 55"
                        stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                    />
                </motion.g>

                {/* Head Base - Larger & Rounder */}
                <ellipse cx="60" cy="62" rx="46" ry="44" fill="#8B3A3A" stroke="#6D2E2E" strokeWidth="2" />

                {/* Face Mask - "Heart/M" shape typical of monkeys - Scaled Up */}
                <path
                    d="M 60 38 C 60 38 42 28 24 55 C 20 62 20 82 32 92 C 45 100 60 96 60 96 C 60 96 75 100 88 92 C 100 82 100 62 96 55 C 78 28 60 38 60 38 Z"
                    fill="#FFE4C4"
                />

                {/* Hair Tuft - Scaled Up */}
                <motion.path
                    d="M 60 18 Q 70 5 80 15 Q 72 -2 60 5 Q 48 -2 40 15 Q 50 5 60 18"
                    fill="#8B3A3A"
                    stroke="#6D2E2E"
                    strokeWidth="1"
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "60px", originY: "18px" }}
                />

                {/* Eyes Container - Scaled Up specific to head */}
                <g>
                    {/* Left Eye */}
                    <ellipse cx="44" cy="66" rx="10" ry="12" fill="white" />
                    <motion.ellipse
                        cx="44" cy="66" rx="7" ry="9" fill="#2A1A1A"
                        animate={{ ry: isBlinking ? 0.5 : 9 }}
                        transition={{ duration: 0.1 }}
                    />
                    <circle cx="46" cy="63" r="3" fill="white" />
                    <circle cx="42" cy="70" r="1.5" fill="white" opacity="0.6" />

                    {/* Right Eye */}
                    <ellipse cx="76" cy="66" rx="10" ry="12" fill="white" />
                    <motion.ellipse
                        cx="76" cy="66" rx="7" ry="9" fill="#2A1A1A"
                        animate={{ ry: isBlinking ? 0.5 : 9 }}
                        transition={{ duration: 0.1 }}
                    />
                    <circle cx="78" cy="63" r="3" fill="white" />
                    <circle cx="74" cy="70" r="1.5" fill="white" opacity="0.6" />
                </g>

                {/* Nose - Larger */}
                <ellipse cx="60" cy="80" rx="5" ry="3" fill="#4A2525" />
                <path d="M 57 79 Q 60 80 63 79" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />

                {/* Mouth - Wider Smile, shifted down */}
                <motion.path
                    d="M 46 90 Q 60 100 74 90"
                    stroke="#4A2525"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    animate={state === 'speaking' ? {
                        d: ["M 46 90 Q 60 100 74 90", "M 46 90 Q 60 110 74 90", "M 46 90 Q 60 100 74 90"],
                        transition: { duration: 0.2, repeat: Infinity }
                    } : {}}
                />

                {/* Cheeks */}
                <ellipse cx="32" cy="78" rx="7" ry="4" fill="#FFB6C1" opacity="0.4" />
                <ellipse cx="88" cy="78" rx="7" ry="4" fill="#FFB6C1" opacity="0.4" />

            </motion.svg>
        </div>
    );
};
