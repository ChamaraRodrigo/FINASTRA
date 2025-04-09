import React from 'react';
import './css/SpeakerCard.css';


const SpeakerCard = ({ speaker }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${speaker.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      <div className="category">{speaker.company || 'Guest Speaker'}</div>
      <div className="heading">
        {speaker.name}
        <div className="author">
          {speaker.title && (
            <>
              <span className="name">{speaker.title}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
