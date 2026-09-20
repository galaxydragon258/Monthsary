import { useState, useEffect, useRef } from 'react';
import CodeSlots from '../reactBitsComponent/CodeSlots.jsx';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const successRef = useRef(false);      // guards backdrop-close during success delay
  const cardRef = useRef(null);

  const CARD_W = 460;
  const CARD_H = 520;

  const correctCode = '051926';
  const verifyCode = async (code) => code === correctCode;

  const handleComplete = async (code) => {
    const ok = await verifyCode(code);
    if (ok) {
      successRef.current = true;
      setStatus('success');
      setErrorMessage('');
      setTimeout(() => {
        setShowModal(false);
        setIsOpen(true);
        setStatus('idle');
        successRef.current = false;
      }, 750);
    } else {
      setStatus('error');
      setErrorMessage('Incorrect love code! Try again 💔');
    }
  };

  const closeModal = () => {
    if (successRef.current) return;   // don't cancel a success in flight
    setShowModal(false);
  };

  const handleSealClick = (e) => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    // anchor to the seal bar's bounding box (feels better than raw cursor)
    const rect = e.currentTarget.getBoundingClientRect();
    const clampedX = Math.min(
      Math.max(rect.left + rect.width / 2 - CARD_W / 2, 12),
      window.innerWidth - CARD_W - 12
    );
    const clampedY = Math.min(
      Math.max(rect.bottom + 12, 12),
      window.innerHeight - CARD_H - 12
    );

    setCoords({ x: clampedX, y: clampedY });
    setStatus('idle');
    setErrorMessage('');
    setShowModal(true);
  };

  // Escape to close
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  return (
    <section id="letter" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <span>💌</span> Sealed with Love
        </div>
        <h2 className="section-title">A Letter From My Heart</h2>
        <p className="section-desc">
          Click on the envelope to break the wax seal and unfold my heartfelt words written just for you.
        </p>
      </div>

      <div className="letter-section-container">
        <div className="envelope-card">
          <div className="envelope-seal-bar" onClick={handleSealClick}>
            <div className="seal-info">
              <div className="wax-seal-badge">
                <span>{isOpen ? '🔓' : '❤️'}</span>
              </div>
              <div>
                <div className="seal-title">To My Dearest Love</div>
                <div className="seal-subtitle">
                  {isOpen ? 'Tap to fold the letter back' : 'Tap to unseal with passcode and read'}
                </div>
              </div>
            </div>

            <div className="seal-toggle-hint">
              <span>{isOpen ? 'Fold Letter ▲' : 'Open Letter ▼'}</span>
            </div>
          </div>

          {isOpen && (
            <div className="letter-paper">
              <p>My Dearest,</p>
              <p>
                Happy Monthsary! Looking back at all our days together, I find myself smiling at the simplest memories—our random midnight conversations, the way your laughter lights up an entire room, and how safe the world feels whenever I am with you.
              </p>
              <p>
                Loving you has been the easiest and most beautiful thing I have ever done. You are not only my partner in crime, but my greatest comfort, my favorite confidant, and the sweetest part of my everyday life.
              </p>
              <p>
                No matter how busy life gets or what hurdles come our way, I promise to always hold your hand, cheer for your dreams, listen to your stories, and remind you of just how deeply loved and cherished you are.
              </p>
              <p>
                Thank you for being you, and for choosing to walk this journey with me month after month. I can’t wait for all the adventures, laughter, and milestones still ahead.
              </p>
              <div className="letter-signoff">
                Forever & Always Yours, <br />
                <span>With all my love ❤️</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== Passcode Modal (positioned at click, not centered) ===== */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999]
                     bg-black/40 backdrop-blur-xl backdrop-saturate-150
                     animate-[fadeIn_0.35s_ease-out]"
          onClick={closeModal}
        >
          <div
            ref={cardRef}
            className="absolute w-[460px] max-w-[calc(100vw-24px)]
                       px-8 pt-10 pb-8 rounded-3xl text-center overflow-hidden
                       bg-[radial-gradient(120%_140%_at_50%_0%,rgba(244,63,94,0.18)_0%,transparent_55%),linear-gradient(160deg,#1c1024_0%,#12081a_100%)]
                       border border-rose-500/30
                       shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_30px_70px_-20px_rgba(244,63,94,0.35),0_20px_50px_-10px_rgba(0,0,0,0.8)]
                       animate-[popIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative rose glow */}
            <div
              className="pointer-events-none absolute -top-[60%] left-1/2 h-[220px] w-[220px]
                         -translate-x-1/2 rounded-full
                         bg-[radial-gradient(circle,rgba(244,63,94,0.45)_0%,transparent_70%)]
                         blur-[40px]"
            />

            {/* Close */}
            <button
              className="absolute top-3.5 right-3.5 z-[2] flex h-[34px] w-[34px] items-center justify-center
                         rounded-full border border-white/10 bg-white/5 text-sm text-white
                         transition-all duration-200
                         hover:rotate-90 hover:border-rose-500/60 hover:bg-rose-500/25
                         active:rotate-90 active:scale-90"
              onClick={closeModal}
              title="Close modal"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mb-2.5 text-[2.5rem] leading-none">🔐</div>

            <h3 className="mb-1.5 font-serif text-[1.6rem] font-bold text-white">
              Secret Love Passcode
            </h3>

            <p className="mb-6 text-[0.92rem] leading-relaxed text-[#b8a5c4]">
              Enter the 6-digit passcode to unlock and reveal my love letter.
            </p>

            <div className="my-4 flex justify-center">
              <CodeSlots
                length={6}
                status={status}
                onChange={() => {
                  if (status === 'error') {
                    setStatus('idle');
                    setErrorMessage('');
                  }
                }}
                onComplete={handleComplete}
                accentColor="#f43f5e"
                inkColor="#ffffff"
                slotColor="#190e22"
                digitColor="#ffffff"
                dangerColor="#ff3b30"
                slotSize={46}
                gap={8}
                radius={12}
                bounce={0.2}
                settle={0.3}
                rise={8}
                cascade={20}
                mask={false}
                caret={true}
                autoFocus={true}
                disabled={status === 'success'}
              />
            </div>

            {errorMessage && (
              <div className="mt-2.5 text-[0.85rem] font-semibold text-rose-400">
                {errorMessage}
              </div>
            )}

            <div className="mt-5 inline-block rounded-full border border-white/[0.07] bg-white/[0.045]
                            px-3.5 py-1.5 text-[0.78rem] text-[#9b8aa6]">
              💡 Passcode: <strong className="tracking-wider text-rose-500">The day na sinagot moko</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}