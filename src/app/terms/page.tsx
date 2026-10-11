"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./terms.module.css";
import {
    AcceptanceVisual,
    ServiceVisual,
    AccountVisual,
    PrivacyVisual,
    IPVisual,
    LiabilityVisual,
    ContactVisual
} from "./Visuals";

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.contentContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.subtitle}>Last updated: January 2026</p>
                </header>

                <div className={styles.content}>
                    {/* Card 1: Acceptance */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <AcceptanceVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>1</span>
                                <h3 className={styles.sectionTitle}>Acceptance of Terms</h3>
                            </div>
                            <p className={styles.paragraph}>
                                By accessing and using Oriplex (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Description */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <ServiceVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>2</span>
                                <h3 className={styles.sectionTitle}>Description of Service</h3>
                            </div>
                            <p className={styles.paragraph}>
                                Oriplex provides advanced AI-driven financial research and data extraction tools, provided &quot;as is&quot; for professional use.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Accounts */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <AccountVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>3</span>
                                <h3 className={styles.sectionTitle}>User Accounts</h3>
                            </div>
                            <p className={styles.paragraph}>
                                Access is by invitation. You are responsible for maintaining credential confidentiality and must notify us of any unauthorized use.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Privacy */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <PrivacyVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>4</span>
                                <h3 className={styles.sectionTitle}>Data Usage</h3>
                            </div>
                            <p className={styles.paragraph}>
                                Your data is processed securely and never used for training. Refer to our <a href="/security" className={styles.link}>Security Policy</a> for details.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: IP */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <IPVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>5</span>
                                <h3 className={styles.sectionTitle}>Intellectual Property</h3>
                            </div>
                            <p className={styles.paragraph}>
                                The Service and its original content are owned by Oriplex and protected by international copyright and trade secret laws.
                            </p>
                        </div>
                    </div>

                    {/* Card 6: Liability */}
                    <div className={styles.card}>
                        <div className={styles.visualContainer}>
                            <LiabilityVisual />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>6</span>
                                <h3 className={styles.sectionTitle}>Liability</h3>
                            </div>
                            <p className={styles.paragraph}>
                                Oriplex shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of the Service.
                            </p>
                        </div>
                    </div>

                    {/* Card 7: Contact - Full Width */}
                    <div className={styles.card} style={{ gridColumn: "1 / -1", flexDirection: "row", alignItems: "center", padding: "0" }}>
                        <div className={styles.visualContainer} style={{ width: "300px", height: "100%", borderBottom: "none", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
                            <ContactVisual />
                        </div>
                        <div className={styles.cardContent} style={{ justifyContent: "center" }}>
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNumber}>7</span>
                                <h3 className={styles.sectionTitle}>Questions?</h3>
                            </div>
                            <p className={styles.paragraph}>
                                Contact us at <a href="mailto:himanshu@oriplex.tech" className={styles.link}>himanshu@oriplex.tech</a> for any questions about these Terms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
