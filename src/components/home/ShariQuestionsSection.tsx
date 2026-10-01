import React, { useState } from 'react';
import { SHARI_QUESTION_CATEGORIES } from '../../data/mockData';
import { HelpCircle, Clock, ShieldCheck, PlusCircle } from 'lucide-react';

interface ShariQuestionsSectionProps {
  onOpenAskModal: () => void;
}

export default function ShariQuestionsSection({ onOpenAskModal }: ShariQuestionsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(SHARI_QUESTION_CATEGORIES[0]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>JURISPRUDENCE &amp; YOUTH INQUIRIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Shar&apos;i Questions (Youth FAQ)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Addressing contemporary youth dilemmas in light of authentic Hanafi Fiqh, supervised by the qualified Muftis of Dar-ul-Ifta Ahlesunnat (Dawateislami).
            </p>
          </div>

          <div>
            <button
              onClick={onOpenAskModal}
              className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-bold rounded-2xl shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap min-h-[48px]"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Ask a Shar&apos;i Question</span>
            </button>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-10">
          {SHARI_QUESTION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-2xl transition-all whitespace-nowrap min-h-[42px] ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Centered Card matching screenshot */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-xs">
          
          {/* Clock Icon Box */}
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7" />
          </div>

          {/* Category Tag */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 block mb-2">
            {activeCategory}
          </span>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mb-3">
            Scholarly Review &amp; Verification in Progress
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
            The questions and verified Fatwa answers for this category are currently being indexed and finalized by the specialized research team of <strong className="text-slate-900 font-bold">Dar-ul-Ifta Ahlesunnat</strong>. Verified verdicts will be published here insha&apos;Allah.
          </p>

          {/* Green Callout Box */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-slate-600 text-left mb-8 max-w-xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p>
              Need an urgent ruling regarding university exams, prayer conditions, or career contracts? You can submit your inquiry directly to the Muftis.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenAskModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-bold rounded-2xl transition-colors shadow-xs min-h-[48px]"
            >
              Submit Your Question Now
            </button>

            <a
              href="https://daruliftaahlesunnat.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm sm:text-base font-semibold rounded-2xl transition-colors min-h-[48px] flex items-center justify-center bg-white"
            >
              Visit Central Dar-ul-Ifta
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
