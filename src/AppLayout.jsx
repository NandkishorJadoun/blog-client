import { Link, NavLink, Outlet } from "react-router";
import { NavigationLoadingBar } from "./components/NavigationLoadingBar";
function App() {
  return (
    <>
      <NavigationLoadingBar />
      <header>
        <h1>
          <Link to={"/"}>Blog</Link>
        </h1>
        <nav>
          <NavLink to={"/posts"}>Posts</NavLink>
          {localStorage.getItem("token") ? (
            <>
              <NavLink to={"/logout"}>Log out</NavLink>
              <NavLink to={`/users/${localStorage.getItem("id")}`}>
                User
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>Log in</NavLink>
              <NavLink to={"/signup"}>Sign up</NavLink>{" "}
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Made with ❤️ by Nandkishor</footer>
    </>
  );
}

export default App;
