import React, { useState } from 'react';
import { SHARI_QUESTION_CATEGORIES } from '../../data/mockData';
import { HelpCircle, Clock, PlusCircle, ArrowRight } from 'lucide-react';

interface ShariQuestionsSectionProps {
  onOpenAskModal: () => void;
}

export default function ShariQuestionsSection({ onOpenAskModal }: ShariQuestionsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(SHARI_QUESTION_CATEGORIES[0]);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs sm:text-sm font-semibold mb-2 border border-amber-100">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Scholarly Guidance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Youth Shar&apos;i Inquiries &amp; Fatwa Desk
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Supervised by the qualified Muftis of Dar-ul-Ifta Ahlesunnat (Dawateislami).
              </p>
            </div>

            <button
              onClick={onOpenAskModal}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 min-h-[48px]"
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask a Shar&apos;i Question</span>
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-5 border-b border-slate-200/60">
            {SHARI_QUESTION_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] ${
                  activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Clean Information Card */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <p>
                Have questions regarding exams, campus prayer, student jobs, or relationships? Receive an authentic Hanafi ruling.
              </p>
            </div>

            <a
              href="https://daruliftaahlesunnat.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-1.5 shrink-0"
            >
              <span>Visit Central Dar-ul-Ifta</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
