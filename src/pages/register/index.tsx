import { useMutation } from "@apollo/client";
import { Form } from "components/elements";
import { Button, Input } from "components/inputs";
import { CREATE_USER } from "modules/api";
import React, { useState } from "react";

type Props = {};

const Register = (props: Props) => {
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
    console.log(response);
  };
  return (
    <Form onSubmit={register}>
      <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button>Submit</Button>
    </Form>
  );
};

export default Register;
