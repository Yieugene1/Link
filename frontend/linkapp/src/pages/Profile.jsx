import React from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Avatar } from '@mui/material';

const Profile = () => {
    const user = {
        username: 'Tom',
        email: 'tom@example.com',
        avatar: 'https://via.placeholder.com/150', // 头像URL
        bio: 'Hello! I am Tom, a passionate developer.',
    };

    return (

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                bgcolor="#f0f0f0"
            >
                <Paper elevation={3}>
                    <Avatar src={user.avatar} alt="Avatar" />
                    <Typography variant="h5" gutterBottom>
                        {user.username}
                    </Typography>
                    <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                    <Typography variant="body1"><strong>Bio:</strong> {user.bio}</Typography>
                </Paper>
             </Box>

      );


}

export default Profile;