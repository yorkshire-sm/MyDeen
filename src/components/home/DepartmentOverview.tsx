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
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:border-emerald-600/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Active Initiative</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We've Done or Being Done So Far (Milestones Tracker) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Track Record & Current Pipeline</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                What We\'ve Done & Ongoing Projects
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Quantified initiatives delivered by the Youth & Campus Wing worldwide
              </p>
            </div>

            {/* Filter buttons - interactive buttons conforming to Zero-Pill Discipline */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg shrink-0">
              {(['All', 'Completed', 'Ongoing', 'Upcoming'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === status
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Milestones List */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMilestones.map((item) => (
              <div 
                key={item.id}
                className="rounded-xl border border-slate-200/90 p-5 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-700">{item.category}</span>
                    <span className="font-mono text-[11px]">{item.quarter} {item.year}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 font-display mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-800 text-[11px]">
                    {item.impactMetric}
                  </span>

                  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
                    item.status === 'Completed' 
                      ? 'text-emerald-700' 
                      : item.status === 'Ongoing'
                      ? 'text-indigo-700'
                      : 'text-amber-700'
                  }`}>
                    {item.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {item.status === 'Ongoing' && <Clock className="w-3.5 h-3.5" />}
                    {item.status === 'Upcoming' && <CalendarDays className="w-3.5 h-3.5" />}
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action inside Department Overview */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/60 rounded-xl p-4 sm:p-5 border border-emerald-100">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-emerald-950 font-display">
                Want to bring a MyDeen study circle or workshop to your university?
              </h4>
              <p className="text-xs text-emerald-800/90 mt-0.5">
                Our central youth coordinators provide official materials, scholar guest speakers, and society affiliation support.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenAmbassadorModal}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Apply as Ambassador</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab('university')}
                className="px-3.5 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-100/60 rounded-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
