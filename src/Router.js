import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/application/Home";
import Auth from "./pages/authentication/Auth";
import Login from "./pages/authentication/Login";
import PostList from "./pages/application/PostList";
import AuthCheck from "./components/higher-order/AuthCheck";
import MyApplications from "./pages/application/MyApplications";
import AddNewPost from "./pages/application/AddNewPost";
import Posts from "./pages/application/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "auth",
        element: <Auth />,
        children: [{ path: "login", element: <Login />, exact: true }],
      },
      {
        path: "posts",
        element: (
          <AuthCheck>
            <Posts />
          </AuthCheck>
        ),
        children: [
          {
            index: true,
            element: (
              <AuthCheck>
                <PostList />
              </AuthCheck>
            ),
          },
          {
            path: "add",
            element: (
              <AuthCheck>
                <AddNewPost />
              </AuthCheck>
            ),
            exact: true,
          },
        ],
      },
      {
        path: "my-applications",
        element: (
          <AuthCheck>
            <MyApplications />
          </AuthCheck>
        ),
      },
    ],
  },
]);

export default router;
