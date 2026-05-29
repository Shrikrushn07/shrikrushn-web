import React from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { motion } from "framer-motion";

export const Resume = () => {
    return (
        <div className="px-6 py-12 max-w-6xl mx-auto h-screen flex flex-col">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8"
            >
                <div>
                    <SectionLabel>Career</SectionLabel>
                    <h1 className="text-3xl font-black text-white">Resume</h1>
                    <p className="text-[#A1A1AA] mt-1 text-sm">View or download my latest resume.</p>
                </div>

                <div className="flex gap-3">
                    <Button
                        href="/resume.pdf"
                        download="Shrikrushn_Bhise_Resume.pdf"
                        variant="outline"
                        className="flex items-center gap-2 text-sm"
                    >
                        <Download size={16} />
                        Download PDF
                    </Button>
                    <Button
                        href="/resume.pdf"
                        target="_blank"
                        variant="primary"
                        className="flex items-center gap-2 text-sm"
                    >
                        <ExternalLink size={16} />
                        Open in New Tab
                    </Button>
                </div>
            </motion.div>

            {/* PDF viewer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex-grow bg-white/[0.03] rounded-2xl border border-white/[0.06] overflow-hidden relative"
            >
                <object
                    data="/resume.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                >
                    <div className="flex items-center justify-center h-full flex-col gap-6 text-center p-8">
                        <FileText size={48} className="text-brand-red opacity-60" />
                        <div>
                            <p className="text-white font-bold mb-2">PDF viewer not supported</p>
                            <p className="text-[#A1A1AA] text-sm mb-6">
                                Your browser doesn't support PDF viewing.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button href="/resume.pdf" download="Shrikrushn_Bhise_Resume.pdf" variant="primary" className="gap-2">
                                <Download size={16} />
                                Download Resume
                            </Button>
                            <Button href="/resume.pdf" target="_blank" variant="outline" className="gap-2">
                                <ExternalLink size={16} />
                                Open in New Tab
                            </Button>
                        </div>
                    </div>
                </object>
            </motion.div>
        </div>
    );
};
