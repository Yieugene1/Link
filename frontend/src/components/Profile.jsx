import React, { useState }from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Avatar, Tabs, Tab } from '@mui/material';
import FriendList from './FriendList';
import Settings from './Settings';
import Posts from './Post';

const Profile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const user = {
        username: 'Tom',
        email: 'tom@example.com',
        avatar: 'https://via.placeholder.com/150', // 头像URL
        bio: 'Hello! I am Tom, a passionate developer.',
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f0f0f0"
        >
            <Paper elevation={3} style={styles.profileCard}>
                <Avatar src={user.avatar} alt="Avatar" />
                <Typography variant="h5" gutterBottom>
                    {user.username}
                </Typography>
                <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                <Typography variant="body1"><strong>Bio:</strong> {user.bio}</Typography>
            </Paper>

            <Box style={styles.tabsContainer}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Friends" />
                    <Tab label="Posts" />
                    <Tab label="Settings" />
                </Tabs>

                {tabIndex === 0 && <FriendList />}
                {tabIndex === 1 && <Posts />}
                {tabIndex === 2 && <Settings />}
            </Box>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profileData.image} alt="User Avatar" />
                    </div>
                </div>
                <h1 className="mt-4 text-2xl font-semibold text-gray-800">{user.username}</h1>
                <p className="mt-2 text-gray-600 text-center">{user.bio}</p>
            </div>
        </Box>
    );
}

const styles = {
    paper: {
        padding: "30px",
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },

    tabsContainer: {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },

    profileCard: {
        padding: '20px',
        textAlign: 'center',
        marginBottom: '20px',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#fff',
    },
}

export default Profile;