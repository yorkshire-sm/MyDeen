import React, { useState } from 'react';
import { Globe2, MapPin, Building2, ArrowRight } from 'lucide-react';
import { NavTab } from '../layout/Navbar';
import { CENTERS_DATA } from '../../data/mockData';

interface PresenceSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export default function PresenceSection({ setActiveTab }: PresenceSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('UK & Europe');

  const regions = [
    {
      name: 'UK & Europe',
      universities: 'Aston, Birmingham, UCL, KCL, Manchester, Leeds, Frankfurt, Milan',
      leadHub: 'Birmingham & Frankfurt',
      stats: '48 Campus Circles · 16 Centers'
    },
    {
      name: 'North America',
      universities: 'UIC Chicago, UT Dallas, Houston, NYU, Rutgers, U of Toronto',
      leadHub: 'Chicago (IL) & Toronto (ON)',
      stats: '32 Campus Circles · 12 Centers'
    },
    {
      name: 'Pakistan & South Asia',
      universities: 'NED, KU, DUHS, Punjab University, UET, NUST, FAST',
      leadHub: 'Karachi (HQ) & Lahore',
      stats: '350+ Campus Units · Central Studios'
    },
    {
      name: 'Middle East & Africa',
      universities: 'UKZN Durban, Wits Johannesburg, University of Dubai',
      leadHub: 'Durban & Dubai',
      stats: '24 Youth Centers & Relief Depots'
    },
    {
      name: 'Asia Pacific',
      universities: 'UNSW, Sydney, Melbourne, Monash, IIUM, Universiti Malaya',
      leadHub: 'Sydney & Kuala Lumpur',
      stats: 'Student Reception & Buddy Networks'
    }
  ];

  const currentRegion = regions.find(r => r.name === selectedRegion) || regions[0];
  const sampleCenters = CENTERS_DATA.filter(c => c.region === selectedRegion).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Worldwide Brotherhood</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              A Global Network Wherever You Study
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Connect with fellow Muslim students and verified Dawateislami centers across the UK, North America, Europe, Africa, and Asia.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 sm:p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">80+</div>
              <div className="text-xs text-slate-500 font-medium">Countries</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display tabular-nums">350+</div>
              <div className="text-xs text-slate-500 font-medium">Global Centers</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">65+</div>
              <div className="text-xs text-slate-500 font-medium">Campuses</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-display tabular-nums">12K+</div>
              <div className="text-xs text-slate-500 font-medium">Youth Reached</div>
            </div>
          </div>
        </div>

        {/* Region Pills Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {regions.map((reg) => (
            <button
              key={reg.name}
              onClick={() => setSelectedRegion(reg.name)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[42px] ${
                selectedRegion === reg.name
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {reg.name}
            </button>
          ))}
        </div>

        {/* Region Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {currentRegion.name}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {currentRegion.stats}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Campuses & Cities:
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {currentRegion.universities}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Primary Coordination Hub:
                </span>
                <p className="text-sm text-slate-600">
                  {currentRegion.leadHub}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('centers')}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-2xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
                >
                  <span>Browse All Centers in {currentRegion.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Sample Centers */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Sample Hubs in {currentRegion.name}:
              </span>
              {sampleCenters.map((c) => (
                <div 
                  key={c.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {c.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">
                      {c.address}, {c.city}
                    </p>
                  </div>
                  <a
                    href={c.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ' ' + c.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs"
                  >
                    Directions
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
