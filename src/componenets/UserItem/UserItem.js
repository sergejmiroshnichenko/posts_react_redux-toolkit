import React from 'react';
import styles from './UserItem.module.scss'


const UserItem = ({ user }) => {

    return (
        <div className={styles.wrapper}>
            <ul>
                <li>
                    <strong>№</strong>
                    {user.id}
                </li>
                <li>
                    <strong>name:</strong> {user.name}
                </li>
                <li>
                    <strong>city:</strong> {user.address.city}
                </li>
                <li>
                    <strong>street:</strong> {user.address.street}
                </li>
                <li>
                    <strong>suite:</strong> {user.address.suite}
                </li>
                <li>
                    <strong>phone:</strong> {user.phone}
                </li>
                <li>
                    <strong>email:</strong> {user.email}
                </li>
                <li>
                    <strong>website:</strong> {user.website}
                </li>
            </ul>
            <div>
                <button>posts</button>
                <button>albums</button>
            </div>
        </div>
    );
};

export default UserItem;
