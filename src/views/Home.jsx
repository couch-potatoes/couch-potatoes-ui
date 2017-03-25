import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Athletic Tracker App</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/reset">Reset Password</Link></li>
        </ul>
      </div>
    );
  }

}

export default Home;
