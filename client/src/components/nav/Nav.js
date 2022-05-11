import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { UserContext } from '../../UserContext'
import NavButton from './NavButton';


export default function Nav() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    console.log(user)
    const links = [
        !user && <NavButton navigateTo={'/signup'} text={'Sign Up'} />,
        !user && <NavButton navigateTo={'/signin'} text={'Sign In'} />,
        user && <NavButton navigateTo={"/signout"} text={"Sign Out"} />,

    ]

    return (
        <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: '5px' }}>
            <AppBar position="sticky">
                <Toolbar>
                    <h2 onClick={() => { navigate('/') }} style={{ cursor: "pointer" }}>SoaApp</h2>
                    <Grid container justifyContent="flex-end">
                        {links}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
