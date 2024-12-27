// Loader.js
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;  /* Centers horizontally */
  align-items: center;      /* Centers vertically */
  position: fixed;          /* Fixes it in place */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Adds a background overlay */
  z-index: 9999;            /* Ensures the loader stays on top */
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

const Message = styled.div`
  margin-top: 10px; /* Space between the loader and text */
  font-size: 16px;
  color: white;     /* Optional: You can customize the text color */
  font-weight: bold; /* Optional: Makes the text bold */
`;


export const Loading = () => {
    return (
        <LoaderWrapper>
            <Loader />
            &nbsp;
            <Message>Please Wait</Message>
        </LoaderWrapper>

    );
};
