import React from "react";
import Home from "./Home";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
