import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Reserve1 from "./components/Reserve1";
import Reserve2 from "./components/Reserve2";
import Filters from "./components/Filters";
import Check from "./components/Check";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/carts",
    element: (
      <>
        {/* <Filters /> */}
        <Check />
      </>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/reserve1",
    element: <Reserve1 />,
  },
  {
    path: "/reserve2",
    element: <Reserve2 />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

