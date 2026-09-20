import { useState } from 'react';
import TicketGate from './components/TicketGate.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import LoveLetter from './components/LoveLetter.jsx';
import MilestoneTimeline from './components/MilestoneTimeline.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import LoveNotesGenerator from './components/LoveNotesGenerator.jsx';
import CoupleBucketList from './components/CoupleBucketList.jsx';
import CelebrationModal from './components/CelebrationModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isTicketTorn, setIsTicketTorn] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const handleOpenLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerCelebration = () => {
    setBurstCount((prev) => prev + 1);
  };

  // Subtle floating background heart particles
  const floatingHearts = Array.from({ length: 14 }).map((_, i) => (
    <div
      key={i}
      className="floating-heart-particle"
      style={{
        left: `${(i * 7.5 + 3) % 95}%`,
        animationDelay: `${(i * 1.3) % 10}s`,
        animationDuration: `${10 + (i % 6) * 2}s`,
        fontSize: `${1 + (i % 3) * 0.4}rem`
      }}
    >
      {i % 2 === 0 ? '♥' : '✨'}
    </div>
  ));

  return (
    <div className="app-root">
      {/* Background ambient particles */}
      <div className="floating-hearts-bg">
        {floatingHearts}
      </div>


      {!isTicketTorn ? (
        <TicketGate onComplete={() => setIsTicketTorn(true)} />
      ) : (
        <div className="landing-page">
          <Navbar
            onResetTicket={() => setIsTicketTorn(false)}
            onOpenCelebration={handleTriggerCelebration}
          />

          <main>
            <HeroSection
              onOpenLetter={handleOpenLetter}
              onOpenCelebration={handleTriggerCelebration}
            />
            <LoveLetter />
            <MilestoneTimeline />
            <PhotoGallery />
            <LoveNotesGenerator />
            <CoupleBucketList />
          </main>

          <Footer onResetTicket={() => setIsTicketTorn(false)} />
        </div>
      )}
    </div>
  );
}