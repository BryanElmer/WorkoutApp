"use client";

import { useState } from 'react';
import styles from './signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <form className={styles.signup}>
      <label>Email:</label>
      <input 
        type='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input 
        type='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  )
}

export default Signup;