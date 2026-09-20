export default function MilestoneTimeline() {
  const chapters = [
    {
      chapter: 'Chapter I',
      title: ' First Monthsary ✨',
      side: 'left',
      icon: '💫',
      website: {
        url: 'https://monthsary-murex.vercel.app/',
        image: 'picture/1st.png',
      },
    },
    {
      chapter: 'Chapter II',
      title: 'Second Monthsary 🌷',
      side: 'right',
      icon: '💗',
      website: {
        url: 'https://2nd-weld.vercel.app/',
        image: 'picture/2nd.png',
      },
    },
    {
      chapter: 'Chapter III',
      title: 'Third Monthsary 💖',
      side: 'left',
      icon: '💍',
      website: {
        url: 'https://monthsary3-six.vercel.app/',
        image: 'picture/3rd.png',
      },
    },
    {
      chapter: 'Chapter IV',
      title: 'Fourth Monthsary 🌅',
      side: 'right',
      icon: '🌸',
      website: {
        url: 'https://your-fourth-site.com',
        image: 'picture/4th.png',
      },
    },
  ];
  return (
    <section id="story" className="relative w-full px-6 py-20 section-wrapper flex flex-col items-center">
      {/* Header */}
      <div className="section-header mx-auto mb-14 max-w-2xl text-center ">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-400">
          <span>📖</span>
          Our Little Collection
        </div>

        <h2 className="mb-3 font-serif text-3xl font-bold text-white sm:text-4xl">
          Websites Made For You
        </h2>

        <p className="text-sm leading-relaxed text-[#b8a5c4] sm:text-base">
          Every website here is a little piece of my heart — made especially
          for you, one chapter at a time.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Desktop center line */}
        <div
          className="
            absolute left-1/2 top-0 hidden h-full w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-rose-500/30
            to-transparent
            md:block
          "
        />

        {/* Mobile line */}
        <div
          className="
            absolute left-4 top-0 h-full w-px
            bg-gradient-to-b
            from-transparent
            via-rose-500/30
            to-transparent
            md:hidden
          "
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {chapters.map((chapter) => (
            <TimelineRow
              key={chapter.chapter}
              item={chapter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Timeline Row
   ============================================================ */

function TimelineRow({ item }) {
  const isLeft = item.side === 'left';

  return (
    <div className="relative min-h-[180px] w-full">
      <TimelineIcon item={item} />
      <br />
      <div
        className={`
          absolute top-0 w-80
          ${isLeft ? 'left-16 mr-12' : 'right-16 ml-12'}
        `}
      >
        <WebsiteCard item={item} />
      </div>
    </div>
  );
}

/* ============================================================
   Timeline Icon
   ============================================================ */

function TimelineIcon({ item }) {
  return (
    <div
      className={`
        relative z-10 flex h-10 w-10 shrink-0
        items-center justify-center
        rounded-full border-2 border-rose-500/40
        bg-[#1c1024] text-lg
        shadow-[0_0_20px_rgba(244,63,94,0.35)]
        md:absolute md:left-1/2 md:-translate-x-1/2

        ${item.comingSoon
          ? 'animate-[pulseSoon_2.2s_ease-in-out_infinite]'
          : ''
        }
      `}
    >
      {item.icon}
    </div>
  );
}

/* ============================================================
   Website Card
   ============================================================ */

function WebsiteCard({ item }) {
  const { chapter, title, desc, website } = item;

  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block overflow-hidden
        rounded-xl
        border border-white/10
        bg-[linear-gradient(160deg,#1c1024_0%,#12081a_100%)]
        text-left no-underline text-inherit
        transition-all duration-300
        hover:-translate-y-1
        hover:border-rose-500/55
        hover:shadow-[0_15px_30px_-15px_rgba(244,63,94,0.35)]
      "
    >
      {/* Website Preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#12081a]">
        <img
          src={website.image}
          alt={`${website.name} preview`}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-[#14081e]/50
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        >
          <span
            className="
              rounded-full
              bg-rose-500/90
              px-3 py-1.5
              text-xs font-bold text-white
            "
          >
            Open Website ↗
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="m-10">

        {/* Chapter */}
        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-rose-400">
          {chapter}
        </div>

        {/* Title */}
        <h3 className="mb-1 font-serif text-base font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-[#b8a5c4]">
          {desc}
        </p>

        {/* Website Name */}
        <div className="mt-3 border-t border-dashed border-white/10 pt-3">
          <span className="text-[11px] font-semibold text-rose-500">
            {website.name}
          </span>
        </div>

      </div>
    </a>
  );
}

