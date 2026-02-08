import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                <Button to="/projects" variant="outline">
                    Back to Projects
                </Button>
            </div>
        );
    }

    return (
        <article className="px-6 py-20 max-w-4xl mx-auto">
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors"
            >
                <ArrowLeft size={20} />
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {project.title}
                </h1>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex gap-4 mb-16">
                    <Button href={project.links.live} target="_blank" className="flex items-center gap-2">
                        <ExternalLink size={20} />
                        Visit Live Site
                    </Button>
                    <Button href={project.links.github} variant="outline" target="_blank" className="flex items-center gap-2">
                        <Github size={20} />
                        Source Code
                    </Button>
                </div>

                {/* Content Section */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Impact & Results</h3>
                        <p className="text-green-400 font-semibold text-lg">
                            {project.impact}
                        </p>
                    </div>
                </div>
            </motion.div>
        </article>
    );
};
