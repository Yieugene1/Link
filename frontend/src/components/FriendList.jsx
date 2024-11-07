// FriendList.jsx
import React from 'react';

const FriendList = () => {
  // 假设这是好友数据，你可以从API获取或使用状态管理
  const friends = [
    { id: 1, name: 'Alice', status: 'online' },
    { id: 2, name: 'Bob', status: 'offline' },
    { id: 3, name: 'Charlie', status: 'busy' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">我的好友</h2>
      <ul className="space-y-3">
        {friends.map((friend) => (
          <li key={friend.id} className="card card-side bg-base-100 shadow-lg p-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={`https://i.pravatar.cc/150?img=${friend.id}`} alt={friend.name} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium">{friend.name}</p>
              <p className="text-sm text-gray-500">{friend.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
