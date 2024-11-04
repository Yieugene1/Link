import React from 'react';

const ChatBubble = ({ message, isCurrentUser }) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`p-3 rounded-lg text-sm max-w-xs shadow-md ${
          isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
        }`}
      >
        <p className="font-semibold">{message.sender}</p>
        <p>{message.content}</p>
        <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
      </div>
    </div>
  );
};

export default ChatBubble;