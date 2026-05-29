import React from "react";
import { motion } from "framer-motion";

/**
 * RedOrb — Animated AI orb for the hero right side
 * Pure CSS + Framer Motion, no external dependencies
 */
export const RedOrb = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full min-h-[400px] select-none">
            {/* Outer atmospheric glow */}
            <div className="absolute w-80 h-80 rounded-full bg-brand-red/5 blur-3xl animate-pulse-glow" />

            {/* Rings */}
            {/* Ring 1 — slowest, outermost */}
            <motion.div
                className="absolute w-72 h-72 rounded-full border border-brand-red/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
            >
                {/* Dot on ring 1 */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-red/60 blur-sm" />
            </motion.div>

            {/* Ring 2 */}
            <motion.div
                className="absolute w-56 h-56 rounded-full border border-brand-red/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
                <div className="absolute bottom-4 left-0 w-1 h-1 rounded-full bg-brand-red/60" />
            </motion.div>

            {/* Ring 3 — fastest, innermost */}
            <motion.div
                className="absolute w-40 h-40 rounded-full border border-brand-red/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-red shadow-[0_0_12px_rgba(229,9,20,0.9)]" />
            </motion.div>

            {/* Equatorial orbit band */}
            <motion.div
                className="absolute w-64 h-16 rounded-full border border-brand-red/15"
                animate={{ rotateX: 75, rotateY: 0, rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
            />

            {/* Core sphere */}
            <motion.div
                className="relative w-24 h-24 rounded-full"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Core gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red via-brand-red-dark to-[#050505] shadow-[0_0_40px_rgba(229,9,20,0.6),inset_0_0_20px_rgba(0,0,0,0.8)]" />
                {/* Inner highlight */}
                <div className="absolute top-2 left-3 w-6 h-6 rounded-full bg-white/20 blur-sm" />
                {/* AI text in center */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-black text-sm tracking-wider opacity-90">
                    AI
                </div>
            </motion.div>

            {/* Floating particles */}
            {[
                { top: "18%", left: "10%", delay: 0, size: "w-1 h-1" },
                { top: "75%", left: "15%", delay: 1.5, size: "w-1.5 h-1.5" },
                { top: "20%", right: "12%", delay: 0.8, size: "w-1 h-1" },
                { top: "70%", right: "10%", delay: 2, size: "w-1 h-1" },
                { top: "45%", left: "5%", delay: 0.4, size: "w-0.5 h-0.5" },
                { top: "50%", right: "5%", delay: 1.2, size: "w-0.5 h-0.5" },
            ].map((p, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${p.size} rounded-full bg-brand-red/70`}
                    style={{ top: p.top, left: p.left, right: p.right }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Bottom platform glow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-4 rounded-full bg-brand-red/20 blur-xl" />
        </div>
    );
};
