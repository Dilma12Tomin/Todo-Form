import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    var[pname,usepname]=useState('Home Page')
    const Homepage=()=>{
        usepname('Home page')
    }
    const Gallerypage=()=>{
        usepname('Gallery Page')
    }
    const Descriptionpage=()=>{
        usepname('Description Page')
    }

//useeffect
    useEffect(()=>{
        console.log("rendering page")
    },[pname])


  return (
    <div>
      <Button variant='contained' color="primary" onClick={Homepage}>Home Page</Button>
      <Button variant='contained' color="success" onClick={Gallerypage}>Gallery Page</Button>
      <Button variant='contained' color="error" onClick={Descriptionpage}>Description Page</Button>
      <Typography>Welcome to {pname}</Typography>
    </div>
  )
}

export default Useeffect
