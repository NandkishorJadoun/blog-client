import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";

function Post() {
  const { post, commentPromise } = useLoaderData();

  const data = post.data;

  return (
    <>
      <div>{JSON.stringify(data)}</div>

      <Suspense fallback={<p>Loading Comments...</p>}>
        <Await resolve={commentPromise}>{(res) => JSON.stringify(res)}</Await>
      </Suspense>
    </>
  );
}

export default Post;
