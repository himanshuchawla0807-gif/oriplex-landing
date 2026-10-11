"use client";
import styles from "./Widgets.module.css";
import { FileText, Search, Activity } from "lucide-react";

export default function Widgets() {
    return (
        <section className={styles.section}>
            {/* Extraction */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <FileText size={18} className={styles.iconBlue} />
                    <h3 className={styles.cardTitle}>Data Extraction</h3>
                </div>
                <p className={styles.cardDesc}>Transforms messy PDFs into structured Excel models with citations.</p>

                <div className={styles.widgetFrame} style={{ padding: '1rem' }}>
                    {/* Simulated Table */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={styles.tableRow} style={{ animationDelay: `${i * 0.5}s` }}>
                            <div className={styles.tableCell} style={{ width: '30%' }} />
                            <div className={styles.tableCell} style={{ width: '20%' }} />
                            <div className={styles.tableCell} style={{ width: '40%' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Analysis / Due Diligence */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <Search size={18} className={styles.iconPurple} />
                    <h3 className={styles.cardTitle}>Due Diligence</h3>
                </div>
                <p className={styles.cardDesc}>Q&A with your entire data room using advanced reasoning agents.</p>

                <div className={styles.widgetFrame} style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                    <div className={`${styles.chatBubble} ${styles.user}`} style={{ animationDelay: '0s' }}>
                        Risks in the Q3 report?
                    </div>
                    <div className={`${styles.chatBubble} ${styles.agent}`} style={{ animationDelay: '1.5s' }}>
                        Found 3 discrepancies in revenue recog...
                    </div>
                    <div className={`${styles.chatBubble} ${styles.user}`} style={{ animationDelay: '3s' }}>
                        Verify with page 42.
                    </div>
                </div>
            </div>

            {/* Research */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <Activity size={18} className={styles.iconGreen} />
                    <h3 className={styles.cardTitle}>Research</h3>
                </div>
                <p className={styles.cardDesc}>Macro trends and competitor analysis synthesized for board meetings.</p>

                <div className={styles.widgetFrame}>
                    {/* Placeholder for Graph Animation */}
                    <svg width="100%" height="100%" viewBox="0 0 300 150">
                        <path
                            d="M 0 100 Q 50 120 100 80 T 200 60 T 300 40"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="3"
                            strokeDasharray="400"
                            strokeDashoffset="400"
                        >
                            <animate attributeName="stroke-dashoffset" from="400" to="0" dur="3s" repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
