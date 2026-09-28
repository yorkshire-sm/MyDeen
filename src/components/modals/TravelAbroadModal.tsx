import React, { useState } from 'react';
import { X, CheckCircle2, Plane, Compass, Send, ShieldCheck, MapPin } from 'lucide-react';
import { TravelConnectSubmission } from '../../types';

interface TravelAbroadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (submission: TravelConnectSubmission) => void;
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
    departureDate: '',
    supportNeeded: ['Nearest Dawateislami Center', 'Halal Food & Grocery Guide', 'Local Muslim Student Buddy'] as string[],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const supportOptions = [
    'Nearest Dawateislami Center',
    'Local Muslim Student Buddy',
    'Halal Food & Grocery Guide',
    'Campus Prayer Room Navigation',
    'Accommodation & Housing Advice',
    'Airport Arrival / Transit Guidance',
    'Youth Study Circles (Halaqas)'
  ];

  const toggleSupport = (option: string) => {
    if (formData.supportNeeded.includes(option)) {
      setFormData({
        ...formData,
        supportNeeded: formData.supportNeeded.filter(item => item !== option)
      });
    } else {
      setFormData({
        ...formData,
        supportNeeded: [...formData.supportNeeded, option]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: TravelConnectSubmission = {
        id: `travel-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        homeCity: formData.homeCity,
        destinationCountry: formData.destinationCountry,
        destinationCity: formData.destinationCity,
        targetUniversity: formData.targetUniversity,
        departureDate: formData.departureDate,
        supportNeeded: formData.supportNeeded,
        notes: formData.notes,
        submittedAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_travel_connect') || '[]');
        localStorage.setItem('mydeen_travel_connect', JSON.stringify([newSubmission, ...existing]));
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="travel-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 id="travel-modal-title" className="text-lg font-bold text-white font-display">
                Traveling Abroad & International Connect
              </h3>
              <p className="text-xs text-slate-300">
                Never travel alone: connect with our global Dawateislami youth family
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-2">
                Travel Network Notification Dispatched
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Assalamu Alaikum, <span className="font-semibold text-slate-800">{formData.fullName}</span>! We have connected your inquiry to our <span className="font-semibold text-slate-800">{formData.destinationCountry} ({formData.destinationCity})</span> youth liaison team.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 text-left max-w-md mx-auto space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-medium text-slate-900">{formData.destinationCity}, {formData.destinationCountry}</span>
                </div>
                {formData.targetUniversity && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Campus:</span>
                    <span className="font-medium text-slate-900">{formData.targetUniversity}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Departure:</span>
                  <span className="font-medium text-slate-900">{formData.departureDate || 'Upcoming'}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 block mb-1">Local Zimmedar Handover:</span>
                  <p className="text-emerald-700 font-medium">A volunteer will message your WhatsApp with nearest Faizan-e-Madina coordinates and community contacts.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-3.5 flex items-start gap-3 text-xs text-purple-900">
                <Compass className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p>
                  Whether studying for a semester, moving permanently, or visiting for business, our worldwide network of Zimmedars and youth volunteers ensures you have safe companionship and an active Islamic environment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Usman Farooq"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number (with country code) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+92 300 1234567 or +44 7123 456789"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current City / Origin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.homeCity}
                    onChange={(e) => setFormData({ ...formData, homeCity: e.target.value })}
                    placeholder="e.g. Karachi, Lahore, Bradford"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span>Destination Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
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
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Destination City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destinationCity}
                      onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                      placeholder="e.g. Manchester, Chicago, Frankfurt"
                      className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Expected Departure
                    </label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Destination University or Institution (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.targetUniversity}
                    onChange={(e) => setFormData({ ...formData, targetUniversity: e.target.value })}
                    placeholder="e.g. University of Manchester / UIC Chicago"
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  How can our local team assist you?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {supportOptions.map((opt) => (
                    <label 
                      key={opt}
                      className={`flex items-center gap-2 p-2 rounded-lg border transition-colors cursor-pointer ${
                        formData.supportNeeded.includes(opt)
                          ? 'bg-purple-50/70 border-purple-300 text-purple-950 font-medium'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.supportNeeded.includes(opt)}
                        onChange={() => toggleSupport(opt)}
                        className="rounded-sm text-purple-600 focus:ring-purple-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us if you have already arrived, specific flight dates, or special dietary / accommodation inquiries..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Connecting...' : 'Submit Travel Connect Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
