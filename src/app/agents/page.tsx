"use client";

import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./agents.module.css";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const assets = {
    heroBg: "/assets/agents/hero-bg.png",
    extraction: "/assets/agents/extraction.png",
    dueDiligence: "/assets/agents/duediligence.png",
    research: "/assets/agents/research.png"
};

// Expanded Data Structure for Feature Accordion
const agents = [
    {
        id: "extraction",
        title: "Data Extraction Agent",
        description: "Transform messy documents into structured data with 96% accuracy. We leverage advanced OCR and pattern recognition to turn chaos into order.",
        imagePath: assets.extraction,
        features: [
            {
                title: "96% Accuracy with citation backing",
                desc: "Our advanced OCR verifies every data point against the source document, providing clickable citations for instant validation."
            },
            {
                title: "Summary analysis & trend detection",
                desc: "Automatically identify key patterns, outliers, and emerging trends across thousands of processed pages."
            },
            {
                title: "Instant web-connected verification",
                desc: "Cross-reference extracted data with live web sources to ensure information is up-to-date and accurate."
            }
        ]
    },
    {
        id: "duediligence",
        title: "Due Diligence Agent",
        description: "Your intelligence layer for large data rooms. Securely analyze massive datasets and ask complex questions with confidence.",
        imagePath: assets.dueDiligence,
        features: [
            {
                title: "Upload and chat with large data rooms",
                desc: "Process gigabytes of legal and financial documents in seconds. Ask questions across the entire corpus instantly."
            },
            {
                title: "Precise citations for every claim",
                desc: "Eliminate hallucinations. Every answer includes direct links to the source paragraphs for total trust."
            },
            {
                title: "Enterprise-grade security scanning",
                desc: "Bank-level encryption and privacy protocols ensure your sensitive deal data stays completely secure."
            }
        ]
    },
    {
        id: "research",
        title: "Research Agent",
        description: "A dedicated financial and macro analyst. Spot global trends and anomalies before the market does.",
        imagePath: assets.research,
        features: [
            {
                title: "Deep macro-economic trend analysis",
                desc: "Synthesize global market reports, news, and economic data into actionable investment insights."
            },
            {
                title: "Financial pattern recognition",
                desc: "Detect subtle shifts in balance sheets, earnings calls, and market indicators that others miss."
            },
            {
                title: "Global market anomaly detection",
                desc: "Stay ahead of market-moving events with real-time outlier detection and predictive signaling."
            }
        ]
    }
];

// Feature Item Component
const FeatureItem = ({
    feature,
    isActive
}: {
    feature: { title: string, desc: string },
    isActive: boolean
}) => {
    return (
        <div className={`${styles.featureItem} ${isActive ? styles.featureItemActive : ''}`}>
            <div className={styles.featureHeader}>
                <div className={`${styles.featureDot} ${isActive ? styles.featureDotActive : ''}`} />
                <span className={styles.featureTitleText}>{feature.title}</span>
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.featureDescWrapper}
                    >
                        <p className={styles.featureDescText}>{feature.desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ParallaxAgentContent = ({
    agent,
    isActive,
    scrollProgress
}: {
    agent: typeof agents[0],
    isActive: boolean;
    scrollProgress: number;
}) => {
    // Determine active feature based on scroll progress of this section (0-1)
    // 0.0 - 0.33 -> Feature 0
    // 0.33 - 0.66 -> Feature 1
    // 0.66 - 1.0 -> Feature 2

    // However, we want the first feature to stay active for a bit.
    // Let's use simple logic.
    const activeFeatureIndex = Math.min(Math.floor(scrollProgress * 3), 2);

    return (
        <div
            style={{
                display: isActive ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Strict Top Alignment
                height: '100%',
                width: '100%',
                position: 'relative' // For motion isolation
            }}
        >
            {/* 
                 Vertical Parallax Only.
                 "Top to bottom straight line" (Move DOWN slightly as we scroll)
             */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={styles.parallaxTextContainer}
            >
                <h2 className={styles.agentTitle}>
                    {agent.title}
                </h2>

                <p className={styles.agentDescription}>
                    {agent.description}
                </p>

                <div className={styles.featureList}>
                    {agent.features.map((f, i) => (
                        <FeatureItem
                            key={i}
                            feature={f}
                            isActive={i === activeFeatureIndex}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default function AgentsPage() {
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTrackRef,
        offset: ["start start", "end end"]
    });

    const [activeAgent, setActiveAgent] = useState(0);
    const [segmentProgress, setSegmentProgress] = useState(0);
    const [localRatio, setLocalRatio] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let index = 0;
        let localP = 0;

        if (latest < 0.33) {
            index = 0;
            localP = latest / 0.33;
        } else if (latest < 0.66) {
            index = 1;
            localP = (latest - 0.33) / 0.33;
        } else {
            index = 2;
            localP = (latest - 0.66) / 0.34;
        }

        localP = Math.min(Math.max(localP, 0), 1);

        setActiveAgent(index);
        setSegmentProgress(localP * 100);
        setLocalRatio(localP);
    });

    return (
        <main className={styles.main}>
            {/* FORCE VISIBLE NAVBAR */}
            <div style={{ position: 'relative', zIndex: 100 }}>
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className={styles.heroSection} style={{ minHeight: '100vh', display: 'flex' }}>
                <img
                    src={assets.heroBg}
                    alt="Hero Background"
                    className={styles.heroBackground}
                />
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1 className={styles.heroTitle}>
                        Intelligent Agents<br />
                        <span className={styles.italicAccent}>working for you.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        One suite to extract, analyze, and research. <br />
                        Quietly intelligent, incredibly powerful.
                    </p>
                </motion.div>
            </section>

            {/* Locked Scroll Section */}
            <div className={styles.lockScrollTrack} ref={scrollTrackRef}>
                <div className={styles.lockedViewport}>

                    <div className={styles.stepperContainer}>
                        {agents.map((agent, index) => {
                            const isActive = index === activeAgent;
                            const number = `0${index + 1}`;
                            return (
                                <div
                                    key={agent.id}
                                    className={`${styles.stepPill} ${isActive ? styles.stepPillActive : ''}`}
                                >
                                    <div className={styles.stepIconWrapper}>
                                        <div className={styles.iconCircle}>{number}</div>
                                    </div>
                                    <span className={styles.stepLabel}>{agent.title}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.textContentWrapper}>
                            <div className={styles.separatorLineTop}>
                                <div className={styles.gradientProgress} style={{ width: `${segmentProgress}%` }} />
                            </div>

                            {agents.map((agent, index) => (
                                <ParallaxAgentContent
                                    key={agent.id}
                                    agent={agent}
                                    isActive={activeAgent === index}
                                    scrollProgress={localRatio}
                                />
                            ))}

                            <div className={styles.separatorLineBottom}>
                                <div className={styles.gradientProgress} style={{ width: `${segmentProgress}%` }} />
                            </div>
                        </div>

                        <div className={styles.visualContainer}>
                            {agents.map((agent, index) => (
                                <motion.img
                                    key={agent.id}
                                    src={agent.imagePath}
                                    alt={agent.title}
                                    className={styles.visualImage}
                                    style={{
                                        display: activeAgent === index ? 'block' : 'none',
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
