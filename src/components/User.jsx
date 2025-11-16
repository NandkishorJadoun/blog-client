import { useLoaderData, Await } from "react-router";
import { Suspense, useState } from "react";

function User() {
  const { user, postsPromise, commentsPromise } = useLoaderData();
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <div>{JSON.stringify(user)}</div>

      <div>
        <p>
          <button onClick={() => setActiveSection(0)}>Posts</button>
          <button onClick={() => setActiveSection(1)}>Comments</button>
        </p>

        {activeSection === 0 && (
          <Suspense fallback={<p>Loading Posts...</p>}>
            <Await resolve={postsPromise}>{(res) => JSON.stringify(res)}</Await>
          </Suspense>
        )}

        {activeSection === 1 && (
          <Suspense fallback={<p>Loading Comments...</p>}>
            <Await resolve={commentsPromise}>
              {(res) => JSON.stringify(res)}
            </Await>
          </Suspense>
        )}
      </div>
    </>
  );
}

export default User;
