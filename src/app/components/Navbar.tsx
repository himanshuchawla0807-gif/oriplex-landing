"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/assets/logo-oriplex.png"
                        alt="OriPlex"
                        width={140}
                        height={40}
                        style={{
                            objectFit: "contain",
                            transform: "scale(2.8)", // Visually bigger...
                            transformOrigin: "left center" // ...anchored left
                        }}
                    />
                </Link>
            </div>

            {/* Navigation Links - Valley Style */}
            <div className={styles.links}>
                <Link href="/agents" className={styles.link}>AI Agents</Link>
                <Link href="/solutions" className={styles.link}>Solutions</Link>
                <Link href="/security" className={styles.link}>Security</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
            </div>

            {/* Request Demo Button */}
            <div className={styles.actions}>
                <a href="https://cal.com/himanshu-3f7f3a/30min" target="_blank" rel="noopener noreferrer" className={styles.button} style={{ textDecoration: 'none', display: 'inline-block' }}>Book a Demo</a>
            </div>
        </nav>
    );
}
