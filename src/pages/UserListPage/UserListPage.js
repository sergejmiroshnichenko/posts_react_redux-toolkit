import React, { useEffect } from 'react';
import styles from './UserListPage.module.scss'
import { getUsers } from "../../store/userSlice";
import UserItem from "../../componenets/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../componenets/Header/Header";
import Spinner from "../../componenets/Spinner/Spinner";
import Footer from "../../componenets/Footer/Footer"


const UserListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {

    const dispatch = useDispatch()
    const { status, error, users } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <Header
                    isLoadedIn={isLoadedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    userName={userName}
                    setUserName={setUserName}
                />

                <main className={styles.main}>
                    {status === 'loading' && (<Spinner/>)}

                    {error && <h1>Error occured : {error}</h1>}

                    {users.map(user => (
                            <UserItem key={user.id} user={user}/>
                        )
                    )}
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default UserListPage;
