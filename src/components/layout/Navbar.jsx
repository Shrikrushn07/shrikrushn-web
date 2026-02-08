import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/Button";
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight z-50">
                    <span className="text-blue-400">Shrikrushn</span>
                    <span className="text-white">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? "text-blue-400"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button
                        href="/resume.pdf"
                        variant="outline"
                        className="!px-4 !py-2 !text-sm flex items-center gap-2"
                        target="_blank"
                    >
                        <FileText size={16} />
                        Resume
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-0 top-0 h-screen bg-[#07080b] flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-2xl font-bold ${location.pathname === link.path
                                            ? "text-blue-400"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="/resume.pdf" variant="primary" className="mt-4">
                                View Resume
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
