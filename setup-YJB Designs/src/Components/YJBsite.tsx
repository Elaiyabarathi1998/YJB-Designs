
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { GalleryWrap, Single, SliderWrap, FullScreenImage, Header, StyledFooter } from './WSPGallery.styles';
import logo from '../images/logo.png'; // Import the logo image

interface GalleryImage {
  img: string;
}

interface WSPGalleryProps {
  galleryImages: GalleryImage[];
}

const WSPGallery: React.FC<WSPGalleryProps> = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  };




  return (
    <div>
      {/* Header */}
      <Header>
      <div className="logo">
        <img src={logo} alt="Gallery Logo" />
      </div>
        <h1>Gallery</h1>
        <p>Explore our image collection</p>
      </Header>

      {openModal && galleryImages.length > 0 && (
        <SliderWrap>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <FullScreenImage>
            <img
              src={galleryImages[slideNumber]?.img || ''}
              alt={`Slide ${slideNumber + 1}`}
            />
          </FullScreenImage>
        </SliderWrap>
      )}

      {/* Gallery */}
      <GalleryWrap>
  {galleryImages.length > 0 ? (
    galleryImages.map((slide, index) => {
      // Generate unique random values for each image based on the index
      const randomRating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
      const randomViewCount = Math.floor(Math.random() * 1000) + 1; // Random view count

      // Calculate width of the review bar based on random rating
      const reviewBarWidth = `${(randomRating / 5) * 100}%`;

      return (
        <Single key={index} onClick={() => handleOpenModal(index)}>
          <div className="cardContent">
            {/* Image */}
            <div className="cardImage">
              <img src={slide.img} alt={`Thumbnail ${index + 1}`} />
            </div>

            {/* Content */}
            <div className="contentLeft">
              {/* Rating and Star */}
              <div className="rating">
                <span className="star">★</span>
                <span className="ratingNumber">{randomRating}</span>
              </div>
              {/* View count */}
              <div className="viewValue">Views: {randomViewCount}</div>
            </div>

            {/* Right content - Review Bar */}
            <div className="contentRight">
              <div className="reviewBar">
                <div className="levelBar">
                  <div className="level" style={{ width: reviewBarWidth }}></div>
                </div>
                <span className="levelText">{randomRating} / 5</span>
              </div>
            </div>
          </div>
        </Single>
      );
    })
  ) : (
    <p>No images available</p>
  )}
</GalleryWrap>

      {/* Footer */}
      <StyledFooter>
        <p>© 2024 Gallery. All rights reserved.</p>
        <div className="contact-details">
          <p>Contact us:</p>
          <ul>
            <li>WhatsApp: <a href="https://wa.me/yourphonenumber" target="_blank">+123456789</a></li>
            <li>Instagram: <a href="https://instagram.com/youraccount" target="_blank">@youraccount</a></li>
            <li>Phone: <a href="tel:+123456789">+123456789</a></li>
          </ul>
        </div>
      </StyledFooter>
    </div>
  );
};

export default WSPGallery;


