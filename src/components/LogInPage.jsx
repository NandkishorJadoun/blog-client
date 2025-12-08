import { Form, useActionData, Navigate, Link } from "react-router";
import styles from "../assets/css/LogInPage.module.css";

function LogInPage() {
  const error = useActionData();
  const auth = Boolean(localStorage.getItem("token"));

  if (auth) return <Navigate to={"/"} />;

  return (
    <main className={`${styles.container} ${styles.main}`}>
      <Form className={styles.form} method="post" action="/login">
        <p className={styles.formSection}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            required
          />
        </p>
        <p className={styles.formSection} u>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            required
          />
        </p>
        <button className={styles.submitBtn}>Submit</button>
        {error && error.message && (
          <p className={styles.error}>{error.message}</p>
        )}
        <div className={styles.signupLink}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </Form>
    </main>
  );
}

export default LogInPage;
