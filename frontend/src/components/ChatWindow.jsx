// ChatWindow.js
import React from 'react';

const ChatWindow = ({ friend, onClose }) => {
  return (
    <div class="card bg-base-100 w-96 shadow-xl">
      <h3>与 {friend.name} 的聊天记录</h3>
      <p>hhhhhhh</p>
      <button onClick={onClose}>关闭</button>
      <div className="messages">
        {/* 这里可以加载聊天记录数据 */}
      </div>
    </div>
  );
};

export default ChatWindow;
