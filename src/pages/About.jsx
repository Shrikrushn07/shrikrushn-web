import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button } from "../components/ui/Button";
import { ArrowRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const traits = [
    { icon: Code2, label: "Problem Solver", desc: "I break down complex challenges into elegant solutions." },
    { icon: Rocket, label: "Builder First", desc: "I ship fast, iterate often, and learn through building." },
    { icon: Lightbulb, label: "AI Enthusiast", desc: "Deeply passionate about AI and what it enables us to create." },
    { icon: Users, label: "Startup Explorer", desc: "Thinking in products, not just in code." },
];

export const About = () => {
    const [activeSkillTab, setActiveSkillTab] = useState("Frontend");
    const activeGroup = skills.find((s) => s.category === activeSkillTab) || skills[0];

    return (
        <div className="overflow-hidden">
            {/* ─── Hero ─── */}
            <section className="px-6 pt-12 pb-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    <SectionLabel>About Me</SectionLabel>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-black leading-tight">
                            I Build{" "}
                            <span className="text-brand-red">AI Products</span>
                            <br />
                            That Matter.
                        </h1>

                        <div className="space-y-4 text-[#A1A1AA] leading-relaxed text-base">
                            <p>
                                I'm <span className="text-white font-semibold">Shrikrushn Bhise</span>, a B.Tech
                                Computer Science student at Alliance University, Bangalore — passionate about turning
                                ambitious ideas into real, working products.
                            </p>
                            <p>
                                My journey started with curiosity about how the web works. It evolved into building
                                full-stack applications, integrating AI into products, and thinking deeply about what
                                makes software genuinely useful to people.
                            </p>
                            <p>
                                Right now, I'm building <span className="text-brand-red font-semibold">Guftgu</span> — an
                                AI-powered creative expression platform — while exploring the intersection of AI, product
                                design, and startup thinking.
                            </p>
                            <p>
                                I don't just write code. I think about problems, design solutions, and ship products.
                            </p>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <Button to="/projects" variant="primary" className="gap-2">
                                See My Work
                                <ArrowRight size={15} />
                            </Button>
                            <Button href="/resume.pdf" target="_blank" variant="outline">
                                Resume
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right — Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-80 md:w-80 md:h-96">
                            {/* Glow ring */}
                            <div className="absolute -inset-3 rounded-3xl bg-brand-red/10 blur-2xl" />
                            {/* Border frame */}
                            <div className="absolute -inset-px rounded-3xl border border-brand-red/20" />

                            {/* Image */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.06]">
                                <img
                                    src="/profile.jpg"
                                    alt="Shrikrushn Bhise"
                                    loading="eager"
                                    fetchPriority="high"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                            </div>

                            {/* Name badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl bg-[#0F0F0F] border border-white/[0.06] backdrop-blur-xl text-center whitespace-nowrap shadow-glass">
                                <p className="text-sm font-bold text-white">Shrikrushn Bhise</p>
                                <p className="text-xs text-[#A1A1AA]">CS Student · AI Builder</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Traits ─── */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <SectionLabel>What I Do</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
                    How I Think & Build
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {traits.map(({ icon: Icon, label, desc }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 card-hover group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                                <Icon size={18} className="text-brand-red" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white mb-1">{label}</h3>
                                <p className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Tech Arsenal ─── */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <SectionLabel>My Toolbox</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Technical Arsenal</h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {skills.map((group) => (
                        <button
                            key={group.category}
                            onClick={() => setActiveSkillTab(group.category)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                activeSkillTab === group.category
                                    ? "bg-brand-red text-white shadow-red-glow-sm"
                                    : "bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06] hover:text-white hover:bg-white/[0.07]"
                            }`}
                        >
                            {group.category}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeSkillTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                >
                    {activeGroup.items.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.04 }}
                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 hover:bg-brand-red/[0.03] transition-all duration-300 group cursor-default"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                                {skill.icon}
                            </span>
                            <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-white transition-colors text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ─── Currently Building ─── */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="rounded-2xl bg-white/[0.02] border border-brand-red/10 p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent pointer-events-none" />
                    <div className="relative">
                        <SectionLabel>Currently Building</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            <span className="text-white">Guft</span>
                            <span className="text-brand-red">gu</span>
                            {" "}— AI Creative Expression Platform
                        </h2>
                        <p className="text-[#A1A1AA] max-w-2xl mb-6">
                            An AI-powered poetry and creative expression platform where users can create, discover,
                            and share meaningful written content. Making creativity accessible through technology.
                        </p>
                        <Button to="/projects/guftgu" variant="primary" className="gap-2">
                            Learn More <ArrowRight size={15} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
