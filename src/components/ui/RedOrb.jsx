import React, { useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * RedOrb — Enhanced AI orb with orbiting tech icons + mouse parallax
 *
 * Design principles:
 * - Only GPU-accelerated transforms (rotate, translate, scale, opacity)
 * - Slow, elegant orbits (20–34s per revolution)
 * - Glass-morphic icon badges — dark, minimal, not gaming-ish
 * - Subtle connection lines (near-invisible gradients)
 * - Mouse parallax via spring physics (±10px, very soft)
 */

// ─── Tech icon orbit config ────────────────────────────────────────────────
// orbitR: distance from center in px | dur: seconds per revolution | startDeg: initial angle
const TECH_ICONS = [
    {
        name: "React",
        symbol: "⚛",
        color: "#61DAFB",
        orbitR: 140,
        dur: 24,
        startDeg: 10,
        clockwise: true,
    },
    {
        name: "Node.js",
        symbol: "N",
        color: "#6DA55F",
        orbitR: 164,
        dur: 32,
        startDeg: 78,
        clockwise: false,
    },
    {
        name: "Python",
        symbol: "Py",
        color: "#4B8BBE",
        orbitR: 126,
        dur: 28,
        startDeg: 152,
        clockwise: true,
    },
    {
        name: "PostgreSQL",
        symbol: "PG",
        color: "#5294C8",
        orbitR: 156,
        dur: 36,
        startDeg: 228,
        clockwise: false,
    },
    {
        name: "OpenAI",
        symbol: "✦",
        color: "#ffffff",
        orbitR: 144,
        dur: 20,
        startDeg: 298,
        clockwise: true,
    },
];

// ─── Orbit animation helper ────────────────────────────────────────────────
// Using repeatType:"loop" with initial+animate so Framer Motion resets
// cleanly on each loop (seamless because 360° ≡ 0° visually).
const orbitTransition = (dur) => ({
    duration: dur,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
});

export const RedOrb = () => {
    const containerRef = useRef(null);

    // ── Mouse parallax springs (very slow & soft) ──────────────────────────
    const springCfg = { stiffness: 28, damping: 22, mass: 1.6 };
    const mouseX = useSpring(0, springCfg);
    const mouseY = useSpring(0, springCfg);

    const onMouseMove = useCallback(
        (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
            const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
            mouseX.set(nx * 10); // max ±10 px
            mouseY.set(ny * 10);
        },
        [mouseX, mouseY]
    );

    const onMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-full min-h-[420px] select-none"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {/* ── Layered ambient glow ─────────────────────────────────────── */}
            {/* Outer diffuse bloom */}
            <div className="pointer-events-none absolute w-[340px] h-[340px] rounded-full bg-brand-red/6 blur-[100px]" />
            {/* Mid glow */}
            <div className="pointer-events-none absolute w-56 h-56 rounded-full bg-brand-red/10 blur-[60px]" />
            {/* Inner warm halo */}
            <div className="pointer-events-none absolute w-32 h-32 rounded-full bg-brand-red/20 blur-[30px]" />

            {/* ── Parallax wrapper — everything inside shifts with mouse ── */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="relative flex items-center justify-center w-full h-full"
            >

                {/* ── Orbiting tech icons ──────────────────────────────────── */}
                {TECH_ICONS.map((icon) => {
                    const dir = icon.clockwise ? 1 : -1;
                    const endDeg = icon.startDeg + dir * 360;

                    return (
                        <motion.div
                            key={icon.name}
                            className="absolute inset-0"
                            initial={{ rotate: icon.startDeg }}
                            animate={{ rotate: endDeg }}
                            transition={orbitTransition(icon.dur)}
                        >
                            {/* ── Connection line: center → icon ────────────────── */}
                            {/* Sits at 50%/50% of the container, extends right by orbitR px.
                                The rotating parent sweeps it around the center. */}
                            <div
                                className="absolute"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    width: `${icon.orbitR}px`,
                                    height: "1px",
                                    marginTop: "-0.5px",
                                    background: `linear-gradient(to right, transparent 0%, ${icon.color}18 60%, ${icon.color}30 100%)`,
                                }}
                            />

                            {/* ── Dot at the start of the line (center node) ──── */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    width: "3px",
                                    height: "3px",
                                    marginTop: "-1.5px",
                                    marginLeft: "-1.5px",
                                    background: icon.color,
                                    opacity: 0.25,
                                }}
                            />

                            {/* ── Icon badge positioned at orbit edge ────────── */}
                            <div
                                className="absolute"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    // Center the badge, then push it to orbit radius
                                    transform: `translateX(calc(-50% + ${icon.orbitR}px)) translateY(-50%)`,
                                }}
                            >
                                {/* Counter-rotate to keep badge upright */}
                                <motion.div
                                    initial={{ rotate: -icon.startDeg }}
                                    animate={{ rotate: -endDeg }}
                                    transition={orbitTransition(icon.dur)}
                                >
                                    {/* Badge */}
                                    <div
                                        className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-[10px] whitespace-nowrap"
                                        style={{
                                            background: "rgba(8, 8, 8, 0.86)",
                                            border: `1px solid ${icon.color}28`,
                                            backdropFilter: "blur(12px)",
                                            WebkitBackdropFilter: "blur(12px)",
                                            boxShadow: `0 2px 20px rgba(0,0,0,0.5), 0 0 10px ${icon.color}0C`,
                                        }}
                                    >
                                        <span
                                            className="text-sm leading-none font-bold"
                                            style={{ color: icon.color }}
                                        >
                                            {icon.symbol}
                                        </span>
                                        <span className="text-[10px] font-medium tracking-wide text-white/50">
                                            {icon.name}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* ── Single subtle guide ring (orbit suggestion) ─────────── */}
                {/* Very faint circle at ~mid orbit radius to hint at the orbital plane */}
                <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: "290px",
                        height: "290px",
                        border: "1px solid rgba(229,9,20,0.06)",
                    }}
                />

                {/* ── Core orb ─────────────────────────────────────────────── */}
                <motion.div
                    className="relative z-10 flex-shrink-0"
                    style={{ width: "96px", height: "96px" }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Main gradient sphere */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle at 35% 30%, #ff3040, #E50914 45%, #7a0008 80%, #1a0004)",
                            boxShadow:
                                "0 0 50px rgba(229,9,20,0.55), 0 0 100px rgba(229,9,20,0.18), inset 0 0 28px rgba(0,0,0,0.7)",
                        }}
                    />

                    {/* Specular highlight */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            top: "10px",
                            left: "14px",
                            width: "26px",
                            height: "20px",
                            background: "rgba(255,255,255,0.22)",
                            filter: "blur(7px)",
                        }}
                    />

                    {/* "AI" label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-black text-sm tracking-[0.18em] opacity-90">
                            AI
                        </span>
                    </div>
                </motion.div>

                {/* ── Ground shadow glow ───────────────────────────────────── */}
                <div
                    className="pointer-events-none absolute"
                    style={{
                        bottom: "48px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "120px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "rgba(229,9,20,0.18)",
                        filter: "blur(20px)",
                    }}
                />
            </motion.div>
        </div>
    );
};
