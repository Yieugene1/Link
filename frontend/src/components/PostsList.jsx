import React from 'react';
import Posts from './Posts';

const PostsList = ({ posts, onDelete }) => {
    return (
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
                    onDelete={() => onDelete(postItem.post_id)}
                />
            ))}
        </div>
    );
};

export default PostsList;
