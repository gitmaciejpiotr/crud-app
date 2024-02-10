import styles from './Footer.module.scss'
import clsx from 'clsx'

const Footer = () => {
    return (
        <div className={clsx(styles.content, "text-muted text-center m-3 p-2")}>
            Copyright &copy; BlogApp 2024
        </div>
    );
};

export default Footer;