import React from 'react';
import { useLocation } from "react-router-dom";
import { Result, Button } from 'antd'
import { useNavigate } from "react-router-dom";


export const Page404 = ({ isLoadedIn }) => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    return <>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"
                           onClick={() => isLoadedIn ? navigate('./users') : navigate('./')}>
                Back Home
            </Button>}
        />
    </>;
};
