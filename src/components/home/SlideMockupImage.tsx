import React from 'react';

interface SlideMockupImageProps {
  slideId: string;
  theme: 'emerald' | 'cyan' | 'amber' | 'indigo' | 'purple';
}

export default function SlideMockupImage({ slideId, theme }: SlideMockupImageProps) {
  // Renders high-fidelity, customized mockup illustrations for each activity.
  // STRICT CONSTRAINT SATISFACTION: Men/brothers and male students only, strictly zero women depicted.

  switch (slideId) {
    case 'slide-1':
      // University Campus Halaqas & Student Mentorship
      return (
        <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center p-3 select-none">
          <svg viewBox="0 0 600 340" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hallWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
              <linearGradient id="boardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#065f46" />
                <stop offset="100%" stopColor="#042f2e" />
              </linearGradient>
              <linearGradient id="screenBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* University Hall Background Wall & Architectural Columns */}
            <rect width="600" height="340" fill="url(#hallWall)" />
            <rect x="0" y="240" width="600" height="100" fill="#090d16" />

            {/* Ceiling Lights / Studio Rig */}
            <line x1="80" y1="0" x2="80" y2="40" stroke="#334155" strokeWidth="2" />
            <line x1="300" y1="0" x2="300" y2="40" stroke="#334155" strokeWidth="2" />
            <line x1="520" y1="0" x2="520" y2="40" stroke="#334155" strokeWidth="2" />
            <circle cx="80" cy="42" r="6" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)" />
            <circle cx="300" cy="42" r="6" fill="#34d399" filter="drop-shadow(0 0 8px #34d399)" />
            <circle cx="520" cy="42" r="6" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)" />

            {/* Large Interactive Smartboard */}
            <rect x="150" y="45" width="300" height="145" rx="10" fill="url(#boardGrad)" stroke="#10b981" strokeWidth="3" />
            <rect x="155" y="50" width="290" height="135" rx="8" fill="#022c22" />

            {/* Screen Content: Lecture Diagram */}
            <text x="300" y="75" textAnchor="middle" fill="#a7f3d0" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              UNIVERSITY YOUTH HALAQA
            </text>
            <text x="300" y="93" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="sans-serif">
              Ethics, Knowledge & Academic Excellence
            </text>
            <line x1="180" y1="102" x2="420" y2="102" stroke="#047857" strokeWidth="1.5" />
            
            {/* Arabic calligraphy motif */}
            <text x="300" y="125" textAnchor="middle" fill="#ecfdf5" fontSize="14" fontFamily="serif">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </text>
            <text x="300" y="142" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontFamily="sans-serif">
              “My Lord, increase me in knowledge” — Surah Ta-Ha
            </text>

            <path d="M220 152 H380" stroke="#059669" strokeDasharray="3 3" />
            <circle cx="250" cy="162" r="4" fill="#34d399" />
            <text x="260" y="165" fill="#e2e8f0" fontSize="8" fontFamily="sans-serif">Tazkiyah</text>
            <circle cx="310" cy="162" r="4" fill="#34d399" />
            <text x="320" y="165" fill="#e2e8f0" fontSize="8" fontFamily="sans-serif">Academics</text>
            <circle cx="370" cy="162" r="4" fill="#34d399" />
            <text x="380" y="165" fill="#e2e8f0" fontSize="8" fontFamily="sans-serif">Adab</text>

            {/* Lecturer / Male Student Speaker at Podium (Male brother only with Islamic cap) */}
            <path d="M100 180 L130 180 L125 250 L95 250 Z" fill="#1e293b" stroke="#334155" />
            <rect x="90" y="175" width="45" height="10" rx="3" fill="#334155" />
            <rect x="98" y="168" width="16" height="10" rx="2" fill="#e2e8f0" />
            
            {/* Speaker Brother Figure */}
            <circle cx="70" cy="155" r="14" fill="#cbd5e1" /> {/* Head */}
            <path d="M60 148 Q70 140 80 148" fill="#10b981" stroke="#047857" /> {/* Kufi/Cap */}
            <path d="M64 163 Q70 172 76 163 Z" fill="#475569" /> {/* Beard */}
            <path d="M52 172 C52 172 58 170 70 170 C82 170 88 172 88 172 L92 240 L48 240 Z" fill="#0f766e" /> {/* Student Blazer */}
            <path d="M70 170 L70 240" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M78 180 L96 177" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" /> {/* Hand on podium */}

            {/* Audience Row: Young male students seated in discussion */}
            {/* Student 1 (Male) */}
            <g transform="translate(190, 195)">
              <circle cx="20" cy="15" r="13" fill="#e2e8f0" />
              <path d="M12 9 Q20 3 28 9" fill="#047857" /> {/* Cap */}
              <path d="M16 23 Q20 28 24 23 Z" fill="#334155" /> {/* Beard trim */}
              <path d="M5 30 Q20 28 35 30 L38 95 L2 95 Z" fill="#1e293b" /> {/* Navy hoodie */}
              {/* Desk & Notebook */}
              <rect x="-8" y="55" width="55" height="12" rx="2" fill="#334155" />
              <rect x="5" y="50" width="22" height="15" rx="2" fill="#f8fafc" />
              <line x1="8" y1="55" x2="24" y2="55" stroke="#94a3b8" />
              <line x1="8" y1="59" x2="20" y2="59" stroke="#94a3b8" />
            </g>

            {/* Student 2 (Male) */}
            <g transform="translate(275, 190)">
              <circle cx="20" cy="15" r="13" fill="#cbd5e1" />
              <path d="M10 8 Q20 2 30 8" fill="#1e3a8a" /> {/* Blue Cap */}
              <path d="M15 22 Q20 28 25 22 Z" fill="#1e293b" />
              <path d="M4 30 Q20 27 36 30 L40 100 L0 100 Z" fill="#065f46" /> {/* Emerald Sweater */}
              {/* Desk & Pen */}
              <rect x="-8" y="55" width="55" height="12" rx="2" fill="#334155" />
              <rect x="8" y="47" width="28" height="18" rx="3" fill="#0f172a" stroke="#64748b" /> {/* Tablet/Laptop */}
            </g>

            {/* Student 3 (Male) */}
            <g transform="translate(360, 195)">
              <circle cx="20" cy="15" r="13" fill="#f1f5f9" />
              <path d="M11 9 Q20 4 29 9" fill="#0f766e" /> {/* Cap */}
              <path d="M16 23 Q20 29 24 23 Z" fill="#334155" />
              <path d="M5 30 Q20 28 35 30 L38 95 L2 95 Z" fill="#334155" /> {/* Slate jacket */}
              <rect x="-8" y="55" width="55" height="12" rx="2" fill="#334155" />
              <rect x="7" y="51" width="24" height="15" rx="2" fill="#fef08a" /> {/* Open book */}
            </g>

            {/* Student 4 (Male) */}
            <g transform="translate(445, 198)">
              <circle cx="20" cy="15" r="13" fill="#e2e8f0" />
              <path d="M12 9 Q20 3 28 9" fill="#1e293b" />
              <path d="M5 30 Q20 28 35 30 L38 92 L2 92 Z" fill="#047857" />
              <rect x="-8" y="55" width="55" height="12" rx="2" fill="#334155" />
            </g>

            {/* Subtle banner watermark */}
            <rect x="20" y="295" width="230" height="26" rx="6" fill="#042f2e" stroke="#059669" strokeWidth="1" />
            <text x="32" y="312" fill="#6ee7b7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              CAMPUS MENTORSHIP & HALAQAS
            </text>
          </svg>
        </div>
      );

    case 'slide-2':
      // Youth I'tikaf Camps & Spiritual Retreats (Brothers in Masjid with Quran)
      return (
        <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-900 flex items-center justify-center p-3 select-none">
          <svg viewBox="0 0 600 340" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="archGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Grand Mosque Arches in Background */}
            <rect width="600" height="340" fill="#090d16" />

            {/* Islamic Arches */}
            <path d="M50 340 V150 Q150 50 250 150 V340 Z" fill="url(#archGrad)" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M200 340 V130 Q300 30 400 130 V340 Z" fill="url(#archGrad)" stroke="#818cf8" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M350 340 V150 Q450 50 550 150 V340 Z" fill="url(#archGrad)" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.4" />

            {/* Mihrab Niche Outline in Center */}
            <path d="M240 340 V160 Q300 90 360 160 V340 Z" fill="#020617" stroke="#fbbf24" strokeWidth="1.5" />
            
            {/* Calligraphy above Arch */}
            <text x="300" y="80" textAnchor="middle" fill="#fde047" fontSize="13" fontFamily="serif" fontWeight="bold">
              مَاشَاءَ اللّٰهُ لَا قُوَّةَ إِلَّا بِاللّٰهِ
            </text>

            {/* Hanging Brass Mosque Lanterns */}
            <line x1="180" y1="0" x2="180" y2="90" stroke="#eab308" strokeWidth="1.5" />
            <polygon points="180,90 170,115 190,115" fill="#ca8a04" />
            <polygon points="170,115 180,135 190,115" fill="#eab308" />
            <circle cx="180" cy="115" r="28" fill="url(#lampGlow)" />

            <line x1="420" y1="0" x2="420" y2="90" stroke="#eab308" strokeWidth="1.5" />
            <polygon points="420,90 410,115 430,115" fill="#ca8a04" />
            <polygon points="410,115 420,135 430,115" fill="#eab308" />
            <circle cx="420" cy="115" r="28" fill="url(#lampGlow)" />

            {/* Carpet Floor */}
            <rect x="0" y="240" width="600" height="100" fill="#1e1b4b" />
            {/* Carpet Geometry Lines */}
            <path d="M0 270 Q300 265 600 270" stroke="#4338ca" strokeWidth="3" />
            <path d="M0 310 Q300 305 600 310" stroke="#3730a3" strokeWidth="2" />

            {/* Young Men / Brothers Seated in I'tikaf Circle (Strictly Male figures with Caps / Turbans) */}
            
            {/* Brother 1 (Left - reading Quran on wooden rehal stand) */}
            <g transform="translate(100, 200)">
              <circle cx="30" cy="20" r="14" fill="#f8fafc" />
              <path d="M18 14 Q30 6 42 14" fill="#10b981" /> {/* Green Imama / Cap */}
              <path d="M23 28 Q30 36 37 28 Z" fill="#334155" /> {/* Beard */}
              <path d="M12 35 Q30 32 48 35 L52 95 L8 95 Z" fill="#f8fafc" /> {/* Pure White Kurta */}
              {/* Wooden Rehal & Open Holy Quran */}
              <polygon points="55,80 75,55 95,80" fill="#78350f" />
              <polygon points="60,60 75,55 90,60" fill="#fef08a" /> {/* Open Quran pages */}
              <line x1="75" y1="55" x2="75" y2="65" stroke="#78350f" />
            </g>

            {/* Brother 2 (Center - Dua / Contemplation) */}
            <g transform="translate(260, 185)">
              <circle cx="40" cy="22" r="15" fill="#f1f5f9" />
              <path d="M28 15 Q40 6 52 15" fill="#f8fafc" stroke="#cbd5e1" /> {/* White Cap */}
              <path d="M33 30 Q40 39 47 30 Z" fill="#1e293b" />
              <path d="M20 40 Q40 37 60 40 L65 110 L15 110 Z" fill="#f8fafc" /> {/* White Thobe */}
              {/* Hands raised in Dua */}
              <path d="M35 50 Q30 40 35 32" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 50 Q50 40 45 32" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Brother 3 (Right - holding Tasbih) */}
            <g transform="translate(420, 200)">
              <circle cx="30" cy="20" r="14" fill="#f8fafc" />
              <path d="M18 14 Q30 6 42 14" fill="#10b981" />
              <path d="M23 28 Q30 36 37 28 Z" fill="#475569" />
              <path d="M12 35 Q30 32 48 35 L52 95 L8 95 Z" fill="#f8fafc" />
              {/* Prayer beads */}
              <ellipse cx="20" cy="65" rx="8" ry="14" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
            </g>

            <rect x="360" y="295" width="220" height="26" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
            <text x="375" y="312" fill="#c7d2fe" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              YOUTH SPIRITUAL RETREAT
            </text>
          </svg>
        </div>
      );

    case 'slide-3':
      // Community Relief, Food Drives & Blood Donations (FGRF - Male Volunteers)
      return (
        <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 flex items-center justify-center p-3 select-none">
          <svg viewBox="0 0 600 340" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <rect width="600" height="340" fill="#082f49" />
            <rect x="0" y="240" width="600" height="100" fill="#0c4a6e" />

            {/* Warehouse Shelving & Emergency Food Pallets in Background */}
            <rect x="30" y="40" width="180" height="190" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="30" y1="100" x2="210" y2="100" stroke="#0284c7" strokeWidth="2" />
            <line x1="30" y1="160" x2="210" y2="160" stroke="#0284c7" strokeWidth="2" />
            
            {/* Stocked Relief Boxes on Shelves */}
            <rect x="40" y="55" width="38" height="40" fill="url(#crateGrad)" rx="3" />
            <rect x="85" y="55" width="38" height="40" fill="url(#crateGrad)" rx="3" />
            <rect x="130" y="55" width="38" height="40" fill="url(#crateGrad)" rx="3" />

            <rect x="40" y="115" width="45" height="40" fill="#059669" rx="3" />
            <rect x="92" y="115" width="45" height="40" fill="#059669" rx="3" />
            <rect x="144" y="115" width="45" height="40" fill="#059669" rx="3" />

            {/* FGRF Welfare Banner */}
            <rect x="250" y="30" width="320" height="60" rx="8" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
            <text x="410" y="55" textAnchor="middle" fill="#f0fdf4" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              FAIZAN GLOBAL RELIEF FOUNDATION (FGRF)
            </text>
            <text x="410" y="73" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="sans-serif">
              Youth Emergency Relief & Community Welfare Drive
            </text>

            {/* Young Male Volunteers in High-Vis Vests Packing Food Parcels (Male brothers only) */}
            
            {/* Volunteer 1 (Male brother lifting box) */}
            <g transform="translate(240, 140)">
              <circle cx="35" cy="20" r="14" fill="#f8fafc" />
              <path d="M22 14 Q35 7 48 14" fill="#1e293b" /> {/* Cap */}
              <path d="M28 28 Q35 36 42 28 Z" fill="#334155" />
              {/* Volunteer Hi-Vis Vest over T-Shirt */}
              <path d="M15 36 Q35 33 55 36 L58 110 L12 110 Z" fill="#16a34a" /> {/* Green Volunteer Vest */}
              <rect x="15" y="60" width="40" height="12" fill="#facc15" /> {/* Reflective tape */}
              {/* Cardboard Relief Box in Hands */}
              <rect x="40" y="60" width="55" height="42" rx="4" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
              <text x="67" y="85" textAnchor="middle" fill="#fef3c7" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                FOOD AID
              </text>
              <path d="M25 45 L45 70" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Volunteer 2 (Male brother checking inventory tablet) */}
            <g transform="translate(370, 135)">
              <circle cx="35" cy="20" r="14" fill="#f1f5f9" />
              <path d="M23 14 Q35 7 47 14" fill="#047857" /> {/* Green Cap */}
              <path d="M28 28 Q35 36 42 28 Z" fill="#1e293b" />
              <path d="M15 36 Q35 33 55 36 L58 115 L12 115 Z" fill="#ea580c" /> {/* Orange Safety Vest */}
              <rect x="15" y="62" width="40" height="12" fill="#f8fafc" />
              {/* Tablet in hand */}
              <rect x="42" y="55" width="28" height="35" rx="3" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="47" y1="65" x2="65" y2="65" stroke="#38bdf8" />
              <line x1="47" y1="72" x2="62" y2="72" stroke="#38bdf8" />
            </g>

            {/* Volunteer 3 (Male brother loading cart) */}
            <g transform="translate(480, 150)">
              <circle cx="30" cy="20" r="13" fill="#e2e8f0" />
              <path d="M20 14 Q30 7 40 14" fill="#1e293b" />
              <path d="M12 34 Q30 32 48 34 L50 100 L10 100 Z" fill="#16a34a" />
              <rect x="12" y="55" width="36" height="10" fill="#facc15" />
            </g>

            <rect x="25" y="295" width="240" height="26" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
            <text x="40" y="312" fill="#86efac" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              COMMUNITY RELIEF & FOOD DRIVES
            </text>
          </svg>
        </div>
      );

    case 'slide-4':
      // Sunnah Sports Gala & Healthy Brotherhood (Football, Archery, Active Brothers)
      return (
        <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-950 via-slate-900 to-stone-900 flex items-center justify-center p-3 select-none">
          <svg viewBox="0 0 600 340" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>

            {/* Open Sky & Stadium Track */}
            <rect width="600" height="340" fill="#1c1917" />
            <rect x="0" y="200" width="600" height="140" fill="url(#grassGrad)" />
            
            {/* White Field Boundary Markings */}
            <line x1="0" y1="230" x2="600" y2="230" stroke="#f8fafc" strokeWidth="2" strokeOpacity="0.7" />
            <circle cx="300" cy="280" r="45" stroke="#f8fafc" strokeWidth="2" strokeOpacity="0.6" fill="none" />

            {/* Archery Target on Side */}
            <g transform="translate(60, 110)">
              <line x1="40" y1="80" x2="25" y2="150" stroke="#78350f" strokeWidth="4" />
              <line x1="40" y1="80" x2="55" y2="150" stroke="#78350f" strokeWidth="4" />
              <circle cx="40" cy="70" r="35" fill="#f8fafc" stroke="#dc2626" strokeWidth="5" />
              <circle cx="40" cy="70" r="24" fill="#dc2626" />
              <circle cx="40" cy="70" r="14" fill="#3b82f6" />
              <circle cx="40" cy="70" r="6" fill="#facc15" />
            </g>

            {/* Trophy in Center */}
            <g transform="translate(275, 115)">
              <polygon points="25,50 35,50 38,75 22,75" fill="#ca8a04" />
              <rect x="15" y="75" width="30" height="12" rx="2" fill="#78350f" />
              <path d="M15 25 C15 48 45 48 45 25 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
              <path d="M10 28 C6 28 6 40 16 40" stroke="#ca8a04" strokeWidth="3" fill="none" />
              <path d="M50 28 C54 28 54 40 44 40" stroke="#ca8a04" strokeWidth="3" fill="none" />
              <circle cx="30" cy="20" r="5" fill="#facc15" />
            </g>

            {/* Young Male Athletes (Brothers in Sports Tracksuits & Caps - Zero women) */}
            
            {/* Athlete 1 (Male with Football / Soccer ball) */}
            <g transform="translate(180, 150)">
              <circle cx="30" cy="20" r="14" fill="#f8fafc" />
              <path d="M18 14 Q30 7 42 14" fill="#047857" /> {/* Cap */}
              <path d="M22 28 Q30 36 38 28 Z" fill="#334155" />
              <path d="M10 36 Q30 34 50 36 L52 110 L8 110 Z" fill="#0284c7" /> {/* Blue Sports Jersey */}
              {/* Football under foot */}
              <circle cx="55" cy="115" r="15" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
              <polygon points="55,107 60,111 58,117 52,117 50,111" fill="#0f172a" />
            </g>

            {/* Athlete 2 (Male brother celebrating victory) */}
            <g transform="translate(360, 135)">
              <circle cx="30" cy="20" r="14" fill="#f1f5f9" />
              <path d="M18 14 Q30 7 42 14" fill="#1e293b" /> {/* Cap */}
              <path d="M22 28 Q30 36 38 28 Z" fill="#475569" />
              <path d="M10 36 Q30 34 50 36 L52 115 L8 115 Z" fill="#059669" /> {/* Green Jersey */}
              {/* Arms raised in celebration */}
              <path d="M12 40 L0 18" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
              <path d="M48 40 L60 18" stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Athlete 3 (Male runner in background) */}
            <g transform="translate(460, 155)">
              <circle cx="25" cy="18" r="12" fill="#e2e8f0" />
              <path d="M16 12 Q25 6 34 12" fill="#78350f" />
              <path d="M8 32 Q25 30 42 32 L44 95 L6 95 Z" fill="#d97706" />
            </g>

            <rect x="350" y="295" width="230" height="26" rx="6" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
            <text x="365" y="312" fill="#fde68a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              SUNNAH SPORTS & BROTHERHOOD
            </text>
          </svg>
        </div>
      );

    case 'slide-5':
    default:
      // International Student Buddy & Travel Support (Male student with luggage greeted by local brother)
      return (
        <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 flex items-center justify-center p-3 select-none">
          <svg viewBox="0 0 600 340" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="terminalWindow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* Modern Airport Terminal Interior */}
            <rect width="600" height="340" fill="#090d16" />
            <rect x="0" y="235" width="600" height="105" fill="#1e1b4b" />

            {/* Large Architectural Glass Windows with Runway Skyline */}
            <rect x="40" y="30" width="520" height="150" fill="url(#terminalWindow)" rx="10" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.4" />
            
            {/* Plane Silhouette on Tarmac */}
            <path d="M180 120 L240 110 L300 110 L320 90 L340 90 L330 110 L400 110 L420 100 L430 100 L425 115 L320 120 Z" fill="#475569" opacity="0.6" />
            
            {/* Departures / Arrivals Information Display Board */}
            <rect x="220" y="45" width="260" height="60" rx="6" fill="#020617" stroke="#a855f7" strokeWidth="1.5" />
            <text x="350" y="63" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">
              INTERNATIONAL STUDENT ARRIVALS
            </text>
            <text x="240" y="80" fill="#a7f3d0" fontSize="8" fontFamily="monospace">
              PK 786 LONDON HEATHROW · ARRIVED
            </text>
            <text x="240" y="93" fill="#a7f3d0" fontSize="8" fontFamily="monospace">
              EK 201 CHICAGO O\'HARE · ON TIME
            </text>

            {/* Two Young Brothers Meeting Warmly at Arrivals Gate (Strictly Male figures) */}
            
            {/* Brother 1: Incoming International Student with Luggage & Backpack */}
            <g transform="translate(180, 140)">
              {/* Wheeled Travel Suitcase */}
              <rect x="-35" y="60" width="30" height="50" rx="5" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
              <line x1="-20" y1="42" x2="-20" y2="60" stroke="#64748b" strokeWidth="3" />
              <circle cx="-30" cy="113" r="4" fill="#0f172a" />
              <circle cx="-10" cy="113" r="4" fill="#0f172a" />

              {/* Student Figure (Male) */}
              <circle cx="25" cy="20" r="14" fill="#f8fafc" />
              <path d="M14 14 Q25 7 36 14" fill="#047857" /> {/* Cap */}
              <path d="M18 28 Q25 36 32 28 Z" fill="#334155" />
              {/* Travel Jacket & Backpack Straps */}
              <path d="M8 36 Q25 33 42 36 L45 115 L5 115 Z" fill="#334155" />
              <path d="M12 40 L16 80" stroke="#f59e0b" strokeWidth="3" /> {/* Strap */}
            </g>

            {/* Brother 2: Local Welcoming Buddy holding "Welcome" sign & shaking hands */}
            <g transform="translate(320, 135)">
              <circle cx="30" cy="20" r="14" fill="#f1f5f9" />
              <path d="M18 14 Q30 7 42 14" fill="#10b981" /> {/* Green Cap */}
              <path d="M22 28 Q30 36 38 28 Z" fill="#1e293b" />
              <path d="M10 36 Q30 33 50 36 L52 120 L8 120 Z" fill="#f8fafc" /> {/* Clean White Kurta / Coat */}

              {/* Welcome Sign Tablet in Hand */}
              <rect x="52" y="55" width="48" height="35" rx="3" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
              <text x="76" y="70" textAnchor="middle" fill="#86efac" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
                WELCOME!
              </text>
              <text x="76" y="81" textAnchor="middle" fill="#ecfdf5" fontSize="6" fontFamily="sans-serif">
                mydeen.net
              </text>
              <line x1="52" y1="90" x2="52" y2="115" stroke="#94a3b8" strokeWidth="2.5" /> {/* Handle */}

              {/* Handshake greeting between the two brothers */}
              <path d="M-15 70 Q0 65 15 70" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
            </g>

            <rect x="25" y="295" width="250" height="26" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
            <text x="40" y="312" fill="#e9d5ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              TRAVEL ABROAD & BUDDY PROGRAM
            </text>
          </svg>
        </div>
      );
  }
}
