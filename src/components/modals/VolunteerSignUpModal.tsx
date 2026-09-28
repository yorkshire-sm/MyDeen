import React, { useState } from 'react';
import { X, CheckCircle2, HeartHandshake, Send } from 'lucide-react';
import { Zimmedar } from '../../types';

interface VolunteerSignUpModalProps {
  zimmedar: Zimmedar | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerSignUpModal({ zimmedar, isOpen, onClose }: VolunteerSignUpModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    city: '',
    skills: 'Campus Circles & Youth Halaqas',
    hoursPerWeek: '2-4 hours/week',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !zimmedar) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_volunteer_signups') || '[]');
        localStorage.setItem(
          'mydeen_volunteer_signups',
          JSON.stringify([
            {
              id: `vol-${Date.now()}`,
              zimmedarId: zimmedar.id,
              zimmedarName: zimmedar.name,
              country: zimmedar.country,
              ...formData,
              appliedAt: new Date().toISOString()
            },
            ...existing
          ])
        );
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vol-modal-title"
      >
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                Join Youth Wing · {zimmedar.country}
              </span>
              <h3 id="vol-modal-title" className="text-base font-bold text-white font-display">
                Volunteer with {zimmedar.name}
              </h3>
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

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-1.5">
                Volunteer Profile Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-5">
                JazakAllah Khair! <span className="font-semibold text-slate-800">{zimmedar.name}</span> and the {zimmedar.country} team will reach out via WhatsApp with local coordination details.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Abdullah Khan"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City of Residence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Birmingham / Chicago"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  >
                    <option>Campus Circles & Youth Halaqas</option>
                    <option>International Student Welcoming</option>
                    <option>Digital Media, Video & Audio</option>
                    <option>Community Charity & Welfare (FGRF)</option>
                    <option>Sports & Brotherhood Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Weekly Availability
                  </label>
                  <select
                    value={formData.hoursPerWeek}
                    onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  >
                    <option>1-2 hours/week</option>
                    <option>2-4 hours/week</option>
                    <option>5-10 hours/week</option>
                    <option>Weekends Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Introduction / Skills
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Student at University of Leeds studying Law, passionate about public speaking and study circles..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Submitting...' : 'Join as Volunteer'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
