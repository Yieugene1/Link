// Messages.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import FriendList from './FriendList';
import ChatDrawer from './ChatDrawer';

const friendsData = [
  { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/40', lastMessage: 'Hello! How are you?', messages: ['Hi Alice!', 'How’s it going?', 'Are you free this weekend?'] },
  { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/40', lastMessage: 'What’s up?', messages: ['Hey Bob!', 'Long time no see.'] },
  { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/40', lastMessage: 'Let’s meet for lunch!', messages: ['Good morning, Charlie!', 'Sure, what time?'] },
  { id: 4, name: 'Daivd', avatar: 'https://via.placeholder.com/40', lastMessage: 'Let’s meet for lunch!', messages: ['Good morning, Charlie!', 'Sure, what time?'] },
];

function Messages() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // 选择好友并打开聊天窗口
  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    setIsChatOpen(true);
  };

  // 发送消息
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setSelectedFriend((prev) => ({
        ...prev,
        messages: [...prev.messages, messageInput],
      }));
      setMessageInput('');
    }
  };

  // 关闭聊天窗口
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <Box display="flex" height="100%" sx={{ border: '1px solid #ddd', borderRadius: 2, overflow: 'hidden' }}>
      {/* 好友列表 */}
      <FriendList
        friends={friendsData}
        onSelectFriend={handleSelectFriend}
        selectedFriendId={selectedFriend?.id}
      />

      {/* 聊天记录弹出窗口 */}
      <ChatDrawer
        open={isChatOpen}
        onClose={handleCloseChat}
        friend={selectedFriend}
        messageInput={messageInput}
        onMessageChange={(e) => setMessageInput(e.target.value)}
        onSendMessage={handleSendMessage}
      />
    </Box>
  );
}

export default Messages;
