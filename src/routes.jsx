import AppLayout from "./AppLayout";
import HomePage from "./components/HomePage";
import PostList from "./components/PostList";
import Post from "./components/Post";
import ErrorPage from "./components/ErrorPage";
import loader from "./assets/js/loaders";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts", element: <PostList />, loader: loader.postList },
      { path: "posts/:postId", element: <Post/>, loader: loader.post },
    ],
  },
];

export default routes;
