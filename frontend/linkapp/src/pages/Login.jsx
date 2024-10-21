import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // 在这里可以处理登录逻辑，例如调用API
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div style={styles.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  };
  
  export default Login;