import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Authprovider';

export default function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

  return (
    <div>
      <h1>Welcome to E-Learning App</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>Please log in to access the courses.</p>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
