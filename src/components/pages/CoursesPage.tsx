import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/mockData';
import { Course } from '../../types';
import { BookOpen, Clock, Globe2, Sparkles, User, Check, Search, ArrowRight } from 'lucide-react';
import CourseSignUpModal from '../modals/CourseSignUpModal';

export default function CoursesPage() {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [signUpCourse, setSignUpCourse] = useState<Course | null>(null);

  const tracks = ['All', 'Short Courses', 'LYF (English)', 'FOA (Urdu)', 'Inspirational'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesTrack = selectedTrack === 'All' || course.track === selectedTrack;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Islamic Education Curriculum</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Courses for Youth & Students
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From short 4-week weekend masterclasses on Salah and halal careers, to our flagship English <strong className="text-slate-800">LYF (Learn Your Faith)</strong> program and Urdu <strong className="text-slate-800">FOA (Faizan-e-Online Academy)</strong> syllabi, find structured knowledge grounded in classical Sunni theology.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 border-b border-slate-200">
          {/* Segmented Track Controls - Scrollable */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-4 py-2.5 text-sm sm:text-xs font-semibold rounded-xl transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
                  selectedTrack === track
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60 bg-white border border-slate-200'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          {/* Search box - 48px height, 16px font to prevent mobile zoom */}
          <div className="relative w-full sm:w-72">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, topics, teachers..."
              className="w-full pl-11 pr-4 py-3 text-base sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white min-h-[48px]"
            />
          </div>
        </div>

        {/* Track descriptions banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-emerald-800 font-bold block mb-1 text-base">LYF (English Track)</strong>
            <p className="text-slate-600 leading-relaxed">Specially crafted in clear contemporary English tackling modern doubts, epistemology, mental health, and Tazkiyah.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-indigo-800 font-bold block mb-1 text-base">FOA (Urdu Track)</strong>
            <p className="text-slate-600 leading-relaxed font-sans">اردو دان طلباء کے لیے فرض علوم، تجوید و قرأت اور سیرت مصطفیٰ ﷺ کا باقاعدہ و جامع نصاب۔</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-amber-800 font-bold block mb-1 text-base">Short Masterclasses</strong>
            <p className="text-slate-600 leading-relaxed">High-yield 3-6 week modules on student finance, workplace ethics, and practical prayer rulings.</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-600/40 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-2.5">
                  <span className="font-semibold text-emerald-800">{course.track}</span>
                  <span className="font-mono text-slate-400">{course.language}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Details list */}
                <div className="space-y-2 text-sm text-slate-600 py-3 border-y border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{course.duration} · {course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Instructor: <strong className="text-slate-800">{course.instructor}</strong></span>
                  </div>
                </div>

                {/* Syllabus highlights */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {course.syllabus.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="p-5 sm:px-6 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 block">Tuition Fee</span>
                  <span className="text-base font-bold text-emerald-700 font-mono">
                    100% Free
                  </span>
                </div>

                <button
                  onClick={() => setSignUpCourse(course)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <span>Register Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {signUpCourse && (
        <CourseSignUpModal
          course={signUpCourse}
          isOpen={true}
          onClose={() => setSignUpCourse(null)}
        />
      )}
    </div>
  );
}
