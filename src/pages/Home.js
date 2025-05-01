// src/pages/Home.js
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Hey Suhu 💖</h1>
      <p>I love you so incredibly much!</p>
      <Link to="/gallery" className="start-button">Start</Link>
    </div>
  );
}
