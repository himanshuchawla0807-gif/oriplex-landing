import React from 'react';
import styles from './objects.module.css';

export const RadarObject = () => (
    <div className={styles.container}>
        <div className={styles.radarRing}></div>
        <div className={styles.radarRing}></div>
        <div className={styles.radarRing}></div>
        <div className={styles.radarScan}></div>
    </div>
);

export const StackObject = () => (
    <div className={styles.container}>
        <div className={styles.stackLayer}></div>
        <div className={styles.stackLayer}></div>
        <div className={styles.stackLayer}></div>
    </div>
);

export const GridObject = () => (
    <div className={styles.container}>
        <svg width="180" height="180" viewBox="0 0 200 200" className={styles.gridSvg}>
            {/* Horizontal Lines */}
            <line x1="20" y1="50" x2="180" y2="50" className={styles.gridLine} />
            <line x1="20" y1="100" x2="180" y2="100" className={styles.gridLine} />
            <line x1="20" y1="150" x2="180" y2="150" className={styles.gridLine} />

            {/* Vertical Lines */}
            <line x1="50" y1="20" x2="50" y2="180" className={styles.gridLine} />
            <line x1="100" y1="20" x2="100" y2="180" className={styles.gridLine} />
            <line x1="150" y1="20" x2="150" y2="180" className={styles.gridLine} />

            {/* Dots */}
            <circle cx="50" cy="50" r="3" className={styles.gridDot} />
            <circle cx="100" cy="50" r="3" className={styles.gridDot} />
            <circle cx="150" cy="50" r="3" className={styles.gridDot} />
            <circle cx="50" cy="100" r="3" className={styles.gridDot} />
            <circle cx="100" cy="100" r="3" className={styles.gridDot} />
            <circle cx="150" cy="100" r="3" className={styles.gridDot} />
            <circle cx="50" cy="150" r="3" className={styles.gridDot} />
            <circle cx="100" cy="150" r="3" className={styles.gridDot} />
            <circle cx="150" cy="150" r="3" className={styles.gridDot} />
        </svg>
    </div>
);

export const SphereObject = () => (
    <div className={styles.container}>
        <div className={styles.orbitRing}></div>
        <div className={styles.orbitRing}></div>
        <div className={styles.orbitRing}></div>
        <div className={styles.orbitRing}></div>
    </div>
);
