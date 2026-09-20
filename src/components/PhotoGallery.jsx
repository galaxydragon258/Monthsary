import DomeGallery from '../reactBitsComponent/DomeGallery.jsx';

export default function PhotoGallery() {
  const memoryImages = [
    {
      src: '/picture/17f6e9aa-1aac-4175-a5a8-95f62979dea0.jpg',
    },
    {
      src: '/picture/1bede6cb-c79b-4b29-84ab-8d3eb708a1a3.jpg',
    },
    {
      src: '/picture/774fbd06-4bf0-46d0-9449-08a6f7d86cd4.jpg',
    },
    {
      src: '/picture/ab8b18cf-41f9-4e11-b8ed-1fa03317c8eb.jpg',
    },
    {
      src: '/picture/b1f8b3bf-2e2f-40b9-a487-ac624968c429.jpg',
    },
    {
      src: '/picture/bf0c51dc-9e0b-4ddc-8326-e1067ba1f238.jpg',
    },
    {
      src: '/picture/c51ef479-854b-4037-be04-7bded98e9144.jpg',
    },
    {
      src: '/picture/ee1de36a-80ea-47c7-8857-e0052f54080a.jpg',
    }
  ];

  return (
    <section id="gallery" className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">Memories With you</h2>

      </div>

      <div
        style={{
          width: '100%',
          height: '620px',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid var(--border-gold)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(244, 63, 94, 0.15)',
          background: '#0e0814'
        }}
      >
        <DomeGallery
          images={memoryImages}
          fit={0.65}
          minRadius={500}
          maxRadius={900}
          overlayBlurColor="#0e0814"
          dragSensitivity={18}
          dragDampening={1.8}
          grayscale={false}
          imageBorderRadius="16px"
          openedImageBorderRadius="24px"
          openedImageWidth="420px"
          openedImageHeight="420px"
        />
      </div>
    </section>
  );
}
