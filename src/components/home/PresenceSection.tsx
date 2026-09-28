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

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              <Globe2 className="w-4 h-4" />
              <span>Worldwide Footprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Our Global Presence Across 80+ Countries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              From historic European universities to major North American campuses and our central headquarters in Pakistan, Dawateislami youth initiatives connect brothers wherever their academic journeys lead.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="p-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">80+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Countries Active</div>
            </div>
            <div className="p-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-display tabular-nums">350+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Global Centers</div>
            </div>
            <div className="p-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tabular-nums">65+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Campuses Active</div>
            </div>
            <div className="p-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-700 font-display tabular-nums">12,000+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Youth Engaged</div>
            </div>
          </div>
        </div>

        {/* Region Selector Tabs - Easily scrollable */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 mb-8">
          {regions.map((region) => (
            <button
              key={region.name}
              onClick={() => setSelectedRegion(region.name)}
              className={`px-4 py-2.5 text-sm sm:text-xs font-semibold rounded-xl transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
                selectedRegion === region.name
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100 bg-slate-50'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Current Region Details & Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10">
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                Regional Focus Area
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {currentRegionData.name} Youth Operations
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700">
              <div>
                <strong className="text-slate-900 block text-xs sm:text-sm uppercase tracking-wide mb-1 font-semibold">Key Partner Campuses:</strong>
                <p className="text-slate-600">{currentRegionData.universities}</p>
              </div>

              <div>
                <strong className="text-slate-900 block text-xs sm:text-sm uppercase tracking-wide mb-1 font-semibold">Active Countries:</strong>
                <p className="text-slate-600">{currentRegionData.countries}</p>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                  {currentRegionData.highlight}
                </span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveTab('centers')}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>View All Centers in {currentRegionData.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Centers in Region */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display flex items-center justify-between">
              <span>Featured Centers in Region</span>
              <button 
                onClick={() => setActiveTab('centers')}
                className="text-xs sm:text-sm font-semibold text-emerald-700 hover:underline"
              >
                View all ({regionCenters.length})
              </button>
            </h4>

            <div className="space-y-3">
              {regionCenters.slice(0, 3).map((center) => (
                <div 
                  key={center.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-1">
                    <span className="font-semibold text-emerald-800">{center.country}</span>
                    <span className="font-mono text-xs">{center.city}</span>
                  </div>
                  <h5 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {center.name}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-1 mb-2">
                    {center.address}
                  </p>
                  <a
                    href={center.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name + ', ' + center.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1 py-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
