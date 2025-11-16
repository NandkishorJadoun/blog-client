import { Form, useActionData } from "react-router";

function SignUpPage() {
  const errors = useActionData();

  return (
    <>
      <Form method="post" action="/signup">
        <p>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" name="firstName" id="first-name" />
        </p>
        <p>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" name="lastName" id="last-name" />
        </p>
        <p>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </p>
        <p>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" name="confirmPassword" id="confirm-password" />
        </p>
        <button>Submit</button>

        {errors && errors.length > 0 && (
          <ul>
            {errors.map((err) => (
              <li>{err.msg}</li>
            ))}
          </ul>
        )}
      </Form>
    </>
  );
}

export default SignUpPage;
