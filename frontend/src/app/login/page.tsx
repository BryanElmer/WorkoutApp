"use client";

import { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <>
      <main className='bg-gray-500'>
        <div>
          <form className={styles.login}>
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

            <button onClick={handleSubmit}>Log in</button>
          </form>
        </div>
        
      </main>
    </>
  )
}

export default Login;