import styled, { keyframes } from 'styled-components';

// Animations
const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

const glowingBorder = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); /* Yellow */
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7); /* Red */
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); /* Yellow */
  }
`;



const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;  /* Ensures the header stays at the top of the page */
  background: #2E5077;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px solid #55aaff;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  z-index: 10; /* Ensures the header stays above other content */

  .logo {
    margin-bottom: 10px;

    img {
  // max-width: 80px; /* Maximum width of the image */
  width: 200px;     /* Set the width of the image to 80px */
  // height: 80px;    /* Set the height of the image to 80px */
  object-fit: cover; /* Ensures the image covers the given dimensions without distorting */
  // border-radius: 50%; /* Makes the image circular */
  border: 3px solid #55aaff; /* Blue border */
}

  }

  h1 {
    margin: 0;
    font-size: 2rem;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  p {
    margin: 5px 0;
    font-size: 1.1rem;
    color: #556b2f;
  }
`;


// Gallery Grid Wrapper
export const GalleryWrap = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  scroll-behavior: smooth;  /* Enables smooth scrolling */

  @media (max-width: 480px) {
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

// Single Gallery Image
export const Single = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  /* 3D shadow with glowing animation */
  border: 2px solid rgba(0, 255, 127, 0.2); /* Light Green */
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1), 5px 10px 20px rgba(135, 206, 235, 0.6); /* 3D shadow effect */
  animation: ${glowingBorder} 2s infinite alternate;

  /* Hover effect for the 3D shadow */
  &:hover {
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2), 5px 15px 30px rgba(0, 255, 127, 0.7); /* Enhanced shadow on hover */
    transform: scale(1.1) translateY(-5px); /* Slight 3D effect on hover */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;

    /* Adding hover effect */
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 255, 127, 0.4); /* Light Green */
    }

    /* Active click effect */
    &:active {
      animation: ${clickAnimation} 0.5s;
    }
  }
`;

// Footer
export const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #8ecae6, #6ecf91); /* Light Blue to Light Green */
  color: #333;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 5px solid #55aaff;
  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.2);

  p {
    margin: 0;
    font-size: 1rem;
    color: #34a853;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .contact-details {
    margin-top: 10px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 5px 0;

        a {
          color: #34a853;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #55aaff;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const SliderWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(45deg, rgba(135, 206, 235, 0.9), rgba(0, 255, 127, 0.9)); /* Light Blue to Light Green gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); /* 3D shadow effect */

  .btnClose,
  .btnPrev,
  .btnNext {
    position: fixed;
    cursor: pointer;
    opacity: 0.8;
    color: #fff;
    z-index: 9999;
    font-size: 2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Add shadow for button text/icons */
    transition: opacity 0.3s ease, transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1); /* Slight zoom-in on hover */
    }
  }

  .btnClose {
    top: 20px;
    right: 20px;

    @media (min-width: 600px) {
      top: 40px;
      right: 40px;
    }
  }

  .btnPrev,
  .btnNext {
    top: 50%;
    transform: translateY(-50%);
  }

  .btnPrev {
    left: 10px;

    @media (min-width: 600px) {
      left: 40px;
    }
  }

  .btnNext {
    right: 10px;

    @media (min-width: 600px) {
      right: 40px;
    }
  }
`;

export const FullScreenImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    pointer-events: none;
    user-select: none;

    /* Border */
    border: 5px solid rgba(255, 255, 255, 0.7);

    /* 3D Shadow */
    box-shadow: 
      0px 15px 30px rgba(0, 0, 0, 0.5),  /* Main shadow */
      0px 5px 15px rgba(0, 0, 0, 0.3),  /* Inner soft shadow */
      inset 0px -5px 10px rgba(0, 0, 0, 0.2); /* Inset shadow for depth */

    /* Rounded corners */
    border-radius: 15px;

    /* Background gradient */
    background: linear-gradient(45deg, rgba(135, 206, 235, 0.6), rgba(0, 255, 127, 0.6));

    /* 3D Perspective Effect */
    transform: perspective(500px) rotateX(5deg) rotateY(-5deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Add hover effect for interactivity */
    &:hover {
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale(1.05);
        box-shadow: 
          0px 25px 50px rgba(0, 0, 0, 0.6), /* Enhanced shadow on hover */
          0px 10px 20px rgba(0, 0, 0, 0.4);
    }
}
`;
