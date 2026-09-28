import React, { useState } from 'react';
import { X, CheckCircle2, Plane, Send, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { TravelAssistanceSubmission } from '../../types';

interface TravelAbroadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (submission: TravelAssistanceSubmission) => void;
}

export default function TravelAbroadModal({ isOpen, onClose, onSuccess }: TravelAbroadModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    homeCity: '',
    destinationCountry: 'United Kingdom',
    destinationCity: '',
    targetUniversity: '',
    travelDate: '',
    purpose: 'University / Undergraduate Study',
    supportNeeded: 'Campus Buddy & Halal Accommodation advice'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: TravelAssistanceSubmission = {
        id: `trv-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        homeCity: formData.homeCity,
        destinationCountry: formData.destinationCountry,
        destinationCity: formData.destinationCity,
        targetUniversity: formData.targetUniversity,
        travelDate: formData.travelDate,
        purpose: formData.purpose,
        supportNeeded: formData.supportNeeded,
        submittedAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_travel_requests') || '[]');
        localStorage.setItem('mydeen_travel_requests', JSON.stringify([newSubmission, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(newSubmission);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="travel-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 id="travel-modal-title" className="text-base sm:text-lg font-bold text-white font-display">
                Traveling Abroad & International Connect
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Never travel alone: connect with our global Dawateislami youth family
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-2">
                Travel Network Notification Dispatched
              </h4>
              <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6">
                Assalamu Alaikum, <span className="font-semibold text-slate-800">{formData.fullName}</span>! We have connected your inquiry to our <span className="font-semibold text-slate-800">{formData.destinationCountry} ({formData.destinationCity})</span> youth liaison team.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600 text-left max-w-md mx-auto space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-medium text-slate-800">{formData.destinationCity}, {formData.destinationCountry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Target Campus:</span>
                  <span className="font-medium text-slate-800">{formData.targetUniversity || 'General Region'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Contact Method:</span>
                  <span className="font-medium text-purple-700">{formData.whatsapp} (WhatsApp)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors min-h-[48px]"
              >
                Done & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-3.5 sm:p-4 flex items-start gap-3 text-xs sm:text-sm text-purple-900">
                <Compass className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p>
                  Whether studying for a semester, moving permanently, or visiting, our worldwide network of Zimmedars and youth volunteers ensures you have safe companionship and an active Islamic environment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Usman Farooq"
                    className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                    Current City / Origin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.homeCity}
                    onChange={(e) => setFormData({ ...formData, homeCity: e.target.value })}
                    placeholder="e.g. Karachi, Lahore, Bradford"
                    className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white min-h-[48px]"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span>Destination Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 bg-white min-h-[48px]"
                    >
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Germany</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>France</option>
                      <option>Australia</option>
                      <option>South Africa</option>
                      <option>Malaysia</option>
                      <option>United Arab Emirates</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                      Destination City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destinationCity}
                      onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                      placeholder="e.g. Manchester, Chicago"
                      className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 bg-white min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                      Target University (if student)
                    </label>
                    <input
                      type="text"
                      value={formData.targetUniversity}
                      onChange={(e) => setFormData({ ...formData, targetUniversity: e.target.value })}
                      placeholder="e.g. Monash University"
                      className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 bg-white min-h-[48px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  Assistance Requested
                </label>
                <textarea
                  rows={2}
                  value={formData.supportNeeded}
                  onChange={(e) => setFormData({ ...formData, supportNeeded: e.target.value })}
                  placeholder="Need advice on Halal groceries, student accommodation near center, ISOC contact, airport pickup advice..."
                  className="w-full px-3.5 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-purple-600 bg-white"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors rounded-xl min-h-[44px] flex items-center justify-center order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3.5 bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-60 min-h-[48px] order-1 sm:order-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Dispatching Request...' : 'Connect With Travel Network'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
