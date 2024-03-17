import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Typography } from '@material-ui/core';

import { getUser } from '../redux/action.js';


const UserModal = ({ getUser }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography align="center" variant='h5'>Enter The Username</Typography>
      <Box my={5} minWidth="280px" >
        <TextField
          label="Username"
          id="standard-size-small"
          size="small"
          value={username}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button type="submit" variant="outlined" >
         Start Playing
        </Button>
      </Box>
    </form>
  );
};

UserModal.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, { getUser })(UserModal);
