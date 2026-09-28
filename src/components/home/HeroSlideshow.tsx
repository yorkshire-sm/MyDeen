import React, { useState, useEffect } from 'react';
import { SLIDESHOW_ACTIVITIES } from '../../data/mockData';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, MapPin, Users, Sparkles, Image as ImageIcon } from 'lucide-react';
import { NavTab } from '../layout/Navbar';
import SlideMockupImage from './SlideMockupImage';

interface HeroSlideshowProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAmbassadorModal: () => void;
  onOpenTravelModal: () => void;
}

export default function HeroSlideshow({ setActiveTab, onOpenAmbassadorModal, onOpenTravelModal }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const total = SLIDESHOW_ACTIVITIES.length;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, total]);

  const slide = SLIDESHOW_ACTIVITIES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  // Color theme gradients for aesthetic visual backdrops
  const themeGradients = {
    emerald: 'from-emerald-950 via-slate-900 to-emerald-900',
    indigo: 'from-indigo-950 via-slate-900 to-slate-950',
    cyan: 'from-teal-950 via-slate-900 to-cyan-950',
    amber: 'from-amber-950/90 via-slate-900 to-stone-900',
    purple: 'from-purple-950 via-slate-900 to-indigo-950'
  };

  const accentColors = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    cyan: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Dynamic Background with SVG geometric Islamic arabesque motifs */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${themeGradients[slide.imageTheme]} transition-colors duration-1000 opacity-95`}
      />
      
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Top Kicker - Anti-slop clean typography */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
            <span className="text-emerald-400 font-bold">Dawateislami Youth Initiative</span>
            <span className="text-slate-500">·</span>
            <span>Higher Education & Campus Department</span>
          </div>

          {/* Slide counter & pause control */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 ml-auto">
            <span>0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{total}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 transition-colors ml-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Descriptive Hero Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-md border ${accentColors[slide.imageTheme]}`}>
                {slide.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.2] text-balance">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-emerald-300/90 font-medium">
              {slide.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Slide Metadata Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-3 text-xs sm:text-sm text-slate-300 border-y border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">{slide.stats}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{slide.location}</span>
              </div>
            </div>

            {/* CTAs with generous mobile touch targets */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={() => setActiveTab('university')}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 min-h-[48px]"
              >
                <span>Explore Campus Wing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors border border-white/15 min-h-[48px] flex items-center justify-center"
              >
                <span>Free Youth Courses</span>
              </button>

              <button
                onClick={() => setActiveTab('centers')}
                className="w-full sm:w-auto px-4 py-3 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white text-sm sm:text-base font-medium rounded-xl transition-colors min-h-[48px] flex items-center justify-center"
              >
                <span>Find Nearest Center</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Activity Feature Card with High-Fidelity Mockup Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white">Visual Activity Mockup</span>
                </div>
                <span className="text-emerald-400 font-mono text-xs bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {slide.category}
                </span>
              </div>

              {/* High-Fidelity Mockup Image Slot */}
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 shadow-xl relative bg-slate-900">
                <SlideMockupImage slideId={slide.id} theme={slide.imageTheme} />
              </div>

              {/* Mockup Caption & Location Banner */}
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-300 pt-1 gap-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{slide.location}</span>
                </div>
                <span className="text-emerald-400 font-semibold">{slide.stats}</span>
              </div>

              {/* Quick actions box with comfortable touch targets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={onOpenAmbassadorModal}
                  className="p-3 rounded-xl bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/30 text-left transition-colors min-h-[52px]"
                >
                  <span className="block font-semibold text-emerald-300 text-xs sm:text-sm">Ambassador Form</span>
                  <span className="text-xs text-slate-300">Represent your campus</span>
                </button>

                <button
                  onClick={onOpenTravelModal}
                  className="p-3 rounded-xl bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 text-left transition-colors min-h-[52px]"
                >
                  <span className="block font-semibold text-purple-300 text-xs sm:text-sm">Travel Connect</span>
                  <span className="text-xs text-slate-300">Overseas student buddy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 w-full sm:w-auto">
            {SLIDESHOW_ACTIVITIES.map((act, index) => (
              <button
                key={act.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-all text-left whitespace-nowrap min-h-[40px] flex items-center ${
                  currentSlide === index
                    ? 'bg-white text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                <span>{index + 1}. {act.title.split(' ')[0]} {act.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
