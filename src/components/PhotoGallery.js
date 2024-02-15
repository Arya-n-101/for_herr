import React, { useState } from 'react';
import Photo from './Photo';
import song1 from '../assets/song1.mp3';
import song2 from '../assets/song2.mp3';
import song3 from '../assets/song3.mp3';
import song4 from '../assets/song4.mp3';
import song5 from '../assets/song5.mp3';
import song6 from '../assets/song6.mp3';
import song7 from '../assets/song7.mp3';
import song8 from '../assets/song8.mp3';
import song9 from '../assets/song9.mp3';
import song10 from '../assets/song10.mp3';
// Import your photos
import photo1 from '../pics/pic1.jpg';
import photo2 from '../pics/pic2.jpg';
import photo3 from '../pics/pic9.jpg';
import photo4 from '../pics/pic7.jpg';
import photo5 from '../pics/pic4.jpg';
import photo6 from '../pics/pic10.jpg';
import photo7 from '../pics/pic5.jpg';
import photo8 from '../pics/pic3.jpg';
import photo9 from '../pics/pic6.jpg';
import photo10 from '../pics/pic11.jpg';

const photos = [
  { id: 1, src: photo1, song: song1, description: "Ya, so the first photo I clicked of you... I was quite glad I met you in Madras and I still am. I hope I'll be, XD... but damn, I miss those 3 days so much." },
  { id: 2, src: photo2, song: song2, description: "Ahuh, the second picture... Lmao, I was just smiling seeing you eating because, I don't know, I found it funny." },
  { id: 3, src: photo3, song: song3, description: "Ahhhh..the only picture i have of inter techmeet logo...remember bout 13.0/7.0...will have a much better one then...." },
  { id: 4, src: photo4, song: song4, description: "Ahhh...so the day i asked out..not more of'i' asked out but okay...i love this day...22ndJan..burh almost a month,,doesn't even feel like it's been a month with you...Enjoyed a lot since then and irritated you too a lot...hahaha...but tu bhi kam pareshan nhi krti...but i like that so keep it up lol!" },
  { id: 5, src: photo5, song: song5, description: "And yea First date...altho not alone but had fun seeing you lose...lmao jk..wanted u to win and beat anika tho...loved the mouse cake adn the person who ate it teh most(not me)...the cutest part..bus ride back" },
  { id: 6, src: photo6, song: song6, description: "Lmao lsot again in this one but idk i like this pic.. you were like..cheating mt kr haha...sure will have a rematch one day...untill thennnn..best of luckkk maybe.." },
  { id: 7, src: photo7, song: song7, description: "uhhh...Core 4 ki chattt was sooooo gudd...that ledge and you>> just got to know bout blank space so yea here you go swiftie....SO wanted to come disang tho rn" },
  { id: 8, src: photo8, song: song8, description: "Uffff that dino/swan/jo bhi....i still have that heart u gave and i'll kill u if u dont..lmao....uk pehle i decided i'll make u an origami but lets save that to someday else...cuz abhi 14 paper nhi tha and i doubt my skills...vese dont judge my webD by this shit...idk a shit lol" },
  { id: 9, src: photo9, song: song9, description: "This shadow is one of the ebst shadow pics i have ever taken..(i love shadow pics) and i miss hugging you there and will take u again some day :)" },
  { id: 10, src: photo10, song: song10, description: "And the final one.....ACTUAL Valentines Day...it was fun...it was cute...i enjoyes and took you to a new place...hoddie count -1 tho...but i kinda liked it...have to start Hickey101 and buy turtle necks fr u....pretty much a cute romantic campus date...." },
];


function PhotoGallery() {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlaySong = (song) => {
    if (currentSong === song) {
      // If the same song is clicked again, pause it
      setCurrentSong(null);
    } else {
      setCurrentSong(song);
    }
  };

  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <Photo
          key={photo.id}
          src={photo.src}
          song={photo.song}
          handlePlaySong={handlePlaySong}
          isPlaying={photo.song === currentSong}
          description={photo.description}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
