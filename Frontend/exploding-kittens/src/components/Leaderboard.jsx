import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LeaderBoard({ username, scores }) {
  const [BoardData, setBoardData] = useState([]);
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('');
        const data = response.data;
        setBoardData(data);

        const UserData = data.find(user => user.username === username);
        if (!UserData) {
          setUserData({ username: username, points: points });
        } else {
          setUserData(UserData);
        }
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, [username, scores]);

  const handleRestart = () => {
    window.location.reload();
  };
  return (
    <div className="leaderboard">
      <h2>Leader Board</h2>
      <table className="boardtable">
        <thead>
          <tr>
            <th>Player</th>
            <th>Scores</th>
          </tr>
        </thead>
        <tbody>
          {BoardData.map((user, index) => (
            <tr key={index} className={user.username === username ? 'highlight' : ''}>
              <td>{user.username}</td>
              <td>{user.scores}</td>
            </tr>
          ))}
          {UserData && (
            <tr className="highlight">
              <td>{UserData.username}</td>
              <td>{UserData.scores}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default LeaderBoard;
