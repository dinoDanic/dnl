import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Form } from "components/elements";
import { Button, Input } from "components/inputs";
import { CREATE_USER } from "modules/api";
import { routes } from "modules/routes";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Register = (props: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      input: {
        email,
        password,
      },
    },
  });

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createUser();

    const { data } = response;
    if (data.createUser?.email) {
      router.push(routes.login);
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <Form onSubmit={register}>
      <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button>Submit</Button>
      <Link href={routes.login}>Login</Link>
    </Form>
  );
};

export default Register;
