import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
    children,
    href,
    to,
    className = "",
    variant = "primary", // primary, outline, ghost
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95";

    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] border border-transparent",
        outline:
            "bg-white/5 hover:bg-white/10 text-blue-200 border border-white/10 hover:border-blue-500/30",
        ghost:
            "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

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
