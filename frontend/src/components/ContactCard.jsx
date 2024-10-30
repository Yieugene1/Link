// ContactCard.js
import React, { useState } from 'react';
import ContactHeader from './ContactHeader';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow';

const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showChatWindow, setShowChatWindow] = useState(false); // 控制聊天窗口的显示

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const selectFriend = (friend) => {
    setSelectedFriend(friend);
    setShowChatWindow(true); // 显示聊天窗口
  };

  const closeChatWindow = () => {
    setShowChatWindow(false); // 关闭聊天窗口
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl card-bordered">
      <ContactHeader onToggle={toggleCard} />
      {isExpanded && (
        <>
          <ContactSearch />
          <ContactList onSelectFriend={selectFriend} />
        </>
      )}
      {showChatWindow && <ChatWindow friend={selectedFriend} onClose={closeChatWindow} />}
    </div>
  );
};

export default ContactCard;
