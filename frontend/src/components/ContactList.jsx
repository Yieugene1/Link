// ContactList.js
import React from 'react';
import FriendItem from './FriendItem';

const ContactList = ({ onSelectFriend }) => {
  const friends = [
    { id: 1, 
      name: 'Tom', 
      avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      lastMessage: '你好，最近怎么样？',
      lastMessageTime: '10:30 AM',},
    { id: 2, 
      name: 'Jerry', 
      avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      lastMessage: '今天的会议很棒！',
      lastMessageTime: '昨天', },
    // 添加更多好友
  ];

  return (
    <div className="contact-list h-96">
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          onSelect={() => onSelectFriend(friend)}
        />
      ))}
    </div>
  );
};

export default ContactList;
