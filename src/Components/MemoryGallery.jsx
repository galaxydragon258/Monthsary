import React, { useState } from 'react';
import cherryBlossoms from '../assets/cherry_blossoms.png';
import starrySky from '../assets/starry_sky.png';
import cozyCafe from '../assets/cozy_cafe.png';

function MemoryGallery({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const memories = [
    {
      image: cherryBlossoms,
      caption: 'Walking together under the cherry blossoms... every step is magical. 🌸',
      date: 'April 12'
    },
    {
      image: starrySky,
      caption: 'Looking at the stars, but my favorite view will always be you. 🌙✨',
      date: 'May 18'
    },
    {
      image: cozyCafe,
      caption: 'Cozy coffee dates, warm smiles, and endless giggles together. ☕️💖',
      date: 'June 05'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="p-8 text-center animate-slide-up">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-pacifico text-2xl text-rose-500">📸 Our Memory Book</h2>
        <button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 transition-colors cursor-pointer"
        >
          &times;
        </button>
      </div>

      {/* Polaroid Card Area */}
      <div className="flex flex-col items-center justify-center min-h-[380px] py-4">
        <div className="relative w-full max-w-[280px]">
          {memories.map((memory, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + memories.length) % memories.length;
            const isNext = index === (activeIndex + 1) % memories.length;

            return (
              <div
                key={index}
                className={`polaroid-card absolute top-0 left-0 right-0 mx-auto w-full transition-all duration-500 ease-out transform ${
                  isActive 
                    ? 'opacity-100 scale-100 rotate-0 z-20 relative' 
                    : isPrev 
                      ? 'opacity-0 scale-90 -translate-x-12 -rotate-6 z-10 pointer-events-none'
                      : isNext 
                        ? 'opacity-0 scale-90 translate-x-12 rotate-6 z-10 pointer-events-none'
                        : 'opacity-0 scale-75 z-0 pointer-events-none'
                }`}
              >
                {/* Image */}
                <div className="w-full aspect-square overflow-hidden rounded bg-pink-50 flex items-center justify-center border border-rose-100">
                  <img 
                    src={memory.image} 
                    alt={memory.caption}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Handwritten Text */}
                <div className="mt-4 px-2 text-left">
                  <p className="font-caveat text-xl text-rose-950 font-semibold leading-relaxed">
                    {memory.caption}
                  </p>
                  <p className="text-right text-[11px] text-rose-400 font-bold uppercase tracking-wider mt-3">
                    {memory.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Controls */}
        <div className="flex items-center justify-center gap-6 mt-8 z-30">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 border border-rose-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold"
            aria-label="Previous image"
          >
            ←
          </button>
          
          <span className="text-xs text-rose-400 font-semibold uppercase tracking-widest">
            {activeIndex + 1} of {memories.length}
          </span>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 border border-rose-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemoryGallery;
