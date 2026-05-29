import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    ArrowRight, Download, Mail, Github, Linkedin, Twitter,
    Rocket, Code2, Trophy, Clock, ExternalLink, Zap, ChevronRight
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { StatCard } from "../components/ui/StatCard";
import { ProjectCard } from "../components/ui/ProjectCard";
import { RedOrb } from "../components/ui/RedOrb";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

// ─── Animation variants ────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Stats data ────────────────────────────────────────────────────
const stats = [
    { value: "10+", label: "Projects Built", sublabel: "Across domains", icon: <Code2 size={20} /> },
    { value: "3+", label: "Startup Ideas", sublabel: "Exploring & Building", icon: <Rocket size={20} /> },
    { value: "1", label: "SIH Project", sublabel: "Smart India Hackathon", icon: <Trophy size={20} /> },
    { value: "1000+", label: "Hours Coding", sublabel: "Learning, Building, Shipping", icon: <Clock size={20} /> },
];

// ─── Journey timeline ────────────────────────────────────────────────
const timeline = [
    { year: "2023", label: "Started Learning", desc: "Web Development" },
    { year: "2024", label: "Built Full Stack", desc: "Projects & Apps" },
    { year: "2025", label: "Explored AI", desc: "SIH Project & Startups" },
    { year: "2025", label: "Built Guftgu", desc: "AI Creative Platform" },
    { year: "2026+", label: "Building AI", desc: "Products & Ventures", active: true },
];

// ─── Social links ────────────────────────────────────────────────────
const socials = [
    { icon: Github, href: "https://github.com/Shrikrushn07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shrikrushn-bhise-77a1b8328/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ShrikrushnB", label: "X / Twitter" },
    { icon: Mail, href: "mailto:bhiseshrikrushn0101@gmail.com", label: "Email" },
];

export const Home = () => {
    const featuredProject = projects.find((p) => p.id === "guftgu");
    const selectedProjects = projects.filter((p) => p.id !== "guftgu").slice(0, 3);

    const [activeSkillTab, setActiveSkillTab] = useState("Frontend");
    const activeSkillGroup = skills.find((s) => s.category === activeSkillTab) || skills[0];

    // Blog posts (static, matched to real blog files)
    const blogPreviews = [
        {
            slug: "ai-future-trends",
            title: "AI & Future Tech: What the Next Decade Will Look Like",
            date: "Feb 10, 2026",
            readTime: "5 min read",
            tag: "AI",
        },
        {
            slug: "builders-win",
            title: "Why Builders Will Win in the AI Era",
            date: "Jan 25, 2026",
            readTime: "3 min read",
            tag: "Startup",
        },
        {
            slug: "art-of-shipping",
            title: "The Art of Shipping: How I Learned to Build Faster",
            date: "Jan 5, 2026",
            readTime: "4 min read",
            tag: "Building",
        },
    ];

    return (
        <div className="overflow-hidden">

            {/* ═══════════════════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center px-6 pt-10 pb-20">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

                    {/* Left — Text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="flex flex-col gap-6 lg:pr-8"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} custom={0}>
                            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                                AI Builder · Full Stack Developer · Future Founder
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            custom={0.1}
                            className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
                        >
                            Building AI{" "}
                            <span className="text-brand-red glow-red-text">Products</span>
                            <br />
                            That Solve{" "}
                            <span className="relative">
                                Real Problems
                                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-brand-red/60 to-transparent" />
                            </span>
                            <span className="text-brand-red">.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            custom={0.2}
                            className="text-[#A1A1AA] text-lg leading-relaxed max-w-lg"
                        >
                            I'm Shrikrushn — a Computer Science student building intelligent, scalable,
                            and impactful products using full-stack technologies and AI.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={0.3}
                            className="flex flex-wrap gap-3"
                        >
                            <Button to="/projects" variant="primary" className="gap-2 px-6 py-3">
                                Explore Projects
                                <ArrowRight size={16} />
                            </Button>
                            <Button href="/resume.pdf" target="_blank" variant="outline" className="gap-2 px-6 py-3">
                                <Download size={16} />
                                View Resume
                            </Button>
                            <Button to="/contact" variant="ghost" className="gap-2 px-6 py-3">
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={fadeUp} custom={0.4} className="flex items-center gap-3 pt-2">
                            <span className="text-xs text-[#A1A1AA] font-medium">Connect with me</span>
                            <span className="h-px w-6 bg-white/10" />
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#A1A1AA] hover:text-white hover:border-brand-red/30 hover:bg-brand-red/5 transition-all duration-300"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Red Orb */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center h-[520px]"
                    >
                        <RedOrb />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-[#A1A1AA] tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-px h-8 bg-gradient-to-b from-brand-red/60 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                STATS SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="section-divider" />
            </div>

            {/* ═══════════════════════════════════════════════════════
                FEATURED PROJECT — GUFTGU
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Featured Project</SectionLabel>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left — Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6"
                        >
                            {/* Status + category */}
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                                    Currently Building
                                </span>
                                <span className="text-xs text-[#A1A1AA] font-medium tracking-wide uppercase">
                                    {featuredProject?.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                <span className="text-white">Guft</span>
                                <span className="text-brand-red">gu</span>
                            </h2>

                            <p className="text-[#A1A1AA] text-lg leading-relaxed">
                                {featuredProject?.description}
                            </p>

                            {/* Vision */}
                            {featuredProject?.vision && (
                                <blockquote className="pl-4 border-l-2 border-brand-red/40 italic text-[#A1A1AA] text-sm leading-relaxed">
                                    "{featuredProject.vision}"
                                </blockquote>
                            )}

                            {/* Tech stack */}
                            {featuredProject?.techStack && (
                                <div>
                                    <p className="text-xs text-[#A1A1AA] font-semibold uppercase tracking-widest mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.techStack.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs font-medium px-3 py-1 rounded-lg bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3 pt-2">
                                <Button to="/projects/guftgu" variant="primary" className="gap-2">
                                    View Case Study
                                    <ArrowRight size={15} />
                                </Button>
                                <Button
                                    href={featuredProject?.links?.github}
                                    target="_blank"
                                    variant="outline"
                                    className="gap-2"
                                >
                                    <Github size={15} />
                                    GitHub
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right — Visual mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl bg-[#0F0F0F] border border-white/[0.06] overflow-hidden aspect-[4/3] flex flex-col">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#141414]">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-brand-red/60" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/40" />
                                    </div>
                                    <div className="flex-1 mx-4 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-[#A1A1AA] font-mono">
                                        guftgu.app
                                    </div>
                                    <ExternalLink size={12} className="text-[#A1A1AA]" />
                                </div>

                                {/* App preview */}
                                <div className="flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent" />

                                    {/* Logo area */}
                                    <div className="relative text-center mb-8">
                                        <div className="text-4xl font-black mb-1">
                                            <span className="text-white">Guft</span>
                                            <span className="text-brand-red">gu</span>
                                        </div>
                                        <p className="text-xs text-[#A1A1AA]">AI Creative Expression Platform</p>
                                    </div>

                                    {/* Simulated UI cards */}
                                    <div className="w-full space-y-2 max-w-xs">
                                        {["Generate Poetry", "Explore Creations", "Share & Discover"].map((item, i) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-brand-red" />
                                                <span className="text-sm text-white/80 font-medium">{item}</span>
                                                <ChevronRight size={12} className="ml-auto text-[#A1A1AA]" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Status badge */}
                                    <div className="mt-6 inline-flex items-center gap-2 text-xs text-brand-red font-semibold">
                                        <Zap size={12} />
                                        In Active Development
                                    </div>
                                </div>
                            </div>

                            {/* Glow */}
                            <div className="absolute -inset-px rounded-2xl bg-brand-red/5 blur-xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SELECTED PROJECTS
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <SectionLabel>All Projects</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Things I've Built</h2>
                        </div>
                        <Link
                            to="/projects"
                            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors"
                        >
                            View all projects
                            <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedProjects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>

                    <div className="mt-8 flex sm:hidden justify-center">
                        <Button to="/projects" variant="outline" className="gap-2">
                            View all projects <ArrowRight size={15} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                JOURNEY TIMELINE
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>My Journey</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
                        From Curiosity To Building Products
                    </h2>

                    {/* Desktop horizontal timeline */}
                    <div className="hidden md:flex items-start gap-0 relative">
                        {/* Connecting line */}
                        <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex-1 flex flex-col items-center text-center gap-3 px-3"
                            >
                                {/* Node */}
                                <div className={`relative w-10 h-10 rounded-full flex items-center justify-center border transition-all z-10 ${
                                    item.active
                                        ? "bg-brand-red border-brand-red shadow-red-glow-sm"
                                        : "bg-[#0F0F0F] border-white/10"
                                }`}>
                                    {item.active ? (
                                        <Rocket size={16} className="text-white" />
                                    ) : (
                                        <span className="w-2 h-2 rounded-full bg-brand-red/60" />
                                    )}
                                    {item.active && (
                                        <span className="absolute inset-0 rounded-full bg-brand-red/20 animate-ping" />
                                    )}
                                </div>

                                <div>
                                    <div className={`text-sm font-black ${item.active ? "text-brand-red" : "text-white/60"}`}>
                                        {item.year}
                                    </div>
                                    <div className={`text-sm font-bold mt-0.5 ${item.active ? "text-white" : "text-white/80"}`}>
                                        {item.label}
                                    </div>
                                    <div className="text-xs text-[#A1A1AA] mt-0.5">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile vertical timeline */}
                    <div className="md:hidden flex flex-col gap-6 relative pl-6">
                        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-brand-red/40 via-brand-red/20 to-transparent" />
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="relative flex gap-4 items-start"
                            >
                                <div className={`absolute -left-6 top-0 w-4 h-4 rounded-full border flex items-center justify-center ${
                                    item.active ? "bg-brand-red border-brand-red" : "bg-[#0F0F0F] border-white/10"
                                }`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                </div>
                                <div>
                                    <span className={`text-xs font-black uppercase tracking-widest ${item.active ? "text-brand-red" : "text-[#A1A1AA]"}`}>
                                        {item.year}
                                    </span>
                                    <p className="text-sm font-bold text-white">{item.label}</p>
                                    <p className="text-xs text-[#A1A1AA]">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                TECH ARSENAL
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>My Toolbox</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Tech Arsenal</h2>

                    {/* Tab bar */}
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

                    {/* Skills grid */}
                    <motion.div
                        key={activeSkillTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                    >
                        {activeSkillGroup.items.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.04 }}
                                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 hover:bg-brand-red/[0.03] transition-all duration-300 group cursor-default"
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
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                LATEST WRITINGS
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <SectionLabel>Thoughts & Insights</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Latest Writings</h2>
                        </div>
                        <Link
                            to="/blog"
                            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors"
                        >
                            View all blog →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPreviews.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 card-hover"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                                        {post.tag}
                                    </span>
                                    <span className="text-xs text-[#A1A1AA]">{post.readTime}</span>
                                </div>

                                <h3 className="text-base font-bold text-white leading-snug group-hover:text-brand-red transition-colors duration-200">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>

                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
                                    <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="text-xs font-semibold text-brand-red flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Read <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                CTA SECTION
            ═══════════════════════════════════════════════════════ */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0F0F0F] p-12 md:p-16"
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <SectionLabel>Open To Work</SectionLabel>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                    Let's Build Something{" "}
                                    <span className="text-brand-red">Amazing</span> Together
                                </h2>
                                <p className="text-[#A1A1AA] text-lg mb-8">
                                    Open to internships, startup collaborations, hackathons, and exciting projects.
                                </p>

                                {/* Open to tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Internships", "Collaborations", "Hackathons", "Startup Discussions"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm font-medium px-3 py-1.5 rounded-xl bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Button href="mailto:bhiseshrikrushn0101@gmail.com" variant="primary" className="gap-2">
                                        <Mail size={16} />
                                        Say Hello
                                    </Button>
                                    <Button href="/resume.pdf" target="_blank" variant="outline" className="gap-2">
                                        <Download size={16} />
                                        Download Resume
                                    </Button>
                                </div>
                            </div>

                            {/* Right side decoration */}
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    {/* Animated paper plane / star motif */}
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="text-8xl select-none">🚀</div>
                                    </motion.div>
                                    <div className="absolute inset-0 bg-brand-red/10 blur-3xl rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};
