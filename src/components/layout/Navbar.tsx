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
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('overview')}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-1.5 focus:outline-hidden min-h-[44px]"
            >
              <span className="text-emerald-700">mydeen</span>
              <span className="text-slate-400 font-normal">.net</span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {navItems.slice(0, 7).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-colors whitespace-nowrap text-sm font-semibold min-h-[44px] flex items-center ${
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

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenTravelModal}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap border border-slate-200 min-h-[40px]"
              title="Student Travel & Contact Network"
            >
              <Globe className="w-4 h-4 text-purple-600" />
              <span>Travel Connect</span>
            </button>

            <button
              onClick={onOpenAmbassadorModal}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap min-h-[40px]"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden xs:inline">Campus </span>Ambassador
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl space-y-2 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors min-h-[48px] flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTravelModal();
              }}
              className="w-full text-center px-4 py-3 text-sm sm:text-base font-semibold text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 min-h-[48px] flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-purple-600" />
              <span>Travel Connect Desk</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAmbassadorModal();
              }}
              className="w-full text-center px-4 py-3 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs min-h-[48px] flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply as Campus Ambassador</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
