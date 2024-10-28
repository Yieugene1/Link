import React, { useState } from "react";
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';

const MainContent = () => {

  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    const postWithExtras = {
      ...newPost,
      timestamp: new Date().toLocaleString(),
      avatar: newPost.avatar || "https://via.placeholder.com/30", 
      likes: 10,
      commentsCount: 0
    };
    setPosts(prevPosts => [...prevPosts, postWithExtras])
  }

  function deletePost(id) {
    setPosts(prevPosts => prevPosts.filter((postItem, index) => index !== id));
  }

  return (
    <div style={{ padding:'20px', textAlign: 'center' }}>
      <h2>Main Content Area</h2>
      <p>This is the main content area. You can add more features here later.</p>
      <CreatePostArea onAdd={addPost} />
      {posts.map((postItem, index) => (
        <Posts
          key={index}
          id={index}
          title={postItem.title}
          content={postItem.content}
          timestamp={postItem.timestamp}
          avatar={postItem.avatar}
          likes={postItem.likes}
          commentsCount={postItem.commentsCount}
          onDelete={deletePost}
        />
      ))}
    </div>
  );
};

export default MainContent;