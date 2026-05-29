import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ArrowLeft, Github, ExternalLink, Zap } from "lucide-react";

const statusColors = {
    red: "bg-brand-red/10 text-brand-red border-brand-red/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Button to="/projects" variant="outline">← Back to Projects</Button>
            </div>
        );
    }

    const sc = statusColors[project.statusColor] || statusColors.green;

    return (
        <article className="px-6 py-12 max-w-5xl mx-auto">
            {/* Back link */}
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white mb-10 transition-colors text-sm font-medium group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="mb-10">
                    {/* Category + status */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        {project.category && (
                            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]">
                                {project.category}
                            </span>
                        )}
                        {project.status && (
                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1 rounded-full border ${sc}`}>
                                <Zap size={10} />
                                {project.status}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-3 leading-tight">
                        {project.title}
                    </h1>

                    {project.subtitle && (
                        <p className="text-[#A1A1AA] text-lg mb-4">{project.subtitle}</p>
                    )}

                    <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                    <Button href={project.links.live} target="_blank" variant="primary" className="gap-2">
                        <ExternalLink size={16} />
                        Visit Live Site
                    </Button>
                    <Button href={project.links.github} target="_blank" variant="outline" className="gap-2">
                        <Github size={16} />
                        Source Code
                    </Button>
                </div>

                {/* Tech stack */}
                {project.techStack && (
                    <div className="mb-10">
                        <SectionLabel>Tech Stack</SectionLabel>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main content card */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-12 space-y-8">
                    {/* Overview */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-[#A1A1AA] leading-relaxed whitespace-pre-line text-base">
                            {project.longDescription}
                        </p>
                    </div>

                    {/* Vision */}
                    {project.vision && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
                            <blockquote className="pl-5 border-l-2 border-brand-red/40 text-[#A1A1AA] italic text-base leading-relaxed">
                                "{project.vision}"
                            </blockquote>
                        </div>
                    )}

                    {/* Impact */}
                    {project.impact && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3">Impact & Results</h2>
                            <div className="flex items-center gap-2 text-brand-red font-semibold text-base">
                                <Zap size={16} />
                                {project.impact}
                            </div>
                        </div>
                    )}
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </article>
    );
};
