import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-black/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">
                            Shrikrushn<span className="text-blue-400">.</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Building digital experiences that blend performance, aesthetics, and functionality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                            <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/Shrikrushn07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/shrikrushn-bhise-77a1b8328/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/ShrikrushnB" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:bhiseshrikrushn0101@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Status</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Open to work
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Shrikrushn Bhise. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed & Built with React + Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};
