import React from 'react';
import { getUsers } from "../../store/userSlice";
import UserItem from "../../componenets/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../componenets/Header/Header";


const UserListPage = ({ isLoadedIn, setIsLoggedIn, userName, setUserName, userEmail, setUserEmail }) => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.user.users)

    return (
        <div>
            <Header
                isLoadedIn={isLoadedIn}
                setIsLoggedIn={setIsLoggedIn}
                userName={userName}
                setUserName={setUserName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
            />
            <button onClick={() => dispatch(getUsers())}>Get users</button>
            {
                usersList.map(user => (
                        <UserItem key={user.id} user={user}/>
                    )
                )}
        </div>
    );
};

export default UserListPage;
