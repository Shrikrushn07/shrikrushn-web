import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../components/ui/Button";

export const Contact = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
            <div className="text-center max-w-2xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Let's Work Together
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg mb-10"
                >
                    I'm currently looking for new opportunities. Whether you have a question
                    or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    <Button href="mailto:bhiseshrikrushn0101@gmail.com" className="flex items-center gap-2">
                        <Mail size={20} />
                        Say Hello
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                    <h3 className="text-xl font-semibold mb-6">Connect on Socials</h3>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/Shrikrushn07" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shrikrushn-bhise-77a1b8328/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://x.com/ShrikrushnB" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
