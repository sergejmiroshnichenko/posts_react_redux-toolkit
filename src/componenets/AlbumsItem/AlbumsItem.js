import React from 'react';
import styles from './AlbumsItem.scss'

const AlbumsItem = ({ album, index }) => {


    return (
        <>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <strong>userId:</strong> {user.id}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <strong>user:</strong> {user.name}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <strong>email:</strong> {user.email}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <strong>albums:</strong>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <div className={styles.album_wrapper}>
                <span>{index + 1}. </span>
                <span> {album.title}</span>
            </div>
        </>
    );
};

export default AlbumsItem;
