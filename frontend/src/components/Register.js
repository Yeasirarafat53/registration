import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    const { name, email, password, cPassword } = user;

    if (name && email && password && password === cPassword) {
      Axios.post('http://localhost:5000/register', user)
        .then((res) => {
         
          alert(res.data.message);
           navigate('/login');
        }
        
      );
    } else {
      alert('invalid input');
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={register}>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="cPassword"
          value={user.cPassword}
          id="confirm-password"
          placeholder="Your Confirm Password"
          onChange={handleChange}
        ></input>
        <button type="submit" className="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
