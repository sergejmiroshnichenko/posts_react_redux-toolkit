import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../UserListPage/UserListPage.module.scss";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../../componenets/Spinner/Spinner";
// import { getPosts } from "../../store/postsSlice";
// import PostsItem from '../../componenets/PostsItem/PostsItem'



const UserPostListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName }) => {

    // const dispatch = useDispatch()
    // const { status, error, posts } = useSelector(state => state.posts);

    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [dispatch])

    const navigation = useNavigate()
    const goBack = () => navigation(-1)

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <Header
                    isLoadedIn={isLoadedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    userName={userName}
                    setUserName={setUserName}
                />
                <main>
                    <button onClick={goBack}>Go back</button>
                    <h1>UserPostListPage</h1>
                    {/*{status === 'loading' && (<Spinner/>)}*/}

                    {/*{error && <h1>Error occured : {error}</h1>}*/}

                    {/*{posts.map(post => (*/}
                    {/*        <PostsItem key={post.id} post={post}/>*/}
                    {/*    )*/}
                    {/*)}*/}
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default UserPostListPage;
