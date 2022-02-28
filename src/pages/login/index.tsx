import { useMutation } from "@apollo/client";
import { Form } from "components/elements";
import { Button, Input } from "components/inputs";
import { SIGNIN_USER } from "modules/api";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signinUser] = useMutation(SIGNIN_USER, {
    variables: {
      input: {
        credentials: {
          email,
          password,
        },
      },
    },
  });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signinUser();
    console.log(response);
    localStorage.setItem("token", response.data?.signinUser.token);
  };

  return (
    <Form onSubmit={login}>
      <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
