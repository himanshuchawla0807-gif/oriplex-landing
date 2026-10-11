"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AgentsSection.module.css";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";

const agents = [
    {
        id: "extraction",
        label: "Autonomous Extraction",
        title: "Delegate repetitive work.",
        description: "Extract data from 20+ complex files in just 10 minutes. High accuracy processing that eliminates manual entry errors.",
        image: "/assets/agent-data-extraction.png",
        stats: [
            { value: "20 Files", label: "Processed concurrently" },
            { value: "10 min", label: "Average turnaround" },
            { value: "High Accuracy", label: "Verification built-in" }
        ]
    },
    {
        id: "diligence",
        label: "Deep Intelligence",
        title: "Genuinely explainable answers.",
        description: "An intelligence layer above your data room. Process vast archives in a single batch and get citation-backed answers.",
        image: "/assets/agent-due-diligence.png",
        stats: [
            { value: "Enormous", label: "Data room capacity" },
            { value: "100%", label: "Citation matching" },
            { value: "1 click", label: "Source verification" }
        ]
    },
    {
        id: "research",
        label: "Market Awareness",
        title: "Deeper industry research.",
        description: "Automate macro/micro economic research. The agent actively scans industry reports and live databases.",
        image: "/assets/agent-research.png",
        stats: [
            { value: "Global", label: "Market coverage" },
            { value: "Live", label: "Data synthesis" },
            { value: "Multi-source", label: "Report integration" }
        ]
    }
];

// Apple-grade Smooth Motion
// Using a cubic-bezier string for Framer Motion to avoid TS errors
const SMOOTH_EASE = [0.16, 1, 0.3, 1] as any;

export default function AgentsSection() {
    return (
        <section className={styles.section}>

            {agents.map((agent, index) => (
                // OUTER WRAPPER: Handles the INITIAL FADE IN (Once)
                <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }} // Triggers once
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    style={{ width: "100%", maxWidth: "1200px" }} // Ensure wrapper matches card width
                >
                    {/* INNER CARD: Handles the SCROLL FOCUS SCALE (Continuous) */}
                    <motion.div
                        className={styles.agentCard}
                        initial={{ scale: 0.98 }} // Resting state
                        whileInView={{ scale: 1.02 }} // Focus state
                        viewport={{ margin: "-15% 0px -15% 0px" }} // Trigger when reasonably centered
                        transition={{
                            duration: 0.8,
                            ease: SMOOTH_EASE
                        }}
                    >
                        {/* TOP SECTION */}
                        <div className={styles.cardTop}>
                            <div className={styles.cardContentBox}>
                                <span className={styles.label}>{agent.label}</span>
                                <h2 className={styles.headline}>{agent.title}</h2>
                                <p className={styles.description}>{agent.description}</p>
                            </div>

                            <div className={styles.cardVisualBox}>
                                <Image
                                    src={agent.image}
                                    alt={agent.title}
                                    width={600}
                                    height={600}
                                    className={styles.agentImage}
                                    quality={90}
                                />
                            </div>
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className={styles.cardBottom}>
                            {agent.stats.map((stat, i) => (
                                <div key={i} className={styles.statBox}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            ))}

            {/* SECURITY SECTION - Same Logic */}
            <motion.div
                className={styles.securitySection}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", maxWidth: "1200px" }}
            >
                <motion.div
                    className={styles.agentCard}
                    initial={{ scale: 0.98 }}
                    whileInView={{ scale: 1.02 }} // Focus state
                    viewport={{ margin: "-15% 0px -15% 0px" }}
                    transition={{ duration: 0.8, ease: SMOOTH_EASE }}
                >
                    <div className={styles.cardTop} style={{ height: 'auto', padding: '4rem', alignItems: 'center' }}>

                        <div style={{ flex: 1 }}>
                            <div style={{
                                width: '64px', height: '64px',
                                background: 'rgba(0,0,0,0.05)',
                                borderRadius: '16px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                <ShieldCheck size={32} color="#1A1A1A" strokeWidth={1.5} />
                            </div>
                            <h2 className={styles.headline}>Privacy first. Always.</h2>
                            <p className={styles.description} style={{ maxWidth: '500px' }}>
                                Your data is yours. We operate with strict zero-retention policies for model training
                                and comprehensive encryption standards.
                            </p>
                        </div>

                        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.statBox}>
                                <Lock size={24} color="#666" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600, color: '#1A1A1A' }}>AES-256</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>End-to-end encryption</p>
                            </div>
                            <div className={styles.statBox}>
                                <FileCheck size={24} color="#666" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600, color: '#1A1A1A' }}>14 Days</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>Auto-deletion policy</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
}
