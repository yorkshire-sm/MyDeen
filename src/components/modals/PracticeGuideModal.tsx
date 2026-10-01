import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, Lightbulb, BookOpen, Volume2 } from 'lucide-react';
import { PracticeGuide } from '../../data/practiceGuidesData';

interface PracticeGuideModalProps {
  guide: PracticeGuide | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PracticeGuideModal({ guide, isOpen, onClose }: PracticeGuideModalProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  // Reset to first slide whenever a new guide is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStepIdx(0);
    }
  }, [isOpen, guide?.id]);

  // Keyboard navigation support
  useEffect(() => {
    if (!isOpen || !guide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentStepIdx((prev) => Math.min(prev + 1, guide.steps.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentStepIdx((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, guide, onClose]);

  if (!isOpen || !guide) return null;

  const currentStep = guide.steps[currentStepIdx];
  const progressPercent = Math.round(((currentStepIdx + 1) / guide.steps.length) * 100);

  const handlePrev = () => {
    setCurrentStepIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStepIdx((prev) => Math.min(prev + 1, guide.steps.length - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="practice-guide-title"
      >
        {/* Top Header */}
        <div className="bg-emerald-800 text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">{guide.icon}</span>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 block">
                Step-by-Step Practical Guide
              </span>
              <h3 id="practice-guide-title" className="text-lg sm:text-xl font-extrabold font-display">
                {guide.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-emerald-200 hover:text-white rounded-xl hover:bg-emerald-700/60 transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar & Counter Strip */}
        <div className="bg-emerald-950 text-white px-5 sm:px-8 py-2.5 flex items-center justify-between text-xs shrink-0">
          <div className="font-mono text-emerald-300 font-semibold">
            Step {currentStepIdx + 1} of {guide.steps.length}
          </div>
          <div className="flex-1 max-w-xs mx-4">
            <div className="w-full h-2 bg-emerald-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="text-emerald-400 font-bold">{progressPercent}%</span>
        </div>

        {/* Scrollable Slide Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Step Title Header */}
          <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-900 border border-emerald-200/80 flex items-center justify-center font-bold font-display text-lg sm:text-xl shrink-0 shadow-xs">
              {currentStep.stepNumber}
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                {currentStep.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {guide.title} · Step {currentStepIdx + 1}
              </p>
            </div>
          </div>

          {/* Main Description */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
            {currentStep.description}
          </p>

          {/* Arabic Callout Box (if available) */}
          {currentStep.arabic && (
            <div className="p-5 sm:p-6 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-center space-y-3 shadow-2xs">
              <div className="text-xl sm:text-3xl font-serif leading-loose text-emerald-950 tracking-wide dir-rtl" lang="ar" dir="rtl">
                {currentStep.arabic}
              </div>
              {currentStep.transliteration && (
                <div className="text-xs sm:text-sm font-semibold text-emerald-900 italic font-mono">
                  {currentStep.transliteration}
                </div>
              )}
              {currentStep.translation && (
                <div className="text-xs sm:text-sm text-slate-700 border-t border-emerald-200/60 pt-2.5 max-w-xl mx-auto leading-relaxed">
                  <strong className="text-slate-900">Translation: </strong>
                  &ldquo;{currentStep.translation}&rdquo;
                </div>
              )}
            </div>
          )}

          {/* Daily Prayer Units Table (for Salah Step 1) */}
          {currentStep.hasPrayerTable && (
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs overflow-x-auto">
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3">
                Daily Prayer Units (Rakats) at a Glance:
              </h5>
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
                <tbody className="divide-y divide-slate-200 text-slate-600">
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
                    <td className="p-2.5">4 (Ghair Mu\'akkadah)</td>
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
                    <td className="p-2.5">4 (Ghair Mu\'akkadah)</td>
                    <td className="p-2.5 font-bold text-emerald-800">4</td>
                    <td className="p-2.5">2</td>
                    <td className="p-2.5 font-bold text-indigo-700">3 Witr</td>
                    <td className="p-2.5">4</td>
                    <td className="p-2.5 font-bold text-slate-900">17</td>
                  </tr>
                  <tr className="bg-emerald-50/50">
                    <td className="p-2.5 font-bold text-slate-900">Jumu\'ah (Friday)</td>
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

          {/* Extra Info List (e.g. Preconditions, sequence) */}
          {currentStep.extraInfo && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>{currentStep.extraInfo.title}</span>
              </h5>
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

          {/* Video Tutorial Option (if provided) */}
          {currentStep.videoUrl && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={currentStep.videoUrl}
                  title="Tutorial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Tip Callout */}
          {currentStep.tip && (
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Practical Tip: </strong>
                <span>{currentStep.tip}</span>
              </div>
            </div>
          )}

          {/* Warning Callout */}
          {currentStep.warning && (
            <div className="p-4 bg-red-50/70 border border-red-200/80 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-red-900">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Warning / Critical Ruling: </strong>
                <span>{currentStep.warning}</span>
              </div>
            </div>
          )}

          {/* Note Callout */}
          {currentStep.note && (
            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-blue-900">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Shar&apos;i Note: </strong>
                <span>{currentStep.note}</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Interactive Navigation */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3 shrink-0">
          
          <button
            onClick={handlePrev}
            disabled={currentStepIdx === 0}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs min-h-[42px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 max-w-[280px] overflow-x-auto py-1">
            {guide.steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentStepIdx === idx
                    ? 'w-6 bg-emerald-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to step ${idx + 1}`}
              />
            ))}
          </div>

          {currentStepIdx < guide.steps.length - 1 ? (
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
