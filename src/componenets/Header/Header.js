import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { GrLogout as LogOut } from 'react-icons/gr';
import {FaUserTie as User } from 'react-icons/fa'



const Header = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userName', '');
        setIsLoggedIn(false);
        setUserName('');
    }

    return (
        <header>
            {
                isLoadedIn &&
                <nav className={styles.header_nav}>
                    <ul className={styles.header_list}>
                        <li><em>Welcome, <User style={{ fontSize: '24px' }}/></em>&nbsp; <strong>{userName}</strong></li>
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