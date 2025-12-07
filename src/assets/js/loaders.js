const API_BASE = "https://api-blogly.onrender.com";

const postList = async () => {
  const res = await fetch("http://localhost:3000/api/v1/posts");
  return res.json();
};

const post = async ({ params }) => {
  const { postId } = params;
  const postResponse = await fetch(
    `${API_BASE}/api/v1/posts/${postId}`
  );

  const post = await postResponse.json();

  const commentPromise = fetch(
    `${API_BASE}/api/v1/posts/${postId}/comments`
  ).then((r) => r.json());

  return { post, commentPromise };
};

const user = async ({ params }) => {
  const { userId } = params;
  const userResponse = await fetch(
    `${API_BASE}/api/v1/users/${userId}`
  );

  const user = await userResponse.json();

  const postsPromise = fetch(
    `${API_BASE}/api/v1/users/${userId}/posts`
  ).then((r) => r.json());

  const commentsPromise = fetch(
    `${API_BASE}/api/v1/users/${userId}/comments`
  ).then((r) => r.json());


  return { user, postsPromise, commentsPromise };
};

export default { post, postList, user };
