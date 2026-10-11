"use client";
import React, { useEffect, useState } from 'react';
import styles from './Admin.module.css';

type Submission = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    timestamp: string;
};

export default function ContactAdmin() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        // Load from localStorage (simulating DB for this session)
        const stored = localStorage.getItem('contact_submissions');
        if (stored) {
            setSubmissions(JSON.parse(stored).reverse());
        }
    }, []);

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Oriplex Admin</h1>
                <a href="/" className={styles.exitLink}>Exit to Home</a>
            </div>

            <div className={styles.card}>
                {submissions.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>No submissions found.</p>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.th}>Time</th>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((sub) => (
                                <tr key={sub.id} className={styles.tr}>
                                    <td className={`${styles.td} ${styles.tdTime}`}>
                                        {new Date(sub.timestamp).toLocaleString()}
                                    </td>
                                    <td className={styles.td}>
                                        <span style={{ fontWeight: 500 }}>{sub.firstName} {sub.lastName}</span>
                                    </td>
                                    <td className={styles.td}>
                                        <a href={`mailto:${sub.email}`} className={styles.emailLink}>{sub.email}</a>
                                    </td>
                                    <td className={styles.td} style={{ maxWidth: '400px' }}>
                                        {sub.message}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
}
