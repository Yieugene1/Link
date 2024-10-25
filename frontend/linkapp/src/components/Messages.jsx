import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const messages = [
  { id: 1, name: 'Alice', lastMessage: 'How are you?' },
  { id: 2, name: 'Bob', lastMessage: 'Let’s meet tomorrow.' },
  { id: 3, name: 'Charlie', lastMessage: 'Don’t forget the meeting.' },
];

const Messages = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Messages
      </Typography>
      <List>
        {messages.map(message => (
          <ListItem key={message.id}>
            <ListItemText
              primary={message.name}
              secondary={message.lastMessage}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Messages;