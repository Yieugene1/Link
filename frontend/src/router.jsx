import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './route/Home';
import Welcome from './route/Welcome';
import Profile from './route/Profile';

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
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      
    ],
  }
]);
