
import.meta.env

export const login = (email, password) =>
  fetch(`${env['BACKEND']}/api/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })

export const register = (name, email, password) =>
  fetch(`${env['BACKEND']}/api/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
  })
