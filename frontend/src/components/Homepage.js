import React from 'react';

const Homepage = ({setLoginUser}) => {
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <button className="btn btn-success" onClick={() => setLoginUser({})}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;