import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styles from "../UserListPage/UserListPage.module.scss";
import s from './UserPostListPage.module.scss'
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../componenets/Spinner/Spinner";
import { getPosts, postsClear } from "../../store/postsSlice";
import PostsItem from '../../componenets/PostsItem/PostsItem'
import classNames from "classnames";
import { Button } from "@mui/material";


const UserPostListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            dispatch((getPosts(id)));
        }
        return () => {
            dispatch(postsClear())
        }
    }, [id, dispatch]);

    const { status, error, data } = useSelector(state => state.posts);

    const navigation = useNavigate()
    const goBack = () => navigation(-1)

    return (
        <>
            <Header
                isLoadedIn={isLoadedIn}
                setIsLoggedIn={setIsLoggedIn}
                userName={userName}
                setUserName={setUserName}
            />
            <main className={classNames(styles.main)}>
                <div className={styles.user_single}>
                    {status !== 'loading' ?
                        <Button
                            variant="outlined"
                            className={s.go_back}
                            size='small'
                            onClick={goBack}>
                            Go back
                        </Button>
                        : ''}
                    {data && data.user && (
                        <ul className={styles.user_single_info}>
                            <li>
                                <strong>userId:</strong> {data.user.id}
                            </li>
                            <li>
                                <strong>user:</strong> {data.user.name}
                            </li>
                            <li>
                                <strong>email:</strong> {data.user.email}
                            </li>
                            <li>
                                <strong>posts:</strong>
                            </li>
                        </ul>
                    )}
                </div>

                {status === 'loading' && <Spinner/>}

                {error && <h1> Error occured : {error}</h1>}

                <div className={s.post_list}>
                    {data && data.posts.map((post, index) => (
                            <PostsItem key={post.id} post={post} index={index + 1}/>
                        )
                    )}
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default UserPostListPage;
