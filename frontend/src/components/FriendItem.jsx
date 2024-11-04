// FriendItem.js
import React from 'react';

const FriendItem = ({friend, onSelect}) => {
  return (
    <div
      onClick={onSelect}
      className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b"
    >
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={friend.avatar} alt={`${friend.name} avatar`} />
        </div>
      </div>
      <div className="ml-4 flex-1">
        <div className="font-semibold">{friend.name}</div>
        <div className="text-sm text-gray-500 truncate">{friend.lastMessage}</div>
      </div>
      <div className="text-xs text-gray-400">{friend.lastMessageTime}</div>
    </div>
  );
};

export default FriendItem;
