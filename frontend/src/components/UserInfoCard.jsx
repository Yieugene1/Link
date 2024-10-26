import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const UserInfoCard = () => {
    const user = {
      name: 'Tom',
      title: 'Full-stack Developer',
      avatar: 'https://via.placeholder.com/150', // 头像URL
      bio: 'Passionate about coding and creating scalable web applications.'
    };
  
    return (
      <Card sx={{ maxWidth: 300, margin: '20px' }}>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <Avatar src={user.avatar} sx={{ width: 100, height: 100 }} />
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {user.title}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            {user.bio}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default UserInfoCard;