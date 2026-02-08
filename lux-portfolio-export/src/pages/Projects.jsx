import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((p) =>
        filter === "All" ? true : p.tags.includes(filter)
    );

    return (
        <div className="px-6 py-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Work & Projects</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A showcase of my projects, ranging from web applications to AI experiments.
                </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === tag
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col"
                        >
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="pt-4 border-t border-white/5">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                                    >
                                        View Case Study &rarr;
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
