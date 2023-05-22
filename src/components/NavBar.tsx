import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {authSelector} from "../redux/selectors";
import {logoutTC} from "../redux/authReduser";


export const NavBar = () => {
    const auth = useAppSelector(authSelector)
    const dispatch = useAppDispatch()
    const logoutHandler =()=>{
        dispatch(logoutTC())
    }
    return (<div className={'NavBar'}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='inherit'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hrenello
                        </Typography>
                        {auth.isLoggedIn ? <button onClick={logoutHandler}>log out</button> : ''}
                        <NavLink to={'/login'}><Button color="inherit">{auth.isLoggedIn ? auth.login: 'Log In'}</Button></NavLink>

                    </Toolbar>
                </AppBar>
            </Box>
    </div>

    );
};

