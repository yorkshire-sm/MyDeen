import React from 'react';
import { PRACTICE_GUIDES, PracticeGuide } from '../../data/practiceGuidesData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface EssentialPracticesSectionProps {
  onOpenGuide: (guide: PracticeGuide) => void;
}

export default function EssentialPracticesSection({ onOpenGuide }: EssentialPracticesSectionProps) {
  const guidesList: PracticeGuide[] = [
    PRACTICE_GUIDES.salah,
    PRACTICE_GUIDES.wudu,
    PRACTICE_GUIDES.ghusl
  ];

  return (
    <section className="py-14 sm:py-20 bg-amber-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-3 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Essential Islamic Practices</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Step-by-Step Practical Worship Guides
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear, authenticated step-by-step instructions on performing Salah, Wudu, and Ghusl according to Sunni Hanafi jurisprudence for youth and new Muslims.
          </p>
        </div>

        {/* 3 Featured Cards Matching Screenshot & Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {guidesList.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-center relative group"
            >
              {/* Top Emerald Accent Stripe */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-600 group-hover:h-2 transition-all duration-300" />

              <div>
                {/* 3D Icon / Emoji */}
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-5xl select-none transform group-hover:scale-105 transition-transform duration-300">
                  <span role="img" aria-label={guide.title}>
                    {guide.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-teal-800 font-display mb-3">
                  {guide.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {guide.shortDesc}
                </p>
              </div>

              <div>
                {/* Badge Pill */}
                <div className="mb-4">
                  <span className="inline-block w-full py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold tracking-wide">
                    {guide.badge}
                  </span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onOpenGuide(guide)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-sm font-semibold transition-all shadow-2xs flex items-center justify-center gap-1.5 group-hover:border-emerald-500"
                >
                  <span>{guide.buttonText}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
