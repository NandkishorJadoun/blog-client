import {
  Link,
  Form,
  Await,
  useParams,
  useLoaderData,
  useActionData,
  useAsyncValue,
} from "react-router";

import { Suspense } from "react";
import parser from "html-react-parser";
import styles from "../assets/css/Post.module.css";

function Post() {
  const { post, commentPromise } = useLoaderData();

  const postData = post.data;

  const { firstName, lastName } = postData.author;
  const fullName = firstName + " " + lastName;

  const userProfileUrl = `/users/${postData.authorId}`;
  const createTime = new Date(postData.createdAt).toLocaleString();
  const updateTime = new Date(postData.updatedAt).toLocaleString();
  const isUpdated = createTime !== updateTime;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{postData.title}</h1>
      <hr className={styles.separator} />
      <p className={styles.postInfo}>
        Author: <Link to={userProfileUrl}>{fullName}</Link>
      </p>
      <p className={styles.postInfo}>Created at {createTime}</p>
      {isUpdated && <p className={styles.postInfo}>Updated at {updateTime}</p>}
      <hr className={styles.separator} />
      {parser(postData.content)}
      <hr className={styles.separator} />

      <Suspense fallback={<p>Loading Comment Section...</p>}>
        <Await resolve={commentPromise}>
          <CommentSection />
        </Await>
      </Suspense>
    </div>
  );
}

function CommentSection() {
  const { data: comments } = useAsyncValue();

  return (
    <>
      <CommentForm commentListLength={comments.length} />
      <hr className={styles.separator} />
      <div className={styles.commentsHeading}>Comments:</div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

function CommentForm({ commentListLength }) {
  const errors = useActionData();
  const { postId } = useParams();

  const auth = localStorage.getItem("token");

  if (!auth) {
    return <Link to={"/login"}>Please login first to comment</Link>;
  }

  return (
    <Form
      className={styles.commentForm}
      key={commentListLength}
      method="POST"
      action={`/posts/${postId}`}
    >
      <p className={styles.formSection}>
        <label className={styles.commentLabel} htmlFor="comment">
          Leave a comment:
        </label>
        <textarea
          className={styles.textarea}
          name="comment"
          id="comment"
          placeholder="Great Post"
          required
        />
      </p>

      <button className={styles.submitBtn}>Submit</button>

      {errors && errors.length > 0 && (
        <ul className={styles.errorList}>
          {errors.map((err) => (
            <li>{err.msg}</li>
          ))}
        </ul>
      )}
    </Form>
  );
}

function Comment({ comment }) {
  const { author, content, authorId, createdAt } = comment;
  const fullName = author.firstName + " " + author.lastName;

  const commentAuthorProfileUrl = `/users/${authorId}`;
  const createTime = new Date(createdAt).toLocaleString();

  return (
    <div className={styles.comment}>
      <p>
        <Link to={commentAuthorProfileUrl}>{fullName}</Link> commented:{" "}
        {content}
      </p>
      <p className={styles.commentInfo}>Created at {createTime}</p>
    </div>
  );
}

export default Post;
