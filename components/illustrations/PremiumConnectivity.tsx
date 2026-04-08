import React from "react";

export default function PremiumConnectivity() {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* GLOW BACKGROUND */}
      <defs>
        <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#2BB6C5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1A8FE3" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BB6C5" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#1A8FE3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2BB6C5" stopOpacity="0.2" />
        </linearGradient>

        <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>

      {/* OUTER ORBITS */}
      <circle cx="400" cy="400" r="320" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="10 15" opacity="0.3">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 400"
          to="360 400 400"
          dur="60s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="400" cy="400" r="240" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 10" opacity="0.2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 400 400"
          to="0 400 400"
          dur="40s"
          repeatCount="indefinite"
        />
      </circle>

      {/* CORE SPHERE / WORLD MAP MOCKUP */}
      <circle cx="400" cy="400" r="180" fill="url(#sphereGlow)" />
      
      {/* Schematic World Map overlay */}
      <g opacity="0.1" stroke="#1A8FE3" strokeWidth="1">
        <ellipse cx="400" cy="400" rx="180" ry="60" fill="none" />
        <ellipse cx="400" cy="400" rx="60" ry="180" fill="none" />
        <line x1="220" y1="400" x2="580" y2="400" />
        <line x1="400" y1="220" x2="400" y2="580" />
      </g>
      
      {/* CONNECTING LINES */}
      <g>
        <path d="M200 250 L400 350" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M620 300 L400 380" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M550 620 L400 450" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M250 580 L400 420" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="7s" repeatCount="indefinite" />
        </path>
      </g>

      {/* PREMIUM NODES / PEOPLE (Mirroring logbg4) */}
      <g>
        {/* Node 1 - Person */}
        <g className="animate-float" style={{ animationDuration: '4s' }}>
          <circle cx="200" cy="250" r="45" fill="white" filter="url(#glass)" opacity="0.5" />
          <circle cx="200" cy="250" r="40" fill="white" stroke="#1A8FE3" strokeWidth="2" />
          <path d="M185 240 L215 240 M200 230 L200 250 M180 265 Q200 245 220 265" stroke="#1A8FE3" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        
        {/* Node 2 - Person */}
        <g className="animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <circle cx="620" cy="300" r="50" fill="white" stroke="#2BB6C5" strokeWidth="2" />
          <path d="M605 290 L635 290 M620 280 L620 300 M600 315 Q620 295 640 315" stroke="#2BB6C5" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Node 3 - Small Hub */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
          <circle cx="550" cy="620" r="20" fill="#1A8FE3" opacity="0.4" />
          <circle cx="550" cy="620" r="10" fill="#1A8FE3" />
        </g>
        
        {/* Node 4 - Person Large */}
        <g className="animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
          <circle cx="250" cy="580" r="55" fill="white" stroke="#2BB6C5" strokeWidth="2" />
          <path d="M230 570 L270 570 M250 555 L250 580 M220 600 Q250 575 280 600" stroke="#2BB6C5" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>

      {/* FLOATING DATA PARTICLES */}
      <circle cx="300" cy="300" r="4" fill="#2BB6C5">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="500" cy="450" r="3" fill="#1A8FE3">
        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="420" cy="220" r="5" fill="#2BB6C5">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
