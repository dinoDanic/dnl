import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "modules/api";
import { useState } from "react";
import { Box, Button, Form, Input, Title } from "shared/ui";

const New = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: {
        code,
        name,
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!code || !name) {
      alert("Empty");
      return;
    }
    await createProduct();
    alert("created");
    setName("");
    setCode("");
  };

  return (
    <>
      <Title>Add new product</Title>
      <Box>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            placeholder="code"
            label="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Input
            placeholder="product name"
            label="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Send</Button>
        </Form>
      </Box>
    </>
  );
};

export default New;
