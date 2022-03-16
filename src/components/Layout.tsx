import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import logo from '../logo.svg'
import '../Pages/Home.css'
function Layout(props: {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
}) {
  return (
    <div className="App">
      <Box
        className="App-header"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}
      >
        <Typography>Shopify Scrapper</Typography>
      </Box>

      {props.children}
    </div>
  )
}

export default Layout
