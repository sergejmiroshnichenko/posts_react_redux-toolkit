import React from 'react';
import styles from "../../pages/UserPostListPage/UserPostListPage.module.scss";


const PostsItem = ({ post, index }) => {

    return (
        <>
            <ul className={styles.posts_item}>
                <li>
                    <strong>№</strong> {index}
                </li>
                <li>
                    <strong>title:</strong> {post.title}
                </li>
                <li>
                    <strong>body:</strong> {post.body}
                </li>
            </ul>
        </>
    );
};

export default PostsItem;
