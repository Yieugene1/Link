// ChatDrawer.jsx
import React from 'react';
import { Box, Typography, IconButton, TextField, Button, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ChatDrawer({ open, onClose, friend, messageInput, onMessageChange, onSendMessage }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="400px" display="flex" flexDirection="column" height="100%">
        {/* 顶部栏 */}
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ padding: 2, borderBottom: '1px solid #ddd' }}>
          <Typography variant="h6">{friend?.name}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* 聊天内容 */}
        <Box flex={1} sx={{ padding: 2, overflowY: 'auto' }}>
          {friend?.messages.map((message, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: 1 }}>
              {message}
            </Typography>
          ))}
        </Box>

        {/* 输入框和发送按钮 */}
        <Box sx={{ padding: 2, borderTop: '1px solid #ddd', display: 'flex' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="输入消息..."
            value={messageInput}
            onChange={onMessageChange}
            size="small"
            sx={{ marginRight: 1 }}
          />
          <Button variant="contained" color="primary" onClick={onSendMessage}>
            发送
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default ChatDrawer;
