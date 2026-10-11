"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './solutions.module.css';
import { RadarObject, StackObject, GridObject, SphereObject } from './objects';

// Expanded text content
const LONG_TEXT = {
    vc: "In the high-stakes world of Venture Capital, timing is everything. Oriplex separates the signal from the noise by deploying autonomous radar agents that scan millions of data points across the web. \n\nFrom obscure GitHub repositories to early-stage regulatory filings, we identify breakout signals before they hit the mainstream news. Our system doesn't just aggregate data; it synthesizes connection graphs between founders, technologies, and market trends, giving your firm a definitive information advantage.\n\nStop relying on trailing indicators. Start predicting the next unicorn with the only platform built for proactive thesis generation.",
    pe: "Private Equity diligence is traditionally a manual, error-prone marathon. Oriplex transforms this into a sprint. By ingesting thousands of pages of Data Room documents—financials, legal contracts, and operational reports—our Cognitive Layer reconstructs the target's entire business logic.\n\nWe instantly flag inconsistent EBITDA adjustments, map out customer concentration risks, and generate audit-ready LBO models. What used to take a team of associates three weeks can now be verified in under an hour, allowing your partners to bid with absolute conviction.",
    ib: "Investment Banking is defined by precision and speed. Our platform automates the most tedious aspects of deal execution. Whether it's spreading comparable company analysis or formatting pitch decks, Oriplex understands the nuance of financial presentation.\n\nWe extract tables from unstructured PDFs with 100% accuracy, maintaining complex row hierarchies and footnotes. Your bankers can finally focus on high-level advisory and strategy, knowing the underlying data is flawless and the formatting is pixel-perfect.",
    fo: "Family Offices manage complex, multi-asset portfolios that defy standard reporting tools. Oriplex unifies this chaos. We ingest heterogeneous reports from hedge funds, direct real estate investments, and private credit managers into a single, real-time dashboard.\n\nGet a consolidated view of liquidity, exposure, and performance without waiting for the end-of-month manual reconciliation. Our system proactively alerts you to mandate drifts and cash drag, ensuring your capital is always working efficiently aligned with your generational goals."
};

const cards = [
    {
        id: 0,
        title: "Venture Capital",
        shortDesc: "The most advanced screening technology reduces noise and expands your radius.",
        longDesc: LONG_TEXT.vc,
        type: 'component',
        component: <RadarObject />,
        contextImage: '/assets/blue_shape.png'
    },
    {
        id: 1,
        title: "Private Equity",
        shortDesc: "Our cognitive layer can significantly increase the speed of diligence.",
        longDesc: LONG_TEXT.pe,
        type: 'component',
        component: <StackObject />,
        contextImage: '/assets/modal_pe.png'
    },
    {
        id: 2,
        title: "Investment Banking",
        shortDesc: "Sophisticated measurements to users what services are using your network.",
        longDesc: LONG_TEXT.ib,
        type: 'component',
        component: <GridObject />,
        contextImage: '/assets/modal_ib.png'
    },
    {
        id: 3,
        title: "Family Office",
        shortDesc: "Unified asset intelligence across all your managers.",
        longDesc: LONG_TEXT.fo,
        type: 'component',
        component: <SphereObject />,
        contextImage: '/assets/modal_fo.png'
    }
];

export default function Solutions() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [originRect, setOriginRect] = useState<{ x: number, y: number, w: number, h: number, tx: number, ty: number } | null>(null);

    // Refs for cards to capture position
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleCardClick = (id: number) => {
        const el = cardRefs.current[id];
        if (el) {
            const rect = el.getBoundingClientRect();
            // Calculate Translation Delta
            // Target is Center of Screen (0,0 in flex center overlay)
            // Start is Card Center - Screen Center
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            const screenCenterX = window.innerWidth / 2;
            const screenCenterY = window.innerHeight / 2;

            const tx = cardCenterX - screenCenterX;
            const ty = cardCenterY - screenCenterY;

            setOriginRect({
                x: rect.left,
                y: rect.top,
                w: rect.width,
                h: rect.height,
                tx,
                ty
            });
        }
        setActiveId(id);
    };

    const handleClose = () => {
        setActiveId(null);
        setTimeout(() => setOriginRect(null), 300);
    };

    const activeCard = activeId !== null ? cards[activeId] : null;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = activeId !== null ? 'hidden' : '';
    }, [activeId]);

    return (
        <main className="min-h-screen bg-[#FFFFFF]">
            <Navbar />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.headline}>
                            How we manage your <br /> dilemma efficiently
                        </h1>
                        <p className={styles.subheadline}>
                            Analysts typically spend weeks on diligence. We proactively analyze, extract, and structure your data to ensure peak performance and seamless deal flow.
                        </p>
                    </div>

                    <div className={styles.row}>
                        {cards.map((card, idx) => (
                            <div
                                key={card.id}
                                ref={(el) => { cardRefs.current[idx] = el; }}
                                className={styles.card}
                                onClick={() => handleCardClick(card.id)}
                            >
                                <div className={styles.objectContainer}>
                                    {card.component}
                                </div>
                                <h2 className={styles.roleTitle}>{card.title}</h2>
                                <p className={styles.cardDesc}>{card.shortDesc}</p>
                                <span className={styles.readMore}>Read more</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL OVERLAY */}
            <div
                className={`${styles.overlay} ${activeId !== null ? styles.active : ''}`}
                onClick={handleClose}
            >
                {activeCard && originRect && (
                    <div
                        className={styles.expandedCard}
                        style={{
                            '--w': `${originRect.w}px`,
                            '--h': `${originRect.h}px`,
                            '--tx': `${originRect.tx}px`,
                            '--ty': `${originRect.ty}px`
                        } as React.CSSProperties}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* LEFT PANEL: Text + Layout Image */}
                        <div className={styles.expandedLeft}>
                            <h2 className={styles.expandedHeadline}>{activeCard.title}</h2>
                            <div className={styles.expandedBody}>
                                {activeCard.longDesc.split('\n\n').map((p, i) => (
                                    <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                                ))}
                            </div>

                            {/* Blue Image if available (VC) */}
                            {activeCard.contextImage && (
                                <img
                                    src={activeCard.contextImage}
                                    className={styles.modalBottomImage}
                                    alt="Visual Detail"
                                />
                            )}
                        </div>

                        {/* RIGHT PANEL: Object + Close Button */}
                        <div className={styles.expandedRight}>
                            <button className={styles.closeButton} onClick={handleClose}>×</button>

                            <div className={styles.expandedObjectContainer}>
                                {activeCard.component}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
