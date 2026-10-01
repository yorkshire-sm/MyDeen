import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, 
  Lightbulb, BookOpen, Volume2, VolumeX, Copy, Check, 
  ListFilter, RotateCcw, ExternalLink
} from 'lucide-react';
import { PracticeGuide, PRACTICE_GUIDES, GuideStep } from '../../data/practiceGuidesData';

interface PracticeGuideModalProps {
  guide: PracticeGuide | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectGuide?: (guide: PracticeGuide) => void;
}

export default function PracticeGuideModal({ 
  guide, 
  isOpen, 
  onClose,
  onSelectGuide 
}: PracticeGuideModalProps) {
  const [currentGuideId, setCurrentGuideId] = useState<'salah' | 'wudu' | 'ghusl'>('salah');
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [showStepDrawer, setShowStepDrawer] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Sync guide whenever prop changes
  useEffect(() => {
    if (guide) {
      setCurrentGuideId(guide.id);
      setCurrentStepIdx(0);
      setShowStepDrawer(false);
      setVideoError(false);
      setVideoLoading(true);
    }
  }, [guide?.id, isOpen]);

  const activeGuide = PRACTICE_GUIDES[currentGuideId] || guide;
  const currentStep: GuideStep | undefined = activeGuide?.steps[currentStepIdx];
  const progressPercent = activeGuide ? Math.round(((currentStepIdx + 1) / activeGuide.steps.length) * 100) : 0;

  // Handle dynamic video reloading and autoplay policy
  useEffect(() => {
    setVideoError(false);
    setVideoLoading(Boolean(currentStep?.videoClipUrl));

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }

    if (currentStep?.videoClipUrl && videoRef.current) {
      const vid = videoRef.current;
      vid.defaultMuted = true;
      vid.muted = true;
      vid.load();
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay policy prevented automatic play, user can still use controls
          console.log('Video autoplay prevented by browser; click to play:', err);
        });
      }
    }
  }, [currentStepIdx, currentGuideId, currentStep?.videoClipUrl]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !activeGuide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentStepIdx((prev) => Math.min(prev + 1, activeGuide.steps.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentStepIdx((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        if (showStepDrawer) {
          setShowStepDrawer(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeGuide, showStepDrawer, onClose]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!isOpen || !activeGuide || !currentStep) return null;

  const handlePrev = () => {
    setCurrentStepIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStepIdx((prev) => Math.min(prev + 1, activeGuide.steps.length - 1));
  };

  const handleSwitchGuide = (newId: 'salah' | 'wudu' | 'ghusl') => {
    setCurrentGuideId(newId);
    setCurrentStepIdx(0);
    setShowStepDrawer(false);
    if (onSelectGuide) {
      onSelectGuide(PRACTICE_GUIDES[newId]);
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Audio pronunciation via SpeechSynthesis
  const handlePlayArabic = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  // Copy Arabic text
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-3 flex flex-col max-h-[94vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="practice-guide-title"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header with Practice Tabs Switcher */}
        <div className="bg-emerald-900 text-white px-4 sm:px-6 py-3.5 sm:py-4 shrink-0 border-b border-emerald-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Guide tabs switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(['salah', 'wudu', 'ghusl'] as const).map((id) => {
                const g = PRACTICE_GUIDES[id];
                const isActive = currentGuideId === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleSwitchGuide(id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                      isActive 
                        ? 'bg-emerald-500 text-white shadow-xs' 
                        : 'bg-emerald-950/60 hover:bg-emerald-800/80 text-emerald-200'
                    }`}
                  >
                    <span>{g.icon}</span>
                    <span>{g.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right actions: Step Drawer Toggle & Close */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setShowStepDrawer(!showStepDrawer)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 min-h-[36px] ${
                  showStepDrawer
                    ? 'bg-emerald-800 text-white border-emerald-500'
                    : 'bg-emerald-950/40 hover:bg-emerald-800/60 text-emerald-200 border-emerald-700/60'
                }`}
                aria-label="Table of contents"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Jump to Step</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-emerald-200 hover:text-white rounded-xl hover:bg-emerald-800 transition-colors"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Step Progress & Table-of-Contents Drawer */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-2 flex items-center justify-between text-xs shrink-0 relative">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-emerald-400 font-bold">Step {currentStepIdx + 1}</span>
            <span className="text-slate-400">/ {activeGuide.steps.length}</span>
            <span className="text-slate-300 hidden sm:inline">· {currentStep.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-emerald-400 font-bold font-mono">{progressPercent}%</span>
          </div>

          {/* Quick-Jump Step Drawer Overlay */}
          {showStepDrawer && (
            <div className="absolute top-full left-0 right-0 z-30 bg-slate-900/98 border-b border-slate-700 shadow-2xl p-4 sm:p-5 max-h-72 overflow-y-auto backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Select Step ({activeGuide.steps.length} total)
                </span>
                <button
                  onClick={() => setShowStepDrawer(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {activeGuide.steps.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentStepIdx(idx);
                      setShowStepDrawer(false);
                    }}
                    className={`p-2.5 rounded-xl text-left text-xs transition-colors flex items-center gap-2.5 border ${
                      currentStepIdx === idx
                        ? 'bg-emerald-600 text-white border-emerald-400 font-bold'
                        : 'bg-slate-800/80 hover:bg-slate-850 text-slate-200 border-slate-700'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">
                      {s.stepNumber}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Slide Body */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Step Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold font-display text-lg shrink-0 shadow-2xs">
                {currentStep.stepNumber}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {activeGuide.title}
                  </span>
                  {currentStep.rulingType && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {currentStep.rulingType}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            {/* Quick Restart Step Action */}
            <button
              onClick={() => setCurrentStepIdx(0)}
              className="text-xs font-semibold text-slate-500 hover:text-emerald-700 flex items-center gap-1 self-start sm:self-auto py-1 px-2 rounded-lg hover:bg-slate-100 transition-colors"
              title="Restart tutorial from Beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Start Over</span>
            </button>
          </div>

          {/* Grid Layout: Visual Demonstration & Instructions */}
          <div className={`grid grid-cols-1 ${currentStep.videoClipUrl ? 'lg:grid-cols-12' : ''} gap-6 items-start`}>
            
            {/* Visual Demonstration Video Player */}
            {currentStep.videoClipUrl && (
              <div className="lg:col-span-5 order-first lg:order-last">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-md border border-slate-200 aspect-4/3 max-h-80 w-full mx-auto flex items-center justify-center group">
                  <video
                    key={currentStep.videoClipUrl}
                    ref={videoRef}
                    src={currentStep.videoClipUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full h-full object-contain bg-black"
                    onLoadedData={() => setVideoLoading(false)}
                    onCanPlay={() => setVideoLoading(false)}
                    onError={(e) => {
                      console.warn('Video failed to load:', currentStep.videoClipUrl, e);
                      setVideoLoading(false);
                      setVideoError(true);
                    }}
                  />

                  {/* Loading spinner overlay */}
                  {videoLoading && !videoError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xs text-white z-10 pointer-events-none">
                      <div className="w-8 h-8 border-3 border-emerald-400 border-t-transparent rounded-full animate-spin mb-2" />
                      <span className="text-xs font-medium text-emerald-200">Loading Demonstration...</span>
                    </div>
                  )}

                  {/* Fallback if video CDN fails */}
                  {videoError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-900 text-white text-center z-10">
                      <div className="text-4xl mb-2">{currentStep.illustrationIcon}</div>
                      <p className="text-xs text-slate-300 font-medium mb-3">Demonstration clip unavailable</p>
                      <a
                        href={currentStep.videoClipUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors"
                      >
                        <span>Open Video</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Header Badge */}
                  {!videoLoading && !videoError && (
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-semibold backdrop-blur-xs pointer-events-none">
                      Visual Posture Guide
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step Content & Explanations */}
            <div className={`${currentStep.videoClipUrl ? 'lg:col-span-7' : 'w-full'} space-y-5`}>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                {currentStep.description}
              </p>

              {/* Arabic Invocations Box */}
              {currentStep.arabic && (
                <div className="p-5 sm:p-6 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl text-center space-y-3 shadow-2xs relative">
                  
                  {/* Actions: Audio Listen & Copy */}
                  <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2 mb-2 text-xs">
                    <button
                      onClick={() => handlePlayArabic(currentStep.arabic || '')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                        isPlayingAudio
                          ? 'bg-emerald-600 text-white animate-pulse'
                          : 'bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}
                      aria-label="Listen Arabic pronunciation"
                    >
                      {isPlayingAudio ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Stop Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Listen Pronunciation</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopyText(`${currentStep.arabic}\n\n${currentStep.transliteration || ''}\n${currentStep.translation || ''}`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors"
                      title="Copy text"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Arabic Text */}
                  <div 
                    className="text-2xl sm:text-3xl font-serif leading-loose text-emerald-950 tracking-wide pt-1" 
                    lang="ar" 
                    dir="rtl"
                  >
                    {currentStep.arabic}
                  </div>

                  {/* Transliteration */}
                  {currentStep.transliteration && (
                    <div className="text-xs sm:text-sm font-semibold text-emerald-900 italic font-mono bg-white/60 py-2 px-3 rounded-xl border border-emerald-200/50">
                      {currentStep.transliteration}
                    </div>
                  )}

                  {/* English Translation */}
                  {currentStep.translation && (
                    <div className="text-xs sm:text-sm text-slate-700 pt-2 leading-relaxed max-w-xl mx-auto">
                      <strong className="text-slate-900 font-semibold">Translation: </strong>
                      &ldquo;{currentStep.translation}&rdquo;
                    </div>
                  )}
                </div>
              )}

              {/* Extra Info Box (e.g. Pre-conditions or Sequence) */}
              {currentStep.extraInfo && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>{currentStep.extraInfo.title}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {currentStep.extraInfo.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Daily Prayer Units Table (for Salah Step 1) */}
              {currentStep.hasPrayerTable && (
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs overflow-x-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800">
                      Daily Prayer Units (Rakats) at a Glance
                    </h4>
                  </div>
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700">
                        <th className="p-2.5 font-bold">Prayer</th>
                        <th className="p-2.5">Sunnah (Before)</th>
                        <th className="p-2.5 font-bold text-emerald-800">Fard (Obligatory)</th>
                        <th className="p-2.5">Sunnah (After)</th>
                        <th className="p-2.5">Witr</th>
                        <th className="p-2.5">Nafl</th>
                        <th className="p-2.5 font-bold">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600 font-medium">
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Fajr</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 font-bold text-emerald-800">2</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 font-bold text-slate-900">4</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Zuhr</td>
                        <td className="p-2.5">4</td>
                        <td className="p-2.5 font-bold text-emerald-800">4</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 font-bold text-slate-900">12</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Asr</td>
                        <td className="p-2.5">4 (Ghair Mu&apos;akkadah)</td>
                        <td className="p-2.5 font-bold text-emerald-800">4</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 font-bold text-slate-900">8</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Maghrib</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5 font-bold text-emerald-800">3</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 font-bold text-slate-900">7</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Isha</td>
                        <td className="p-2.5">4 (Ghair Mu&apos;akkadah)</td>
                        <td className="p-2.5 font-bold text-emerald-800">4</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 font-bold text-indigo-700">3 Witr</td>
                        <td className="p-2.5">4</td>
                        <td className="p-2.5 font-bold text-slate-900">17</td>
                      </tr>
                      <tr className="bg-emerald-50/50">
                        <td className="p-2.5 font-bold text-slate-900">Jumu&apos;ah (Friday)</td>
                        <td className="p-2.5">4</td>
                        <td className="p-2.5 font-bold text-emerald-800">2</td>
                        <td className="p-2.5">4 + 2</td>
                        <td className="p-2.5 text-slate-400">—</td>
                        <td className="p-2.5">2</td>
                        <td className="p-2.5 font-bold text-slate-900">14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Practical Tip Callout */}
              {currentStep.tip && (
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900 shadow-2xs">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Practical Tip: </strong>
                    <span>{currentStep.tip}</span>
                  </div>
                </div>
              )}

              {/* Warning / Critical Ruling */}
              {currentStep.warning && (
                <div className="p-4 bg-red-50/80 border border-red-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-red-900 shadow-2xs">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Important Ruling: </strong>
                    <span>{currentStep.warning}</span>
                  </div>
                </div>
              )}

              {/* Shar'i Note */}
              {currentStep.note && (
                <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-blue-900 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Note: </strong>
                    <span>{currentStep.note}</span>
                  </div>
                </div>
              )}

              {/* Final Step Related Practices Cards */}
              {currentStepIdx === activeGuide.steps.length - 1 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Continue Learning Other Essential Practices:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(['salah', 'wudu', 'ghusl'] as const)
                      .filter((id) => id !== currentGuideId)
                      .map((otherId) => {
                        const otherGuide = PRACTICE_GUIDES[otherId];
                        return (
                          <button
                            key={otherId}
                            onClick={() => handleSwitchGuide(otherId)}
                            className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{otherGuide.icon}</span>
                              <div>
                                <span className="font-bold text-slate-900 group-hover:text-emerald-800 text-sm block">
                                  {otherGuide.title}
                                </span>
                                <span className="text-xs text-slate-500">
                                  {otherGuide.badge}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Bottom Interactive Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shrink-0">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentStepIdx === 0}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs min-h-[42px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dots Indicator (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-1.5 max-w-[320px] overflow-x-auto py-1 scrollbar-none">
            {activeGuide.steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentStepIdx === idx
                    ? 'w-6 bg-emerald-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to step ${idx + 1}`}
                title={`Step ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next or Finish Button */}
          {currentStepIdx < activeGuide.steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 shadow-sm min-h-[42px]"
            >
              <span>Next Step</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 shadow-sm min-h-[42px]"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Complete Guide</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
