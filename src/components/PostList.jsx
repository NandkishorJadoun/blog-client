import { Link, useLoaderData } from "react-router";
import styles from "../assets/css/PostList.module.css";

function PostCard({ post }) {
  const fullName = post.author.firstName + " " + post.author.lastName;
  const date = new Date(post.createdAt).toDateString();
  const postProfileUrl = `/posts/${post.id}`;
  const userProfileUrl = `/users/${post.authorId}`;

  return (
    <div key={post.id} className={styles.postCard}>
      <h1 className={styles.title}>
        <Link className={styles.link} to={postProfileUrl}>
          {post.title}
        </Link>
      </h1>
      <div>
        <Link className={styles.link} to={userProfileUrl}>
          {fullName}
        </Link>
        <span> • {date}</span>
      </div>
    </div>
  );
}

function PostList() {
  const { data } = useLoaderData();
  return (
    <div>
      <p className={styles.heading}>Posts</p>
      <div className={styles.postList}>
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
