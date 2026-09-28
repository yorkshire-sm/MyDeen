import React, { useState } from 'react';
import { CENTERS_DATA } from '../../data/mockData';
import { Center } from '../../types';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Search, Building2, ShieldCheck, Info } from 'lucide-react';

export default function CentersPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'UK & Europe', 'North America', 'Pakistan & South Asia', 'Middle East & Africa', 'Asia Pacific'];

  // Extract distinct countries
  const countries = ['All', ...Array.from(new Set(CENTERS_DATA.map(c => c.country))).sort()];

  // Extract distinct categories
  const categories = ['All', ...Array.from(new Set(CENTERS_DATA.map(c => c.category).filter(Boolean) as string[])).sort()];

  const filteredCenters = CENTERS_DATA.filter((center) => {
    const matchesRegion = selectedRegion === 'All' || center.region === selectedRegion;
    const matchesCountry = selectedCountry === 'All' || center.country === selectedCountry;
    const matchesCategory = selectedCategory === 'All' || center.category === selectedCategory;
    const matchesSearch = 
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (center.stateProvince && center.stateProvince.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (center.postalCode && center.postalCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesCountry && matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Building2 className="w-4 h-4" />
            <span>Official Network Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Global Centers & Addresses
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Verified international directory of <strong className="text-slate-900">Faizan-e-Madina</strong> Islamic Centers, university prayer facilities, and Dawateislami regional hub mosques worldwide with exact street addresses, contact details, and instant Google Maps directions.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, center name, country, postcode, or street address..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
              />
            </div>

            {/* Country Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedRegion('All');
                }}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === 'All' ? 'All Countries' : country}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div className="md:col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Types' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Results Counter */}
            <div className="md:col-span-2 text-right text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold tabular-nums">{filteredCenters.length}</span> Locations
            </div>
          </div>

          {/* Region Tabs */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1 overflow-x-auto pb-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  setSelectedCountry('All');
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedRegion === region
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between overflow-hidden shadow-xs ${
                center.isHQ 
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20' 
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="p-6">
                {/* Badge line */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
                    <span>{center.country}</span>
                    {center.stateProvince && (
                      <>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-600 font-normal">{center.stateProvince}</span>
                      </>
                    )}
                  </div>

                  {center.isHQ ? (
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-sm">
                      Global Headquarters
                    </span>
                  ) : (
                    <span className="text-slate-400 font-mono text-[10px]">{center.region}</span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display mb-1 leading-snug">
                  {center.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{center.city}{center.stateProvince ? `, ${center.stateProvince}` : ''}</p>

                {/* Address block */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 text-xs text-slate-700 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{center.address} {center.postalCode ? `· ${center.postalCode}` : ''}</span>
                  </div>

                  {center.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${center.phone.replace(/[^0-9+]/g, '')}`} className="font-mono text-slate-800 hover:text-emerald-700">
                        {center.phone}
                      </a>
                    </div>
                  )}

                  {center.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{center.email}</span>
                    </div>
                  )}

                  {center.verification && (
                    <div className="pt-1.5 border-t border-slate-200/70 flex items-center gap-1.5 text-[10px] text-emerald-800">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{center.verification}</span>
                    </div>
                  )}

                  {center.notes && (
                    <div className="flex items-start gap-1.5 text-[10px] text-slate-500 italic">
                      <Info className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                      <span>{center.notes}</span>
                    </div>
                  )}
                </div>

                {/* Facilities List */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                    Facilities & Features:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {center.facilities.map((fac, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm font-medium"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={center.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name + ', ' + center.address + ', ' + center.country)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-2.5 h-2.5 text-emerald-500" />
                </a>

                {center.sourceUrl ? (
                  <a
                    href={center.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-[11px]"
                  >
                    <span>Official Info</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                ) : (
                  <a
                    href="https://www.dawateislami.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-[11px]"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCenters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No centers match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the country or keyword filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
