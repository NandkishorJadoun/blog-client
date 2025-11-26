import { Link, Outlet } from "react-router";
import { NavigationLoadingBar } from "./components/NavigationLoadingBar";
import styles from "./assets/css/AppLayout.module.css";

function AppLayout() {
  const auth = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  return (
    <div className={styles.body}>
      <NavigationLoadingBar />
      <header className={styles.header}>
        <h1>
          <Link className={styles.headerLink} to={"/posts"}>
            MiniBlog
          </Link>
        </h1>
        <nav className={styles.nav}>
          {auth ? (
            <>
              <Link className={styles.navLink} to={"/logout"}>
                Log out
              </Link>
              <Link className={styles.navLink} to={`/users/${userId}`}>
                User
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.navLink} to={"/login"}>
                Log in
              </Link>
              <Link className={styles.navLink} to={"/signup"}>
                Sign up
              </Link>{" "}
            </>
          )}
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default AppLayout;
