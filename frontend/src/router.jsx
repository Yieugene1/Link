import { createBrowserRouter } from "react-router-dom";
import Home from './route/Home';
import Welcome from './route/Welcome';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  }
]);
