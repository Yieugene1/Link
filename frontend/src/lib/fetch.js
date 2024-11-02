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
