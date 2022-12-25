import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserPostListPage from "../pages/UserPostListPage/UserPostListPage";
import UserListPage from "../pages/UserListPage/UserListPage";
import { Page404 } from "../pages/Page404/Page404";
import Authorization from '../pages/Authorization/Authorization';


const AppRoutes = () => {

    const [isLoadedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));

    return (
        <Routes>
            <Route path="/"
                   element={<Authorization
                       setIsLoggedIn={setIsLoggedIn}
                       setUserName={setUserName}
                       setUserEmail={setUserEmail}
                   />}
            />
            <Route path="/users"
                   element={<UserListPage
                       isLoadedIn={isLoadedIn}
                       setIsLoggedIn={setIsLoggedIn}
                       userName={userName}
                       setUserName={setUserName}
                       userEmail={userEmail}
                       setUserEmail={setUserEmail}
                   />}
            />
            <Route path="/posts"
                   element={<UserPostListPage />}
            />
            <Route path="*"
                   element={<Page404 isLoadedIn={isLoadedIn}/>}
            />
        </Routes>
    )
}

export default AppRoutes;