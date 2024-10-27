import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { register } from '../lib/fetch';

const Register = ({ handleClick }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // 重置错误消息

        // 密码确认检查
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // 创建POST请求
        try {
            const response = await register(name, email, password)

            // 处理响应
            if (response.ok) {
                setSuccessMessage("Registration successful!");
                // 你可以在这里处理成功后的逻辑，例如跳转到登录页面
            } else {
                setError(response.error || "Registration failed");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgcolor="#ffffff"
                padding="20px"
                borderRadius="8px">

                <Typography variant="h4" component="h2" gutterBottom>Register</Typography>

                {error && <Typography color="error">{error}</Typography>}
                {successMessage && <Typography color="primary">{successMessage}</Typography>}

                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        label="Name"
                        value={name} // 修正为小写的 name
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <TextField
                        margin="normal"
                        fullWidth
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword} // 确认密码输入框
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                    >
                        Register
                    </Button>
                </form>
                <Typography>Already have an account? <a onClick={handleClick}>Login here</a></Typography>
            </Box>
        </Container >
    );
};

export default Register;
