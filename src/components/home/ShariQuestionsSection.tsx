import React, { useState, useMemo } from 'react';
import { FATWA_CATEGORIES, YOUTH_COMMON_CATEGORIES, FatwaCategory } from '../../data/fatwaCategoriesData';
import { 
  HelpCircle, Search, ExternalLink, PlusCircle, 
  ArrowRight, ShieldCheck, Sparkles, ChevronDown, ChevronUp
} from 'lucide-react';

interface ShariQuestionsSectionProps {
  onOpenAskModal: () => void;
}

export default function ShariQuestionsSection({ onOpenAskModal }: ShariQuestionsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const groups = ['All', 'Worship', 'Transactions & Finance', 'Social & Family', 'Belief & Seerah', 'Ethics & Lifestyle'];

  // Base list: either curated youth common list or all 33 categories
  const baseList = useMemo(() => {
    if (showAllCategories || searchQuery.trim().length > 0) {
      return FATWA_CATEGORIES;
    }
    return YOUTH_COMMON_CATEGORIES;
  }, [showAllCategories, searchQuery]);

  const filteredCategories = useMemo(() => {
    return baseList.filter((item) => {
      const matchesGroup = selectedGroup === 'All' || item.categoryGroup === selectedGroup;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.youthTopics && item.youthTopics.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.categoryGroup && item.categoryGroup.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesGroup && matchesSearch;
    });
  }, [baseList, searchQuery, selectedGroup]);

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-semibold mb-2.5 border border-amber-200/60">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Youth Questions &amp; Practical Rulings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Shar&apos;i Inquiries for Students &amp; Youth
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Addressing everyday youth dilemmas regarding university study, exams, student loans, halal careers, and prayer—answered by the qualified Muftis of <strong>Dar-ul-Ifta Ahlesunnat</strong>.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenAskModal}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap min-h-[44px]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Ask a Question</span>
            </button>

            <a
              href="https://www.fatwaqa.com/en/categories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px]"
            >
              <span>FatwaQA Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Toolbar: Search and Filter Chips */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {groups.map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap min-h-[34px] ${
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
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search youth topics..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-white"
            />
          </div>

        </div>

        {/* Curated Youth Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCategories.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-500/60 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {item.icon && <span className="text-xl select-none">{item.icon}</span>}
                    <h3 className="font-bold text-slate-900 group-hover:text-amber-700 text-sm sm:text-base font-display transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 mt-1 transition-colors" />
                </div>
                
                {item.youthTopics && (
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-1 mb-4">
                    {item.youthTopics}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200/80 font-mono text-[11px]">
                  {item.count} {item.count === 1 ? 'Fatwa' : 'Fatawa'}
                </span>
                
                <span className="text-slate-500 group-hover:text-amber-700 font-semibold inline-flex items-center gap-1 transition-colors">
                  <span>Browse Rulings</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Toggle to View All Categories or Collapse */}
        {!searchQuery && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
            >
              {showAllCategories ? (
                <>
                  <span>Show Top Youth Questions Only</span>
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                </>
              ) : (
                <>
                  <span>View All 33 Fatwa Categories ({FATWA_CATEGORIES.length - YOUTH_COMMON_CATEGORIES.length} more)</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">No questions matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or submit your inquiry to our Muftis.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedGroup('All'); }}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Ask Question Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200/70 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                Have a specific dilemma not covered here?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Submit your private university, exam, or career query directly to our Muftis for a personalized Shar&apos;i response.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAskModal}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors whitespace-nowrap self-start md:self-auto shadow-2xs"
          >
            Submit Inquiry Now
          </button>
        </div>

      </div>
    </section>
  );
}
