import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
    return () => {};
  }, [userInfo, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className="form">
      <form className="form-container" onSubmit={submitHandler}>
        <ul className="overwrite">
          <li>
            <h2>Sing-In</h2>
          </li>
          <li>{loading && <div>Loading...</div>}</li>
          <li>{error && <div>{error}</div>}</li>
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
            <button type="submit" className="button primary">
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
