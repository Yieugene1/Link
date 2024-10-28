// FriendList.jsx
import React from 'react';
import { List, Typography, Box } from '@mui/material';
import FriendListItem from './FriendListItem';

function FriendList({ friends, onSelectFriend, selectedFriendId }) {
  return (
    <Box width="50%" sx={{ borderRight: '1px solid #ddd', overflowY: 'auto' }}>
      <Typography variant="h6" sx={{ padding: 2 }}>最近联系</Typography>
      <List>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            friend={friend}
            onSelect={onSelectFriend}
            isSelected={selectedFriendId === friend.id}
          />
        ))}
      </List>
    </Box>
  );
}

export default FriendList;
