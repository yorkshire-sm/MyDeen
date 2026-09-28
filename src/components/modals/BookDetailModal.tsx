import React, { useState } from 'react';
import { X, BookOpen, Download, Check, Share2, Layers, Globe, User } from 'lucide-react';
import { Book } from '../../types';

interface BookDetailModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDetailModal({ book, isOpen, onClose }: BookDetailModalProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !book) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Track downloads locally
    try {
      const counts = JSON.parse(localStorage.getItem('mydeen_book_downloads') || '{}');
      counts[book.id] = (counts[book.id] || 0) + 1;
      localStorage.setItem('mydeen_book_downloads', JSON.stringify(counts));
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => {
      // Direct reader or download
      window.open('https://www.dawateislami.net/bookslibrary/', '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Check out "${book.title}" on mydeen.net youth library!`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                {book.category} · {book.language}
              </span>
              <h3 id="book-modal-title" className="text-base font-bold text-white font-display line-clamp-1">
                {book.title}
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

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Book Cover Visual Graphic */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-emerald-800 to-slate-900 text-white p-4 flex flex-col justify-between shadow-md border border-emerald-700/50">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold block">
                    Maktaba-tul-Madina
                  </span>
                  <div className="w-8 h-0.5 bg-emerald-400"></div>
                </div>
                <div className="my-auto py-2">
                  <h4 className="text-sm font-bold text-white leading-snug font-display line-clamp-3">
                    {book.title}
                  </h4>
                  <p className="text-[11px] text-emerald-200/90 mt-1 line-clamp-2">
                    {book.author}
                  </p>
                </div>
                <div className="pt-2 border-t border-emerald-700/50 flex items-center justify-between text-[10px] text-emerald-200">
                  <span>{book.pages} Pages</span>
                  <span>{book.language}</span>
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  {book.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{book.author}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>{book.pages} pages</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>{book.language}</span>
                </div>
                <div className="text-right text-emerald-700 font-medium">
                  Verified Authentic
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-800 mb-1">Book Summary:</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-800 mb-1.5">Key Youth Topics Covered:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {book.topics.map((t, i) => (
                    <span 
                      key={i}
                      className="text-[11px] px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Opening Reader Portal...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Read / Download Full PDF</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
