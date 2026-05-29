import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUp, FileText } from "lucide-react";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/Shrikrushn07",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/shrikrushn-bhise-77a1b8328/",
        label: "LinkedIn",
    },
    {
        icon: Twitter,
        href: "https://x.com/ShrikrushnB",
        label: "Twitter / X",
    },
    {
        icon: Mail,
        href: "mailto:bhiseshrikrushn0101@gmail.com",
        label: "Email",
    },
];

const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-32 border-t border-white/[0.05]">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5">
                        <Link to="/" className="flex items-center gap-0.5 w-fit">
                            <span className="text-xl font-black text-white">Shrikrushn</span>
                            <span className="text-brand-red text-2xl leading-none font-black">.</span>
                        </Link>

                        <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-sm">
                            Building AI products and scalable web applications.
                            Computer Science student, full-stack developer, and future founder.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#A1A1AA] hover:text-white hover:border-brand-red/30 hover:bg-brand-red/5 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-sm text-[#A1A1AA]">
                                Open to <span className="text-white font-medium">internships</span> &{" "}
                                <span className="text-white font-medium">collaborations</span>
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Navigation</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(({ name, path }) => (
                                <li key={name}>
                                    <Link
                                        to={path}
                                        className="text-sm text-[#A1A1AA] hover:text-brand-red transition-colors duration-200"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resume & Contact */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Connect</h3>
                        <div className="space-y-3">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                            >
                                <FileText size={14} className="text-brand-red" />
                                View Resume
                            </a>
                            <a
                                href="mailto:bhiseshrikrushn0101@gmail.com"
                                className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                            >
                                <Mail size={14} className="text-brand-red" />
                                bhiseshrikrushn0101@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="section-divider mb-8" />

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#A1A1AA] text-xs">
                        © {currentYear} Shrikrushn Bhise. All rights reserved.
                    </p>
                    <p className="text-[#A1A1AA]/60 text-xs">
                        Built with React + Tailwind + Framer Motion
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-brand-red transition-colors duration-200"
                    >
                        Back to top <ArrowUp size={12} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
