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
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Islamic Education Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Courses for Youth & Students
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From short 4-week weekend masterclasses on Salah and halal careers, to our flagship English <strong className="text-slate-800">LYF (Learn Your Faith)</strong> program and Urdu <strong className="text-slate-800">FOA (Faizan-e-Online Academy)</strong> syllabi, find structured knowledge grounded in classical Sunni theology.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          {/* Segmented Track Controls */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedTrack === track
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, topics, teachers..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
            />
          </div>
        </div>

        {/* Track descriptions pill-free banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <strong className="text-emerald-800 font-bold block mb-1">LYF (English Track)</strong>
            <p className="text-slate-600">Specially crafted in clear contemporary English tackling modern doubts, epistemology, mental health, and Tazkiyah.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <strong className="text-indigo-800 font-bold block mb-1">FOA (Urdu Track)</strong>
            <p className="text-slate-600">اردو دان طلباء کے لیے فرض علوم، تجوید و قرأت اور سیرت مصطفیٰ ﷺ کا باقاعدہ و جامع نصاب۔</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <strong className="text-amber-800 font-bold block mb-1">Short Masterclasses</strong>
            <p className="text-slate-600">High-yield 3-6 week modules on student finance, workplace ethics, and practical prayer rulings.</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-600/40 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-800">{course.track}</span>
                  <span className="font-mono text-slate-400">{course.language}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display mb-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Details list */}
                <div className="space-y-1.5 text-xs text-slate-600 py-3 border-y border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{course.duration} · {course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{course.instructor}</span>
                  </div>
                </div>

                {/* Syllabus preview */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                    Syllabus Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-500">
                    {course.syllabus.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700">
                  {course.status}
                </span>

                <button
                  onClick={() => setSignUpCourse(course)}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Enroll Free</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No courses match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or searching for another keyword.</p>
          </div>
        )}
      </div>

      {/* Course Enrollment Modal */}
      <CourseSignUpModal
        course={signUpCourse}
        isOpen={!!signUpCourse}
        onClose={() => setSignUpCourse(null)}
      />
    </div>
  );
}
