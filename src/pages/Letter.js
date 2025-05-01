// src/pages/Letter.js
import { Link } from 'react-router-dom';
import './Letter.css';

export default function Letter() {
  return (
    <div className="letter-container">
      <div className="letter-card">
        {/* <audio src="/luther.mp3" autoPlay loop /> */}
        <h2>Just You & Me</h2>
        <p>
          Today’s one of those random little holidays my love! Happy National Lovers Day and Happy Couple Appreciation Day!
          But honestly, I don’t need a calendar to remind me how lucky I am to have you.
        </p>
        <p>
          I made this because you deserve something a little extra my love.  
          You’ve been my peace, my favorite (and tbh my only) comfort, and my favorite kind of distraction all at once.  
          I don't think I say it enough, but you mean so much to me, and I really hope to spend the rest of my life with you jaanu.
        </p>
        <p>
          We may be thousands of miles apart, but you make every moment together feel like magic.  
          Whether it’s doing absolutely nothing or laughing over something dumb, it always feels better when it’s with you.
        </p>
        <p>
          Thank you for being patient with me. For being with me. For choosing me over and over again.  
          I don’t take that for granted. I never have and I never ever will. Not for a second my love, I promise.
        </p>
        <p>
          I love you so so so so so so so so so incredibly much Suhu. You're truly my everything baby! I hope you liked this little surprise I made
          for you, from me, on a day that means so much more because you're in it.
        </p>
        <p>
          Forever Yours,  
          <br />Your Jayu
        </p>

        {/* Back to Home button */}
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </div>
  );
}
