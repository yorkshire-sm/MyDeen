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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-white font-display">mydeen</span>
              <span className="text-emerald-500 font-bold text-xl font-display">.net</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The official higher education, university, and youth initiative of Dawateislami. Dedicated to cultivating upright character, academic excellence, and enduring brotherhood across campuses worldwide.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Global HQ: Faizan-e-Madina, University Road, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>youth@mydeen.net · universities@dawateislami.net</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Youth Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('university')} className="hover:text-emerald-400 transition-colors">
                  University & Campus Wing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-emerald-400 transition-colors">
                  Short & Inspirational Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-emerald-400 transition-colors">
                  LYF (English) & FOA (Urdu)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('library')} className="hover:text-emerald-400 transition-colors">
                  Youth Reading Library
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events')} className="hover:text-emerald-400 transition-colors">
                  Conventions & Halaqas
                </button>
              </li>
            </ul>
          </div>

          {/* Global Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Worldwide Reach
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('centers')} className="hover:text-emerald-400 transition-colors">
                  All Global Centers Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('database')} className="hover:text-emerald-400 transition-colors">
                  Country Zimmedars & Volunteers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('travel')} className="hover:text-emerald-400 transition-colors">
                  Traveling Abroad Support Desk
                </button>
              </li>
              <li>
                <button onClick={onOpenAmbassadorModal} className="hover:text-emerald-400 transition-colors">
                  Become a Campus Lead
                </button>
              </li>
            </ul>
          </div>

          {/* Official Islamic Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Core Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://www.dawateislami.net/quran" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>dawateislami.net/quran</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aboutmuhammad.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>aboutmuhammad.net (Seerah)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dawateislami.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Central Dawateislami Portal</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://daruliftaahlesunnat.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Dar-ul-Ifta Ahlesunnat (Fatwa)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} mydeen.net — Department of Universities & Youth, Dawateislami. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Non-political & purely non-profit Islamic initiative</span>
            <span>Serving youth worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
