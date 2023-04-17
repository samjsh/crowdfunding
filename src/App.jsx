import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/// Pages
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

/// Components
import Nav from "./components/Nav/Nav";

///CSS
import "./App.css";

const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: `/projects/:id`, element: <ProjectPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
