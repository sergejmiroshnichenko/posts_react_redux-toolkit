import React from 'react';
import styles from './AlbumsItem.scss'

const AlbumsItem = ({ album, index }) => {

    return (
        <div className={styles.album_wrapper}>
            <span>{index + 1}. </span>
            <span> {album.title}</span>
        </div>
    );
};

export default AlbumsItem;
