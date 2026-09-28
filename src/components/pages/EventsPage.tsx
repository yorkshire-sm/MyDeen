import React, { useState } from 'react';
import { EVENTS_DATA } from '../../data/mockData';
import { EventItem } from '../../types';
import { Calendar, MapPin, Clock, Users, User, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import EventSignUpModal from '../modals/EventSignUpModal';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'University', 'Youth Circle', 'Workshop', 'Travel & Retreat'];

  const filteredEvents = EVENTS_DATA.filter((ev) => {
    return selectedCategory === 'All' || ev.category === selectedCategory;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Gatherings & Halaqas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Upcoming Events & Announcements
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Join thousands of Muslim students and youth across our regional conventions, campus guest lectures, exam preparation camps, and international brotherhood retreats.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Cards */}
        <div className="space-y-6">
          {filteredEvents.map((ev) => {
            const seatsRemaining = ev.seatsTotal - ev.seatsRegistered;
            const percentFilled = Math.round((ev.seatsRegistered / ev.seatsTotal) * 100);

            return (
              <div
                key={ev.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left Column: Date & Details */}
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-emerald-800">{ev.category}</span>
                      <span>·</span>
                      <span className="font-medium text-slate-700">{ev.city}, {ev.country}</span>
                      {ev.isFeatured && (
                        <>
                          <span>·</span>
                          <span className="text-amber-800 font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-600" />
                            <span>Featured Convention</span>
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                      {ev.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ev.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-1.5 font-medium text-slate-900">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>{ev.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="truncate max-w-xs">{ev.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="truncate max-w-xs">{ev.speaker}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Capacity & Reservation Button */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0 bg-slate-50 p-5 rounded-xl border border-slate-100 min-w-[260px]">
                    <div className="w-full space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Seats Reserved:</span>
                        <span className="font-bold text-slate-900 tabular-nums">{ev.seatsRegistered} / {ev.seatsTotal}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-emerald-600 h-full rounded-full transition-all" 
                          style={{ width: `${percentFilled}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-emerald-700 font-medium block text-right">
                        {seatsRemaining > 0 ? `${seatsRemaining} seats remaining` : 'Full capacity'}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveEvent(ev)}
                      className="w-full sm:w-auto lg:w-full px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Reserve Free Seat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RSVP Modal */}
      <EventSignUpModal
        event={activeEvent}
        isOpen={!!activeEvent}
        onClose={() => setActiveEvent(null)}
      />
    </div>
  );
}
