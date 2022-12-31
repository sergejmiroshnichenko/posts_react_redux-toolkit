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
    const { albums } = useSelector(state => state.albums);

    console.log("albums >>10>>>", albums)
    console.log("users >>>10>>>>>", users)

    let userSingle = users.find(user => user.id === albums.userId)
    console.log("userSingle+++++++++++", userSingle)


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
                            <UserItem
                                key={user.id}
                                user={user}
                                setModalActive={setModalActive}
                            />
                        )
                    )}
                </main>
                <Modal active={modalActive} setActive={setModalActive}
                       title={'Confirmation'}>

                    {/*{users.map(user => (*/}
                    {/*        <AlbumsItem*/}
                    {/*            key={user.id}*/}
                    {/*            user={user}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*)}*/}
                    {/*{users.map(user => (*/}
                    {/*    <ul className={styles.user_single_info}>*/}
                    {/*        <li>*/}
                    {/*            <strong>userId:</strong> {user.id}*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <strong>user:</strong> {user.name}*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <strong>email:</strong> {user.email}*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <strong>albums:</strong>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*))}*/}

                    {status === 'loading' && <h2>Loading...</h2>}
                    {error && <h2>{error}</h2>}
                    {albums.map((album, index) => (
                        <AlbumsItem
                            key={album.id}
                            album={album}
                            index={index}/>
                    ))}
                </Modal>
            </div>
            <Footer/>
        </div>
    );
};

export default UserListPage;
