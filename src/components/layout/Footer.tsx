import React from 'react';
import { NavTab } from './Navbar';
import { Heart, Globe2, BookOpen, ExternalLink, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAmbassadorModal: () => void;
  onOpenTravelModal: () => void;
}

export default function Footer({ setActiveTab, onOpenAmbassadorModal, onOpenTravelModal }: FooterProps) {
  const handleNav = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-12 sm:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-white font-display">mydeen</span>
              <span className="text-emerald-500 font-bold text-2xl font-display">.net</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The official higher education, university, and youth initiative of Dawateislami. Dedicated to cultivating upright character, academic excellence, and enduring brotherhood across campuses worldwide.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Global HQ: Faizan-e-Madina, University Road, Karachi, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="break-all">youth@mydeen.net · universities@dawateislami.net</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Youth Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('university')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  University & Campus Wing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Short & Inspirational Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  LYF (English) & FOA (Urdu)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('library')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Youth Reading Library
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Conventions & Halaqas
                </button>
              </li>
            </ul>
          </div>

          {/* Global Network */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Worldwide Reach
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('centers')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  All Global Centers Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('database')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Country Zimmedars & Volunteers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('travel')} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Traveling Abroad Support Desk
                </button>
              </li>
              <li>
                <button onClick={onOpenAmbassadorModal} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Become a Campus Lead
                </button>
              </li>
              <li>
                <button onClick={onOpenTravelModal} className="hover:text-emerald-400 transition-colors py-1 inline-flex items-center min-h-[36px]">
                  Find an Overseas Buddy
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Official Platforms
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.dawateislami.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>dawateislami.net</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://quran.dawateislami.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>Online Quran Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://aboutmuhammad.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>aboutmuhammad.net</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://madanichannel.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>Madani Channel TV</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://lyfonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>LYF Online (lyfonline.com)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://faizanonline.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>Faizan Online Academy (FOA)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.fatwaqa.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>FatwaQA Portal (fatwaqa.com)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://fgrf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[36px]"
                >
                  <span>FGRF Humanitarian Relief</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} mydeen.net — Dawateislami Youth & Higher Education Department. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span>Non-political</span>
            <span>·</span>
            <span>Educational</span>
            <span>·</span>
            <span>Sunni Ahlesunnat Wal Jama&apos;at</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
