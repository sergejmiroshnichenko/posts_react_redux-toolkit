import React, { useEffect } from 'react';
import styles from './UserListPage.module.scss'
import { getUsers } from "../../store/userSlice";
import UserItem from "../../componenets/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../componenets/Header/Header";
import { FaGithubSquare as GitHub } from 'react-icons/fa'


const UserListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.user.users);
    const {status, error} = usersList;

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <div>
            <Header
                isLoadedIn={isLoadedIn}
                setIsLoggedIn={setIsLoggedIn}
                userName={userName}
                setUserName={setUserName}
            />
            {status === 'loading' && <h1>Loading...</h1>}
            {error && <h1>Error occured : {error}</h1>}
            <main className={styles.main}>
                {usersList.map(user => (
                        <UserItem key={user.id} user={user}/>
                    )
                )}
            </main>
            <footer>
                <p>© 2022 by Sergej Miroshnichenko</p> &nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/sergejmiroshnichenko"><GitHub style={{ fontSize: '28px' }}/></a>
            </footer>

        </div>
    );
};

export default UserListPage;
