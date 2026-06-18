import React, { useState } from 'react';

function LoveLetter({ onClose }) {
  const [replyText, setReplyText] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      setIsSent(true);
      // Optional: Store the message in localStorage for a neat touch
      localStorage.setItem('mothsary_reply', replyText);
    }
  };

  return (
    <div className="p-4 sm:p-8 text-center animate-slide-up z-50 max-h-[85vh] flex flex-col">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 flex-shrink-0">
        <h2 className="font-pacifico text-xl sm:text-2xl text-rose-500">✉️ Secret Message</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 transition-colors cursor-pointer"
        >
          &times;
        </button>
      </div>

      {!isSent ? (
        /* The Love Letter page */
        <div className="text-left space-y-4 overflow-y-auto pr-1 flex-1"
          style={{
            scrollbarWidth: 'none',  /* Firefox */
            msOverflowStyle: 'none',  /* IE and Edge */
          }}
        >
          <div className="p-4 sm:p-6 bg-rose-50/50 border border-rose-100 rounded-2xl relative overflow-hidden">
            {/* Cute decorative heart watermark in background */}
            <div className="absolute -right-8 -bottom-8 opacity-10 text-rose-600 pointer-events-none">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <h3 className="font-pacifico text-lg sm:text-xl text-rose-700 mb-3 sm:mb-4">My Love,</h3>

            <div className="font-caveat text-lg sm:text-xl text-rose-950 space-y-2 sm:space-y-3 leading-relaxed">
              <p>
                Hi love,
              </p>
              <p>
                Happy 1st monthsary! ❤️
              </p>
              <p>
                Meeting you was the best unexpected thing that happened to me this year. It was so unexpected because I never really planned on committing to anyone. But then again, you kept giving me butterflies and making me fall for you. 😆
              </p>
              <p>
                Seriously though, everything about us was unexpected, and it turned out to be the best plot twist of the year. I'm so grateful that I met you and that we get to share this journey together.
              </p>
              <p>
                Thank you for all the love, happiness, and memories you've given me. I love you so much, my love.
              </p>
              <p className="font-pacifico text-base sm:text-lg text-rose-700 text-right mt-4 sm:mt-6">
               Happy 1st monthsary, mi amore!❤️
              </p>
            </div>
          </div>

          {/* Interactive reply box */}
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <label className="block text-xs font-semibold text-rose-500 uppercase tracking-widest text-left">
              Send a Love Reply:
            </label>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a sweet reply back..."
              rows={2}
              className="w-full p-3 border-2 border-rose-200 rounded-xl focus:border-rose-400 focus:outline-none text-sm transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Send Reply 💖
            </button>
          </form>
        </div>
      ) : (
        /* Sent Confirmation Screen */
        <div className="py-6 sm:py-12 flex flex-col items-center justify-center space-y-4 sm:space-y-6 flex-1">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl animate-bounce">
            💌
          </div>

          <div className="space-y-1 sm:space-y-2">
            <h3 className="font-pacifico text-xl sm:text-2xl text-rose-600">Reply Sent!</h3>
            <p className="font-caveat text-lg sm:text-xl text-rose-900 max-w-xs sm:max-w-sm">
              Your sweet words have been sent with a warm hug. It is saved in the heart!
            </p>
          </div>

          <button
            onClick={() => setIsSent(false)}
            className="px-5 py-2 border-2 border-rose-200 hover:bg-rose-50 text-rose-500 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer"
          >
            Read Letter Again
          </button>
        </div>
      )}
    </div>
  );
}

export default LoveLetter;
