import { Link } from "react-router";
import styles from "../assets/css/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <img className={styles.heroImg} src="./hero.svg" alt="" />
      <h2>Welcome to MiniBlog</h2>
      <p className={styles.heroPara}>
        Read, write, and explore stories from the community.
      </p>
      <Link className={styles.link} to={"/posts"}>
        Latest posts
      </Link>
    </div>
  );
}
