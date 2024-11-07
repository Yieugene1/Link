// FriendRecommendations.jsx
import React from 'react';

const FriendRecommendations = () => {
  const recommendations = [
    { id: 1, name: 'Fiona' },
    { id: 2, name: 'George' },
  ];

  const handleAddFriend = (id) => {
    console.log(`Sent friend request to ${id}`);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">推荐好友</h2>
      <ul className="space-y-3">
        {recommendations.map((recommendation) => (
          <li key={recommendation.id} className="card bg-base-100 shadow-lg p-4 flex justify-between items-center">
            <p className="text-lg font-medium">{recommendation.name}</p>
            <button className="btn btn-primary btn-sm" onClick={() => handleAddFriend(recommendation.id)}>
              加为好友
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRecommendations;
