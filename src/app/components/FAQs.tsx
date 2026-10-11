"use client";
import React, { useState } from "react";
import styles from "./FAQs.module.css";

const faqData = [
    {
        question: "How does the onboarding process work?",
        answer: "We believe in a white-glove approach. We start with a personalized demo to demonstrate our capabilities on your specific use cases. Once the partnership is agreed upon and the invoice is cleared, your workspace is provisioned, and access is granted immediately."
    },
    {
        question: "What if there is a mistake in the output?",
        answer: "Trust is our currency. Unlike black-box models, Oriplex is grounded in your Data Room. Every single claim, figure, or insight generated is backed by a clickable citation linking directly to the original source document and page number for instant verification."
    },
    {
        question: "How is spending and usage measured?",
        answer: "Usage is tracked via AI Credits. Your subscription includes a substantial monthly allocation designed for standard deal flow. If you enter a period of high intensity, you can easily top up your credits to ensure uninterrupted diligence."
    },
    {
        question: "What is the pricing structure?",
        answer: "We offer transparent tier plans based on a month-to-month subscription model that grants a set allocation of AI credits. It's a standard SaaS structure designed for flexibility."
    },
    {
        question: "Is my data secure?",
        answer: "Security is built-in. We utilize AES-256 encryption for all data at rest and in transit, with an enforced 14-day auto-deletion policy for processed documents. We are currently in the process of obtaining our SOC-2 certification."
    }
];

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <h2 className={styles.header}>Frequently Asked Questions</h2>
                <div className={styles.list}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className={styles.questionRow}>
                                <h3 className={styles.question}>{item.question}</h3>
                                <span className={styles.icon}>
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </div>
                            <div className={styles.answerWrapper}>
                                <div className={styles.answerInner}>
                                    <p className={styles.answer}>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
