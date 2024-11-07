import React, { useState, useEffect } from 'react';
import UserInfoCard from '../components/UserInfoCard';
import FriendItem from '../components/FriendItem';
import ContactCard from '../components/ContactCard';
import PostsList from '../components/PostsList';
import { MyPost, DeletePost } from '../lib/fetch';
import ModalCard from '../components/ModalCard';

function Profile() {
    const user = {
        name: 'Hidosen',
        title: 'Full-stack Developer',
        email: 'Linkapp@test.com',
        avatar: 'https://via.placeholder.com/150',
        bio: 'Passionate about coding and creating scalable web applications.',
        posts: '20',
        fans: '150',
        following: '100'
    };

    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState("posts");

    // 将 fetchPosts 提到 useEffect 外部
    const fetchPosts = async () => {
        const response = await MyPost();
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
        } else {
            console.log("error fetching posts");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        const response = await DeletePost(postId);
        if (response.ok) {
            fetchPosts();  // 重新获取帖子以更新列表
        } else {
            console.error("Failed to delete post");
        }
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg">
                <div className="flex justify-center mb-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user.avatar} alt="Profile"/>
                        </div>
                    </div>
                </div>
                <h2 className="text-center text-2xl font-semibold mb-2">{user.name}</h2>
                <div className="flex justify-around text-center mb-4">
                    <div>
                        <p className="text-lg font-semibold">{user.following}</p>
                        <p className="text-gray-600 text-sm">Following</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{user.fans}</p>
                        <p className="text-gray-600 text-sm">Followers</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{user.posts}</p>
                        <p className="text-gray-600 text-sm">Likes</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-link btn-primary">Edit</button>
                    <button className="btn btn-link btn-primary">Share</button>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-center space-x-4">
                    <button className={`btn ${activeTab === "posts" ? "border-blue-500" : "border-transparent"}`} onClick={() => setActiveTab("posts")}>My Posts</button>
                    <button className={`btn ${activeTab === "like post" ? "border-blue-500" : "border-transparent"}`} onClick={() => setActiveTab("like post")}>Like Post</button>
                    <button className={`btn ${activeTab === "setting" ? "border-blue-500" : "border-transparent"}`} onClick={() => setActiveTab("setting")}>Setting</button>
                </div>
            </div>

            {/* 标签卡内容 */}
            <div className="flex justify-center items-center">
                {activeTab === "posts" && <div className='w-1/3'><PostsList posts={posts} onDelete={handleDelete} /></div>}
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
