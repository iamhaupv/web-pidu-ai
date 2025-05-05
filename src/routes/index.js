import LayoutDefault from "../layouts/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Recruit from "../pages/Recruit";
import Service from "../pages/Service";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },{
        path: "service",
        element: <Service />,
      },{
        path: "contact",
        element: <Contact />,
      },{
        path: "blog",
        element: <Blog />,
      },{
        path: "recruit",
        element: <Recruit />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  },
];
