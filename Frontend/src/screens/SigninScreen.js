import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  const sumitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form">
      <form className="form-container" onSubmit={sumitHandler}>
        <ul className="overwrite">
          <li>
            <h2>Sing-In</h2>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="button" className="button primary">
              Singin
            </button>
          </li>
          <li>New to amazona?</li>
          <li>
            <Link to="/register" className="button secondary text-center  ">
              Create your amazona account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
