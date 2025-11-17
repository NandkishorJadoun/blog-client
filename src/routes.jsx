import AppLayout from "./AppLayout";
import HomePage from "./components/HomePage";
import PostList from "./components/PostList";
import Post from "./components/Post";
import User from "./components/User";
import ErrorPage from "./components/ErrorPage";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import LogOut from "./components/LogOut";
import loader from "./assets/js/loaders";
import action from "./assets/js/actions";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts", element: <PostList />, loader: loader.postList },
      {
        path: "posts/:postId",
        element: <Post />,
        loader: loader.post,
        action: action.postComment,
      },
      { path: "users/:userId", element: <User />, loader: loader.user },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    action: action.signUp,
  },
  {
    path: "/login",
    element: <LogInPage />,
    action: action.logIn,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
];

export default routes;
