import React from 'react';
import { QURAN_SEERAH_HIGHLIGHTS } from '../../data/mockData';
import { BookOpen, ExternalLink, Sparkles, Heart, Quote } from 'lucide-react';

export default function QuranSeerahHub() {
  const { quranPortalUrl, seerahPortalUrl, featuredVerse, youthInSeerah, quranFeatures } = QURAN_SEERAH_HIGHLIGHTS;

  return (
    <section className="py-12 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Foundational Light</span>
            <span className="text-slate-600">·</span>
            <span>Quran & Seerah Integration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
            The Holy Qur&apos;an & The Blessed Seerah of Prophet Muhammad ﷺ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every initiative at mydeen.net is rooted in divine revelation and the living example of the Beloved Messenger of Allah ﷺ. Explore our two global knowledge portals below for verified translations, commentary, and life lessons.
          </p>
        </div>

        {/* Two Flagship Portals Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {/* dawateislami.net/quran */}
          <div className="bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  dawateislami.net/quran
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                Online Quran Learning & Tafseer Portal
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Direct access to the complete 30 Paras with Kanzul Iman & Kanzul Irfan translations, comprehensive Tafseer Sirat-ul-Jinan, multi-Qari audio recitations, and student tajweed verification.
              </p>

              <div className="space-y-2.5 mb-6 text-sm text-slate-300">
                {quranFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2"></span>
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
              className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md min-h-[48px]"
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
                <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-500/30">
                  aboutmuhammad.net
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                The Blessed Seerah: Life, Mercy & Character
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Discover the sublime character of Prophet Muhammad ﷺ in clear English. An authoritative, referenced resource explaining his mercy toward humanity, children, students, and youth.
              </p>

              {/* Quote box */}
              <div className="bg-indigo-950/50 border border-indigo-500/20 rounded-xl p-4 sm:p-5 mb-6 relative">
                <Quote className="w-5 h-5 text-indigo-400/40 absolute top-3 right-3" />
                <p className="text-sm sm:text-base text-indigo-200 italic leading-relaxed">
                  &ldquo;The best of you are those who have the most excellent character and manners.&rdquo;
                </p>
                <span className="text-xs text-indigo-300/80 block mt-1 font-mono">
                  — Sahih Bukhari
                </span>
              </div>

              <div className="space-y-2 mb-6 text-sm text-slate-300">
                <p className="font-semibold text-indigo-300">Featured Youth in Seerah:</p>
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">{youthInSeerah[0]?.name}: </strong>
                  <span>{youthInSeerah[0]?.lesson}</span>
                </div>
              </div>
            </div>

            <a
              href={seerahPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm sm:text-base font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md min-h-[48px]"
            >
              <span>Explore aboutmuhammad.net</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
