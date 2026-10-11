"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./security.module.css";
import { LockKeyhole, ArrowRight, ShieldCheck } from "lucide-react";
import {
    NoTrainingVisual,
    RetentionVisual,
    EncryptionVisual,
    InfraVisual,
    ProcessingVisual,
    ThirdPartyVisual
} from "./SecurityVisuals";

export default function SecurityPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <LockKeyhole size={14} />
                        <span>Enterprise Grade Security</span>
                    </div>
                    <h1 className={styles.title}>Your privacy is our<br />only priority.</h1>
                    <p className={styles.subtitle}>
                        We built Oriplex with a security-first architecture. Your data never trains our models, and everything is encrypted by default.
                    </p>
                </div>
            </section>

            {/* Bento Grid Features */}
            <div className={styles.bentoContainer}>
                <div className={styles.bentoGrid}>
                    {/* Feature 1: No Training */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer} style={{ background: "#111" }}>
                            {/* Inverting colors for the dark visual context if needed, or using the component as is */}
                            <NoTrainingVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>No Model Training</h3>
                            <p className={styles.cardText}>
                                Oriplex never uses your data for model training purposes. Your inputs and generated reports remain strictly yours and are isolated.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: 2-Week Retention */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <RetentionVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>2-Week Auto-Deletion</h3>
                            <p className={styles.cardText}>
                                All chat sessions and extracted files are stored for session management only and are automatically permanently deleted after two weeks.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: End-to-End Encryption */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <EncryptionVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>End-to-End Encryption</h3>
                            <p className={styles.cardText}>
                                Data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We utilize enterprise-grade protocols to lock down your financial data.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4: Infrastructure */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <InfraVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Trusted Infrastructure</h3>
                            <p className={styles.cardText}>
                                We leverage Google Vertex AI and heavy-compliance cloud providers. This ensures robust protection against threats and high availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Info Section - Enhanced Cards with Visuals */}
            <div className={styles.detailSection}>
                <div className={styles.detailGrid}>
                    {/* Data Processing Card */}
                    <div className={styles.detailCard}>
                        <div className={styles.visualContainer}>
                            <ProcessingVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Data Processing</h3>
                            <p className={styles.cardText}>
                                We store session data strictly to allow you to access your history and context. This data is isolated and never shared for marketing.
                            </p>
                        </div>
                    </div>

                    {/* Third-Party Processors Card */}
                    <div className={styles.detailCard}>
                        <div className={styles.visualContainer}>
                            <ThirdPartyVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Third-Party Processors</h3>
                            <p className={styles.cardText}>
                                We use enterprise APIs (like Google Vertex AI) with strict agreements prohibiting them from using customer data to train foundation models.
                            </p>
                        </div>
                    </div>

                    {/* Full Width Compliance Card */}
                    <div className={styles.detailCard} style={{ gridColumn: "1 / -1", flexDirection: "row", alignItems: "center" }}>
                        <div className={styles.visualContainer} style={{ width: "300px", height: "100%", borderBottom: "none", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
                            <ShieldCheck size={64} color="#1A1A1A" strokeWidth={1} opacity={0.8} />
                        </div>
                        <div className={styles.cardContent} style={{ justifyContent: "center" }}>
                            <h3 className={styles.cardTitle}>Compliance Questions?</h3>
                            <p className={styles.cardText} style={{ maxWidth: "600px", marginBottom: "24px" }}>
                                If you have specific compliance requirements or questions about our security practices, please contact our Data Protection Officer.
                            </p>
                            <a href="mailto:himanshu@oriplex.tech" className={styles.contactLink}>
                                Contact DPO <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
