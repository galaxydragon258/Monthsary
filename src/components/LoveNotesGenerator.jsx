export default function LoveNotesGenerator() {
  const reasons = [
    {
      icon: '🫂',
      title: 'How You Comfort Me',
      desc: 'Whenever I feel tired, overwhelmed, or lost, you always know how to make me feel a little better. Your comfort means more to me than you probably realize.'
    },
    {
      icon: '🤍',
      title: 'How You Value My Feelings',
      desc: 'I love how you listen to me and take my feelings seriously. You make me feel heard, understood, and safe enough to be completely honest with you.'
    },
    {
      icon: '🤝',
      title: 'Your Endless Support',
      desc: 'You always support me and remind me that I can do things even when I start doubting myself. Knowing that you believe in me means everything.'
    },
    {
      icon: '😊',
      title: 'Your Beautiful Smile',
      desc: 'Your smile will always be one of my favorite things about you. No matter what kind of day I am having, seeing you smile somehow makes everything feel lighter.'
    },
    {
      icon: '💕',
      title: 'The Way You Treat Me',
      desc: 'I love the way you treat me—with patience, care, understanding, and love. It is in all the little things you do that I feel how much you care about me.'
    },
    {
      icon: '🌷',
      title: 'You Are Always There',
      desc: 'Whenever I need someone, you are there. Having someone I can turn to, talk to, laugh with, and simply be myself around is something I will always be grateful for.'
    }
  ];

  return (
    <section id="reasons" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <span>💖</span> Sweet Whispers
        </div>
        <h2 className="section-title">Why You Mean The World To Me</h2>
        <p className="section-desc">
          There are thousands of reasons, but here are six of the countless things I cherish most about you.
        </p>
      </div>

      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <div key={i} className="reason-card">
            <div className="reason-icon">{r.icon}</div>
            <h3 className="reason-title">{r.title}</h3>
            <p className="reason-desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
