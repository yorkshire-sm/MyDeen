import React, { useState } from 'react';
import { MILESTONE_ACTIVITIES } from '../../data/mockData';
import { MilestoneActivity } from '../../types';
import { GraduationCap, Heart, Sparkles, BookCheck, ShieldCheck, CheckCircle2, Clock, CalendarDays, ArrowUpRight } from 'lucide-react';
import { NavTab } from '../layout/Navbar';

interface DepartmentOverviewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAmbassadorModal: () => void;
}

export default function DepartmentOverview({ setActiveTab, onOpenAmbassadorModal }: DepartmentOverviewProps) {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Ongoing' | 'Upcoming'>('All');

  const filteredMilestones = filter === 'All' 
    ? MILESTONE_ACTIVITIES 
    : MILESTONE_ACTIVITIES.filter(m => m.status === filter);

  const pillars = [
    {
      title: 'Academic Excellence with Taqwa',
      desc: 'Encouraging students to achieve the highest honors in science, medicine, engineering, law, and humanities while upholding steadfast prayer, honesty, and humility.',
      icon: GraduationCap,
      color: 'emerald'
    },
    {
      title: 'Spiritual Tarbiyah & Pure Character',
      desc: 'Purifying youth from destructive internal sicknesses (arrogance, jealousy, malice) through systematic Sunnah courses, Tahajjud reminders, and ethical halaqas.',
      icon: Heart,
      color: 'indigo'
    },
    {
      title: 'Campus Brotherhood & Mental Resilience',
      desc: 'Providing healthy companionship free from vulgarity, combating loneliness and modern anxiety through sincere student mentorship circles and brotherhood hikes.',
      icon: ShieldCheck,
      color: 'teal'
    },
    {
      title: 'Global Social Welfare & Relief',
      desc: 'Mobilizing youth volunteers for emergency humanitarian food relief, blood donation drives, winter warm packs, and local neighborhood charity under FGRF.',
      icon: BookCheck,
      color: 'amber'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Department Scope & Operations</span>
            <span className="text-slate-400">·</span>
            <span>Universities & Colleges Wing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Empowering Modern Students to Excel in Academia & Live the Sunnah
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            The Youth & Higher Education Department of Dawateislami works directly across colleges and university campuses in over 80 countries. We provide Muslim students with an intellectually rigorous and spiritually uplifting environment to thrive during their most formative academic years.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-emerald-600/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Active Initiative</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We've Done or Being Done So Far (Milestones Tracker) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Track Record & Current Pipeline</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                What We&apos;ve Done & What We&apos;re Doing
              </h3>
            </div>

            {/* Filter buttons with comfortable tap targets */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(['All', 'Completed', 'Ongoing', 'Upcoming'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap min-h-[40px] flex items-center ${
                    filter === status
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Milestones List */}
          <div className="divide-y divide-slate-100">
            {filteredMilestones.map((m) => (
              <div key={m.id} className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-emerald-800">{m.category}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {m.quarter} {m.year}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{m.impactMetric}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {m.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold ${
                    m.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : m.status === 'Ongoing'
                      ? 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {m.status}
                  </span>

                  <button
                    onClick={onOpenAmbassadorModal}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="Get involved"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
