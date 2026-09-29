import React, { useState } from 'react';
import { MILESTONE_ACTIVITIES } from '../../data/mockData';
import { GraduationCap, Heart, Sparkles, ShieldCheck, BookCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavTab } from '../layout/Navbar';

interface DepartmentOverviewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenGetInvolved: () => void;
}

export default function DepartmentOverview({ setActiveTab, onOpenGetInvolved }: DepartmentOverviewProps) {
  const pillars = [
    {
      title: 'Academic Honors with Taqwa',
      desc: 'Achieving excellence in medicine, engineering, CS, law, and business while keeping Salah and moral honesty steadfast.',
      tag: 'Academic Focus',
      icon: GraduationCap,
      color: 'emerald',
      actionText: 'Explore Campus Wing',
      tab: 'university' as NavTab
    },
    {
      title: 'Real Campus Brotherhood',
      desc: 'A positive social circle free from vulgarity, alcohol, and anxiety—combating student loneliness through true companionship.',
      tag: 'Mentorship',
      icon: Heart,
      color: 'teal',
      actionText: 'Join Halaqa',
      tab: 'university' as NavTab
    },
    {
      title: 'Free Structured Courses',
      desc: 'From short 4-week Salah crash courses to our comprehensive English LYF & Urdu FOA certifications.',
      tag: 'Islamic Education',
      icon: BookCheck,
      color: 'indigo',
      actionText: 'Browse Courses',
      tab: 'courses' as NavTab
    },
    {
      title: 'Global Travel & Support',
      desc: 'Moving abroad for studies? Connect with our worldwide network of student buddies and verified local centers.',
      tag: 'Global Solidarity',
      icon: ShieldCheck,
      color: 'purple',
      actionText: 'Find Centers',
      tab: 'centers' as NavTab
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Initiatives</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Everything a Muslim Student Needs to Thrive.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            We provide university and college students with an inspiring community, free classical Islamic education, and brotherhood across campuses worldwide.
          </p>
        </div>

        {/* 4 Clean, Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    pillar.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    pillar.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                    pillar.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
                    {pillar.tag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => setActiveTab(pillar.tab)}
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Streamlined Milestones & Impact Banner (Clean, not cluttered) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Proven Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Over 12,000+ Young Brothers Mentored Globally
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From organizing national youth conventions in the UK to delivering emergency community food packs and weekly campus halaqas, the Dawateislami youth movement is active in your city.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => setActiveTab('university')}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>View Campus Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGetInvolved}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-2xl transition-all border border-white/15 min-h-[48px] flex items-center justify-center"
              >
                <span>Apply as Ambassador</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
