import { redirect } from "react-router";

const signUp = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };

  const response = await fetch("http://localhost:3000/api/v1/accounts/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const data = await response.json();
    return data.errors;
  }

  return redirect("/login");
};

const logIn = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:3000/api/v1/accounts/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const error = await response.json();
    return error.info;
  }

  const json = await response.json();
  localStorage.setItem("token", json.token);
  localStorage.setItem("id", json.user.id);
  return redirect("/posts");
};

const postComment = async ({ request, params }) => {
  const { postId } = params;
  const data = await request.formData();
  const submission = { content: data.get("comment") };

  const token = localStorage.getItem("token");

  const response = await fetch(
    `http://localhost:3000/api/v1/posts/${postId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(submission),
    }
  );

  // will work on this once i have done validate comment through express validator

  if (!response.ok) {
    const data = await response.json();
    console.log(data);
    return;
  }

  return { init: "" };
  /* return redirect(`/posts/${params.postId}`); */
};

export default { signUp, logIn, postComment };
