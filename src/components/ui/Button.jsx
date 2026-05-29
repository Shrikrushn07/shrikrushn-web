import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
    children,
    href,
    to,
    className = "",
    variant = "primary", // primary, outline, ghost, red-ghost
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 cursor-pointer";

    const variants = {
        primary:
            "bg-brand-red hover:bg-brand-red-light text-white shadow-red-glow-sm hover:shadow-red-glow border border-transparent",
        outline:
            "bg-transparent text-white border border-white/15 hover:border-brand-red/50 hover:bg-brand-red/5 hover:text-white",
        "outline-red":
            "bg-transparent text-brand-red border border-brand-red/40 hover:border-brand-red hover:bg-brand-red/10",
        ghost:
            "bg-transparent hover:bg-white/5 text-[#A1A1AA] hover:text-white border border-transparent",
    };

    const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};
