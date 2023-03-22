import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { GrLogout as LogOut } from 'react-icons/gr'
import { FaUserTie as User } from 'react-icons/fa'


const Header = ({ setIsLoggedIn, userName, setUserName }) => {

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userName', '');
        setIsLoggedIn(false);
        setUserName('');
    }

    return (
        <header>
            <nav className={styles.header_nav}>
                <ul className={styles.header_list}>
                    <li><em>Welcome,&nbsp;
                        <span className={styles.header_icon}>
                            <User/>
                            </span></em>&nbsp;
                        <strong>{userName}</strong>
                    </li>
                </ul>
                <NavLink
                    className={styles.logout}
                    onClick={handleLogOut}
                    to="/">&nbsp; Logout &nbsp;
                    <span className={styles.header_icon}>
                            <LogOut/>
                        </span>
                </NavLink>
            </nav>
        </header>
    )
};

export default Header