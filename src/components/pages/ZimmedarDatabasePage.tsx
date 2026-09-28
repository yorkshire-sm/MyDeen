import React, { useState } from 'react';
import { ZIMMEDAR_DATA } from '../../data/mockData';
import { Zimmedar } from '../../types';
import { Users2, Phone, Mail, GraduationCap, ChevronDown, ChevronUp, UserCheck, Search, ShieldCheck, HeartHandshake } from 'lucide-react';
import VolunteerSignUpModal from '../modals/VolunteerSignUpModal';

export default function ZimmedarDatabasePage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedZimmedarId, setExpandedZimmedarId] = useState<string | null>('zim-uk');
  const [activeVolunteerZimmedar, setActiveVolunteerZimmedar] = useState<Zimmedar | null>(null);

  const regions = ['All', 'UK & Europe', 'North America', 'Pakistan & South Asia', 'Middle East & Africa', 'Asia Pacific'];

  const filteredZimmedars = ZIMMEDAR_DATA.filter((zim) => {
    const matchesRegion = selectedRegion === 'All' || zim.region === selectedRegion;
    const matchesSearch =
      zim.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zim.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zim.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zim.volunteers.some(v => 
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.university && v.university.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesRegion && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedZimmedarId(expandedZimmedarId === id ? null : id);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Users2 className="w-4 h-4" />
            <span>Organizational Hierarchy & Field Leads</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Country Zimmedars & Volunteers Database
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Transparent directory of regional youth coordinators (Zimmedars) appointed by the Central Shura of Dawateislami, along with campus representatives and active volunteers serving university students under their guidance.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedRegion === region
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Zimmedar, volunteer, or campus..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
            />
          </div>
        </div>

        {/* Zimmedar List */}
        <div className="space-y-6">
          {filteredZimmedars.map((zim) => {
            const isExpanded = expandedZimmedarId === zim.id;

            return (
              <div
                key={zim.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                {/* Zimmedar Primary Row */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-emerald-800">{zim.country}</span>
                        <span>·</span>
                        <span className="font-mono text-slate-400">{zim.region}</span>
                        <span>·</span>
                        <span>{zim.city}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                          {zim.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Country Zimmedar</span>
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-700">
                        {zim.title}
                      </p>

                      <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                        {zim.departmentScope}
                      </p>
                    </div>

                    {/* Right Contacts & Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                      <div className="space-y-1 text-xs text-slate-600 text-left lg:text-right">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-emerald-600" />
                          <a href={`https://wa.me/${zim.phoneWhatsApp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-mono text-slate-900 hover:text-emerald-700 font-medium">
                            {zim.phoneWhatsApp}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{zim.email}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveVolunteerZimmedar(zim)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                        >
                          <HeartHandshake className="w-3.5 h-3.5" />
                          <span>Join Volunteer Wing</span>
                        </button>

                        <button
                          onClick={() => toggleExpand(zim.id)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          <span>{zim.volunteers.length} Campus Leads</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Volunteers Nested Table / Grid (Expandable) */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/70 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Active Campus Volunteers & Leads under {zim.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Coordinating local university chapters, study circles, and new student support
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        {zim.volunteers.length} Active Records
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {zim.volunteers.map((vol) => (
                        <div
                          key={vol.id}
                          className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
                        >
                          <div className="flex items-start justify-between">
                            <span className="font-bold text-slate-900 text-xs">{vol.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">Since {vol.joinedYear}</span>
                          </div>

                          <div className="text-[11px] text-emerald-800 font-medium">
                            {vol.role}
                          </div>

                          {vol.university && (
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                              <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span className="truncate">{vol.university}</span>
                            </div>
                          )}

                          <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-100 flex items-center justify-between">
                            <span>{vol.city} Chapter</span>
                            <span className="text-emerald-700 font-medium">Verified Active</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredZimmedars.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Users2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No leads found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the region filter or searching for another keyword.</p>
          </div>
        )}
      </div>

      {/* Volunteer Registration Modal */}
      <VolunteerSignUpModal
        zimmedar={activeVolunteerZimmedar}
        isOpen={!!activeVolunteerZimmedar}
        onClose={() => setActiveVolunteerZimmedar(null)}
      />
    </div>
  );
}
