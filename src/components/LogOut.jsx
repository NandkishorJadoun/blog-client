import { Link } from "react-router";

function LogOut() {
  localStorage.clear();
  return (
    <main>
      <p>You're logged out</p>
      <Link to={"/posts"}>Check Posts</Link>
    </main>
  );
}

export default LogOut;
