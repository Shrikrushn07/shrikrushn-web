import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export const About = () => {
    return (
        <div className="px-6 py-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 text-gray-300 leading-relaxed text-lg"
                >
                    <p>
                        I'm a B.Tech Computer Science student at Alliance University, Bangalore,
                        passionate about building software that solves real-world problems.
                    </p>
                    <p>
                        My journey in tech started with a curiosity for how things work on the web.
                        Over the years, I've honed my skills in full-stack development, cloud computing,
                        and more recently, integrating AI into web applications.
                    </p>
                    <p>
                        When I'm not coding, I'm likely participating in hackathons, exploring new
                        tech stacks, or contributing to open-source communities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] md:aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden relative group">
                        <img
                            src="/profile.jpg"
                            alt="Shrikrushn Bhise"
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                </motion.div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-10 text-center">Technical Arsenal</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-blue-200 mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
