// src/pages/Gallery.js
import { Link } from 'react-router-dom';
import './Gallery.css';

const leftImages = [
  { src: `${process.env.PUBLIC_URL}/assets/1.jpeg`, caption: 'That first smile 💕' },
  { src: `${process.env.PUBLIC_URL}/assets/5.jpeg`, caption: 'My favorite laugh.' },
  { src: `${process.env.PUBLIC_URL}/assets/3.jpeg`, caption: 'This day >>>>' },
];

const rightImages = [
  { src: `${process.env.PUBLIC_URL}/assets/4.jpeg`, caption: 'Caught us being senti.' },
  { src: `${process.env.PUBLIC_URL}/assets/2.jpeg`, caption: 'You. Me. Always.' },
  { src: `${process.env.PUBLIC_URL}/assets/6.jpeg`, caption: 'Forever feels like this.' },
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {/* Background music */}
      {/* <audio src={`${process.env.PUBLIC_URL}/luther.mp3`} autoPlay loop /> */}

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
          >
            <source src={`${process.env.PUBLIC_URL}/assets/us.mp4`} type="video/mp4" />
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
