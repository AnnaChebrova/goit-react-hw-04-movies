import React from 'react';
import styles from './styles.module.css';

const ImageGallery = ({ children }) => (
  <ul className={styles.ImageGallery}>{children}</ul>
);


export default ImageGallery;