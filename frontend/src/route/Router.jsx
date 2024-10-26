import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './Home';
import Welcome from './Welcome';

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
