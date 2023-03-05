import { Button, TextField } from '@mui/material'
import React from 'react'
import useForm from './read'

const APIPost = () => {
   var [cart, setcart]=useForm({"id":"","name":""})
  return (
    <div>
      <TextField variant='outlined' fullWidth label="Product id" name="id"></TextField>
      <br></br>
      <br></br>
      <TextField variant='outlined' fullWidth label="Product name" name="name"></TextField>
      <br></br>
      <br></br>
      <TextField variant='outlined' fullWidth label="Product price" name="price"></TextField>
      <br></br>
      <br></br>
      <TextField variant='outlined' fullWidth label="Product quantity" name="quantity"></TextField>
      <br></br><br></br>
    
      <TextField variant='outlined' fullWidth label="Discount percentage" name="discount percentage"></TextField>
      <br></br><br></br>
      <TextField variant='outlined' fullWidth label="Discount price" name="discount price"></TextField>
      <br></br><br></br>
      <Button variant='contained' fullWidth>Add to cart</Button>
    </div>
  )
}

export default APIPost
