import { useLoaderData, useActionData, Await, Form } from "react-router";
import { Suspense } from "react";

function Post() {
  const { post, commentPromise } = useLoaderData();
  const actionData = useActionData();
  console.log(actionData);

  const data = post.data;
  return (
    <>
      <div>{JSON.stringify(data)}</div>

      <Form method="POST" action={`/posts/${data.id}`}>
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
      </Form>

      <Suspense fallback={<p>Loading Comments...</p>}>
        <Await resolve={commentPromise}>{(res) => JSON.stringify(res)}</Await>
      </Suspense>
    </>
  );
}

export default Post;
