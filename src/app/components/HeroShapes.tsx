"use client";
import { motion } from "framer-motion";

/**
 * Shape 1: Nested Diamond / Geometric Square
 * Placed: Top Right (typically)
 */
export const GeometricDiamond = ({ className }: { className?: string }) => (
    <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ opacity: 0, rotate: -10 }}
        animate={{
            opacity: 0.6,
            rotate: [0, 5, 0],
            y: [0, -15, 0]
        }}
        transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
    >
        <rect x="50" y="0" width="70.71" height="70.71" transform="rotate(45 50 0)" stroke="#1A1A1A" strokeWidth="0.8" />
        <rect x="25" y="25" width="50" height="50" stroke="#1A1A1A" strokeWidth="0.8" />
        <rect x="50" y="25" width="35.35" height="35.35" transform="rotate(45 50 25)" stroke="#1A1A1A" strokeWidth="0.8" />
        <rect x="37.5" y="37.5" width="25" height="25" stroke="#1A1A1A" strokeWidth="0.8" />
    </motion.svg>
);

/**
 * Shape 2: Wireframe Sphere / Globe
 * Placed: Bottom Left (typically)
 */
export const GeometricSphere = ({ className }: { className?: string }) => (
    <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: 0.6,
            scale: 1,
            y: [0, 20, 0],
            rotate: [0, -10, 0]
        }}
        transition={{
            opacity: { duration: 1.5, delay: 0.2, ease: "easeOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
    >
        <circle cx="50" cy="50" r="48" stroke="#1A1A1A" strokeWidth="0.5" />
        <ellipse cx="50" cy="50" rx="48" ry="20" stroke="#1A1A1A" strokeWidth="0.5" />
        <ellipse cx="50" cy="50" rx="48" ry="38" stroke="#1A1A1A" strokeWidth="0.5" />
        <ellipse cx="50" cy="50" rx="20" ry="48" stroke="#1A1A1A" strokeWidth="0.5" />
        <ellipse cx="50" cy="50" rx="38" ry="48" stroke="#1A1A1A" strokeWidth="0.5" />
    </motion.svg>
);

/**
 * Shape 3: Technical Grid
 * Placed: Variable / Right Bottom
 */
export const GeometricGrid = ({ className }: { className?: string }) => (
    <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
    >
        {/* Vertical Lines */}
        <line x1="10" y1="0" x2="10" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="20" y1="0" x2="20" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="35" y1="0" x2="35" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="55" y1="0" x2="55" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="80" y1="0" x2="80" y2="100" stroke="#1A1A1A" strokeWidth="0.5" />

        {/* Horizontal Lines */}
        <line x1="0" y1="20" x2="100" y2="20" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="0" y1="40" x2="100" y2="40" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="0" y1="65" x2="100" y2="65" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="0" y1="85" x2="100" y2="85" stroke="#1A1A1A" strokeWidth="0.5" />
    </motion.svg>
);
