"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './contact.module.css';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
        const subject = encodeURIComponent(`Oriplex inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
        window.location.href = `mailto:himanshu@oriplex.tech?subject=${subject}&body=${body}`;
        setStatus('success');
    };

    return (
        <main className="min-h-screen bg-[#F0F0F0] text-[#111]">
            <Navbar />

            <section className={styles.section}>
                <div className={styles.wrapper}>
                    {/* Clean Perplexity-style Header */}
                    <div className={styles.header}>
                        <h1 className={styles.headline}>Contact Support</h1>
                        <p className={styles.subheadline}>
                            We are here to help. <br />
                            Reach out to <a href="mailto:himanshu@oriplex.tech" className="underline decoration-gray-300 hover:decoration-black transition-all">himanshu@oriplex.tech</a>
                        </p>
                    </div>

                    <div className={styles.card}>
                        {status === 'success' ? (
                            <div className={styles.successState}>
                                <div className={styles.checkIcon}>✓</div>
                                <h3>Send your email draft</h3>
                                <p>Finish sending in your email app. If it did not open, email <a href="mailto:himanshu@oriplex.tech">himanshu@oriplex.tech</a> directly.</p>
                                <button onClick={() => setStatus('idle')} className={styles.resetButton}>Send another</button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>First Name</label>
                                        <input name="firstName" type="text" className={styles.input} required />
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Last Name</label>
                                        <input name="lastName" type="text" className={styles.input} required />
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Email Address</label>
                                    <input name="email" type="email" className={styles.input} required />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Message</label>
                                    <textarea name="message" className={styles.textarea} rows={5} required></textarea>
                                </div>

                                <p>Your email app will open with a draft. Send it there to contact us.</p>
                                <button type="submit" className={styles.submitButton}>
                                    Open email draft →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
