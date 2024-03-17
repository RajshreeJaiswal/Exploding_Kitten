import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <div>
    <Box
      boxShadow="0 1px 5px 1px rgba(0,0,0,0.25)"
      mb={4}
      px={{ xs: 2, md: 5 }}
      py={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#7a1414"
      color="white">
      <Typography component="h1" variant="h4" >The Exploding Kitten Game</Typography>
    </Box>
    </div>
  )
}
export default Navbar;
