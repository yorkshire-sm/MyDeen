import React, { useState } from 'react';
import { BOOKS_DATA } from '../../data/mockData';
import { Book } from '../../types';
import { BookOpen, Search, Download, Layers, Globe, User, ArrowRight } from 'lucide-react';
import BookDetailModal from '../modals/BookDetailModal';

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  const categories = ['All', 'Youth Guidance', 'Character & Tazkiyah', 'Islamic Knowledge', 'Sunnah & Etiquette'];

  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchesCat = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Maktaba-tul-Madina Digital Shelf</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Youth Islamic Library & Literature
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Authentic, verified books specially curated for modern young seekers, university students, and professionals. Written by <strong className="text-slate-900">Ameer-e-Ahlesunnat Hazrat Allama Maulana Ilyas Qadri</strong> and scholars of Majlis Al-Madinah-tul-Ilmiyyah.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, or topics..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-600 bg-white"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => {
            const colorGradients: Record<string, string> = {
              emerald: 'from-emerald-900 to-slate-950',
              indigo: 'from-indigo-900 to-slate-950',
              purple: 'from-purple-900 to-slate-950',
              cyan: 'from-teal-900 to-slate-950',
              amber: 'from-amber-900 to-stone-950'
            };

            return (
              <div
                key={book.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-600/40 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setActiveBook(book)}
              >
                {/* Book Cover Graphics */}
                <div className="p-4 bg-slate-100/60 border-b border-slate-100">
                  <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${colorGradients[book.coverColor] || colorGradients.emerald} text-white p-4 flex flex-col justify-between shadow-sm group-hover:scale-[1.02] transition-transform`}>
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-wider text-emerald-300 font-semibold block">
                        Maktaba-tul-Madina
                      </span>
                      <div className="w-6 h-0.5 bg-emerald-400"></div>
                    </div>

                    <div className="my-auto py-2">
                      <h3 className="text-sm font-bold text-white leading-snug font-display line-clamp-3">
                        {book.title}
                      </h3>
                      <p className="text-[10px] text-slate-300 mt-1 line-clamp-2">
                        {book.author}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                      <span>{book.pages} Pages</span>
                      <span>{book.language}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block">
                      {book.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 font-display line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      {book.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-mono">
                      {book.pages} pages
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBook(book);
                      }}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      <span>Read / Download</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No books found</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for other keywords like "Salah", "Character", or "Sunnah".</p>
          </div>
        )}
      </div>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={activeBook}
        isOpen={!!activeBook}
        onClose={() => setActiveBook(null)}
      />
    </div>
  );
}
