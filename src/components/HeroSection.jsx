import { useState, useEffect } from 'react';

export default function HeroSection({ onOpenLetter, onOpenCelebration }) {
  // Default relationship start date: 6 months or 1 year back from current date
  const [startDate] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 6);
    return d.toISOString().split('T')[0];
  });

  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date("2026-05-19").getTime();
      const now = new Date().getTime();

      const difference = Math.max(0, now - start);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section id="hero" className="hero-wrapper h-screen">
      <div className="hero-pill">
        <span>✨</span> Celebrating Another Month Together <span>✨</span>
      </div>

      <h1 className="hero-main-title">
        Every Second With You <br />
        <span className="hero-highlight">Is My Favorite Memory</span>
      </h1>

      <p className="hero-lead-text">
        Thank you for filling my days with warmth, laughter, and endless love. Here’s to celebrating every little moment we have shared and every dream waiting ahead of us.
      </p>

      {/* Live Counter Card */}
      <div className="counter-box">
        <div className="counter-box-title">

          <span>Our Love Journey Clock</span>

        </div>

        <div className="timer-grid">
          <div className="timer-card">
            <div className="timer-digit">{timeTogether.days}</div>
            <div className="timer-label">Days Together</div>
          </div>
          <div className="timer-card">
            <div className="timer-digit">{String(timeTogether.hours).padStart(2, '0')}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-card">
            <div className="timer-digit">{String(timeTogether.minutes).padStart(2, '0')}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-card">
            <div className="timer-digit">{String(timeTogether.seconds).padStart(2, '0')}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="generate-note-btn" onClick={onOpenLetter}>
          <span>💌 Read My Love Letter</span>
        </button>
        <button className="quick-enter-btn" onClick={onOpenCelebration} style={{ padding: '0.85rem 1.8rem' }}>
          <span>🎉 Celebrate Us</span>
        </button>
      </div>
    </section>
  );
}
