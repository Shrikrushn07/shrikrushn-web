import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight, Briefcase, Users, Zap, Rocket } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";

const openTo = [
    {
        icon: Briefcase,
        title: "Internships",
        desc: "Full Stack, AI, or Product Engineering roles",
    },
    {
        icon: Users,
        title: "Collaborations",
        desc: "Build something meaningful together",
    },
    {
        icon: Zap,
        title: "Hackathons",
        desc: "High-intensity team problem solving",
    },
    {
        icon: Rocket,
        title: "Startup Discussions",
        desc: "Ideas, products, and venture thinking",
    },
];

const socials = [
    {
        icon: Github,
        href: "https://github.com/Shrikrushn07",
        label: "GitHub",
        handle: "@Shrikrushn07",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/shrikrushn-bhise-77a1b8328/",
        label: "LinkedIn",
        handle: "Shrikrushn Bhise",
    },
    {
        icon: Twitter,
        href: "https://x.com/ShrikrushnB",
        label: "X / Twitter",
        handle: "@ShrikrushnB",
    },
];

export const Contact = () => {
    return (
        <div className="px-6 py-12 max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <SectionLabel>Get In Touch</SectionLabel>
                <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                    Let's Build Something{" "}
                    <span className="text-brand-red">Amazing</span>.
                </h1>
                <p className="text-[#A1A1AA] text-lg max-w-2xl leading-relaxed">
                    I'm always open to new opportunities, collaborations, and exciting conversations.
                    Whether you have a project idea or just want to connect — reach out.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left — Open to / Open for */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2 className="text-xl font-bold text-white mb-5">Open To</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {openTo.map(({ icon: Icon, title, desc }, i) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 card-hover group"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                                        <Icon size={17} className="text-brand-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white">{title}</h3>
                                        <p className="text-xs text-[#A1A1AA] mt-0.5">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-xl font-bold text-white mb-5">Connect</h2>
                        <div className="flex flex-col gap-3">
                            {socials.map(({ icon: Icon, href, label, handle }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 hover:bg-brand-red/[0.02] transition-all group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-brand-red/30 group-hover:text-brand-red transition-all text-[#A1A1AA]">
                                        <Icon size={17} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">{label}</p>
                                        <p className="text-xs text-[#A1A1AA]">{handle}</p>
                                    </div>
                                    <ArrowRight size={14} className="ml-auto text-[#A1A1AA] group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right — Primary CTA card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-col"
                >
                    <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10 flex flex-col gap-6 overflow-hidden h-full">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

                        <div className="relative">
                            <h2 className="text-2xl font-black text-white mb-2">Say Hello 👋</h2>
                            <p className="text-[#A1A1AA] leading-relaxed">
                                Drop me an email and I'll get back to you within 24 hours. Whether it's a
                                project pitch, internship opportunity, or just a conversation about AI and building — I'm in.
                            </p>
                        </div>

                        <div className="relative flex-1 flex flex-col gap-4">
                            {/* Email display */}
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                <Mail size={18} className="text-brand-red flex-shrink-0" />
                                <span className="text-sm text-white font-medium break-all">
                                    bhiseshrikrushn0101@gmail.com
                                </span>
                            </div>

                            {/* CTA buttons */}
                            <Button
                                href="mailto:bhiseshrikrushn0101@gmail.com"
                                variant="primary"
                                className="w-full justify-center gap-2 py-4"
                            >
                                <Mail size={17} />
                                Send Email
                            </Button>

                            {/* Availability status */}
                            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-sm text-green-400 font-medium">
                                    Currently available for new opportunities
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
