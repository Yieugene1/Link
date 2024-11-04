import React, { useState, useEffect } from "react";
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';
import { MyPost, DeletePost } from '../lib/fetch';

const MainContent = () => {
  const [posts, setPosts] = useState([]);

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

  const handlePostAdded = () => {
    fetchPosts();
  };

  const deletePost = async (post_id) => {
    const response = await DeletePost(post_id);
    console.log(posts.postItem.id)
    if (response.ok) {
      alert("data.message")
      fetchPosts();
    } else {
      alert("data.error")
    }
  };

  return (
    <div className="p-4">
      <CreatePostArea onPostAdded={handlePostAdded} />
      <div className="divider"></div>
      <div>
        {posts.map((postItem, index) => (
          <Posts
            key={postItem.id}
            post_id={postItem.id} // 假设每个postItem有一个id
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
