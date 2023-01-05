import React, { useEffect } from 'react';
import { Result, Button } from 'antd'
import { useNavigate } from "react-router-dom";


export const Page404 = ({ isLoadedIn }) => {

    const navigate = useNavigate()

    useEffect(() => {
       const timer = setTimeout(() => {
            isLoadedIn ? navigate('/users') : navigate('/')
        }, 3000)
        return () => clearTimeout(timer);
    }, [isLoadedIn, navigate])

    return <>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"
                           onClick={() => isLoadedIn ? navigate('/users') : navigate('/')}>
                Back Home
            </Button>}
        />
    </>;
};
