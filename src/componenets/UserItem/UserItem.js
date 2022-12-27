import React, { useState } from 'react';
import styles from './UserItem.module.scss'
import { PrimaryButton } from '../Button/Button'
import { SlNote } from 'react-icons/sl';
import Modal from '../../componenets/Modal/Modal'
import { useNavigate } from 'react-router-dom'
// import { getPosts } from "../../store/postsSlice";
// import UserPostListPage from "../../pages/UserPostListPage/UserPostListPage";
// import {useDispatch} from 'react-redux'


const UserItem = ({ user }) => {

    // const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();

    const handleUserPostsBtnClick = (id) => {
        // dispatch(getPosts.actions.redirect(UserPostListPage(id)))
        navigate('/posts/:id')
    }


    return (
        <>
            <div className={styles.user_wrapper}>
                <ul className={styles.user_list}>
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
                    <PrimaryButton
                        color='primary'
                        onClick={() => handleUserPostsBtnClick(user.id)}
                        endIcon={<SlNote/>}>
                        posts
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={() => setModalActive(true)}
                        color='secondary'>
                        albums
                    </PrimaryButton>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}
                   title={'New message'} minWidth={'post'}>
            </Modal>
        </>
    );
};

export default UserItem;
