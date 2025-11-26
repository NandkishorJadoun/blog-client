import { Link, useLoaderData } from "react-router";
import styles from "../assets/css/PostList.module.css";

function PostCard({ post }) {
  const fName = post.author.firstName;
  const lName = post.author.lastName;
  const date = new Date(post.createdAt).toDateString();
  const postProfileUrl = `/posts/${post.id}`;
  const userProfileUrl = `/users/${post.authorId}`;

  return (
    <div key={post.id} className={styles.postCard}>
      <Link className={styles.link} to={postProfileUrl}>
        <h3>{post.title}</h3>
      </Link>
      <div>
        <Link className={styles.link} to={userProfileUrl}>{`${fName} ${
          lName || "user name"
        }`}</Link>
        <span> • {date}</span>
      </div>
    </div>
  );
}

function PostList() {
  const json = useLoaderData();
  const data = json.data;
  return (
    <>
      <h2>Posts</h2>
      <div className={styles.postList}>
        {data.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;
