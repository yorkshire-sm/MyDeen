import React, { useState } from 'react';
import Navbar, { NavTab } from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Home overview sections
import HeroSlideshow from './components/home/HeroSlideshow';
import DepartmentOverview from './components/home/DepartmentOverview';
import PresenceSection from './components/home/PresenceSection';
import QuranSeerahHub from './components/home/QuranSeerahHub';
import ShariQuestionsSection from './components/home/ShariQuestionsSection';

// Page Views
import UniversityPage from './components/pages/UniversityPage';
import CoursesPage from './components/pages/CoursesPage';
import CentersPage from './components/pages/CentersPage';
import ZimmedarDatabasePage from './components/pages/ZimmedarDatabasePage';
import LibraryPage from './components/pages/LibraryPage';
import EventsPage from './components/pages/EventsPage';
import TravelAbroadPage from './components/pages/TravelAbroadPage';

// Modals
import AmbassadorModal from './components/modals/AmbassadorModal';
import TravelAbroadModal from './components/modals/TravelAbroadModal';
import AskQuestionModal from './components/modals/AskQuestionModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [isAmbassadorModalOpen, setIsAmbassadorModalOpen] = useState(false);
  const [isTravelModalOpen, setIsTravelModalOpen] = useState(false);
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);

  const handleOpenAmbassador = () => setIsAmbassadorModalOpen(true);
  const handleOpenTravel = () => setIsTravelModalOpen(true);
  const handleOpenAsk = () => setIsAskModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-600 selection:text-white">
      {/* Top Bar Contract Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAmbassadorModal={handleOpenAmbassador}
        onOpenTravelModal={handleOpenTravel}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <HeroSlideshow
              setActiveTab={setActiveTab}
              onOpenAmbassadorModal={handleOpenAmbassador}
              onOpenTravelModal={handleOpenTravel}
            />

            <DepartmentOverview
              setActiveTab={setActiveTab}
              onOpenAmbassadorModal={handleOpenAmbassador}
            />

            <PresenceSection
              setActiveTab={setActiveTab}
            />

            <QuranSeerahHub />

            <ShariQuestionsSection
              onOpenAskModal={handleOpenAsk}
            />
          </>
        )}

        {activeTab === 'university' && (
          <UniversityPage
            onOpenAmbassadorModal={handleOpenAmbassador}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage />
        )}

        {activeTab === 'centers' && (
          <CentersPage />
        )}

        {activeTab === 'library' && (
          <LibraryPage />
        )}

        {activeTab === 'database' && (
          <ZimmedarDatabasePage />
        )}

        {activeTab === 'events' && (
          <EventsPage />
        )}

        {activeTab === 'travel' && (
          <TravelAbroadPage
            onOpenTravelModal={handleOpenTravel}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAmbassadorModal={handleOpenAmbassador}
        onOpenTravelModal={handleOpenTravel}
      />

      {/* Global Interactive Modals */}
      <AmbassadorModal
        isOpen={isAmbassadorModalOpen}
        onClose={() => setIsAmbassadorModalOpen(false)}
      />

      <TravelAbroadModal
        isOpen={isTravelModalOpen}
        onClose={() => setIsTravelModalOpen(false)}
      />

      <AskQuestionModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
      />
    </div>
  );
}
