import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ImageGalleryItem = ({onClick, src, alt, url}) => (
  
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={onClick}
      src={src}
      alt={alt}
      className={styles.ImageGalleryItemImage}
      url={url}
    />
  </li>
);


ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ImageGalleryItem;