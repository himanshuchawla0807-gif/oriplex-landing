"use client";
import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';

import { GeometricDiamond, GeometricSphere, GeometricGrid } from './HeroShapes';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        // Set initial frame to 6 seconds
        if (videoRef.current) {
            videoRef.current.currentTime = 6.0;
        }
    }, []);

    const handlePlay = () => {
        // On first play interaction, jump to 0
        if (videoRef.current && !hasPlayedRef.current) {
            // Only jump if we are near the 6s mark (start point)
            if (Math.abs(videoRef.current.currentTime - 6.0) < 1.0) {
                videoRef.current.currentTime = 0;
            }
            hasPlayedRef.current = true;
        }
    };

    return (
        <section className={styles.section}>
            {/* Background Shapes */}
            <GeometricDiamond className={styles.shapeDiamond} />
            <GeometricSphere className={styles.shapeSphere} />

            {/* Text Section */}
            <div className={styles.textSection}>
                <h1 className={styles.headline}>
                    AI Agents for Investment <br className={styles.desktopBreak} /> Analysts
                </h1>
                <p className={styles.subheadline}>
                    An intelligence layer on top of messy PDFs. <br className={styles.desktopBreak} /> Save hours weekly.
                </p>

                <div className={styles.ctaContainer}>
                    <a
                        href="https://cal.com/himanshu-3f7f3a/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryButton}
                        style={{ textDecoration: 'none', fontFamily: 'var(--font-inter)' }}
                    >
                        Book a demo
                    </a>
                </div>
            </div>

            {/* Video Section */}
            <div className={styles.visualSection}>
                {/* Decorative Background Image */}
                <img
                    src="/assets/hero-new.jpg"
                    alt=""
                    className={styles.heroBgImage}
                />

                <div className={styles.videoContainer}>
                    {/* Main Video with Native Controls */}
                    <video
                        ref={videoRef}
                        src="/assets/demo-web.mp4"
                        preload="metadata"
                        controls
                        playsInline
                        onPlay={handlePlay}
                        className={styles.backgroundImage}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', cursor: 'pointer', backgroundColor: '#000' }}
                    />
                </div>
            </div>
        </section>
    );
}
