import React, { useState } from "react";
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';

const MainContent = () => {

  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }

  function deleteNote(id) {
    setPosts(prevPosts => {
      return prevPosts.filter((postItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Main Content Area</h2>
      <p>This is the main content area. You can add more features here later.</p>
      <CreatePostArea onAdd={addPost}/>
      {posts.map((postItem, index) => {
        return (
          <Posts
            key={index}
            id={index}
            title={postItem.title}
            content={postItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};



export default MainContent;