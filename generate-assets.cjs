const fs = require('fs');
const path = require('path');

const publicImages = path.join(process.cwd(), 'public', 'assets', 'images');
const rootImages = path.join(process.cwd(), 'assets', 'images');
fs.mkdirSync(publicImages, { recursive: true });
fs.mkdirSync(rootImages, { recursive: true });

const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091A23"/>
      <stop offset="50%" stop-color="#102A32"/>
      <stop offset="100%" stop-color="#0A5257"/>
    </linearGradient>
    <radialGradient id="mintGlow" cx="50%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#00F6CD" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#00F6CD" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="750" fill="url(#bgGrad)"/>
  <rect width="600" height="750" fill="url(#mintGlow)"/>
  <rect x="20" y="20" width="560" height="710" rx="16" fill="none" stroke="rgba(0, 246, 205, 0.2)" stroke-width="2"/>
  <g transform="translate(300, 320)">
    <circle r="130" fill="none" stroke="rgba(0, 165, 170, 0.2)" stroke-dasharray="6,6"/>
    <circle r="110" fill="none" stroke="rgba(0, 246, 205, 0.3)" stroke-width="1.5"/>
    <circle r="90" fill="#102A32" stroke="#00F6CD" stroke-width="2"/>
    <circle cx="0" cy="-20" r="42" fill="#F4F7F5" opacity="0.9"/>
    <path d="M -60 60 C -60 15, 60 15, 60 60 Z" fill="#F4F7F5" opacity="0.9"/>
    <rect x="-60" y="85" width="120" height="26" rx="13" fill="#091A23" stroke="#00F6CD" stroke-width="1"/>
    <text x="0" y="102" font-family="monospace" font-size="11" fill="#00F6CD" font-weight="bold" text-anchor="middle">SABITHA S.</text>
  </g>
  <text x="40" y="65" font-family="monospace" font-size="12" fill="#00F6CD" font-weight="bold">PROFILE_ID // DEV_2026</text>
  <text x="560" y="65" font-family="monospace" font-size="12" fill="#9BA9A8" text-anchor="end">STATUS: ACTIVE</text>
  <rect x="40" y="580" width="520" height="110" rx="10" fill="rgba(9, 26, 35, 0.9)" stroke="rgba(255, 255, 255, 0.1)"/>
  <text x="65" y="615" font-family="sans-serif" font-size="18" fill="#F4F7F5" font-weight="bold">Sabitha Saravanan</text>
  <text x="65" y="640" font-family="monospace" font-size="12" fill="#00F6CD">B.Tech ISE Student • Full-Stack Developer</text>
  <text x="65" y="665" font-family="monospace" font-size="11" fill="#9BA9A8">Women's Engineering College, PTU • CGPA 7.94</text>
</svg>`;

const projectSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="100%">
  <defs>
    <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091A23"/>
      <stop offset="50%" stop-color="#102A32"/>
      <stop offset="100%" stop-color="#0A5257"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="700" fill="url(#pGrad)"/>
  <rect x="40" y="30" width="1120" height="640" rx="12" fill="#091A23" stroke="rgba(0, 246, 205, 0.25)" stroke-width="2"/>
  <rect x="40" y="30" width="1120" height="45" rx="12" fill="#102A32"/>
  <circle cx="70" cy="52" r="6" fill="#FF4E74"/>
  <circle cx="92" cy="52" r="6" fill="#FFB800"/>
  <circle cx="114" cy="52" r="6" fill="#00F6CD"/>
  <rect x="180" y="42" width="750" height="22" rx="6" fill="#091A23" stroke="rgba(255,255,255,0.08)"/>
  <text x="200" y="57" font-family="monospace" font-size="11" fill="#9BA9A8">https://plagiarism-detection-system.onrender.com/inspect</text>
  <rect x="70" y="100" width="490" height="420" rx="8" fill="#102A32" stroke="rgba(255,255,255,0.06)"/>
  <text x="95" y="135" font-family="sans-serif" font-size="14" fill="#00F6CD" font-weight="bold">SOURCE CODE &amp; TEXT INGESTION</text>
  <rect x="95" y="160" width="440" height="20" rx="4" fill="rgba(0, 165, 170, 0.2)"/>
  <rect x="95" y="195" width="380" height="14" rx="4" fill="rgba(255, 255, 255, 0.1)"/>
  <rect x="95" y="220" width="410" height="14" rx="4" fill="rgba(255, 255, 255, 0.1)"/>
  <rect x="95" y="245" width="350" height="14" rx="4" fill="rgba(255, 78, 116, 0.25)"/>
  <rect x="95" y="270" width="430" height="14" rx="4" fill="rgba(255, 255, 255, 0.1)"/>
  <rect x="95" y="295" width="390" height="14" rx="4" fill="rgba(0, 246, 205, 0.2)"/>
  <rect x="95" y="320" width="360" height="14" rx="4" fill="rgba(255, 255, 255, 0.1)"/>
  <rect x="95" y="345" width="420" height="14" rx="4" fill="rgba(255, 255, 255, 0.1)"/>
  <rect x="600" y="100" width="530" height="420" rx="8" fill="#102A32" stroke="rgba(255,255,255,0.06)"/>
  <text x="630" y="135" font-family="sans-serif" font-size="14" fill="#00F6CD" font-weight="bold">SIMILARITY EVALUATION MATRIX</text>
  <circle cx="740" cy="270" r="70" fill="none" stroke="#0A5257" stroke-width="12"/>
  <circle cx="740" cy="270" r="70" fill="none" stroke="#00F6CD" stroke-width="12" stroke-dasharray="440" stroke-dashoffset="95"/>
  <text x="740" y="265" font-family="sans-serif" font-size="28" fill="#F4F7F5" font-weight="bold" text-anchor="middle">83.4%</text>
  <text x="740" y="288" font-family="monospace" font-size="11" fill="#00F6CD" text-anchor="middle">SIMILARITY INDEX</text>
  <rect x="850" y="190" width="250" height="45" rx="6" fill="#091A23" stroke="rgba(255,255,255,0.05)"/>
  <text x="865" y="217" font-family="monospace" font-size="11" fill="#9BA9A8">Token Jaccard:</text>
  <text x="1080" y="217" font-family="monospace" font-size="11" fill="#00F6CD" text-anchor="end">0.86</text>
  <rect x="850" y="245" width="250" height="45" rx="6" fill="#091A23" stroke="rgba(255,255,255,0.05)"/>
  <text x="865" y="272" font-family="monospace" font-size="11" fill="#9BA9A8">Cosine Metric:</text>
  <text x="1080" y="272" font-family="monospace" font-size="11" fill="#00F6CD" text-anchor="end">0.81</text>
  <rect x="850" y="300" width="250" height="45" rx="6" fill="#091A23" stroke="rgba(255,255,255,0.05)"/>
  <text x="865" y="327" font-family="monospace" font-size="11" fill="#9BA9A8">N-Gram Match:</text>
  <text x="1080" y="327" font-family="monospace" font-size="11" fill="#00F6CD" text-anchor="end">94.2%</text>
  <rect x="70" y="540" width="1060" height="90" rx="8" fill="#091A23" stroke="rgba(0, 246, 205, 0.2)"/>
  <text x="100" y="575" font-family="monospace" font-size="12" fill="#00F6CD">SYSTEM: FLASK • PYTHON • REST API • MYSQL • POSTMAN • RENDER</text>
  <text x="100" y="602" font-family="monospace" font-size="11" fill="#9BA9A8">Designed &amp; Developed by Sabitha Saravanan • Full-Stack Architecture</text>
</svg>`;

fs.writeFileSync(path.join(publicImages, 'profile.svg'), profileSvg);
fs.writeFileSync(path.join(rootImages, 'profile.svg'), profileSvg);
fs.writeFileSync(path.join(publicImages, 'project-plagiarism.svg'), projectSvg);
fs.writeFileSync(path.join(rootImages, 'project-plagiarism.svg'), projectSvg);

// In case the browser tries loading profile.jpg or project-plagiarism.png
fs.writeFileSync(path.join(publicImages, 'profile.jpg'), profileSvg);
fs.writeFileSync(path.join(rootImages, 'profile.jpg'), profileSvg);
fs.writeFileSync(path.join(publicImages, 'project-plagiarism.png'), projectSvg);
fs.writeFileSync(path.join(rootImages, 'project-plagiarism.png'), projectSvg);

console.log('Assets created successfully!');
