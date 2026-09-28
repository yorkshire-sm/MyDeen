import React, { useState } from 'react';
import { X, CheckCircle2, BookOpen, Send, Clock, Globe2 } from 'lucide-react';
import { Course } from '../../types';

interface CourseSignUpModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseSignUpModal({ course, isOpen, onClose }: CourseSignUpModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    cityCountry: '',
    ageGroup: '18-24 years',
    preferredLanguage: 'English',
    expectations: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_course_registrations') || '[]');
        localStorage.setItem(
          'mydeen_course_registrations',
          JSON.stringify([
            {
              id: `reg-${Date.now()}`,
              courseId: course.id,
              courseTitle: course.title,
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
        aria-labelledby="course-modal-title"
      >
        {/* Header */}
        <div className="bg-emerald-800 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700/60 border border-emerald-600/50 flex items-center justify-center text-emerald-200">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                {course.track} · {course.language}
              </span>
              <h3 id="course-modal-title" className="text-base font-bold text-white font-display line-clamp-1">
                {course.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course summary strip */}
        <div className="bg-emerald-50/70 border-b border-emerald-100 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-950">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{course.mode}</span>
          </div>
          <div className="text-emerald-800 font-medium">
            {course.status}
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-1.5">
                Registration Confirmed!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-5">
                You are enrolled in <span className="font-semibold text-slate-800">{course.title}</span>. LMS portal credentials and session Zoom links will be sent to your WhatsApp and email.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left max-w-sm mx-auto space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Student:</span>
                  <span className="font-semibold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Schedule:</span>
                  <span className="font-medium text-slate-800">{course.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Instructor:</span>
                  <span className="font-medium text-slate-800">{course.instructor}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>
              </div>

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
                    placeholder="e.g. Bilal Ahmed"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                    placeholder="student@example.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                    placeholder="+44 7911 123456"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City & Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityCountry}
                    onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                    placeholder="e.g. London, UK / Karachi, PK"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Age Group
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  >
                    <option>Under 18 (College / Secondary)</option>
                    <option>18-24 years (University / Early Career)</option>
                    <option>25-35 years (Young Professionals)</option>
                    <option>35+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Material Language
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  >
                    <option>English</option>
                    <option>Urdu (اردو)</option>
                    <option>Bilingual (English & Urdu)</option>
                  </select>
                </div>
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
                  {isSubmitting ? 'Registering...' : 'Complete Free Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
