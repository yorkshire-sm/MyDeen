import React, { useState } from 'react';
import { Globe2, MapPin, Building2, Users2, ArrowRight } from 'lucide-react';
import { NavTab } from '../layout/Navbar';
import { CENTERS_DATA, ZIMMEDAR_DATA } from '../../data/mockData';

interface PresenceSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export default function PresenceSection({ setActiveTab }: PresenceSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('UK & Europe');

  const regions = [
    {
      name: 'UK & Europe',
      countries: 'United Kingdom, Germany, Italy, Spain, France, Austria, Netherlands',
      universities: 'Aston, Birmingham, UCL, KCL, Manchester, Leeds, Frankfurt, TU Berlin, Milan',
      leadHub: 'Birmingham & Frankfurt',
      highlight: '48 Active Campus Circles · 16 Major Faizan-e-Madina Centers'
    },
    {
      name: 'North America',
      countries: 'United States & Canada',
      universities: 'UIC Chicago, UT Dallas, Houston, NYU, Rutgers, U of Toronto, McMaster, Calgary',
      leadHub: 'Chicago (IL) & Toronto (ON)',
      highlight: '32 Campus Initiatives · 12 Major State Centers'
    },
    {
      name: 'Pakistan & South Asia',
      countries: 'Pakistan (Global Headquarters), Bangladesh, Sri Lanka',
      universities: 'NED, KU, DUHS, Punjab University, UET, NUST, FAST, COMSATS',
      leadHub: 'Karachi (Bab-ul-Madina) & Lahore',
      highlight: '350+ Campus Units · Central Secretariat & Global Studios'
    },
    {
      name: 'Middle East & Africa',
      countries: 'United Arab Emirates, South Africa, Kenya, Tanzania',
      universities: 'UKZN Durban, Wits Johannesburg, University of Dubai',
      leadHub: 'Durban & Dubai',
      highlight: '24 Youth Centers & Active Humanitarian Food Relief Depots'
    },
    {
      name: 'Asia Pacific',
      countries: 'Australia, New Zealand, Malaysia, Hong Kong',
      universities: 'UNSW, Sydney, Melbourne, Monash, IIUM, Universiti Malaya',
      leadHub: 'Sydney & Kuala Lumpur',
      highlight: 'International student reception & buddy orientation networks'
    }
  ];

  const currentRegionData = regions.find(r => r.name === selectedRegion) || regions[0];

  // Centers in selected region
  const regionCenters = CENTERS_DATA.filter(c => c.region === selectedRegion);
  const regionZimmedars = ZIMMEDAR_DATA.filter(z => z.region === selectedRegion);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              <Globe2 className="w-4 h-4" />
              <span>Worldwide Footprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Our Global Presence Across 80+ Countries
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              From historic European universities to major North American campuses and our central headquarters in Pakistan, Dawateislami youth initiatives connect brothers wherever their academic journeys lead.
            </p>
          </div>

          {/* Quick Metrics Bar - Tabular numerals without static pill clutter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <div className="text-xl font-bold text-slate-900 font-display tabular-nums">80+</div>
              <div className="text-[11px] text-slate-500">Countries Active</div>
            </div>
            <div>
              <div className="text-xl font-bold text-emerald-700 font-display tabular-nums">350+</div>
              <div className="text-[11px] text-slate-500">Global Centers</div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 font-display tabular-nums">65+</div>
              <div className="text-[11px] text-slate-500">Campuses Partnered</div>
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-700 font-display tabular-nums">12,000+</div>
              <div className="text-[11px] text-slate-500">Youth Engaged</div>
            </div>
          </div>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 mb-8">
          {regions.map((region) => (
            <button
              key={region.name}
              onClick={() => setSelectedRegion(region.name)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedRegion === region.name
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Selected Region Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Region Summary & Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                  Regional Focus
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {currentRegionData.name} Division
                </h3>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  {currentRegionData.highlight}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">Active Countries:</span>
                  <span className="text-slate-800 font-medium">{currentRegionData.countries}</span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Partnered Universities & Colleges:</span>
                  <span className="text-slate-800 font-medium">{currentRegionData.universities}</span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Regional Youth Secretariat:</span>
                  <span className="text-slate-800 font-medium">{currentRegionData.leadHub}</span>
                </div>
              </div>

              {/* Zimmedar in this region */}
              {regionZimmedars.length > 0 && (
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1">Lead Regional Zimmedar:</span>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{regionZimmedars[0].name}</span>
                    <button
                      onClick={() => setActiveTab('database')}
                      className="text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      View Team →
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 block">{regionZimmedars[0].title}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('centers')}
                className="flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Browse All Centers Directory</span>
              </button>

              <button
                onClick={() => setActiveTab('database')}
                className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Users2 className="w-3.5 h-3.5" />
                <span>Zimmedar Team</span>
              </button>
            </div>
          </div>

          {/* Right: Key Centers in This Region */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Prominent Centers & Youth Hubs ({regionCenters.length})
                  </h4>
                  <p className="text-xs text-slate-500">
                    With full address, prayer halls, library and weekly halaqas
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('centers')}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>See All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-3">
                {regionCenters.slice(0, 3).map((center) => (
                  <div 
                    key={center.id}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-emerald-600/30 transition-all text-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm font-display flex items-center gap-1.5">
                          <span>{center.name}</span>
                          {center.isHQ && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-sm">
                              Global HQ
                            </span>
                          )}
                        </h5>
                        <p className="text-slate-500 text-[11px]">{center.city}, {center.country}</p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-600">{center.phone}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-slate-600 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{center.address}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200">
                      {center.facilities.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-[10px] text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-sm">
                          {f}
                        </span>
                      ))}
                      {center.facilities.length > 3 && (
                        <span className="text-[10px] text-slate-500">+{center.facilities.length - 3} more</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
