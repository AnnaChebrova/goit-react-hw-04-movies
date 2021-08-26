import React, { useState } from 'react';
import styles from './styles.module.css';

const  Searchbar=({onSubmit})=> {

  const [searchQuery, setSerchQuery] = useState('')

  const handleNameChange = (e) => {
        setSerchQuery( e.currentTarget.value.toLowerCase());
    };

   const handleSubmit = (e) => {
        e.preventDefault();
      onSubmit(searchQuery);
        setSerchQuery( '' );
    };

        return (
          <header className={styles.Searchbar} onSubmit={handleSubmit}>
          <form className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormBtnLabel}>Search</span>
            </button>

              <input
                className={styles.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchQuery}
               onChange={handleNameChange}
              />
          </form>
            </header>
      );
    }

export default Searchbar;