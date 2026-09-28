import React from 'react';
import { QURAN_SEERAH_HIGHLIGHTS } from '../../data/mockData';
import { BookOpen, ExternalLink, Sparkles, Heart, Quote } from 'lucide-react';

export default function QuranSeerahHub() {
  const { quranPortalUrl, seerahPortalUrl, featuredVerse, youthInSeerah, quranFeatures } = QURAN_SEERAH_HIGHLIGHTS;

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Foundational Light</span>
            <span className="text-slate-600">·</span>
            <span>Quran & Seerah Integration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
            The Holy Qur\'an & The Blessed Seerah of Prophet Muhammad ﷺ
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Every initiative at mydeen.net is rooted in divine revelation and the living example of the Beloved Messenger of Allah ﷺ. Explore our two global knowledge portals below for verified translations, commentary, and life lessons.
          </p>
        </div>

        {/* Two Flagship Portals Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* dawateislami.net/quran */}
          <div className="bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-500/30">
                  dawateislami.net/quran
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                Online Quran Learning & Tafseer Portal
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Direct access to the complete 30 Paras with Kanzul Iman & Kanzul Irfan translations, comprehensive Tafseer Sirat-ul-Jinan, multi-Qari audio recitations, and student tajweed verification.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                {quranFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                    <div>
                      <strong className="text-emerald-300 font-semibold">{feat.title}: </strong>
                      <span>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={quranPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Explore dawateislami.net/quran</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* aboutmuhammad.net */}
          <div className="bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded-sm border border-indigo-500/30">
                  aboutmuhammad.net
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                The Blessed Seerah: Life, Mercy & Character
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Discover the sublime character of Prophet Muhammad ﷺ in clear English. An authoritative, referenced resource explaining his mercy toward humanity, children, students, and youth.
              </p>

              {/* Quote box */}
              <div className="bg-indigo-950/50 border border-indigo-500/20 rounded-xl p-4 mb-6 relative">
                <Quote className="w-5 h-5 text-indigo-400/40 absolute top-2 right-2" />
                <p className="text-xs text-indigo-200 italic leading-relaxed">
                  “The best of you are those who have the most excellent character and manners.”
                </p>
                <span className="text-[10px] text-indigo-300/80 block mt-1 font-mono">
                  — Sahih Bukhari
                </span>
              </div>
            </div>

            <a
              href={seerahPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Visit aboutmuhammad.net</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Youth in the Seerah Spotlight */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Historical Inspiration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Youth in the Seerah of Prophet Muhammad ﷺ
            </h3>
            <p className="text-xs text-slate-400">
              The early Muslim community was built upon the backs of courageous, sincere young people who led armies, mastered sciences, and sacrificed worldly luxuries for eternal purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {youthInSeerah.map((person, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-emerald-400 font-display mb-1">
                    {person.name}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono block mb-2">
                    {person.ageAtAcceptance}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {person.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Ayat box */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-emerald-400 mb-1">
                {featuredVerse.arabic}
              </div>
              <p className="text-xs text-slate-300 font-medium italic">
                {featuredVerse.translation}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xl">
                {featuredVerse.reflection}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={quranPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Read Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
