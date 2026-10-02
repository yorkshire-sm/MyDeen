import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, GraduationCap, BookOpen, Building2, Calendar, BookText, Users, Globe2, ArrowRight } from 'lucide-react';

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
  onOpenGetInvolved: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenGetInvolved
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 4 Primary streamlined links
  const primaryNav: { id: NavTab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Home', icon: Sparkles },
    { id: 'university', label: 'Campus Wing', icon: GraduationCap },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'centers', label: 'Global Centers', icon: Building2 },
  ];

  // More resources / community items
  const secondaryNav: { id: NavTab; label: string; desc: string; icon: React.ElementType }[] = [
    { id: 'events', label: 'Events & Halaqas', desc: 'Conventions, student retreats & weekly halaqas', icon: Calendar },
    { id: 'library', label: 'Youth Library', desc: 'Free verified Sunni literature & books', icon: BookText },
    { id: 'database', label: 'Zimmedars & Mentors', desc: 'Connect with local university leaders & mentors', icon: Users },
    { id: 'travel', label: 'Travel Abroad Desk', desc: 'Overseas student buddies & orientation network', icon: Globe2 },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = secondaryNav.some(item => item.id === activeTab);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('overview')}
              className="group flex items-center gap-2 text-left focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <span className="font-extrabold text-lg tracking-tighter">mD</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display flex items-baseline leading-none">
                  <span>mydeen</span>
                  <span className="text-emerald-600 font-semibold">.net</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase block -mt-0.5">
                  Youth & Universities
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Streamlined Navigation (Clean & uncluttered) */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
            {primaryNav.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs shadow-slate-900/5'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isSecondaryActive
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                <span>Community</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {secondaryNav.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleNavClick(sec.id)}
                        className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors ${
                          activeTab === sec.id
                            ? 'bg-emerald-50 text-emerald-900 font-semibold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{sec.label}</div>
                          <div className="text-xs text-slate-500 line-clamp-1">{sec.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={onOpenGetInvolved}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200 shrink-0" />
              <span className="whitespace-nowrap">Get Involved</span>
              <ArrowRight className="hidden sm:inline-block w-3.5 h-3.5 opacity-80 shrink-0" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl sm:rounded-2xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors min-w-[38px] sm:min-w-[44px] min-h-[38px] sm:min-h-[44px] flex items-center justify-center border border-slate-200/80 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern, Youth-Friendly Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 pb-1 block">
              Core Pages
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {primaryNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-base font-bold transition-all flex items-center gap-3.5 min-h-[50px] ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 pb-1 block">
              Community & Hubs
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {secondaryNav.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-2xl transition-all flex items-center justify-between min-h-[46px] ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-semibold">{sec.label}</span>
                    </div>
                    <span className="text-xs text-slate-400">View</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetInvolved();
              }}
              className="w-full text-center px-4 py-3.5 text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 min-h-[50px]"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Get Involved & Apply</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
