import React from 'react';
import { QURAN_SEERAH_HIGHLIGHTS } from '../../data/mockData';
import { BookOpen, ExternalLink, Sparkles, Heart, Quote } from 'lucide-react';

export default function QuranSeerahHub() {
  const { quranPortalUrl, seerahPortalUrl, youthInSeerah, quranFeatures } = QURAN_SEERAH_HIGHLIGHTS;
  const featuredSahabi = youthInSeerah[0];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left-aligned as in the design */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>FOUNDATIONAL LIGHT</span>
            <span className="text-slate-500">·</span>
            <span>QURAN &amp; SEERAH INTEGRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
            The Holy Qur&apos;an &amp; The Blessed Seerah of Prophet Muhammad ﷺ
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Every initiative at mydeen.net is rooted in divine revelation and the living example of the Beloved Messenger of Allah ﷺ. Explore our two global knowledge portals below for verified translations, commentary, and life lessons.
          </p>
        </div>

        {/* Two Flagship Knowledge Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Card: dawateislami.net/quran */}
          <div className="bg-[#051b19] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Header row with Icon and Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-500/30">
                  dawateislami.net/quran
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                Online Quran Learning &amp; Tafseer Portal
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Direct access to the complete 30 Paras with Kanzul Iman &amp; Kanzul Irfan translations, comprehensive Tafseer Sirat-ul-Jinan, multi-Qari audio recitations, and student tajweed verification.
              </p>

              {/* Bullet Features */}
              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-300">
                {quranFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <div className="leading-relaxed">
                      <strong className="text-emerald-400 font-semibold">{feat.title}: </strong>
                      <span>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <a
              href={quranPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#00a651] hover:bg-[#009245] text-white text-sm sm:text-base font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
            >
              <span>Explore dawateislami.net/quran</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right Card: aboutmuhammad.net */}
          <div className="bg-[#0e112a] border border-indigo-900/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Header row with Icon and Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-950/90 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-lg border border-indigo-500/30">
                  aboutmuhammad.net
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                The Blessed Seerah: Life, Mercy &amp; Character
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Discover the sublime character of Prophet Muhammad ﷺ in clear English. An authoritative, referenced resource explaining his mercy toward humanity, children, students, and youth.
              </p>

              {/* Quote Box with decorative quote icon */}
              <div className="bg-[#141838] border border-indigo-800/40 rounded-2xl p-5 mb-5 relative">
                <Quote className="w-6 h-6 text-indigo-400/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-indigo-100 italic leading-relaxed pr-6">
                  &ldquo;The best of you are those who have the most excellent character and manners.&rdquo;
                </p>
                <span className="text-xs text-indigo-300/80 block mt-2 font-mono">
                  — Sahih Bukhari
                </span>
              </div>

              {/* Featured Youth in Seerah */}
              <div className="mb-8">
                <span className="text-xs sm:text-sm font-semibold text-indigo-400 block mb-1">
                  Featured Youth in Seerah:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white font-bold">{featuredSahabi.name}: </strong>
                  <span>{featuredSahabi.lesson}</span>
                </p>
              </div>
            </div>

            {/* Bottom Button */}
            <a
              href={seerahPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#5145cd] hover:bg-[#4338ca] text-white text-sm sm:text-base font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/50"
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
