import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
     <TextField variant='outlined' label="email"></TextField>
     <br></br>
     <br></br>
     <br></br>
     <TextField variant='outlined'label="password" type={'password'}></TextField>
     <br></br>
     <br></br>
     <br></br>
     <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Login
