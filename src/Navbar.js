import React from 'react';
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";


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