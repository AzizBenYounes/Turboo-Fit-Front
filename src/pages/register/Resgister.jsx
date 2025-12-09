import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { register } from '../../JS/action/auth.action';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,] = useState('');
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();

    //if (password !== confirmPassword) {
    //  setError("Passwords don't match");
     // return;
    //}
  dispatch(register({ email, password,}, navigate));
    navigate('/Profile');
    // Save user to localStorage (for mock/demo only)
    //const user = { email, password };
  //  localStorage.setItem('registeredUser', JSON.stringify(user));
   // navigate('/login');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
