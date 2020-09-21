import React from 'react';
import { Box, Container } from "@material-ui/core";
import Jumbotron from './Jumbotron';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';


const Home = () => {
    return (
        <Box>
            <Navbar />
            <Container maxWidth="sm">
            <Jumbotron />
            </Container>
        </Box>
    );
}

export default withRouter(Home);