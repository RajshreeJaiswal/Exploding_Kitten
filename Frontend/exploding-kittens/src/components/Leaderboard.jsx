import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLeaderBoard } from '../redux/action.js';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

const LeaderBoard = ({ leaderBoard, getLeaderBoard }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (leaderBoard.loading) {
      getLeaderBoard();
    } else {
      setUsers([...leaderBoard.users]);
    }
  }, [leaderBoard, getLeaderBoard]);

  return (
    <Box
      position="relative"
      boxShadow="0 0px 4px 0 rgba(0,0,0,0.12)"
      minHeight="60%"
      pt={2}
      bgcolor="#afd683" 
      borderRadius='15px'
      border= "1px  solid #234915"
    >
      <Typography align="center" paragraph variant="h5" style={{ color: 'black' }}>
        <b>LeaderBoard</b>
      </Typography>

      <Box position="absolute" right={0} top={16} cursor="pointer">
        <Button variant="text" onClick={getLeaderBoard} style={{ color: 'black' }}>
          <Refresh fontSize="small"  />
        </Button>
      </Box>

      <Box display="grid" gridGap={5} mt={3}>
        <Box mb={2}>
          <Box px={2} py={1} display="flex" justifyContent="space-between">
            <Typography variant='h6' style={{ color: 'black' }}>Username</Typography>
            <Typography variant='h6' style={{ color: 'black' }}>Scores</Typography>
          </Box>
          <Divider style={{ backgroundColor: "#5b874b"}} />
        </Box>
        {users.map((user) => (
          <Box
            boxShadow="0 1px 3px 0 rgba(0,0,0,0.1)"
            border="1px solid black"
            key={user._id}
            borderRadius='5px'
            
          >
            <Box
              px={2}
              py={1}
              display="flex"
              justifyContent="space-between"
              style={{ textTransform: 'capitalize' , backgroundColor: "#8bc34a", borderRadius:'10px'}}
            >
              <Typography  style={{ color: 'black' }}>{user.username}</Typography>
              <Typography  style={{ color: 'black' }}>{user.win}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

LeaderBoard.propTypes = {
  getLeaderBoard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leaderBoard: state.leaderBoard,
});

export default connect(mapStateToProps, { getLeaderBoard })(LeaderBoard);
