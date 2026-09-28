import React, { useState } from 'react';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';

export type NavTab = 
  | 'overview' 
  | 'university' 
  | 'courses' 
  | 'centers' 
  | 'library' 
  | 'database' 
  | 'events' 
  | 'travel';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenAmbassadorModal: () => void;
  onOpenTravelModal: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenAmbassadorModal,
  onOpenTravelModal
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'university', label: 'University & Campus' },
    { id: 'courses', label: 'Courses' },
    { id: 'centers', label: 'Global Centers' },
    { id: 'library', label: 'Youth Library' },
    { id: 'database', label: 'Zimmedars & Team' },
    { id: 'events', label: 'Events' },
    { id: 'travel', label: 'Travel Abroad' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('overview')}
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-1.5 focus:outline-hidden"
            >
              <span className="text-emerald-700">mydeen</span>
              <span className="text-slate-400 font-normal">.net</span>
            </button>
          </div>

          {/* Zone 2: 4-6 clean single-line nav links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {navItems.slice(0, 7).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap text-xs font-semibold ${
                    isActive
                      ? 'text-emerald-700 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenTravelModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap border border-slate-200"
              title="Student Travel & Contact Network"
            >
              <Globe className="w-3.5 h-3.5 text-purple-600" />
              <span>Travel Connect</span>
            </button>

            <button
              onClick={onOpenAmbassadorModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Campus Ambassador</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTravelModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-medium text-purple-900 bg-purple-50 rounded-lg border border-purple-200"
            >
              ✈️ Traveling Abroad / International Students Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
