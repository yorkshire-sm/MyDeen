import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Send, User } from 'lucide-react';
import { EventItem } from '../../types';

interface EventSignUpModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventSignUpModal({ event, isOpen, onClose }: EventSignUpModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    attendeeType: 'University Student',
    institution: '',
    guestsCount: '1'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_event_rsvps') || '[]');
        localStorage.setItem(
          'mydeen_event_rsvps',
          JSON.stringify([
            {
              id: `rsvp-${Date.now()}`,
              eventId: event.id,
              eventTitle: event.title,
              ...formData,
              registeredAt: new Date().toISOString()
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
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300 block">
                {event.category} · {event.city}
              </span>
              <h3 id="event-modal-title" className="text-base font-bold text-white font-display line-clamp-1">
                {event.title}
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

        {/* Date & Location strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>{event.date} · {event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            <span className="truncate max-w-xs">{event.location}</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-1.5">
                Seat Reserved!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-5">
                Assalamu Alaikum <span className="font-semibold text-slate-800">{formData.fullName}</span>, your entry badge and venue entry confirmation has been prepared.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left max-w-sm mx-auto space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Event:</span>
                  <span className="font-semibold text-slate-900 truncate max-w-[180px]">{event.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Venue:</span>
                  <span className="font-medium text-slate-800 truncate max-w-[180px]">{event.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Passes:</span>
                  <span className="font-medium text-emerald-700">{formData.guestsCount} Seat(s) Booked</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close & Return
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
                    placeholder="e.g. Zayd Khan"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@domain.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attendee Profile
                  </label>
                  <select
                    value={formData.attendeeType}
                    onChange={(e) => setFormData({ ...formData, attendeeType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  >
                    <option>University Student</option>
                    <option>College / Sixth Form</option>
                    <option>Recent Graduate / Working Youth</option>
                    <option>Community Member</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    University / College / Workplace
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Aston University / City College"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Attendees
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-indigo-600 bg-white"
                  >
                    <option value="1">1 Person (Just Me)</option>
                    <option value="2">2 Persons (Me + 1 Brother/Friend)</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">Group of 4 or more</option>
                  </select>
                </div>
              </div>

              {event.agenda && event.agenda.length > 0 && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs font-semibold text-slate-800 block mb-1.5">Program Highlights:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {event.agenda.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Registering...' : 'Confirm Free RSVP'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
