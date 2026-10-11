import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
            <div className={styles.container}>
                {/* Brand & CTA Section */}
                <div className={styles.ctaSection}>
                    {/* Logo Removed per user request */}

                    <h2 className={styles.ctaHeadline} style={{ marginTop: '0' }}>
                        Oriplex Agents <br />
                        turn documents <br />
                        to insights.
                    </h2>
                    <a
                        href="https://cal.com/himanshu-3f7f3a/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.bookDemoButton}
                        style={{ textDecoration: 'none', display: 'inline-block', fontFamily: 'var(--font-inter)' }}
                    >
                        Book a demo
                    </a>
                </div>

                {/* Navigation Links - 3 Columns */}
                <div className={styles.navSection}>
                    <div className={styles.navColumn}>
                        <span className={styles.colHeader}>Product</span>
                        <Link href="/agents" className={styles.navLink}>AI Agents</Link>
                        <Link href="/solutions" className={styles.navLink}>Solutions</Link>
                        <Link href="/security" className={styles.navLink}>Security</Link>
                    </div>
                    <div className={styles.navColumn}>
                        <span className={styles.colHeader}>Company</span>
                        <Link href="/about" className={styles.navLink}>About</Link>
                        <Link href="/contact" className={styles.navLink}>Contact</Link>
                    </div>
                    <div className={styles.navColumn}>
                        <span className={styles.colHeader}>Resources</span>
                        <Link href="/security" className={styles.navLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.navLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Social Icons */}
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>© 2026 Oriplex AI. All rights reserved.</p>
                <div className={styles.socialIcons}>
                    {/* YouTube Icon */}
                    <a href="#" className={styles.iconLink} aria-label="YouTube">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                    {/* X (Twitter) Icon */}
                    <a href="#" className={styles.iconLink} aria-label="X">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="#" className={styles.iconLink} aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
