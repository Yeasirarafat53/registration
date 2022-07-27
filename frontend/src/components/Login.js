import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    Axios.post('http://localhost:5000/login', user)
      .then((res) => {
        alert(res.data.message)
        setLoginUser(res.data.user)
      
      });
          navigate("/")
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <button className="submit">Login</button>
      </form>
      <p>
        New User? <Link to="/register">create an account</Link>
      </p>
    </div>
  );
};

export default Login;
