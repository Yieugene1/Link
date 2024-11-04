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
    };
    setPosts(prevPosts => [...prevPosts, postWithExtras])
  }

  function deletePost(id) {
    setPosts(prevPosts => prevPosts.filter((postItem, index) => index !== id));
  }

  return (
    <div className="p-4">
      <CreatePostArea onAdd={addPost} />
      <div className="divider"></div>
      <div>
        {posts.map((postItem, index) => (
          <Posts
            key={index}
            post_id={index}
            title={postItem.title}
            content={postItem.content}
            post_image={postItem.image}
            timestamp={postItem.timestamp}
            avatar={postItem.avatar}
            likes={postItem.likes}
            onDelete={deletePost}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;