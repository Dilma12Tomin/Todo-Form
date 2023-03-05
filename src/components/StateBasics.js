import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  var [Pname, setPname] = useState("Dilma Joy")
  var changename = () => {
    setPname("Dilma Tomin");
  }
  return (
    <div>
      <Typography variant='h4'>Welcome {Pname}</Typography>
      <br></br>
      <Button variant='contained' color='primary' onClick={changename}>Change</Button>
    </div>
  )
}

export default StateBasics
