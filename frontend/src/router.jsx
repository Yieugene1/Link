import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './route/Home';
import Welcome from './route/Welcome';
import Profile from './route/Profile';
import Friends from './route/Friends';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "friends",
        element: <Friends />,
      },

    ],
  }
]);
