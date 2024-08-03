import React, { useState } from 'react';
import WedPin from './WedPin';
import Modal from '../../../components/Modal';
import LikeFormModal from '../../../commons/LikeFormModal';

import image1 from '../../../assets/wed-1.jpg';
import image2 from '../../../assets/wed-2.jpg';
import image3 from '../../../assets/wed-3.jpg';
import image4 from '../../../assets/wed-4.jpg';
import image5 from '../../../assets/wed-5.jpg';
import image6 from '../../../assets/wed-6.jpg';
import image7 from '../../../assets/wed-7.jpg';
import image8 from '../../../assets/wed-8.jpg';
import image9 from '../../../assets/wed-9.jpg';
import image10 from '../../../assets/wed-10.jpg';
import image11 from '../../../assets/wed-11.jpg';
import image12 from '../../../assets/wed-12.jpg';

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
        <WedPin
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
