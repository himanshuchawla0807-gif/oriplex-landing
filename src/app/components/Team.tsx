"use client";
import styles from "./Team.module.css";
import Image from "next/image";

export default function Team() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.headline}>Unreasonable Ambition.</h2>
                    <p className={styles.subheadline}>
                        We are a team of computer science graduates based in India, pushing everyday forward.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className={styles.grid}>

                    {/* Card 1: The Founder Quote (Dark) */}
                    <div className={`${styles.card} ${styles.quoteCard}`}>
                        <div className={styles.quoteContent}>
                            <p className={styles.quoteText}>
                                We believe investment analysts should be able to move at the speed of startups—fast, without losing accuracy. Accuracy and explainability first. Speed is the result.
                            </p>
                            <div className={styles.quoteAuthor}>
                                <span className={styles.authorName}>Himanshu Chawla</span>
                                Founder • Computer Science Graduate
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Founder Photo */}
                    <div className={`${styles.card} ${styles.photoCard}`}>
                        <Image
                            src="/assets/founder_photo.png"
                            alt="Himanshu Chawla"
                            fill
                            className={styles.founderImage}
                        />
                    </div>

                    {/* Card 3: Vision (Cream) */}
                    <div className={`${styles.card} ${styles.visionCard}`}>
                        <div>
                            <h3 className={styles.cardTitle}>A new financial exoskeleton.</h3>
                            <p className={styles.cardBody}>
                                Analysts need tools that evolve with the industry. Even with great data, processes are often blocked by manual synthesis. We aim to revolutionize financial diligence by giving every analyst the power of an entire firm.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Co-Founders */}
                    <div className={`${styles.card} ${styles.teamListCard}`}>
                        <div className={styles.teamMember}>
                            <h3 className={styles.memberName}>Dhanraj Patel</h3>
                            <p className={styles.memberRole}>Co-Founder • Backend & Cloud</p>
                            <p className={styles.memberBio}>
                                Architecting scalable infrastructure. Computer Science Graduate implementing high-performance cloud systems.
                            </p>
                        </div>

                        <div className={styles.teamMember}>
                            <h3 className={styles.memberName}>Shraddha Bhagul</h3>
                            <p className={styles.memberRole}>Co-Founder • Product & Finance</p>
                            <p className={styles.memberBio}>
                                Translating workflows into agent behaviors. Computer Science Graduate focused on product strategy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
