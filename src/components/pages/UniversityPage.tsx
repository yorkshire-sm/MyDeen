import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Compass, CheckCircle2, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { AmbassadorSubmission } from '../../types';

interface UniversityPageProps {
  onOpenAmbassadorModal: () => void;
}

export default function UniversityPage({ onOpenAmbassadorModal }: UniversityPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    university: '',
    major: '',
    yearOfStudy: '1st Year / Freshman',
    city: '',
    country: 'United Kingdom',
    motivation: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        console.error(err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const programs = [
    {
      title: 'Weekly Campus Halaqas',
      desc: 'Structured 45-minute interactive study circles on campus, exploring contemporary youth issues, purification of the heart, and daily Sunnahs without academic disruption.',
      features: ['Concise & student-friendly', 'Open Q&A with scholars', 'Free study handouts']
    },
    {
      title: 'Islamic Society (ISOC) Collaborations',
      desc: 'Partnering with university Islamic societies to deliver guest academic lectures, freshers week stalls, interfaith ethics panels, and charity fundraisers.',
      features: ['Guest speaker supply', 'Free literature distribution', 'Event sponsorship support']
    },
    {
      title: 'One-to-One Senior Mentorship',
      desc: 'Pairing incoming first-year students with high-achieving final-year or postgraduate brothers in the same discipline for academic advice and spiritual grounding.',
      features: ['Discipline-matched buddies', 'Exam revision strategy', 'Campus navigation & Halal dining']
    },
    {
      title: 'Pre-Exam Dua & Mindfulness Camps',
      desc: 'Special evening gatherings before midterms and finals focused on stress reduction, Sunnah memorization habits, and collective supplications for success.',
      features: ['Mental health resilience', 'Sunnah stress management', 'Spiritual tranquility']
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Higher Education & Campus Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            University & College Department Overview
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            The mission of the Dawateislami Higher Education Wing is to nurture young Muslims who achieve distinction in academic degrees while leading lives of unwavering faith, moral uprightness, and societal service.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-700 font-bold block mb-2">
                  0{idx + 1}. Program
                </span>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  {prog.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                {prog.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Campus Network & Societies Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Societies & Student Chapters
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Active in 65+ Premier Campuses Worldwide
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you study at the University of Birmingham, King\'s College London, UIC in Chicago, the University of Toronto, or Karachi University, our campus leads run regular circles, book distributions, and brotherhood activities right near your faculty.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                  <strong className="block text-white">United Kingdom</strong>
                  <span>48 Partner ISOCs</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                  <strong className="block text-white">United States</strong>
                  <span>32 University Wings</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
                  <strong className="block text-white">Canada & Europe</strong>
                  <span>26 Active Chapters</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-4">
              <h3 className="text-base font-bold text-white font-display">
                How MyDeen Supports Your Student Society:
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Free shipment of books from Maktaba-tul-Madina for fresher stalls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Certified English and Urdu scholars available for online or in-person keynotes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Subsidized student travel passes to national conventions and winter retreats.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Embedded Ambassador Form */}
        <div id="ambassador-form" className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs max-w-4xl mx-auto">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Leadership Opportunity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Become a Campus Ambassador / Youth Lead
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Are you passionate about creating a positive Islamic environment on your campus? Join our global network of student ambassadors. We provide complete training, materials, and senior mentor backing.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Application Received Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                JazakAllah Khair, <span className="font-semibold text-slate-900">{formData.fullName}</span>! Your regional Dawateislami Youth Zimmedar has been notified and will contact your WhatsApp within 48-72 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="e.g. Muhammad Farhan"
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
                    placeholder="student@university.ac.uk"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Major / Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    placeholder="e.g. Mechanical Engineering"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Year of Study
                  </label>
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                  City of Campus <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Manchester, Chicago, Karachi"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
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
                  placeholder="Share your ideas for campus halaqas, helping freshers, or organizing community service..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
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
