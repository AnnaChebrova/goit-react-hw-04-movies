import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {

    componentDidMount() {
     window.addEventListener('keydown', this.handleKeyDown);
    };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleKeyDown = e => {
    if (e.code === 'Escape') {
    this.props.onClose();
    }
    return;
  };
    
    handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
    return;
    };

  render() {
       const { src, alt } = this.props;
        return createPortal (
          <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.ModalContent}>
              <img src={src} alt={alt} />
            </div>
            </div>,
            modalRoot,
        );
    }
}