import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* components */
import Navbar from "./components/Navbar";

/* pages */
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
