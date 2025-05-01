// src/pages/Gallery.js
import { Link } from 'react-router-dom';
import './Gallery.css';

const leftImages = [
  { src: '/assets/1.jpeg', caption: 'That first smile 💕' },
  { src: '/assets/5.jpeg', caption: 'My favorite laugh.' },
  { src: '/assets/3.jpeg', caption: 'This day >>>>' },
];

const rightImages = [
  { src: '/assets/4.jpeg', caption: 'Caught us being senti.' },
  { src: '/assets/2.jpeg', caption: 'You. Me. Always.' },
  { src: '/assets/6.jpeg', caption: 'Forever feels like this.' },
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {/* Background music */}

      <h1>Our Favorite Moments</h1>

      <div className="media-layout">
        {/* Left images */}
        <div className="image-column">
          {leftImages.map((photo, index) => (
            <div className="photo-card" key={index}>
              <img src={photo.src} alt={`left-${index}`} />
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>

        {/* Center vertical video */}
        <div className="video-wrapper">
          <video
            className="vertical-video"
            autoPlay
            loop
            muted
            playsInline
            controls={false} // remove this if you want visible player
          >
            <source src="/assets/US.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right images */}
        <div className="image-column">
          {rightImages.map((photo, index) => (
            <div className="photo-card" key={index}>
              <img src={photo.src} alt={`right-${index}`} />
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/letter" className="next-button">One Last Thing 💌</Link>
    </div>
  );
}
