import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ImageGallery = ({ children }) => (
  <ul className={styles.ImageGallery}>{children}</ul>
);


ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;