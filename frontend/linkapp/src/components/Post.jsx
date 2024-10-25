import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const posts = [
    { id: 1, content: 'My first post!', date: '10/22/2024' },
    { id: 2, content: 'Loving the new project I am working on!', date: '10/21/2024' },
];
  
const Posts = () => {
    return (
      <div>
        {posts.map(post => (
          <Card key={post.id} style={{ marginBottom: '10px' }}>
            <CardContent>
              <Typography variant="body1">{post.content}</Typography>
              <Typography variant="body2" color="textSecondary">{post.date}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  export default Posts;