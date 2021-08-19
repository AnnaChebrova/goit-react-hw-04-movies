import React from 'react';
import styles from './styles.module.css';

class Searchbar extends React.Component {
    state = {
        searchQuery: '',
        };

    handleNameChange = (e) => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase()});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        return (
          <header className={styles.Searchbar} onSubmit={this.handleSubmit}>
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
                value={this.state.searchQuery}
               onChange={this.handleNameChange}
              />
          </form>
            </header>
      );
    }
};

export default Searchbar;