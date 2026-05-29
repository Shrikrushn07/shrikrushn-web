import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled || mobileMenuOpen
                    ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
                    : "py-5 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-xl font-black tracking-tight z-50 flex items-center gap-0.5 group">
                    <span className="text-white group-hover:text-white/90 transition-colors">Shrikrushn</span>
                    <span className="text-brand-red text-2xl leading-none group-hover:text-brand-red-light transition-colors">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                                    isActive
                                        ? "text-white"
                                        : "text-[#A1A1AA] hover:text-white"
                                }`}
                            >
                                {link.name}
                                {/* Active underline */}
                                <span
                                    className={`absolute bottom-1 left-4 right-4 h-px bg-brand-red transition-all duration-300 ${
                                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                    }`}
                                />
                                {/* Hover background */}
                                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-200" />
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Right — Resume button */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white border border-white/10 rounded-xl hover:border-brand-red/40 hover:bg-brand-red/5 hover:text-white transition-all duration-300"
                    >
                        <FileText size={15} className="text-brand-red" />
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {mobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <X size={22} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Menu size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-0 top-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.06] md:hidden"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block text-2xl font-bold py-3 border-b border-white/[0.04] transition-colors ${
                                            location.pathname === link.path
                                                ? "text-brand-red"
                                                : "text-[#A1A1AA] hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-4"
                            >
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-red text-white font-semibold w-fit shadow-red-glow-sm"
                                >
                                    <FileText size={16} />
                                    View Resume
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
