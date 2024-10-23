import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(''); // 重置错误消息
      
      // 创建POST请求
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username: username,  // Django的默认用户名字段是`username`
        password: password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // 请求成功后可以存储token（JWT）
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        console.log('Logged in successfully:', data);
        
        // 跳转到受保护的页面或执行其他操作
        window.location.href = '/dashboard'; // 假设你有一个仪表盘页面
      } else {
        // 处理登录失败情况
        console.error('Login failed:', data);
        setError('Invalid email or password');
      }
    };
  
    return (
        <Container maxWidth="sm" >
            <Box 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
                bgcolor="#ffffff"
                padding= "20px"
                borderRadius="8px">
                
                <Typography variant="h4" component="h2" gutterBottom>Login</Typography>

                <form onSubmit={handleSubmit} >
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        label="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="password"
                        label="Password"
                        value={password}
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                    >
                        Login
                    </Button>
                </form>
                <Typography>Don't have an account? <Link to="/register">Register here</Link></Typography>
            </Box>
            
        </Container>
    );
};

export default Login;
