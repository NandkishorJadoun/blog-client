import { Form, useActionData } from "react-router";

function LogInPage() {
  const error = useActionData();

  return (
    <>
      <Form method="post" action="/login">
        <p>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </p>
        <button>Submit</button>

        {error && error.message && <p>{error.message}</p>}
      </Form>
    </>
  );
}

export default LogInPage;
