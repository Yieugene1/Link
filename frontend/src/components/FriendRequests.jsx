// FriendRequests.jsx
import React from 'react';

const FriendRequests = () => {
  const requests = [
    { id: 1, name: 'David' },
    { id: 2, name: 'Ella' },
  ];

  const handleAccept = (id) => {
    console.log(`Accepted friend request from ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejected friend request from ${id}`);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">好友请求</h2>
      <ul className="space-y-3">
        {requests.map((request) => (
          <li key={request.id} className="card bg-base-100 shadow-lg p-4 flex justify-between items-center">
            <p className="text-lg font-medium">{request.name}</p>
            <div>
              <button className="btn btn-primary btn-sm mr-2" onClick={() => handleAccept(request.id)}>
                接受
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => handleReject(request.id)}>
                拒绝
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequests;
