import React from "react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/Button";

export const Resume = () => {
    return (
        <div className="px-6 py-12 max-w-6xl mx-auto h-screen flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Resume</h1>
                    <p className="text-gray-400 mt-2">View or download my latest resume.</p>
                </div>

                <div className="flex gap-3">
                    <Button
                        href="/resume.pdf"
                        download="Shrikrushn_Bhise_Resume.pdf"
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download PDF
                    </Button>
                    <Button
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center gap-2"
                    >
                        <ExternalLink size={18} />
                        Open in New Tab
                    </Button>
                </div>
            </div>

            <div className="flex-grow bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
                <object
                    data="/resume.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                >
                    <div className="flex items-center justify-center h-full flex-col gap-4 text-center p-8">
                        <p className="text-gray-300">
                            Your browser doesn't support PDF viewing.
                        </p>
                        <Button href="/resume.pdf" target="_blank">
                            Download Resume
                        </Button>
                    </div>
                </object>
            </div>
        </div>
    );
};
