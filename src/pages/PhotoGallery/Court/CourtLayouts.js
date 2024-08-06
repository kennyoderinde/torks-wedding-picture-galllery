import React, { useState } from 'react';
import CourtPin from './CourtPin';
import Modal from '../../../components/Modal';
import LikeFormModal from '../../../commons/LikeFormModal';

import image1 from '../../../assets/court/CRT-1.jpg';
import image2 from '../../../assets/court/CRT-2.jpg';
import image2A from '../../../assets/court/CRT-2A.jpg';
import image2B from '../../../assets/court/CRT-2B.jpg';
import image3 from '../../../assets/court/CRT-3.jpg';
import image4 from '../../../assets/court/CRT-4.jpg';
import image5 from '../../../assets/court/CRT-5.jpg';
import image6 from '../../../assets/court/CRT-6.jpg';
import image7 from '../../../assets/court/CRT-7.jpg';
import image8 from '../../../assets/court/CRT-8.jpg';
import image9 from '../../../assets/court/CRT-9.jpg';
import image10 from '../../../assets/court/CRT-10.jpg';
import image11 from '../../../assets/court/CRT-11.jpg';
import image12 from '../../../assets/court/CRT-12.jpg';
import image13 from '../../../assets/court/CRT-13.jpg';
import image14 from '../../../assets/court/CRT-14.jpg';
import image15 from '../../../assets/court/CRT-14.jpg';
import image16 from '../../../assets/court/CRT-16.jpg';
import image17 from '../../../assets/court/CRT-17.jpg';
import image18 from '../../../assets/court/CRT-18.jpg';
import image19 from '../../../assets/court/CRT-19.jpg';
import image20 from '../../../assets/court/CRT-20.jpg';
import image21 from '../../../assets/court/CRT-21.jpg';
import image22 from '../../../assets/court/CRT-22.jpg';


const images = [
  image1, image2, image2A, image2B, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12,
  image13, image14, image15, image16, image17, image17,
  image18, image19, image20, image21, image22


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
        <CourtPin
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
