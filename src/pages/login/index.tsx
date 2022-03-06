import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Form } from "components/elements";
import { useRouter } from "next/router";
import { Button, Input } from "components/inputs";
import { LOGIN_USER } from "modules/api";
import { routes } from "modules/routes";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signinUser] = useLazyQuery(LOGIN_USER, {
    variables: {
      email,
      password,
    },
  });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signinUser();
    const { login } = response.data;
    if (login) {
      localStorage.setItem("token", response.data?.login);
      router.push(routes.home);
    } else {
      alert("Something went wrong");
    }
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
