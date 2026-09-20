import { useState, useEffect, useRef } from 'react';

export default function Navbar({ onResetTicket, onOpenCelebration }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/music/Taylor%20Swift%20-%20Lover.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback error:', err);
      });
    }
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-glass">
        <a href="#hero" className="nav-brand">
          <span>💖</span>
          <span>Our Monthsary</span>
        </a>

        <div className="nav-actions">
          <button
            className={`nav-btn ${isPlaying ? 'active' : ''}`}
            onClick={toggleMusic}
            title={isPlaying ? 'Pause Lover' : 'Play Lover - Taylor Swift'}
          >
            <span>{isPlaying ? '🎵 Playing Lover' : '🔈 Play Music'}</span>
          </button>

          <button
            className="nav-btn"
            onClick={onOpenCelebration}
            title="Launch fireworks and floating hearts celebration"
          >
            <span>✨ Celebrate</span>
          </button>

          <button
            className="nav-btn"
            onClick={onResetTicket}
            title="View the ticket tear again"
          >
            <span>🎟️ View Ticket</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
