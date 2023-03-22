import { useEffect } from 'react'
import styles from './UserItem.module.scss'
import { PrimaryButton } from '../Button/Button'
import { SlNote } from 'react-icons/sl'
import { useNavigate, useParams } from 'react-router-dom'
import { getPosts } from 'store/postsSlice'
import { useDispatch } from 'react-redux'
import { albumsClear, getAlbumsUser } from 'store/albumsSlice'


const UserItem = ({ user, setModalActive }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()

    const handleUserPostsBtnClick = (id) => {
        dispatch((getPosts(id)));
        navigate(`/posts/${id}`)
    }

    useEffect(() => {
        if (id) {
            dispatch(getAlbumsUser(id))
        }
        return () => {
            dispatch(albumsClear())
        }
    }, [id, dispatch])

    const handleUserAlbumsBtnClick = (id) => {
        dispatch(getAlbumsUser(id))
    }

    return (
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
                    <strong>username:</strong> {user.username}
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
                    color='secondary'
                    onClick={() => {
                        setModalActive(true);
                        handleUserAlbumsBtnClick(user.id)
                    }}>
                    albums
                </PrimaryButton>
            </div>
        </div>
    );
};

export default UserItem;
