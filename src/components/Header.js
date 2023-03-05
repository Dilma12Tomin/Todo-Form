import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <Typography variant='h5'>
            Login
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
