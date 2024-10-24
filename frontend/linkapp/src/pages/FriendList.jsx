import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const friends = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
];

const FriendList = () => {
    return (
      <List>
        {friends.map((friend, index) => (
          <ListItem key={index}>
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
    );
  };

  export default FriendList;