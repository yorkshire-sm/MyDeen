import React from 'react';
import { X, GraduationCap, Globe, HeartHandshake, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAmbassador: () => void;
  onSelectTravel: () => void;
  onSelectAsk: () => void;
  onSelectVolunteer?: () => void;
}

export default function GetInvolvedModal({
  isOpen,
  onClose,
  onSelectAmbassador,
  onSelectTravel,
  onSelectAsk,
}: GetInvolvedModalProps) {
  if (!isOpen) return null;

  const options = [
    {
      title: 'Become a Campus Ambassador',
      desc: 'Lead student halaqas, organize ISOC stalls, and represent MyDeen on your campus.',
      icon: GraduationCap,
      color: 'emerald',
      badge: 'Most Popular',
      action: () => {
        onClose();
        onSelectAmbassador();
      }
    },
    {
      title: 'Student Travel Abroad Network',
      desc: 'Moving to a new city or country? Connect with local student buddies and verified centers.',
      icon: Globe,
      color: 'purple',
      badge: 'Global Care',
      action: () => {
        onClose();
        onSelectTravel();
      }
    },
    {
      title: 'Ask a Shar\'i Question',
      desc: 'Submit your university, career, or personal dilemmas to verified Muftis of Dar-ul-Ifta.',
      icon: HelpCircle,
      color: 'amber',
      badge: 'Free Fatwa',
      action: () => {
        onClose();
        onSelectAsk();
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join The Youth Movement</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                How would you like to get involved?
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Options list */}
        <div className="p-6 space-y-3.5 bg-slate-50/50">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <button
                key={i}
                onClick={opt.action}
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500/60 hover:shadow-md hover:shadow-emerald-500/5 transition-all group flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  opt.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                  opt.color === 'purple' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                  'bg-amber-50 text-amber-700 border border-amber-100'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {opt.title}
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {opt.desc}
                  </p>
                </div>
                <div className="self-center text-slate-300 group-hover:text-emerald-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            Official higher education network of Dawateislami · Free & non-profit
          </p>
        </div>
      </div>
    </div>
  );
}
