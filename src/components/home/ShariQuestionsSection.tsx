import React, { useState } from 'react';
import { SHARI_QUESTION_CATEGORIES } from '../../data/mockData';
import { HelpCircle, Clock, ShieldCheck, PlusCircle } from 'lucide-react';

interface ShariQuestionsSectionProps {
  onOpenAskModal: () => void;
}

export default function ShariQuestionsSection({ onOpenAskModal }: ShariQuestionsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(SHARI_QUESTION_CATEGORIES[0]);

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Jurisprudence & Youth Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Shar&apos;i Questions (Youth FAQ)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Addressing contemporary youth dilemmas in light of authentic Hanafi Fiqh, supervised by the qualified Muftis of Dar-ul-Ifta Ahlesunnat (Dawateislami).
            </p>
          </div>

          <div>
            <button
              onClick={onOpenAskModal}
              className="w-full sm:w-auto px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px]"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Ask a Shar&apos;i Question</span>
            </button>
          </div>
        </div>

        {/* Category Tabs - Scrollable */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 mb-8">
          {SHARI_QUESTION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-sm sm:text-xs font-semibold rounded-xl transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 bg-white border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* State Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7" />
          </div>

          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-800 block mb-1">
            {activeCategory}
          </span>

          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-display mb-2">
            Scholarly Review & Verification in Progress
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            The questions and verified Fatwa answers for this category are currently being indexed and finalized by the specialized research team of <span className="font-semibold text-slate-800">Dar-ul-Ifta Ahlesunnat</span>. Verified verdicts will be published here insha&apos;Allah.
          </p>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-600 text-left mb-6">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
            <p>
              Need an urgent ruling regarding university exams, prayer conditions, or career contracts? You can submit your inquiry directly to the Muftis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenAskModal}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors shadow-xs min-h-[48px]"
            >
              Submit Your Question Now
            </button>
            <a
              href="https://daruliftaahlesunnat.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm sm:text-base font-medium rounded-xl transition-colors min-h-[48px] flex items-center justify-center"
            >
              Visit Central Dar-ul-Ifta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
