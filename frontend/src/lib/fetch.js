export const login = (email, password) =>
  fetch(`${import.meta.env.VITE_BACKEND}/api/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', 
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  }).then((response) => response);

export const register = (name, email, password) =>
  fetch(`${import.meta.env.VITE_BACKEND}/api/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
}).then((response) => response);


export const CreatePost = (title, content, post_image, avatar) =>
      fetch(`${import.meta.env.VITE_BACKEND}/api/PostView/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          credentials: 'include', 
          body: JSON.stringify({
              title: title,
              content: content,
              post_image: null,
              avatar: null,
          }),
      }).then((response) => response);

export const MyPost = () =>
  fetch(`${import.meta.env.VITE_BACKEND}/api/MyPost/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include', 
  }).then((response) => response);