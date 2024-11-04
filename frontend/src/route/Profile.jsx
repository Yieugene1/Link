import React, { useState }from 'react';
import MainContent from '../components/MainContent';
import UserInfoCard from '../components/UserInfoCard';
import FriendItem from '../components/FriendItem';
import ContactCard from '../components/ContactCard';

function Profile() {
    const user = {
        name: 'Hidosen',
        title: 'Full-stack Developer',
        email:'Linkapp@test.com',
        avatar: 'https://via.placeholder.com/150', // 头像URL
        bio: 'Passionate about coding and creating scalable web applications.',
        posts:'20',
        fans:'150',
        following:'100'
    };

    const [activeTab, setActiveTab] = useState("posts");



    return (
      <div >
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">

            <div className="flex justify-center mb-4">
                <div className="avatar ">
                    <div className="w-24 rounded-full flex-shrink-0 ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>

            <h2 className="text-center text-2xl font-semibold mb-2">{user.name}</h2>

            <div className="flex justify-around text-center mb-4">
                <div>
                <p className="text-lg font-semibold">100</p>
                <p className="text-gray-600 text-sm">Following</p>
                </div>
                <div>
                <p className="text-lg font-semibold">200</p>
                <p className="text-gray-600 text-sm">Followers</p>
                </div>
                <div>
                <p className="text-lg font-semibold">150</p>
                <p className="text-gray-600 text-sm">Likes</p>
                </div>
            </div>

            <div className="text-center">
                <button className="btn  btn-link btn-primary">Edit</button>
                <button className="btn  btn-link btn-primary">Share</button>
            </div>

        </div>



        <div>
            <div className="mb-4">
                <div className="flex justify-center space-x-4">
                    <button
                    className={`btn ${
                        activeTab === "posts" ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setActiveTab("posts")}
                    >
                    Posts
                    </button>

                    <button
                    className={`btn ${
                        activeTab === "like post" ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setActiveTab("like post")}
                    >
                    like post
                    </button>

                    <button
                    className={`btn ${
                        activeTab === "like post" ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setActiveTab("setting")}
                    >
                    Setting
                    </button>
                </div>
            </div>
        </div>

        {/* 标签卡内容 */}

        <div className="flex justify-center items-center">
          {activeTab === "posts" && <div className='w-1/2'> <MainContent /> </div>}
          {activeTab === "like post" && <UserInfoCard />}
          {activeTab === "setting" && <FriendItem />}
        </div>

      <div className='w-1/4'>
          <ContactCard />
        </div>
    </div>
    );
  }

export default Profile;