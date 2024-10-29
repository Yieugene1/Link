// ContactList.js
import React from 'react';
import FriendItem from './FriendItem';

const ContactList = ({ onSelectFriend }) => {
  const friends = [
    { id: 1, name: '好友1', avatar: 'path-to-avatar1.jpg' },
    { id: 2, name: '好友2', avatar: 'path-to-avatar2.jpg' },
    // 添加更多好友
  ];

  return (
    <div className="contact-list">
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
