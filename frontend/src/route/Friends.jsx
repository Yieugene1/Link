// FriendPage.jsx
import React, { useState } from 'react';
import FriendList from '../components/FriendList';
import FriendRequests from '../components/FriendRequests';
import FriendRecommendations from '../components/FriendRecommendations';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('friends'); // 当前活跃的标签

  return (
    <div className="bg-stone-100 min-h-screen p-4">
      <div className='flex space-x-4'>
        <div className='w-1/4 flex justify-end h-[400px] items-start'>
          <FriendList />
        </div>
      {/* 页面标题 */}
    

      {/* Tab 切换按钮 */}
        <div className='w-1/2 '>
          <FriendRequests />
        </div>
      {/* Tab 内容 */}
      <div className='w-1/4 '>
        <FriendRecommendations />
      </div>
    </div>
    </div>
  );
};

export default Friends;
