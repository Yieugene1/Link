// ContactCard.js
import React, { useState } from 'react';
import ContactHeader from './ContactHeader';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow';

const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  //const [showChatWindow, setShowChatWindow] = useState(false); // 控制聊天窗口的显示

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const selectFriend = (friend) => {
    setSelectedFriend(friend);
    //setShowChatWindow(true); // 显示聊天窗口
  };

  const closeChatWindow = () => {
    setSelectedFriend(null); // 关闭聊天窗口
  };

  return (
    <div className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-t-lg overflow-hidden transition-all duration-300 ${
      isExpanded ? 'h-[80vh] animate-slide-up' : 'h-12'
    }`}>

      <ContactHeader onToggle={toggleCard} isExpanded={isExpanded}/>
      {isExpanded && (
        <div className="p-4 space-y-4">
          <ContactSearch />
          <ContactList onSelectFriend={selectFriend} />
        </div>
      )}
      {selectedFriend && (
        <div className="fixed bottom-4 right-[340px] w-[520px] h-[80vh] bg-white shadow-lg rounded-lg">
          <ChatWindow friend={selectedFriend} onClose={closeChatWindow} />
        </div>
      )}
    </div>
  );
};

export default ContactCard;
