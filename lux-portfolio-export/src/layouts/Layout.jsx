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
        <div className="min-h-screen bg-[#07080b] text-white font-sans selection:bg-blue-500/30 selection:text-white flex flex-col">
            <ScrollToTop />

            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-[#090a10] to-[#06070a]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px] opacity-40" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] bg-indigo-500/5 blur-[120px] opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            <Navbar />

            <main className="flex-grow pt-24">
                {children}
            </main>

            <Footer />
        </div>
    );
};
