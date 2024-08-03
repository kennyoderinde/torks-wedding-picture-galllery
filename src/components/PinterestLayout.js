import React, { useState } from 'react';
import Pin from './Pin';
import Modal from './Modal';
import LikeFormModal from '../commons/LikeFormModal';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';

const images = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12
];

const PinterestLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLikeModalOpen(true);
  };

  const handleCloseLikeModal = () => {
    setIsLikeModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={containerStyle}>
      {images.map((image, index) => (
        <Pin
          key={index}
          size={index % 3 === 0 ? 'large' : index % 3 === 1 ? 'medium' : 'small'}
          image={image}
          onClickImage={() => handleImageClick(index)}
          onClickLike={handleLikeClick}
        />
      ))}
      {currentIndex !== null && (
        <Modal
          images={images}
          currentIndex={currentIndex}
          onClose={handleCloseModal}
          onLikeClick={handleLikeClick}
          onNextImage={handleNextImage}
          onPreviousImage={handlePreviousImage}
        />
      )}
      {isLikeModalOpen && <LikeFormModal onClose={handleCloseLikeModal} />}
    </div>
  );
};

const containerStyle = {
  padding: 0,
  margin: 0,
  width: '90vw',
  backgroundColor: 'black',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 350px)',
  gridAutoRows: '10px',
  justifyContent: 'center'
};

export default PinterestLayout;
