import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import Modal from './Modal';

import UserModal from './UserModal';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      bgcolor="#357a38"
      height="100vh"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="16px"
    >
      <Box
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '16px',
        }}
      >
       <Typography component="h3" variant="h4" style={{ marginBottom: '16px' }}>
        Welcome to The World of Exploding Kitten
      </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => setOpen(true)}
          style={{ marginBottom: '16px' }}
        >
          Let's Play 😺
        </Button>
        <img
          src="https://variety.com/wp-content/uploads/2022/05/Exploding-Kittens-the-Game-Netflix.png"
          alt="Exploding Kittens"
          style={{
            maxWidth: '100%',
            maxHeight: '50vh',
            objectFit: 'contain',
            border: 'solid 2px white',
            borderRadius: '4px',
            boxShadow: '0 8px 16px rgba(0,0,0,.2)',
          }}
        />
      </Box>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <UserModal />
      </Modal>
    </Box>
  );
};

export default Home;
