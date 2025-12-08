import { Link, Outlet } from "react-router";
import { NavigationLoadingBar } from "./components/NavigationLoadingBar";
import styles from "./assets/css/AppLayout.module.css";

function AppLayout() {
  const auth = localStorage.getItem("token");
  const userId = Number(localStorage.getItem("id"));

  return (
    <div className={`${styles.container} ${styles.layout}`}>
      <NavigationLoadingBar />
      <header className={styles.header}>
        <Link className={styles.headerLink} to={"/"}>
          Blogly
        </Link>

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
