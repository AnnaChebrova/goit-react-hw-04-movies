import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'

 function PageNav() {
    return (
        <div className={styles.navBar}>
        <nav>
        <NavLink exact to="/" className={styles.navLink} activeClassName={styles.activeLink}>
          <span>Home</span>
        </NavLink>
        <NavLink exact to="/movies" className={styles.navLink} activeClassName={styles.activeLink}>
          <span>Movies</span>
          </NavLink>
        </nav>
    </div>
    );
};

export default PageNav;