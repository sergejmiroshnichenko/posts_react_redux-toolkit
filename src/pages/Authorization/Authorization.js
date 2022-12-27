import React, { useState } from 'react';
import styles from './Authorization.module.scss'
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../../utils/formValidation'
import Form from '../../componenets/Form/Form';
import Input from '../../componenets/Input/Input';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm, FormProvider } from "react-hook-form";


const Authorization = ({ setIsLoggedIn, setUserName }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const navigate = useNavigate();

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        },
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', data.username);
        setUserName(data.username);
        setIsLoggedIn(true);
        navigate('/users')
        methods.reset();
    }

    return (
        <>
            <FormProvider {...methods}>
                <Form className={styles.authorisation} onSubmit={methods.handleSubmit(onSubmit)}>
                    <p className={styles.signIn}>Sign In</p>
                    <Input
                        name='username'
                        label='Login'
                        type='text'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonIcon sx={{ color: 'brown' }} edge="start"/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Input
                        name='password'
                        label='Password'
                        type={!showPassword ? "password" : "text"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LockIcon sx={{ color: 'brown' }} edge="start"/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton edge="end" onClick={handleClickShowPassword}>
                                        {showPassword ?
                                            <Visibility sx={{ color: 'brown' }}/> :
                                            <VisibilityOff sx={{ color: 'brown' }}/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Input
                        name='email'
                        label='Email'
                        type='email'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <MailOutlineIcon sx={{ color: 'brown' }} edge="start"/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <button className={styles.submit}
                            type="submit"
                            disabled={!methods.formState.isValid}>Continue
                    </button>
                </Form>
            </FormProvider>
        </>
    );
};

export default Authorization;
