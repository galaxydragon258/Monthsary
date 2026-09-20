import TearTicket from '../reactBitsComponent/TicketTear.jsx';

export default function TicketGate({ onComplete }) {
  const handleTear = () => {
    // Delay slightly to let the ticket falling physics animation complete gracefully
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  return (
    <div className="ticket-gate-container">
      <div className="ticket-backdrop-glow" />

      <div className="ticket-header-box">

        <h1 className="ticket-title">Happy Monthsary, My Love</h1>
        <p className="ticket-subtitle">
          Here is your exclusive boarding pass to our love journey. Grab the right stub and <strong>tear it downwards</strong> to step inside!
        </p>
      </div>

      <div className="ticket-wrapper">
        <TearTicket
          width={540}
          height={260}
          stubSize={165}
          radius={18}
          holes={10}
          holeSize={7}
          notch={4}
          roughness={1}
          background="#1b0c24"
          stubBackground="#2b1137"
          borderColor="rgba(245, 197, 107, 0.5)"
          borderWidth={1.5}
          color="#fff"
          tilt={true}
          tiltMax={10}
          onTear={handleTear}
          stub={
            <div className="ticket-stub-content">
              <div className="stub-tear-indicator">
                <span>✂️</span>
                <span className="stub-tear-text">TEAR HERE</span>
                <span style={{ fontSize: '0.75rem' }}>▼ PULL DOWN ▼</span>
              </div>
              <div className="stub-stamp">Forever</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
                PASS #LOVE-2026
              </div>
            </div>
          }
        >
          <div className="ticket-content-body">
            <div className="ticket-pass-label">
              <span>✦ ADMIT TWO ✦</span>
              <span>SPECIAL CELEBRATION</span>
            </div>

            <div>
              <div className="ticket-hero-title">Our Monthsary Journey</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Destination: A Lifetime Together & Many More Milestones
              </div>
            </div>

            <div className="ticket-meta-grid">
              <div className="ticket-meta-item">
                <label>PASSENGER</label>
                <span>My Favorite Person</span>
              </div>
              <div className="ticket-meta-item">
                <label>SEAT RESERVATION</label>
                <span>In My Heart ❤️</span>
              </div>
              <div className="ticket-meta-item">
                <label>DATE & TIME</label>
                <span>Today & Always</span>
              </div>
              <div className="ticket-meta-item">
                <label>GATE CODE</label>
                <span>FOREVER-01</span>
              </div>
            </div>

            <div className="ticket-barcode-strip">
              <span className="ticket-barcode">||| | ||||| | ||| |||| |</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--gold-accent)', fontWeight: 600 }}>
                NON-REFUNDABLE LOVE
              </span>
            </div>
          </div>
        </TearTicket>
      </div>

      <div className="ticket-footer-action">

      </div>
    </div>
  );
}
