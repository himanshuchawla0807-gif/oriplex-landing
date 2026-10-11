"use client";

import React from "react";

/* 
 * Security Visuals - Premium SVG Illustrations
 * Abstract representations of security concepts matching the Terms page aesthetic.
 */

export const NoTrainingVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain/AI Model Representation */}
        <circle cx="100" cy="70" r="40" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="100" cy="70" r="30" stroke="#E5E7EB" strokeWidth="2" />

        {/* Data Stream diverted away */}
        <path d="M40 110C40 110 60 90 60 70C60 50 40 30 40 30" stroke="#1A1A1A" strokeWidth="2" />
        <path d="M160 110C160 110 140 90 140 70C140 50 160 30 160 30" stroke="#1A1A1A" strokeWidth="2" />

        {/* "No" Symbol / Shield blocking input */}
        <g style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.06))" }}>
            <circle cx="100" cy="70" r="16" fill="white" stroke="#1A1A1A" strokeWidth="2" />
            <path d="M92 78L108 62" stroke="#1A1A1A" strokeWidth="2" />
        </g>
    </svg>
);

export const RetentionVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Timeline */}
        <line x1="40" y1="70" x2="160" y2="70" stroke="#E5E7EB" strokeWidth="2" />

        {/* Days ticks */}
        <line x1="60" y1="65" x2="60" y2="75" stroke="#D1D5DB" strokeWidth="2" />
        <line x1="80" y1="65" x2="80" y2="75" stroke="#D1D5DB" strokeWidth="2" />
        <line x1="100" y1="65" x2="100" y2="75" stroke="#D1D5DB" strokeWidth="2" />

        {/* Auto-delete event */}
        <g style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.06))" }}>
            <rect x="130" y="50" width="30" height="40" rx="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
            {/* Shredder effect lines */}
            <line x1="138" y1="80" x2="138" y2="100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="145" y1="80" x2="145" y2="95" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="152" y1="80" x2="152" y2="100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
        </g>

        <text x="145" y="40" textAnchor="middle" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">14 Days</text>
    </svg>
);

export const EncryptionVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vault Door */}
        <circle cx="100" cy="70" r="40" stroke="#E5E7EB" strokeWidth="1" fill="#F9FAFB" />
        <circle cx="100" cy="70" r="32" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4 4" />

        {/* Lock Mechanism */}
        <g style={{ filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.05))" }}>
            <rect x="85" y="55" width="30" height="30" rx="8" fill="#1A1A1A" />
            <circle cx="100" cy="70" r="4" fill="white" />
            <rect x="98" y="70" width="4" height="10" fill="white" />
        </g>

        {/* Tumblers */}
        <circle cx="100" cy="30" r="4" fill="#E5E7EB" />
        <circle cx="140" cy="70" r="4" fill="#E5E7EB" />
        <circle cx="100" cy="110" r="4" fill="#E5E7EB" />
        <circle cx="60" cy="70" r="4" fill="#E5E7EB" />
    </svg>
);

export const InfraVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Servers / Cloud */}
        <rect x="60" y="40" width="80" height="60" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="2" />

        {/* Server Lights */}
        <circle cx="75" cy="55" r="2" fill="#1A1A1A" />
        <circle cx="85" cy="55" r="2" fill="#E5E7EB" />
        <circle cx="95" cy="55" r="2" fill="#E5E7EB" />

        <circle cx="75" cy="70" r="2" fill="#1A1A1A" />
        <circle cx="85" cy="70" r="2" fill="#E5E7EB" />
        <circle cx="95" cy="70" r="2" fill="#E5E7EB" />

        <circle cx="75" cy="85" r="2" fill="#1A1A1A" />
        <circle cx="85" cy="85" r="2" fill="#E5E7EB" />
        <circle cx="95" cy="85" r="2" fill="#E5E7EB" />

        {/* Shield Overlay */}
        <path d="M120 75L135 80V95C135 105 125 110 120 112C115 110 105 105 105 95V80L120 75Z" fill="#1A1A1A" stroke="white" strokeWidth="2" />
        <path d="M115 90L120 95L128 85" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ProcessingVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="40" width="100" height="60" rx="4" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />

        {/* Isolated environments */}
        <rect x="60" y="50" width="35" height="40" rx="2" fill="white" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="105" y="50" width="35" height="40" rx="2" fill="white" stroke="#E5E7EB" strokeWidth="1" />

        {/* Barrier */}
        <line x1="100" y1="45" x2="100" y2="95" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
);

export const ThirdPartyVisual = () => (
    <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="70" r="25" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="140" cy="70" r="25" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Connection with Lock */}
        <line x1="85" y1="70" x2="115" y2="70" stroke="#1A1A1A" strokeWidth="1.5" />

        <rect x="94" y="64" width="12" height="12" rx="2" fill="#1A1A1A" />
        <path d="M97 64V61C97 60 98 59 100 59C102 59 103 60 103 61V64" stroke="#1A1A1A" strokeWidth="1.5" />
    </svg>
);
