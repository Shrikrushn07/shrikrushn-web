import React from "react";

/**
 * SectionLabel — small red-accented eyebrow label
 * Usage: <SectionLabel>Featured Project</SectionLabel>
 */
export const SectionLabel = ({ children, className = "" }) => {
    return (
        <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
            <span className="h-px w-6 bg-brand-red" />
            <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                {children}
            </span>
        </div>
    );
};
