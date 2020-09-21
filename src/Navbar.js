import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Link } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6">
                    Payouts.io
                </Typography>
                <Link href="/" color="inherit" variant="inherit" style={{marginLeft: "auto"}} >Home</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;