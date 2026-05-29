import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * StatCard — Animated metric card with count-up on scroll
 * Props: value (string like "10+"), label, sublabel, icon (emoji/jsx)
 */
export const StatCard = ({ value, label, sublabel, icon, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="relative group flex flex-col gap-2 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 transition-all duration-300 card-hover"
        >
            {/* Subtle red glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-brand-red/0 group-hover:bg-brand-red/[0.02] transition-all duration-300 pointer-events-none" />

            {/* Icon */}
            {icon && (
                <div className="text-brand-red text-2xl mb-1">{icon}</div>
            )}

            {/* Value */}
            <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {value}
            </div>

            {/* Label */}
            <div className="text-sm font-semibold text-white/90">{label}</div>

            {/* Sublabel */}
            {sublabel && (
                <div className="text-xs text-[#A1A1AA] leading-tight">{sublabel}</div>
            )}
        </motion.div>
    );
};
