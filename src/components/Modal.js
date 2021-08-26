import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalRoot = document.querySelector('#modal-root');


const  Modal =({onClose, src, alt})=> {

  useEffect(
    () => { window.addEventListener('keydown', handleKeyDown);
      return () => { window.removeEventListener('keydown', handleKeyDown) };
  }
    , []);


    const handleKeyDown = e => {
      if (e.code === 'Escape') {
     onClose();
      }
    };
      
      const handleBackdropClick = event => {
      if (event.currentTarget === event.target) {
        onClose();
      }
      };

        return createPortal (
          <div className={styles.Overlay} onClick={handleBackdropClick}>
            <div className={styles.ModalContent}>
              <img src={src} alt={alt} />
            </div>
            </div>,
            modalRoot,
        );
    }

    export default Modal;
