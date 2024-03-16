import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLeaderBoard } from '../../../redux/actions/user';
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
      bgcolor="var(--color-main-lighten)"
    >
      <Typography align="center" paragraph style={{ color: 'var(--color-off-black)' }}>
        <b>LeaderBoard</b>
      </Typography>

      <Box position="absolute" right={0} top={16} cursor="pointer">
        <Button variant="text" onClick={getLeaderBoard}>
          <Refresh fontSize="small" style={{ color: 'black' }}/>
        </Button>
      </Box>

      <Box display="grid" gridGap={5} mt={3}>
        <Box mb={2}>
          <Box px={2} py={1} display="flex" justifyContent="space-between">
            <Typography style={{ color: 'var(--color-off-black)' }}>Username</Typography>
            <Typography style={{ color: 'var(--color-off-black)' }}>Points</Typography>
          </Box>
          <Divider style={{ backgroundColor: 'var(--color-off-black)' }} />
        </Box>
        {users.map((user) => (
          <Box
            boxShadow="0 1px 3px 0 rgba(0,0,0,0.1)"
            border="0.5px solid #eee"
            key={user._id}
            bgcolor="var(--color-main-lighten2)"
          >
            <Box
              px={2}
              py={1}
              display="flex"
              justifyContent="space-between"
              style={{ textTransform: 'uppercase' }}
            >
              <Typography style={{ color: 'var(--color-off-black)' }}>{user.username}</Typography>
              <Typography style={{ color: 'var(--color-off-black)' }}>{user.win}</Typography>
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
