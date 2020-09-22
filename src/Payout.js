import { Box, Container, Paper, TableCell, TableHead, TableRow, Typography, Table, TableBody, TableContainer } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

function paid(x){
    return Math.floor((x - 1)/4 + 1);
}

function payout(p, n, r){
    return (1 - p) / (1 - p ** n) * p ** (r - 1);
}

function roundTo(n, r){
    return Math.round(n / r) * r;
}

function getPayouts(players, buyin, round, bias){
    console.log("bias:", bias);
    let paidPlayers = paid(players);
    let payouts = []
    for(let r = 1; r <= paidPlayers; r++){
        let result = roundTo(buyin * players * payout(bias, paidPlayers, r), round);
        if(result <= 0) return payouts;
        payouts.push({position: r, payout: `$${result}`});
    }
    return payouts;
}

const Payout= (props) => {
    let state = props.location.state;
    console.log(state);
    var results = getPayouts(
        parseInt(state.players), 
        parseInt(state.buy), 
        parseInt(state.round),
        state.bias
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
  