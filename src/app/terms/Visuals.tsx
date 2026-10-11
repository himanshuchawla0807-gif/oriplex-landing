"use client";

import React from "react";

/* 
 * Abstract Widget Illustrations for Terms Cards
 * Uses simple SVG shapes and CSS for a premium, clean aesthetic.
 */

export const AcceptanceVisual = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract Document */}
        <rect x="40" y="20" width="120" height="140" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="60" y="50" width="80" height="6" rx="3" fill="#F3F4F6" />
        <rect x="60" y="70" width="80" height="6" rx="3" fill="#F3F4F6" />
        <rect x="60" y="90" width="50" height="6" rx="3" fill="#F3F4F6" />

        {/* Floating Checkmark Button */}
        <g style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.08))" }}>
            <rect x="85" y="110" width="80" height="32" rx="16" fill="#1A1A1A" />
            <text x="125" y="131" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif" fontWeight="bold">I Agree</text>
        </g>

        {/* Cursor */}
        <path d="M150 135L155 148L160 148L165 135Z" fill="black" />
        <circle cx="155" cy="148" r="3" fill="black" opacity="0.1" />
    </svg>
);

export const ServiceVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract Chart/Service UI */}
        <rect x="20" y="30" width="160" height="100" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2" />

        {/* Sidebar */}
        <rect x="20" y="30" width="40" height="100" rx="0" fill="#F9FAFB" style={{ clipPath: "inset(0 0 0 0 round 8px 0 0 8px)" }} />

        {/* Content - Charts */}
        <rect x="75" y="50" width="30" height="60" rx="2" fill="#E5E7EB" />
        <rect x="115" y="70" width="30" height="40" rx="2" fill="#D1D5DB" />
        <rect x="155" y="40" width="30" height="70" rx="2" fill="url(#grad1)" />

        <defs>
            <linearGradient id="grad1" x1="155" y1="40" x2="185" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="#4B5563" />
            </linearGradient>
        </defs>
    </svg>
);

export const AccountVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Profile Card */}
        <g style={{ filter: "drop-shadow(0px 12px 24px rgba(0,0,0,0.06))" }}>
            <rect x="50" y="30" width="100" height="80" rx="12" fill="white" />
            <circle cx="100" cy="65" r="16" fill="#F3F4F6" />
            <path d="M88 84C88 78 94 76 100 76C106 76 112 78 112 84" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

            {/* Toggle Switch */}
            <rect x="70" y="95" width="24" height="12" rx="6" fill="#1A1A1A" />
            <circle cx="88" cy="101" r="4" fill="white" />
        </g>

        {/* Background blobs for depth */}
        <circle cx="40" cy="100" r="20" fill="#E5E7EB" opacity="0.3" />
        <circle cx="160" cy="50" r="12" fill="#D1D5DB" opacity="0.3" />
    </svg>
);

export const PrivacyVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield/Lock Metaphor */}
        <path d="M100 30L140 50V90C140 115 110 130 100 135C90 130 60 115 60 90V50L100 30Z" fill="url(#gradShield)" opacity="0.1" />
        <path d="M100 40L130 55V85C130 105 108 116 100 120C92 116 70 105 70 85V55L100 40Z" fill="white" stroke="#1A1A1A" strokeWidth="2" />

        {/* Lock Icon */}
        <rect x="92" y="75" width="16" height="12" rx="2" fill="#1A1A1A" />
        <path d="M96 75V68C96 66 98 64 100 64C102 64 104 66 104 68V75" stroke="#1A1A1A" strokeWidth="2" />

        <defs>
            <linearGradient id="gradShield" x1="100" y1="30" x2="100" y2="135" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="white" />
            </linearGradient>
        </defs>
    </svg>
);

export const IPVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Patent/Certificate */}
        <rect x="60" y="20" width="80" height="100" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="2" transform="rotate(-5 100 70)" />
        <rect x="65" y="25" width="80" height="100" rx="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />

        {/* Seal */}
        <circle cx="105" cy="100" r="12" fill="#1A1A1A" />
        <path d="M105 96L107 102H112L108 105L109 110L105 107L101 110L102 105L98 102H103L105 96Z" fill="white" />
    </svg>
);

export const LiabilityVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Umbrella/Protection */}
        <path d="M100 30C70 30 40 50 40 50V90H160V50C160 50 130 30 100 30Z" fill="#1A1A1A" />
        <rect x="98" y="90" width="4" height="40" rx="2" fill="#1A1A1A" />
        <path d="M98 130H102C106 130 108 128 108 126" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

        {/* Rain drops blocked */}
        <circle cx="60" cy="20" r="2" fill="#D1D5DB" />
        <circle cx="120" cy="25" r="2" fill="#D1D5DB" />
        <circle cx="140" cy="15" r="3" fill="#9CA3AF" />
    </svg>
);

export const ContactVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope */}
        <g style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.06))" }}>
            <rect x="50" y="45" width="100" height="60" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <path d="M50 45L100 85L150 45" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
        </g>

        {/* @ symbol floating */}
        <circle cx="160" cy="40" r="16" fill="#1A1A1A" />
        <text x="160" y="45" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="16" fontFamily="serif">@</text>
    </svg>
);
