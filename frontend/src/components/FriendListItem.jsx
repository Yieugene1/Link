// FriendListItem.jsx
import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';


function FriendListItem({ friend, onSelect, isSelected }) {
  return (
    <div>
      <div button onClick={() => onSelect(friend)}>
        <h1 class="text-3xl font-bold underline">Hello World</h1>
        <ListItemAvatar>
          <Avatar src={friend.avatar} alt={friend.name} />
        </ListItemAvatar>
        <ListItemText
          primary={friend.name}
          secondary={friend.lastMessage}
          primaryTypographyProps={{ fontWeight: isSelected ? 'bold' : 'normal' }}
        />
      </div>
      <Divider />
    </div>
  );
}

export default FriendListItem;
