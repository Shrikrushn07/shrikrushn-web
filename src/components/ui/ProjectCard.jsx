import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const statusConfig = {
    red: {
        bg: "bg-brand-red/10",
        text: "text-brand-red",
        border: "border-brand-red/20",
        dot: "bg-brand-red",
    },
    yellow: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        dot: "bg-yellow-400",
    },
    green: {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/20",
        dot: "bg-green-400",
    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        dot: "bg-blue-400",
    },
};

/**
 * ProjectCard — Premium project showcase card
 */
export const ProjectCard = ({ project, index = 0 }) => {
    const sc = statusConfig[project.statusColor] || statusConfig.green;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden card-hover"
        >
            {/* Thumbnail area */}
            <div className="relative h-44 bg-gradient-to-br from-[#0F0F0F] to-[#1a0a0a] overflow-hidden flex items-center justify-center">
                {/* Gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 text-[#A1A1AA] border border-white/[0.08] backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${sc.bg} ${sc.text} ${sc.border}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${sc.dot} ${project.statusColor === 'red' ? 'animate-pulse' : ''}`} />
                        {project.status}
                    </span>
                </div>

                {/* Project initial monogram */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                    <div className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500 select-none tracking-tighter">
                        {project.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                </h3>
                {project.subtitle && (
                    <p className="text-xs text-[#A1A1AA] font-medium mb-3">{project.subtitle}</p>
                )}

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack */}
                {project.techStack && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06]">
                                +{project.techStack.length - 4}
                            </span>
                        )}
                    </div>
                )}

                {/* CTA */}
                <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors duration-200 group/link"
                >
                    View Case Study
                    <ArrowUpRight
                        size={15}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    />
                </Link>
            </div>
        </motion.div>
    );
};
