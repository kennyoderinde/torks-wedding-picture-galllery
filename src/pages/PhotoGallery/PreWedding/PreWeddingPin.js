import React from 'react';
import { FcLike } from "react-icons/fc";
import { MdDownload } from "react-icons/md";

const Pin = ({ image, size, onClickImage, onClickLike }) => {
  return (
    <div
      style={{
        ...pinStyle,
        ...sizeStyles[size],
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        cursor: 'pointer'
      }}
      className="pin-container"
      onClick={() => onClickImage(image)}
    >
      <div className="icon-container" onClick={(e) => e.stopPropagation()}>
        <FcLike size={24} style={iconStyle} onClick={onClickLike}/>
        <a href={image} download className="download-link">
          <MdDownload size={24} style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

const pinStyle = {
  margin: '30px 20px',
  padding: 0,
  borderRadius: '16px',
  backgroundColor: 'black',
  overflow: 'hidden'
};

const sizeStyles = {
  small: {
    gridRowEnd: 'span 36'
  },
  medium: {
    gridRowEnd: 'span 33'
  },
  large: {
    gridRowEnd: 'span 45'
  },
};

const iconStyle = {
  margin: '10px',
  color: 'white'
};

export default Pin;
