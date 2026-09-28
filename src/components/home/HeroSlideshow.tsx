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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Kicker - Anti-slop clean typography */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-300">
            <span className="text-emerald-400 font-bold">Dawateislami Youth Initiative</span>
            <span className="text-slate-500">·</span>
            <span>University & Higher Education Department</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 font-normal">Global Youth Portal</span>
          </div>

          {/* Slide counter & pause control */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{total}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded-md hover:bg-white/10 text-slate-300 transition-colors ml-1"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Descriptive Hero Copy */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-block">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${accentColors[slide.imageTheme]}`}>
                {slide.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              {slide.title}
            </h1>

            <p className="text-base sm:text-lg text-emerald-300/90 font-medium">
              {slide.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Slide Metadata Stats */}
            <div className="flex flex-wrap items-center gap-6 py-2 text-xs text-slate-300 border-y border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">{slide.stats}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{slide.location}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('university')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <span>Explore University Wing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors border border-white/15"
              >
                <span>View Free Youth Courses</span>
              </button>

              <button
                onClick={() => setActiveTab('centers')}
                className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white text-xs font-medium rounded-lg transition-colors"
              >
                <span>Find Nearest Center</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Activity Feature Card with High-Fidelity Mockup Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-300 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white">Visual Activity Mockup</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {slide.category}
                </span>
              </div>

              {/* High-Fidelity Mockup Image Slot (Strictly zero women depicted) */}
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 shadow-xl relative bg-slate-900">
                <SlideMockupImage slideId={slide.id} theme={slide.imageTheme} />
              </div>

              {/* Mockup Caption & Location Banner */}
              <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{slide.location}</span>
                </div>
                <span className="text-emerald-400 font-semibold">{slide.stats}</span>
              </div>

              {/* Quick actions box */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <button
                  onClick={onOpenAmbassadorModal}
                  className="p-2.5 rounded-lg bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/30 text-left transition-colors"
                >
                  <span className="block font-semibold text-emerald-300 text-[11px]">Ambassador Form</span>
                  <span className="text-[10px] text-slate-300">Represent your campus</span>
                </button>

                <button
                  onClick={onOpenTravelModal}
                  className="p-2.5 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 text-left transition-colors"
                >
                  <span className="block font-semibold text-purple-300 text-[11px]">Travel Connect</span>
                  <span className="text-[10px] text-slate-300">Overseas student buddy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 sm:pb-0">
            {SLIDESHOW_ACTIVITIES.map((act, index) => (
              <button
                key={act.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all text-left whitespace-nowrap ${
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
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

