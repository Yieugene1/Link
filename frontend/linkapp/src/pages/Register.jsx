import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container maxWidth="sm">
            <Box 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
                bgcolor="#ffffff"
                padding= "20px"
                borderRadius="8px">

                <Typography variant="h4" component="h2" gutterBottom>Register</Typography>

                <form onSubmit={handleSubmit}>
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
                        label="Password"
                        value={confirmPassword}
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
          </Box>
        </Container >
      );
    };

    export default Register;