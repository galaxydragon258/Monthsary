import React, { useState } from 'react';

function Envelope({ onOpenGift, onOpenGallery, onOpenLetter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[450px] w-full relative z-10">

      {/* Dynamic Instruction Header */}
      <div className={`mb-8 text-center transition-all duration-500 ${isOpen ? 'opacity-0 translate-y-[-15px]' : 'opacity-100'}`}>
        <p className="text-rose-500/80 text-sm tracking-wider uppercase font-semibold font-pacifico">
          A special delivery has arrived
        </p>
        <h2 className="text-rose-700 text-3xl font-extrabold font-caveat mt-1">
          Click the heart seal to open! 💖
        </h2>
      </div>

      {/* 3D Envelope Wrapper */}
      <div className="envelope-container animate-float">
        <div className={`envelope ${isOpen ? 'open' : ''}`}>

          {/* Back Pocket (Light Pink Inside) */}
          <svg className="envelope-svg-layer envelope-back-svg" viewBox="0 0 380 280">
            <rect width="380" height="280" rx="12" fill="#fff1f2" stroke="#fecdd3" strokeWidth="2" />
            {/* Cute mini heart stamp inside */}
            <path 
              d="M190 150 c-6-10-20-10-20 2 c0 12 20 23 20 23 s20-11 20-23 c0-12-14-12-20-2" 
              fill="#fda4af" 
              opacity="0.3"
            />
          </svg>

          {/* Top Flap (Rotates Upwards) */}
          <div className="envelope-flap-svg">
            <svg viewBox="0 0 380 140" className="w-full h-full drop-shadow-sm">
              <path d="M 0,0 L 190,135 L 380,0 Z" fill="#fb7185" stroke="#f43f5e" strokeWidth="1" />
              {/* Gold borders on flap */}
              <path d="M 0,0 L 190,132 L 380,0" fill="none" stroke="#ffe4e6" strokeWidth="1.5" strokeDasharray="4" />
            </svg>
          </div>

          {/* Letter / Choice Menu Card */}
          <div className="envelope-letter-card flex flex-col justify-between">
            <div className="text-center space-y-1">
              <h3 className="font-pacifico text-2xl text-rose-600">
                Happy Monthsary! 💕
              </h3>
              <p className="font-caveat text-2xl text-rose-800 leading-relaxed font-semibold">
                I prepared three sweet surprises for you. Select one below to begin...
              </p>
            </div>

            {/* Menu Buttons Stack */}
            <div className="flex flex-col gap-2 z-50">
              <button
                onClick={onOpenGift}
                className="w-full py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border border-rose-200 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>🎁</span> Sweet Surprise
              </button>

              <button
                onClick={onOpenGallery}
                className="w-full py-1.5 bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border border-pink-200 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>📸</span> Memory Book
              </button>

              <button
                onClick={onOpenLetter}
                className="w-full py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
              >
                <span>✉️</span> Secret Letter
              </button>
            </div>
          </div>

          {/* Front Pocket Overlay (overlaps the closed letter) */}
          <svg className="envelope-svg-layer envelope-front-svg" viewBox="0 0 380 280">
            {/* Left triangular fold */}
            <path d="M 0,0 L 180,140 L 0,280 Z" fill="#ffe4e6" opacity="0.95" />
            {/* Right triangular fold */}
            <path d="M 380,0 L 200,140 L 380,280 Z" fill="#ffe4e6" opacity="0.95" />
            {/* Bottom triangular fold */}
            <path d="M 0,280 L 190,130 L 380,280 Z" fill="#fecdd3" opacity="0.98" />
            {/* Decorative white dash border */}
            <path d="M 0,280 L 190,132 L 380,280" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6" />
          </svg>

          {/* Interactive Red Wax Seal Heart */}
          <button
            onClick={() => setIsOpen(true)}
            className="envelope-seal-heart"
            aria-label="Open Monthsary Envelope"
          >
            {/* Heart Icon SVG */}
            <svg
              className="w-7 h-7 text-white animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Envelope;
