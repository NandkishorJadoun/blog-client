import AppLayout from "./AppLayout";
import PostList from "./components/PostList";
import ErrorPage from "./components/ErrorPage";
import Post from "./components/Post";
import User from "./components/User";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import LogOut from "./components/LogOut";
import loader from "./assets/js/loaders";
import action from "./assets/js/actions";

const routes = [
  {
    path: "/",
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: PostList, loader: loader.postList },
      {
        path: "posts/:postId",
        Component: Post,
        loader: loader.post,
        action: action.postComment,
      },
      { path: "users/:userId", Component: User, loader: loader.user },
    ],
  },
  {
    path: "/signup",
    Component: SignUpPage,
    action: action.signUp,
  },
  {
    path: "/login",
    Component: LogInPage,
    action: action.logIn,
  },
  {
    path: "/logout",
    Component: LogOut,
  },
];

export default routes;
