import styles from './Footer.module.scss'
import { FaGithubSquare as GitHub } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2022 by Sergej Miroshnichenko</p> &nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sergejmiroshnichenko">
                <GitHub/>
            </a>
        </footer>
    );
};

export default Footer;
