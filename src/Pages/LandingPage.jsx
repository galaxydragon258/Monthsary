import React, { useState, useEffect } from 'react';
import Envelope from '../Components/Envelope';
import GiftSurprise from '../Components/GiftSurprise';
import MemoryGallery from '../Components/MemoryGallery';
import LoveLetter from '../Components/LoveLetter';

function LandingPage() {
  const [activeModal, setActiveModal] = useState(null); // 'gift' | 'gallery' | 'letter' | null
  const [hearts, setHearts] = useState([]);

  // Generate floating heart particles
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const newHeart = {
        id,
        left: Math.random() * 100, // random percentage across the screen width
        scale: 0.4 + Math.random() * 0.8, // scale between 0.4 and 1.2
        duration: 6 + Math.random() * 4, // floating duration between 6s and 10s
        size: 16 + Math.random() * 20, // size in px
      };

      setHearts(prev => [...prev.slice(-15), newHeart]); // Keep max 15 hearts in state
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-romantic-grid text-slate-800 flex flex-col justify-between selection:bg-rose-200">
      
      {/* Floating Hearts Background Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map(heart => (
          <svg
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              transform: `scale(${heart.scale})`,
            }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}
      </div>

      {/* Decorative Top Accent Ribbon */}
      <div className="w-full h-1 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300 relative z-10" />

      {/* Main Interactive Stage */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 flex flex-col items-center justify-center py-12 relative z-10">
        
        {/* Envelope Container */}
        <div className="w-full flex items-center justify-center">
          <Envelope 
            onOpenGift={() => setActiveModal('gift')}
            onOpenGallery={() => setActiveModal('gallery')}
            onOpenLetter={() => setActiveModal('letter')}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-rose-400 font-medium font-pacifico tracking-widest relative z-10">
        Happy Monthsary, My Love! 💖
      </footer>

      {/* Surprises Modals Overlay */}
      {activeModal && (
        <div className="cute-modal-overlay" onClick={() => setActiveModal(null)}>
          <div 
             className="cute-modal-content max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            {activeModal === 'gift' && (
              <GiftSurprise onClose={() => setActiveModal(null)} />
            )}
            
            {activeModal === 'gallery' && (
              <MemoryGallery onClose={() => setActiveModal(null)} />
            )}
            
            {activeModal === 'letter' && (
              <LoveLetter onClose={() => setActiveModal(null)} />
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default LandingPage;