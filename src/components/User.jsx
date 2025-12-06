import { useLoaderData, Await, useAsyncValue, Link } from "react-router";
import { Suspense, useState } from "react";
import styles from "../assets/css/User.module.css";

function User() {
  const { user, postsPromise, commentsPromise } = useLoaderData();
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className={styles.container}>
      <UserInfo user={user} />

      <hr className={styles.separator} />

      <div className={styles.btnContainer}>
        <button
          className={`${styles.btn} ${
            activeSection === 0 ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveSection(0)}
        >
          Posts
        </button>
        <button
          className={`${styles.btn} ${
            activeSection === 1 ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveSection(1)}
        >
          Comments
        </button>
      </div>

      {activeSection === 0 && (
        <Suspense fallback={<p>Loading Posts...</p>}>
          <Await resolve={postsPromise}>
            <PostList />
          </Await>
        </Suspense>
      )}

      {activeSection === 1 && (
        <Suspense fallback={<p>Loading Comments...</p>}>
          <Await resolve={commentsPromise}>
            <CommentList />
          </Await>
        </Suspense>
      )}
    </div>
  );
}

function UserInfo({ user }) {
  const { data } = user;
  const fullName = data.firstName + " " + data.lastName;

  return (
    <>
      <p className={styles.userInfoHeading}>User Information</p>
      <p className={styles.name}>Name: {fullName}</p>
      <p className={styles.role}>Role: {data.role}</p>
    </>
  );
}

function PostList() {
  const { data } = useAsyncValue();
  return (
    <div className={styles.postList}>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  const { id, title, createdAt } = post;
  const createTime = new Date(createdAt).toLocaleString();

  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h1>
      <p className={styles.postInfo}>Created At {createTime}</p>
    </div>
  );
}

function CommentList() {
  const { data } = useAsyncValue();

  return (
    <div className={styles.commentList}>
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }) {
  const { content, createdAt, post } = comment;
  const createTime = new Date(createdAt).toLocaleString();

  const postTitle = post ? (
    <Link to={`/posts/${post.id}`}>{post.title}</Link>
  ) : (
    "Unknown Post"
  );

  return (
    <div className={styles.comment}>
      <h1 className={styles.postTitle}>{postTitle}</h1>
      <p className={styles.commentContent}>Commented: {content}</p>
      <p className={styles.commentInfo}>Commented at {createTime}</p>
    </div>
  );
}

export default User;
