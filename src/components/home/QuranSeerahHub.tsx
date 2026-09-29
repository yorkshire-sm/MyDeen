import React from 'react';
import { QURAN_SEERAH_HIGHLIGHTS } from '../../data/mockData';
import { BookOpen, ExternalLink, Sparkles, Heart } from 'lucide-react';

export default function QuranSeerahHub() {
  const { quranPortalUrl, seerahPortalUrl } = QURAN_SEERAH_HIGHLIGHTS;

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Anchor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            The Holy Qur&apos;an &amp; The Blessed Seerah ﷺ
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Rooting student ambitions in divine revelation and the living example of the Beloved Messenger of Allah ﷺ.
          </p>
        </div>

        {/* 2 Flagship Interactive Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Quran Portal Card */}
          <div className="group rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  quran.dawateislami.net
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-emerald-400 transition-colors">
                Online Quran &amp; Tafseer Portal
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Complete 30 Paras with Kanzul Iman &amp; Kanzul Irfan translations, audio recitations, and student tajweed verification.
              </p>
            </div>

            <a
              href={quranPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <span>Explore Quran Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Seerah Portal Card */}
          <div className="group rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 hover:border-teal-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-500/30">
                  aboutmuhammad.net
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-teal-400 transition-colors">
                The Sublime Seerah of Prophet Muhammad ﷺ
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Discover the character, mercy, and youth-oriented wisdom of the Holy Prophet ﷺ in contemporary English.
              </p>
            </div>

            <a
              href={seerahPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-sm sm:text-base font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20"
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
