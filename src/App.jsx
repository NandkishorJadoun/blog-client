import useFetch from "./useFetch";

function App() {
  const [data, error, loading] = useFetch("http://localhost:3000/api/v1/posts");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>A network error was encountered</p>;

  function Blog({ blog }) {
    return (
      <div key={blog.id}>
        <h2>
          {blog.title}, Author: {blog.authorId}
        </h2>
        <p>Content: {blog.content}</p>
        <p>Created at: {blog.createdAt}</p>
        <p>Last Updated: {blog.updatedAt}</p>
      </div>
    );
  }

  return (
    <>
      <main>
        {data.map((blog) => (
          <Blog blog={blog} />
        ))}
      </main>
    </>
  );
}

export default App;
