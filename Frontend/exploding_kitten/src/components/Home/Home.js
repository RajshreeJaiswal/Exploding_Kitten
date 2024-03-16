import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import Modal from '../Modal';

import UserModal from './UserModal';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      bgcolor="#7a1414"
      height="100vh"
      color="white"
      flexWrap="wrap"
      textAlign="center"
    >
      <Box width="100%" paddingY={{ xs: 3, md: 8 }}>
        <Typography component="h2" variant="h3">
          The Exploding Kitten Game
        </Typography>
      </Box>
      <Box width="100%" mt="14vh">
        <Typography component="h2" variant="h4" paragraph>
          Hey, Welcome
        </Typography>
        <br />
        <br />
        <Typography component="h3" variant="h6" gutterBottom>
          Click here to Play
        </Typography>
        <Button variant="contained" size="large" onClick={() => setOpen(true)} style={{ backgroundColor: '#a9d49a' }}>
          Let's Play
        </Button>
      </Box>

      <Modal  open={open} handleClose={() => setOpen(false)} >
        <UserModal  />
      </Modal>
    </Box>
  );
};

export default Home;
