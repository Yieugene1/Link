import React, { useState, useEffect } from "react";
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';
import {MyPost} from '../lib/fetch';

const MainContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await MyPost();
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.log("error fetching posts");
      }
    };

    fetchPosts();
  }, []); // 空数组表示这个 effect 只在组件挂载时运行一次

  function addPost(newPost) {
    const postWithExtras = {
      ...newPost,
    };
    setPosts(prevPosts => [...prevPosts, postWithExtras]);
  }

  function deletePost(id) {
    setPosts(prevPosts => prevPosts.filter(postItem => postItem.id !== id)); // 假设postItem有id
  }

  return (
    <div className="p-4">
      <CreatePostArea onAdd={addPost} />
      <div className="divider"></div>
      <div>
        {posts.map((postItem, index) => (
          <Posts
            key={postItem.id || index} // 如果有id，优先使用id
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
