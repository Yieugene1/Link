import React, { useState } from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ChatWindow({ friend, onClose }) {
  const [messages, setMessages] = useState(friend.messages || []);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages((prevMessages) => [...prevMessages, messageInput]);
      setMessageInput('');
    }
  };

  return (
    <Box flex={1} display="flex" flexDirection="column">
      {/* 顶部标题栏，包含关闭按钮 */}
      <Box sx={{ padding: 2, borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">{friend.name}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* 聊天内容 */}
      <Box flex={1} sx={{ padding: 2, overflowY: 'auto' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* 输入框和发送按钮 */}
      <Box sx={{ padding: 2, borderTop: '1px solid #ddd', display: 'flex' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="输入消息..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          size="small"
          sx={{ marginRight: 1 }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          发送
        </Button>
      </Box>
    </Box>
  );
}

export default ChatWindow;
