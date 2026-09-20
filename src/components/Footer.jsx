export default function Footer({ onResetTicket }) {
  return (
    <footer className="footer-container">
      <div className="footer-love-text">Forever & Always, You & Me ❤️</div>


      <div style={{ marginTop: '1.6rem' }}>
        <button className="quick-enter-btn" onClick={onResetTicket} title="Replay the ticket tear experience">
          <span>🎟️ Re-seal & Tear Ticket Again</span>
        </button>
      </div>
    </footer>
  );
}
