import React from 'react';
import { Box, Button, Paper, Slider, TextField, Typography } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const initialFormData = Object.freeze({
    players: "1",
    buy: "20",
    round: "5",
    bias: 0.5
})

const marks = [
    {
        value: 0.1,
        label: 'Winner takes all'
    },
    {
        value: 0.9,
        label: 'Even spread'
    }
]

const Jumbotron = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSliderChange = (e, value) => {
        updateFormData({
            ...formData,
            bias: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/payout", {...formData})
    }

    return (
      <Paper elevation={3}>
          <Box m={3} p={3}>
            <Box my={3}>
                <Typography variant="h5">Enter tournament structure</Typography>
                <TextField label="Player count" type="number" name="players" onChange={handleChange} required fullWidth margin="normal" />
                <TextField label="Buy-in price" type="number" name="buy" onChange={handleChange} required fullWidth margin="normal" />
                <TextField label="Price to round to" type="number" name="round" onChange={handleChange} required fullWidth margin="normal" />
            </Box>
            <Box mx={3} my={4}>
                <Typography id="bias-slider" gutterBottom>Bias</Typography>
                <Slider
                    min={0.1}
                    max={0.9}
                    step={0.02}
                    defaultValue={initialFormData.bias}
                    onChangeCommitted={handleSliderChange}
                    marks={marks}
                    valueLabelDisplay="auto"
                    aria-labelledby="bias-slider" 
                />
            </Box>
            <Button onClick={handleSubmit} variant="contained" color="primary">Enter</Button>
          </Box>
      </Paper>
    );
}
  export default withRouter(Jumbotron);
  