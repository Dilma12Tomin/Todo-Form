import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const CounterApp = () => {
    var [value, setcounterValue] = useState(0)
    const incrementvalue = () => {
        setcounterValue(value+1)
    }
    const decrementvalue = () => {
        setcounterValue(value-1)
    }
    return (
        <div>
            <Typography variant='h3'>Counter</Typography>
            <br></br>           
            <Typography variant='h4'>{value}</Typography>
            <Button variant="contained" color="primary" onClick={incrementvalue}>+</Button>
            <Button variant="contained" color="primary" onClick={decrementvalue}>-</Button>
        </div>
    )
}

export default CounterApp
