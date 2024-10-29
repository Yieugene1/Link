// FriendItem.js
import React from 'react';

const FriendItem = ({ friend, onSelect }) => {
  return (
    <div className="friend-item" onClick={onSelect}>
      <img src={friend.avatar} alt={`${friend.name} Avatar`} className="avatar" />
      <span className="friend-name">{friend.name}</span>
    </div>
  );
};

export default FriendItem;
