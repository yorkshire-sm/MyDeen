import React, { useState } from 'react';
import { Plane, Compass, MapPin, CheckCircle2, ShieldCheck, Send, Users, Building2, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { TravelConnectSubmission } from '../../types';

interface TravelAbroadPageProps {
  onOpenTravelModal: () => void;
}

export default function TravelAbroadPage({ onOpenTravelModal }: TravelAbroadPageProps) {
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
        console.error(err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const benefits = [
    {
      title: 'Local Center Connection',
      desc: 'Get connected with the nearest Faizan-e-Madina Islamic Center in your destination city for daily prayers, Friday congregation, and community meals.',
      icon: Building2
    },
    {
      title: 'Senior Student Buddy',
      desc: 'We pair you with an active student volunteer at your destination university who can guide you on campus life, registration, and housing.',
      icon: Users
    },
    {
      title: 'Halal Food & Living Guide',
      desc: 'A curated list of authentic halal butchers, restaurants, grocery stores, and Islamic study circles verified by local Zimmedars.',
      icon: UtensilsCrossed
    },
    {
      title: 'Stay Anchored in Iman',
      desc: 'Traveling abroad often brings cultural shock and loneliness. Our international brotherhood provides an immediate family wherever you land.',
      icon: Compass
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            <Plane className="w-4 h-4" />
            <span>Global Youth Solidarity Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Stay in Touch & Traveling Abroad Support
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Moving to the UK, USA, Canada, Germany, Italy, or Australia for university or employment? You are never alone. Connect with our worldwide Dawateislami youth coordinators before you depart.
          </p>
        </div>

        {/* 4 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs max-w-4xl mx-auto">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 block mb-1">
              Arrival & Contact Request
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Register Your Travel with the Youth Liaison Team
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fill in your details below. Your request will be forwarded to the Country Zimmedar of your destination city to arrange a local buddy and orientation.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Travel Network Notification Dispatched
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Assalamu Alaikum, <span className="font-semibold text-slate-900">{formData.fullName}</span>! Our <span className="font-semibold text-slate-900">{formData.destinationCountry}</span> youth coordinator has received your travel schedule.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
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
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
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
                    placeholder="student@example.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
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
                    placeholder="e.g. Karachi / Lahore / Islamabad"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
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
                      Departure Date
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
                  placeholder="Share details like flight arrival times, accommodation inquiries, or dietary needs..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-purple-600 bg-white"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Submitting...' : 'Submit Travel Connect Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
