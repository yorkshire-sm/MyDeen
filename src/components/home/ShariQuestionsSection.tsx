import React, { useState, useMemo } from 'react';
import { FATWA_CATEGORIES, FatwaCategory } from '../../data/fatwaCategoriesData';
import { 
  HelpCircle, Search, ExternalLink, PlusCircle, 
  ArrowRight, ShieldCheck, BookOpen, Layers
} from 'lucide-react';

interface ShariQuestionsSectionProps {
  onOpenAskModal: () => void;
}

export default function ShariQuestionsSection({ onOpenAskModal }: ShariQuestionsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const groups = ['All', 'Worship', 'Transactions & Finance', 'Social & Family', 'Belief & Seerah', 'Ethics & Lifestyle'];

  const filteredCategories = useMemo(() => {
    return FATWA_CATEGORIES.filter((item) => {
      const matchesGroup = selectedGroup === 'All' || item.categoryGroup === selectedGroup;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.categoryGroup && item.categoryGroup.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesGroup && matchesSearch;
    });
  }, [searchQuery, selectedGroup]);

  const totalFatawaCount = useMemo(() => {
    return FATWA_CATEGORIES.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>JURISPRUDENCE &amp; VERIFIED FATAWA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Shar&apos;i Questions &amp; Rulings Directory
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore authentic verdicts spanning <strong className="text-slate-800">{totalFatawaCount}+ documented Fatawa</strong> across 33+ practical categories, supervised by the qualified Muftis of Dar-ul-Ifta Ahlesunnat (Dawateislami).
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <button
              onClick={onOpenAskModal}
              className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap min-h-[46px]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Ask a Shar&apos;i Question</span>
            </button>

            <a
              href="https://www.fatwaqa.com/en/categories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-2xl transition-colors flex items-center gap-2 whitespace-nowrap min-h-[46px]"
            >
              <span>All Categories</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Search & Topic Filters Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
            {groups.map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap min-h-[38px] ${
                  selectedGroup === grp
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions & topics..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-white"
            />
          </div>

        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredCategories.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-500/60 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-700 text-sm sm:text-base font-display transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 mt-1 transition-colors" />
                </div>
                
                {item.categoryGroup && (
                  <span className="text-[11px] font-semibold text-slate-400 block mb-3">
                    {item.categoryGroup}
                  </span>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200 font-mono text-[11px]">
                  {item.count} {item.count === 1 ? 'Fatwa' : 'Fatawa'}
                </span>
                
                <span className="text-slate-500 group-hover:text-amber-700 font-semibold inline-flex items-center gap-1 transition-colors">
                  <span>Browse</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="p-10 text-center bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">No categories matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or search term.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedGroup('All'); }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout & More Categories Footer */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-3xl border border-amber-200/80 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
                Need an Immediate Ruling or Specific Dilemma Solved?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your inquiry regarding university study, exams, financial contracts, or workplace conditions is not answered here, submit directly to the Dar-ul-Ifta Ahlesunnat scholars.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenAskModal}
              className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-xs"
            >
              Submit Your Question
            </button>

            <a
              href="https://www.fatwaqa.com/en/categories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>Explore All on FatwaQA</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
