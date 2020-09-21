import { Box, Container, Paper, TableCell, TableHead, TableRow, Typography, Table, TableBody, TableContainer } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

function getPayouts(players, buyin, round){
    let money = players * buyin;
    let remaining = money;
    let paid = 0;
    var payouts = [];
    console.log('letsdoit', buyin)
    while(remaining > 0){
        let payout = money * Math.exp(-paid / 2) / 2;
        payout -= payout % round;
        console.log(payout);
        payouts.push({position: paid + 1, payout: `$${payout}`});
        remaining -= payout;
        paid += 1;
    }
    return payouts;
}

const Payout= (props) => {
    let state = props.location.state;
    var results = getPayouts(
        parseInt(state.players), 
        parseInt(state.buy), 
        parseInt(state.round)
    )

    return (
        <Box>
            <Navbar />
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Box m={3} p={3}>
                        <Typography variant="h5">
                            Payouts
                        </Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Position</TableCell>
                                    <TableCell align="right">Payout</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {results.map((row) => (
                                    <TableRow key={row.position}>
                                        <TableCell component="th" scope="row">
                                            {row.position}
                                        </TableCell>
                                        <TableCell align="right">{row.payout}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </Box>
    );
}
  
export default withRouter(Payout);
  