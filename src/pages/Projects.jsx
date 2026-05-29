import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionLabel } from "../components/ui/SectionLabel";

const categories = ["All", "AI", "Web", "Healthcare"];

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((p) =>
        filter === "All" ? true : p.tags.includes(filter)
    );

    return (
        <div className="px-6 py-12 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <SectionLabel>All Projects</SectionLabel>
                <h1 className="text-4xl md:text-6xl font-black mb-4">Work & Projects</h1>
                <p className="text-[#A1A1AA] max-w-2xl text-lg leading-relaxed">
                    A showcase of products, experiments, and AI applications —
                    from startup ideas to hackathon projects.
                </p>
            </motion.div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            filter === cat
                                ? "bg-brand-red text-white shadow-red-glow-sm"
                                : "bg-white/[0.04] text-[#A1A1AA] border border-white/[0.06] hover:text-white hover:bg-white/[0.07]"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                        >
                            <ProjectCard project={project} index={i} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center text-[#A1A1AA] py-24">
                    No projects found for this filter.
                </div>
            )}
        </div>
    );
};
