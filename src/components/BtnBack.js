import { useHistory, useLocation } from "react-router-dom";
import styles from './styles.module.css'
import React from 'react';

const BtnBack = () => {
  const history = useHistory();
  const location = useLocation();

  const handleBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return <button title='Go back' type='button' onClick={handleBack} className={styles.btnBack}> Go back </button>;
};

export default BtnBack;