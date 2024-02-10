import styles from './Header.module.scss'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className={styles.content}>
            <NavBar />
        </div>
    );
};

export default Header;