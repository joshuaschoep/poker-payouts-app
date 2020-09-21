import React from 'react';
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const initialFormData = Object.freeze({
    players: "1",
    buy: "20",
    round: "5"
})

const Jumbotron = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/payout", {...formData})
    }

    return (
      <Paper elevation={3}>
          <Box m={3} p={3}>
            <Typography variant="h5">Enter tournament structure</Typography>
            <TextField label="Player count" type="number" name="players" onChange={handleChange} required fullWidth margin="normal" />
            <TextField label="Buy-in price" type="number" name="buy" onChange={handleChange} required fullWidth margin="normal" />
            <TextField label="Round amount" type="number" name="round" onChange={handleChange} required fullWidth margin="normal" />
            <Button onClick={handleSubmit} variant="contained" color="primary">Enter</Button>
          </Box>
      </Paper>
    );
}
  export default withRouter(Jumbotron);
  