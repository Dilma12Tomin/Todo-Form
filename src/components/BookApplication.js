import { Button, TextField, Typography, useFormControl } from '@mui/material'
import React, { useState } from 'react'
import useForm from './read'

// useform functionality is wririting in read.js file
const BookApplication = () => {

    // If we are using usestate then we need to create 3 different usestate for 3 inputs, the code length willl be high.
    //  so we can use useform instead ,so not using use state ,instead using useform

    // var [booknameval,Usebookname]=useState('')
    // const bookname = (e)=> {
    //     Usebookname(booknameval=e.target.value)
    //     console.log("e.target", e.target.value)
    // }
    // const bookauthor=()=>{
        
    // }
    // const bookyear=()=>{
        
    // }
    var [books,Usebook]= useForm({Title:"",author:"",year:""})
  return (
    <div className="bookapplication">
      <br></br>
      <Typography variant='h2'>Book Application</Typography>
      <br></br>
      <br></br>
      {/* <TextField variant='outlined' fullWidth margin='normal' label="Book name" onChange={bookname} value={booknameval}></TextField>    code if we rusing usestate*/}
      <TextField variant='outlined' value={books.Title} name="Title" fullWidth margin='normal' label="Book name" onChange={Usebook} ></TextField>
      <br></br>
      <br></br>
      <TextField variant='outlined' value={books.author} name="author" fullWidth margin='normal' label="Book author" onChange={Usebook}></TextField>
      <br></br>
      <br></br>
      <TextField variant='outlined' value={books.year} name="year" fullWidth margin='normal' label="Book year" onChange={Usebook}></TextField>
      <br></br>
      <br></br>
      <Button color="secondary" variant='contained' >Submit</Button>
      <br></br>
      <Typography variant='h4'>{books.Title}</Typography>
      <Typography variant='h4'>{books.author}</Typography>
      <Typography variant='h4'>{books.year}</Typography>
      
    </div>
  )
}

export default BookApplication
