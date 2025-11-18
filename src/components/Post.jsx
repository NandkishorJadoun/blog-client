import { useLoaderData, useActionData, Await, Form, Link } from "react-router";
import { Suspense } from "react";

function Post() {
  const { post, commentPromise } = useLoaderData();
  const errors = useActionData();

  const data = post.data;
  const auth = localStorage.getItem("token");

  return (
    <>
      <div>{JSON.stringify(data)}</div>

      <Suspense fallback={<p>Loading Comments...</p>}>
        <Await resolve={commentPromise}>
          {(comments) => (
            <>
              {auth ? (
                <Form
                  key={comments.data.length}
                  method="POST"
                  action={`/posts/${data.id}`}
                >
                  <p>
                    <label htmlFor="comment">Leave a comment</label>
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="Great Post"
                      required
                    />
                  </p>
                  <button>Submit</button>

                  {errors && errors.length > 0 && (
                    <ul>
                      {errors.map((err) => (
                        <li>{err.msg}</li>
                      ))}
                    </ul>
                  )}
                </Form>
              ) : (
                <Link to={"/login"}>Please login first to comment</Link>
              )}

              <div>{JSON.stringify(comments)}</div>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default Post;
