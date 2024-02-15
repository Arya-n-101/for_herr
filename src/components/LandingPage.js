// LandingPage.js
import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../App.css'; // Import CSS file for styling

function LandingPage() {
  const navigate = useNavigate();

  const redirectToGallery = () => {
    // history.push('/photo-gallery'); // Redirect to the photo gallery page
    navigate('/follow');
  };

  return (
    <div className="landing-page">
      <h1 className="title">Happy Valentine's Day Arushi</h1>
      <div className="content">
        <p className="message">I love you</p>
        <p className="question">Do you want to continue being in love with me?</p>
        <div className="buttons">
          <button className="yes-button" onClick={redirectToGallery}>Yes</button>
          <button className="yes-button" onClick={redirectToGallery}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
