import { useState, useEffect, useMemo, useCallback } from 'react';

export default function CelebrationModal({ triggerBurst }) {
  const [wished, setWished] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const launchConfetti = useCallback(() => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (triggerBurst > 0) {
      const startTimer = setTimeout(() => {
        setConfettiActive(true);
      }, 10);
      const endTimer = setTimeout(() => {
        setConfettiActive(false);
      }, 4000);
      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [triggerBurst]);

  const handleWish = () => {
    setWished(true);
    launchConfetti();
  };

  // Generate 50 confetti/heart items deterministically
  const confettiPieces = useMemo(() => {
    const colors = ['#f43f5e', '#fb7185', '#f5c56b', '#fde047', '#e879f9', '#ffffff'];
    return Array.from({ length: 50 }).map((_, i) => {
      const left = ((i * 17) % 98) + 1;
      const duration = 2.5 + ((i * 7) % 20) / 10;
      const delay = ((i * 13) % 10) / 10;
      const color = colors[i % colors.length];
      const isHeart = i % 2 === 0;

      return (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            backgroundColor: isHeart ? 'transparent' : color,
            fontSize: isHeart ? '18px' : undefined
          }}
        >
          {isHeart ? '❤️' : ''}
        </div>
      );
    });
  }, []);

  return (
    <>
      {confettiActive && <div className="confetti-overlay">{confettiPieces}</div>}

      <section className="section-wrapper">
        <div className="celebrate-card">
          <div
            className="candle-interactive"
            onClick={handleWish}
            title="Click to make a wish and blow out the celebration candle"
          >
            {wished ? '🎂✨' : '🕯️'}
          </div>

          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            {wished ? 'Your Wish Is Sealed In The Stars! 🌟' : 'Make a Monthsary Wish Together'}
          </h2>

          <p className="section-desc" style={{ maxWidth: '520px' }}>
            {wished
              ? 'May all our prayers, laughter, and future milestones come true. I love you more with every passing second!'
              : 'Close your eyes, think of the sweetest wish for our future, and tap the candle or button below to send it into the universe!'}
          </p>

          <button className="celebrate-btn" onClick={handleWish}>
            <span>🎉 {wished ? 'Celebrate Again!' : 'Blow The Candle & Celebrate'}</span>
          </button>
        </div>
      </section>
    </>
  );
}
