import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function Photo({ src, song, handlePlaySong, isPlaying, description }) {
  const [showDescription, setShowDescription] = useState(false);
  const handleClick = () => {
    handlePlaySong(song); // Play or pause the song
    if(isPlaying){
    setShowDescription(!showDescription);
    } // Toggle description visibility
  };

  return (
    <div className="photo-container">
      <div className={`photo ${isPlaying ? 'playing' : ''}`} onClick={handleClick}>
        <img src={src} alt="Girlfriend" className="photo-image" />
        {showDescription && <div className="description">{description}</div>}
        {isPlaying && <ReactPlayer url={song} playing />}
      </div>
    </div>
  );
}

export default Photo;
