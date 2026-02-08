import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { ArrowRight, Github } from "lucide-react";
import { projects } from "../data/projects";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const Home = () => {
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <div className="overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-40">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
                                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                                Available for hire
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8"
                        >
                            Building digital <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400">
                                solutions for the future
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            I'm Shrikrushn, a developer specializing in modern web applications
                            and AI-driven solutions. I craft robust systems with a focus on
                            performance and user experience.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button to="/projects" variant="primary">
                                View Projects
                            </Button>
                            <Button href="https://github.com/Shrikrushn07" target="_blank" variant="outline">
                                <Github size={20} className="mr-2" />
                                GitHub Profile
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="px-6 py-24 bg-gradient-to-b from-transparent to-black/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">Featured Work</h2>
                        <Link
                            to="/projects"
                            className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            View all
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                            >
                                <div className="p-8 h-full flex flex-col">
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Button to={`/projects/${project.id}`} variant="outline" className="w-full">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
