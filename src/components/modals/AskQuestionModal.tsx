import React, { useState } from 'react';
import { X, CheckCircle2, HelpCircle, Send, ShieldAlert } from 'lucide-react';
import { SHARI_QUESTION_CATEGORIES } from '../../data/mockData';

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AskQuestionModal({ isOpen, onClose }: AskQuestionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    category: SHARI_QUESTION_CATEGORIES[0],
    subject: '',
    questionText: '',
    isAnonymous: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('mydeen_youth_questions') || '[]');
        localStorage.setItem(
          'mydeen_youth_questions',
          JSON.stringify([
            {
              id: `q-${Date.now()}`,
              ...formData,
              status: 'Under Scholarly Review',
              submittedAt: new Date().toISOString()
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
        aria-labelledby="question-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 id="question-modal-title" className="text-base font-bold text-white font-display">
                Submit a Shar\'i Question for Youth Desk
              </h3>
              <p className="text-xs text-slate-300">
                Routed to qualified Muftis at Dar-ul-Ifta Ahlesunnat (Dawateislami)
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
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display mb-1.5">
                Question Submitted to Dar-ul-Ifta
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-5">
                JazakAllah Khair. Your query has been logged under reference <span className="font-mono text-xs font-semibold text-slate-900">#Q-{Math.floor(100000 + Math.random() * 900000)}</span>. Verified scholarly fatwas are sent directly to your email/WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Questions are answered strictly according to the authentic Hanafi jurisprudence by appointed Muftis of Ahlesunnat. Your privacy is protected; you can choose to remain anonymous in published archives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Student / Anonymous"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email for Response <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp (Optional for instant verdict)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Question Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                  >
                    {SHARI_QUESTION_CATEGORIES.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject / Summary <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Combining prayers during university lab sessions"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Detailed Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.questionText}
                  onChange={(e) => setFormData({ ...formData, questionText: e.target.value })}
                  placeholder="Please state all relevant facts, background details, and specific doubt so the Mufti can provide an accurate ruling..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-amber-600 bg-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anon-check"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="rounded-sm text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="anon-check" className="text-xs text-slate-600 cursor-pointer">
                  Keep my name anonymous if this answer is later indexed in the public youth FAQ.
                </label>
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
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Submitting Question...' : 'Submit to Dar-ul-Ifta Desk'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
