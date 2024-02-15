import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import {useNavigate } from 'react-router-dom';

import '../App.css'; // Import CSS file for styling

function Follow() {
  // Define the original text for each div
  const originalTexts = {
    more: "For your information....it took 5 gpt hours to create this idk why I'm so bad at coding but deal w it...",
    ask: "So you may question.....What is this page....",
    ans: "It has all of a few photos that I have of yours and that connects a memory of u to me.... so there not a lot but sit back and enjoy maybe..",
    egg: "Easter egg alert-----Double Tap each pic to reveal a cute memory and insights related to it....and ay dont forget to single tap"
  };
  
  const navigate = useNavigate();

  const redirectToGallery = () => {

    navigate('/thanks');
  }
  // State to store the hovered content for each div
  const [hoveredContent, setHoveredContent] = useState({});

  // Function to handle mouseover event and update the hovered content
  const handleMouseOver = (divName, content) => {
    setHoveredContent({ ...hoveredContent, [divName]: content });
  };

  // Function to handle mouse leave event and reset the hovered content
  const handleMouseLeave = (divName) => {
    setHoveredContent({ ...hoveredContent, [divName]: "" });
  };

  return (
    <div className="follow">
      <div className="follow-text">
        <p>So, yea today is not Valentine's Day</p>
      </div>
      <div className="all">
        <div className="more" onMouseOver={() => handleMouseOver("more", "L")} onMouseLeave={() => handleMouseLeave("more")}>{hoveredContent.more || originalTexts.more}</div>
        <div className="ask" onMouseOver={() => handleMouseOver("ask", "O")} onMouseLeave={() => handleMouseLeave("ask")}>{hoveredContent.ask || originalTexts.ask}</div>
        <div className="ans" onMouseOver={() => handleMouseOver("ans", "V")} onMouseLeave={() => handleMouseLeave("ans")}>{hoveredContent.ans || originalTexts.ans}</div>
        <div className="egg" onMouseOver={() => handleMouseOver("egg", "E")} onMouseLeave={() => handleMouseLeave("egg")}>{hoveredContent.egg || originalTexts.egg}</div>
      </div>
      <PhotoGallery/>
      <section>
      <div className="end">Thank you Aruhsi for being here since the time we met and thanks for everything going on....I appreciate u in every field and i promise i won't ever maek u feel uncomfortable.....and dekh if all this is turning into a cringe shit...dont mind cuz i'm not gud at this stuff ;)
      So after this i'll still ask u again....
      </div>
      <div className="content">
        <p className="question">Do you want to continue being in love with me?</p>
        <div className="buttons">
          <button className="yes-button" onClick={redirectToGallery}>Yes</button>
          <button className="yes-button" onClick={redirectToGallery}>Yes</button>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Follow;
