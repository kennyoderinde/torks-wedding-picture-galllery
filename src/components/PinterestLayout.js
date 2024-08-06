import React, { useState } from 'react';
import Pin from './Pin';
import Modal from './Modal';
import LikeFormModal from '../commons/LikeFormModal';

import image1 from '../assets/kenny-engagement/eng-1.jpg';
import image2 from '../assets/kenny-engagement/eng-2.jpg';
import image3 from '../assets/kenny-engagement/eng-3.jpg';
import image4 from '../assets/kenny-engagement/eng-4.jpg';
import image5 from '../assets/kenny-engagement/eng-5.jpg';
import image6 from '../assets/kenny-engagement/eng-6.jpg';
import image7 from '../assets/kenny-engagement/eng-7.jpg';
import image8 from '../assets/kenny-engagement/eng-8.jpg';
import image9 from '../assets/kenny-engagement/eng-9.jpg';
import image10 from '../assets/kenny-engagement/eng-10.jpg';
import image11 from '../assets/kenny-engagement/eng-11.jpg';
import image12 from '../assets/kenny-engagement/eng-12.jpg';
import image13 from '../assets/kenny-engagement/eng-13.jpg';
import image14 from '../assets/kenny-engagement/eng-14.jpg';
import image15 from '../assets/kenny-engagement/eng-15.jpg';
import image16 from '../assets/kenny-engagement/eng-16.jpg';
import image16a from '../assets/kenny-engagement/eng-16a.jpg';
import image16b from '../assets/kenny-engagement/eng-16b.jpg';
import image16c from '../assets/kenny-engagement/eng-16c.jpg';

import image17 from '../assets/kenny-engagement/eng-17.jpg';
import image18 from '../assets/kenny-engagement/eng-18.jpg';
import image19 from '../assets/kenny-engagement/eng-19.jpg';
import image20 from '../assets/kenny-engagement/eng-20.jpg';
import image21 from '../assets/kenny-engagement/eng-21.jpg';
import image22 from '../assets/kenny-engagement/eng-22.jpg';
import image23 from '../assets/kenny-engagement/eng-23.jpg';
import image24 from '../assets/kenny-engagement/eng-24.jpg';
import image25 from '../assets/kenny-engagement/eng-25.jpg';
import image26 from '../assets/kenny-engagement/eng-26.jpg';
import image27 from '../assets/kenny-engagement/eng-27.jpg';
import image28 from '../assets/kenny-engagement/eng-28.jpg';
import image29 from '../assets/kenny-engagement/eng-29.jpg';
import image30 from '../assets/kenny-engagement/eng-30.jpg';
import image31 from '../assets/kenny-engagement/eng-31.jpg';
import image32 from '../assets/kenny-engagement/eng-32.jpg';
import image33 from '../assets/kenny-engagement/eng-33.jpg';
import image34 from '../assets/kenny-engagement/eng-34.jpg';
import image35 from '../assets/kenny-engagement/eng-35.jpg';
import image36 from '../assets/kenny-engagement/eng-36.jpg';
import image37 from '../assets/kenny-engagement/eng-37.jpg';



const images = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12,
  image13, image14, image15, image16, image16a, image16b, image16c, image17, image18,
  image19, image20, image21, image22, image23, image24,
  image25, image26, image27, image28, image29, image30, image31,
  image32, image33, image34, image35, image36, image37
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
