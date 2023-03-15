import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* components */
import Navbar from "./components/Navbar";

/* pages */
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Quote from "./pages/Quote";
import Subsidiaries from "./pages/Subsidiaries";

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
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/subsidiaries",
        element: <Subsidiaries />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
