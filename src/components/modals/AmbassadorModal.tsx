import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Send, ShieldCheck } from 'lucide-react';
import { AmbassadorSubmission } from '../../types';

interface AmbassadorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (submission: AmbassadorSubmission) => void;
}

export default function AmbassadorModal({ isOpen, onClose, onSuccess }: AmbassadorModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    university: '',
    major: '',
    yearOfStudy: '1st Year / Freshman',
    city: '',
    country: 'United Kingdom',
    motivation: '',
    experience: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: AmbassadorSubmission = {
        id: `amb-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        university: formData.university,
        major: formData.major,
        yearOfStudy: formData.yearOfStudy,
        city: formData.city,
        country: formData.country,
        motivation: formData.motivation,
        submittedAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_ambassadors') || '[]');
        localStorage.setItem('mydeen_ambassadors', JSON.stringify([newSubmission, ...existing]));
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
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      university: '',
      major: '',
      yearOfStudy: '1st Year / Freshman',
      city: '',
      country: 'United Kingdom',
      motivation: '',
      experience: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ambassador-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 id="ambassador-modal-title" className="text-lg font-bold text-white font-display">
                Campus Ambassador Application
              </h3>
              <p className="text-xs text-slate-300">
                Join the MyDeen Youth & Universities Department Network
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
                Application Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                JazakAllah Khair, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your application for <span className="font-semibold text-slate-800">{formData.university}</span> has been routed to your regional youth coordinator.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-medium text-slate-800">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Campus:</span>
                  <span className="font-medium text-slate-800">{formData.university}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Region:</span>
                  <span className="font-medium text-slate-800">{formData.city}, {formData.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response Window:</span>
                  <span className="font-medium text-emerald-700">Within 48-72 Hours via WhatsApp</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-3 text-xs text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  As an ambassador, you will receive structured guidance, study circle materials, mentor check-ins, and direct access to scholars from Dawateislami.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Muhammad Hamza"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
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
                    placeholder="student@university.ac.uk"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    University or College <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    placeholder="e.g. University of Manchester"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Field of Study / Major <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    placeholder="e.g. Computer Science"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Year of Study
                  </label>
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    <option>1st Year / Freshman</option>
                    <option>2nd Year / Sophomore</option>
                    <option>3rd / Final Year</option>
                    <option>Postgraduate / Masters</option>
                    <option>PhD / Researcher</option>
                    <option>College / Sixth Form</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Pakistan</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Spain</option>
                    <option>France</option>
                    <option>Australia</option>
                    <option>South Africa</option>
                    <option>United Arab Emirates</option>
                    <option>Other Country</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City of Campus / Residence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Birmingham / London / Chicago"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why would you like to represent MyDeen on your campus? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Share a few sentences about your passion for youth halaqas, helping fellow students, or organizing campus events..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
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
                  {isSubmitting ? 'Submitting Application...' : 'Submit Ambassador Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
