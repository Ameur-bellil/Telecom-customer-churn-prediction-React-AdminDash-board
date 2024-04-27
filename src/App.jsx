import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/User/User";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import Analytics from "./pages/analytics/Analytics";
import "./app.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ChurnPrediction from "./pages/churnPrediction/ChurnPrediction";

function App() {
  const Layout = () => {
    return (
      <div className="container">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/userList",
          element: <UserList />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/churnPrediction",
          element: <ChurnPrediction />,
        },
      ],
    },
    {
      /*{
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },*/
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
