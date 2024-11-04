import React, { useState, useEffect } from "react";
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';
import { MyPost, DeletePost } from '../lib/fetch';
import ModalCard from './ModalCard';

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

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

  const handleDelete = (post_id) => {
    setSelectedPostId(post_id);
    setIsModalOpen(true);
};

const deletePost = async () => {
  if (selectedPostId) {
      const response = await DeletePost(selectedPostId);
      if (response.ok) {
          fetchPosts();
      } else {
          alert("Failed to delete post");
      }
      setIsModalOpen(false);
      setSelectedPostId(null);
  }
};

  return (
    <div className=" w-full p-4">
      <CreatePostArea onPostAdded={handlePostAdded} />
      <div className="divider"></div>
      <div>
        {posts.map((postItem) => (
          <Posts
            key={postItem.post_id}
            post_id={postItem.post_id}
            title={postItem.title}
            content={postItem.content}
            post_image={postItem.post_image}
            timestamp={postItem.timestamp}
            avatar={postItem.avatar}
            likes={postItem.likes}
            onDelete={() => handleDelete(postItem.post_id)}
          />
        ))}
      </div>
      <ModalCard isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={deletePost}>
        Are you sure you want to delete this post?
      </ModalCard>
    </div>
  );
};

export default MainContent;
