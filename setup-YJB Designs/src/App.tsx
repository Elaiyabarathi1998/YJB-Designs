import './App.css';
import { useState, useEffect } from 'react';
import YJBsite from './Components/YJBsite'; // Import your YJBsite component
import { Loading } from './Components/Loader';  // Import the Loader component
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';
import image14 from './images/14.jpg';
import image15 from './images/15.jpg';
import image16 from './images/16.jpg';
import image17 from './images/17.jpg';
import image18 from './images/18.jpg';
import image19 from './images/19.jpg';
import image20 from './images/logo.png';

// Define the type for a gallery image
interface GalleryImage {
  img: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]); // State with the correct type

  useEffect(() => {
    // Simulate a data fetch (e.g., from an API or a static source)
    setTimeout(() => {
      setGalleryImages([
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
        { img: image12 },
        { img: image13 },
        { img: image14 },
        { img: image15 },
        { img: image16 },
        { img: image17 },
        { img: image18 },
        { img: image19 },
        { img: image20 }
      ]);
      setLoading(false); // Set loading to false once images are loaded
    }, 2000); // Simulating a 2-second load time
  }, []);

  return (
    <div className="App">
      {/* Conditionally render the loader */}
      {loading ? (
        <Loading />  // Show the loader while images are loading
      ) : (
        <YJBsite
          galleryImages={galleryImages}
        />
      )}

      
    </div>
  );
}

export default App;
