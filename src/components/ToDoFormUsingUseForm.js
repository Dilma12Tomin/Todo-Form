import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './read'

const ToDoFormUsingUseForm = () => {
    var[values,useval]=useForm({title:"",quantity:"",description:""})
  return (
    
    <div>
         <br></br>
      <Typography variant='h2'>ToDo Form using UseForm</Typography>
      <br></br>
      <br></br>
      <br></br>
      <TextField label="TodoTitle" margin='normal' onChange={useval} fullWidth value={values.title} name='title' variant='outlined'></TextField>
      <br></br>
      <br></br>
      <TextField label="TodoTitle" margin='normal' onChange={useval} fullWidth value={values.quantity} name='quantity' variant='outlined'></TextField>
      <br></br>
      <br></br>
      <TextField label="TodoTitle" margin='normal' onChange={useval} fullWidth value={values.description} name='description' variant='outlined'></TextField>
      <br></br>
      <br></br>
      <Button color='success' variant='contained'>Submit</Button>
      <br></br>
      <br></br>
      <Typography variant='h5'>{values.title}</Typography>
      <br></br>
      <Typography variant='h5'>{values.quantity}</Typography>
      <br></br>
      <Typography variant='h5'>{values.description}</Typography>
    </div>
  )
}

export default ToDoFormUsingUseForm
