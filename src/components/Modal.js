import React from 'react';
import { FcLike } from "react-icons/fc";
import { MdDownload } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Modal = ({ images, currentIndex, onClose, onLikeClick, onNextImage, onPreviousImage }) => {
  if (currentIndex === null || !images || images.length === 0) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()} className=' '>
        <img src={images[currentIndex]} alt="" style={modalImageStyle} />
        <div style={iconContainerStyle}>
          <FcLike size={24} style={iconStyle} onClick={onLikeClick} />
          <a href={images[currentIndex]} download className="download-link">
            <MdDownload size={24} style={iconStyle} />
          </a>
        </div>
        <button style={leftArrowStyle} onClick={onPreviousImage}>
          <FaArrowLeft size={24} />
        </button>
        <button style={rightArrowStyle} onClick={onNextImage}>
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '90vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  position: 'relative',
  width: '90vw',
  maxWidth: '1000px',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxSizing: 'border-box',
  transform: 'translateX(-50%, -50%)',
 
};

const modalImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px'
};

const iconStyle = {
  cursor: 'pointer',
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: 'none',
  color: 'white',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '50%',
};

const leftArrowStyle = {
  ...arrowStyle,
  left: '10px',
};

const rightArrowStyle = {
  ...arrowStyle,
  right: '10px',
};

export default Modal;
