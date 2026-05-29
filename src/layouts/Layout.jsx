import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col relative overflow-x-hidden">
            <ScrollToTop />

            {/* Background — red glow blobs */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                {/* Base */}
                <div className="absolute inset-0 bg-[#050505]" />
                {/* Top red glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[700px] rounded-full bg-brand-red/10 blur-[140px] opacity-60" />
                {/* Bottom right accent */}
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-red/5 blur-[100px] opacity-40" />
                {/* Left subtle accent */}
                <div className="absolute top-1/2 -left-20 h-[300px] w-[300px] rounded-full bg-brand-red/5 blur-[80px] opacity-30" />
                {/* Noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "200px 200px",
                    }}
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>

            <Navbar />

            <main className="flex-grow pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
};
