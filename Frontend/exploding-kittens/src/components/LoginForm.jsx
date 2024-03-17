
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onPlay }) {
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://exploding-kitten-backend-1.onrender.com/api/users', { username: username });
      onPlay(username); 
    } catch (error) {
      console.error( error);
      setError('Error while submitting the UserName.');
    }
  };

  return (

    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <div className="form">
        <h1>The Exploding Kittens Game</h1>
      </div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter the UserName"
      />
      <br />
      <button type="submit"> 
        Let's Play
      </button>
      {error && <p style={{ color: 'black' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;