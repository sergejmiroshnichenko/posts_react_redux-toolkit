import React from 'react';
import {useNavigate} from "react-router-dom";

const UserPostListPage = () => {
    const navigation = useNavigate()
    const goBack = () => navigation(-1)
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>UserPostListPage</h1>
        </div>
    );
};

export default UserPostListPage;
