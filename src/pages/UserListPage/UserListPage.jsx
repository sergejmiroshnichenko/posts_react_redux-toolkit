import React, { useEffect, useState } from 'react';
import styles from './UserListPage.module.scss'
import { getUsers } from "../../store/userSlice";
import UserItem from "../../componenets/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../componenets/Header/Header";
import Spinner from "../../componenets/Spinner/Spinner";
import Footer from "../../componenets/Footer/Footer"
import Modal from "../../componenets/Modal/Modal";
import AlbumsItem from "../../componenets/AlbumsItem/AlbumsItem";



const UserListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {

    const [modalActive, setModalActive] = useState(false);

    const dispatch = useDispatch()

    const { status, error, users } = useSelector(state => state.user);
    const { albums, currentUserId } = useSelector(state => state.albums);

    const currentUser = users.find(user => user.id === currentUserId)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            <Header
                isLoadedIn={isLoadedIn}
                setIsLoggedIn={setIsLoggedIn}
                userName={userName}
                setUserName={setUserName}
            />

            <main className={styles.main}>

                {error && <h1>Error occured : {error}</h1>}

                {status === 'loading' ?
                    <Spinner/> :
                    users && users.map(user => (
                            <UserItem
                                key={user.id}
                                user={user}
                                setModalActive={setModalActive}
                            />
                        )
                    )
                }
            </main>
            <Modal active={modalActive} setActive={setModalActive}
                   title={'Confirmation'}>
                {currentUser && (
                    <ul className={styles.current_user}>
                        <li>
                            <strong>userId:</strong> {currentUser.id}
                        </li>
                        <li>
                            <strong>user:</strong> {currentUser.name}
                        </li>
                        <li>
                            <strong>email:</strong> {currentUser.email}
                        </li>
                    </ul>
                )}

                {status === 'loading' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {albums && albums.map((album, index) => (
                    <AlbumsItem
                        key={album.id}
                        album={album}
                        index={index}/>
                ))}
            </Modal>
            <Footer/>
        </>
    );
};

export default UserListPage;
