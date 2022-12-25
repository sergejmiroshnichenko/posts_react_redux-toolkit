import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { GrLogout as LogOut } from 'react-icons/gr';


const Header = ({ isLoadedIn, setIsLoggedIn, userName, setUserName, userEmail, setUserEmail }) => {

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userName', '');
        localStorage.setItem('userEmail', '');
        setIsLoggedIn(false);
        setUserName('');
        setUserEmail('');
    }

    return (
        <header>
            {
                isLoadedIn &&
                <nav className={styles.header_list}>
                    <ul>
                        <li><em>Welcome,</em>&nbsp;<strong>{userName}</strong></li>
                        <li> {userEmail}</li>
                    </ul>
                    <NavLink
                        className={styles.logout}
                        onClick={handleLogOut}
                        to="/">&nbsp; Logout &nbsp;
                        <LogOut style={{ fontSize: '24px' }}/>
                    </NavLink>
                </nav>
            }
        </header>
    )
};

export default Header