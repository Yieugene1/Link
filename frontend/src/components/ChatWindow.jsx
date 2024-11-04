// ChatWindow.js
import React, { useState } from 'react';
import ChatBubble from './ChatBubble';

const ChatWindow = ({ friend, onClose }) => {

  const [messages, setMessages] = useState([
    { sender: friend.name, content: '你好！', timestamp: '10:00 AM' },
    // 添加更多示例消息
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        sender: '我',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div class="flex flex-col h-full p-4">

      {/* 聊天窗口头部 */}
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold">{friend.name}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      {/* 聊天消息显示区域 */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message}
            isCurrentUser={message.sender === '我'}
          />
        ))}
      </div>

      {/* 输入新消息区域 */}
      <div className="mt-2 flex items-center border-t pt-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="输入消息..."
          className="input input-bordered flex-1 mr-2"
        />
        <button onClick={sendMessage} className="btn btn-primary">发送</button>
      </div>
    </div>
  );
};

export default ChatWindow;
