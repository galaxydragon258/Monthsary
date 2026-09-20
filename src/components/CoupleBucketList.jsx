import { useState } from 'react';

export default function CoupleBucketList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Watch our favorite movies together and have cozy movie nights 🎬', completed: false },
    { id: 2, text: 'Go on countless dates and keep making new memories together 💕', completed: false },
    { id: 3, text: 'Graduate together and celebrate everything we worked hard for 🎓', completed: false },
    { id: 4, text: 'Travel to another country and experience a new place together ✈️', completed: false },
    { id: 5, text: 'Live together and build a cozy little home of our own 🏡', completed: false },
    { id: 6, text: 'Go on spontaneous adventures and explore places we have never been 🚗', completed: false },
    { id: 7, text: 'Watch the sunrise and sunset together in different places around the world 🌅', completed: false },
    { id: 8, text: 'Grow old together and still choose each other every single day 👵👴❤️', completed: false }
  ]);

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = items.filter((i) => i.completed).length;

  return (
    <section id="bucketlist" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <span>✨</span> Future Dreams
        </div>
        <h2 className="section-title">Our Couple’s Bucket List</h2>
        <p className="section-desc">
          Adventures, promises, and sweet memories we want to create together. ({completedCount}/{items.length} completed!)
        </p>
      </div>

      <div className="bucket-list-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bucket-item ${item.completed ? 'completed' : ''}`}
            onClick={() => toggleItem(item.id)}
            title="Click to check or uncheck goal"
          >
            <div className="bucket-checkbox">
              {item.completed ? '♥' : ''}
            </div>
            <div className="bucket-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
