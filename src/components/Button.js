import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Button extends React.Component {
    render() {
    return (
        <button type="button" className={styles.Button} onClick={this.props.onClick}>
            Load more
        </button>
    )}
};


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default Button;