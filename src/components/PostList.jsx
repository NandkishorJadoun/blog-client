import { Link, useLoaderData } from "react-router";

function PostCard({ post }) {
  return (
    <div key={post.id}>
      <h2>
        {post.title}, Author: {post.authorId}
      </h2>
      <p>Content: {post.content}</p>
      <p>Created at: {post.createdAt}</p>
      <Link to={`/posts/${post.id}`}>View</Link>
    </div>
  );
}

function PostList() {
  const json = useLoaderData();
  const data = json.data;
  return (
    <>
      <main>
        {data.map((post) => (
          <PostCard post={post} />
        ))}
      </main>
    </>
  );
}

export default PostList;
