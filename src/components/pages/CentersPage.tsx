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
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Building2 className="w-4 h-4" />
            <span>Official Network Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Global Centers & Addresses
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Verified international directory of <strong className="text-slate-900">Faizan-e-Madina</strong> Islamic Centers, university prayer facilities, and Dawateislami regional hub mosques worldwide with exact street addresses, contact details, and instant Google Maps directions.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input - 48px height, 16px font to prevent mobile zoom */}
            <div className="md:col-span-5 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, center, country, or postcode..."
                className="w-full pl-11 pr-4 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white min-h-[48px]"
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
                className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white min-h-[48px]"
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
                className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white min-h-[48px]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Types' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Results Counter */}
            <div className="md:col-span-2 text-left md:text-right text-sm font-semibold text-slate-600 pt-1 md:pt-0">
              Showing <span className="text-slate-900 font-bold tabular-nums">{filteredCenters.length}</span> Locations
            </div>
          </div>

          {/* Region Tabs - Easily scrollable horizontally on mobile */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1.5">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  setSelectedCountry('All');
                }}
                className={`px-4 py-2 text-sm sm:text-xs font-semibold rounded-xl transition-colors whitespace-nowrap min-h-[40px] flex items-center ${
                  selectedRegion === region
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 bg-slate-50'
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
              <div className="p-5 sm:p-6">
                {/* Badge line */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-2.5">
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
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-md text-xs">
                      Global Headquarters
                    </span>
                  ) : (
                    <span className="text-slate-400 font-mono text-xs">{center.region}</span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-1.5 leading-snug">
                  {center.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{center.city}{center.stateProvince ? `, ${center.stateProvince}` : ''}</p>

                {/* Address block with clear font sizes */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2.5 text-sm text-slate-700 mb-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{center.address} {center.postalCode ? `· ${center.postalCode}` : ''}</span>
                  </div>

                  {center.phone && (
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <a href={`tel:${center.phone.replace(/[^0-9+]/g, '')}`} className="font-mono text-slate-800 hover:text-emerald-700 font-medium py-0.5">
                        {center.phone}
                      </a>
                    </div>
                  )}

                  {center.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{center.email}</span>
                    </div>
                  )}

                  {center.verification && (
                    <div className="pt-2 border-t border-slate-200/70 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{center.verification}</span>
                    </div>
                  )}

                  {center.notes && (
                    <div className="flex items-start gap-2 text-xs text-slate-600 italic">
                      <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{center.notes}</span>
                    </div>
                  )}
                </div>

                {/* Facilities List */}
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 block mb-2">
                    Facilities & Features:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {center.facilities.map((fac, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons with generous touch targets */}
              <div className="p-4 sm:px-6 sm:py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-sm gap-2">
                <a
                  href={center.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name + ', ' + center.address + ', ' + center.country)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 min-h-[44px] py-1 px-2 rounded-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                </a>

                {center.sourceUrl ? (
                  <a
                    href={center.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 flex items-center gap-1 text-xs sm:text-sm font-medium min-h-[44px] py-1 px-2 rounded-lg"
                  >
                    <span>Official Info</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ) : (
                  <a
                    href="https://www.dawateislami.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 flex items-center gap-1 text-xs sm:text-sm font-medium min-h-[44px] py-1 px-2 rounded-lg"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCenters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No centers match your search</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting the country or keyword filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
