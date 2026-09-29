import React, { useState, useEffect } from 'react';
import { SLIDESHOW_ACTIVITIES } from '../../data/mockData';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, MapPin, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { NavTab } from '../layout/Navbar';
import SlideMockupImage from './SlideMockupImage';

interface HeroSlideshowProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenGetInvolved: () => void;
}

export default function HeroSlideshow({ setActiveTab, onOpenGetInvolved }: HeroSlideshowProps) {
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

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Glows & Modern Ambient Mesh */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-xs animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Official Youth & Universities Wing of Dawateislami</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] text-balance">
              Where True Faith Meets Modern Student Life.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed text-balance">
              Empowering Muslim students across 80+ countries with genuine campus brotherhood, certified courses, and spiritual resilience.
            </p>

            {/* Quick Modern Metric Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>65+ Partner Universities</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>350+ Global Centers</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Tuition</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setActiveTab('university')}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm sm:text-base rounded-2xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Explore Campus Wing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-2xl transition-all border border-white/15 min-h-[48px] flex items-center justify-center"
              >
                <span>Free Youth Courses</span>
              </button>

              <button
                onClick={onOpenGetInvolved}
                className="px-5 py-3.5 bg-transparent hover:bg-white/5 text-emerald-300 hover:text-emerald-200 font-semibold text-sm sm:text-base rounded-2xl transition-all min-h-[48px] flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Involved</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Showcase (Sleek, modern card) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    {slide.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>0{currentSlide + 1} / 0{total}</span>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded-md hover:bg-white/10 text-slate-300 transition-colors"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Graphic visual mockup */}
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-inner relative bg-slate-950 mb-4">
                <SlideMockupImage slideId={slide.id} theme={slide.imageTheme} />
              </div>

              {/* Slide title & description */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                  {slide.description}
                </p>
                <div className="flex items-center justify-between text-xs text-emerald-300/90 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{slide.location}</span>
                  </div>
                  <span className="font-semibold text-white">{slide.stats}</span>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  {SLIDESHOW_ACTIVITIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
