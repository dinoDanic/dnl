import { useMutation } from "@apollo/client";
import { Form } from "components/elements";
import { Button, Input } from "components/inputs";
import { Box, Flex, Title } from "components/ui";
import {
  CreateOrganizationInput,
  MutationCreateOrganizationArgs,
} from "generated/graphql";
import { CREATE_ORGANIZATION } from "modules/api";
import React, { useState } from "react";

export const CreateOrganization = () => {
  const [organization, setOrganization] = useState<CreateOrganizationInput>({
    name: "",
    oib: "",
  });
  const [createOrganization] = useMutation<
    CreateOrganizationInput,
    MutationCreateOrganizationArgs
  >(CREATE_ORGANIZATION, {
    variables: {
      input: organization,
    },
  });

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createOrganization();
    console.log(response);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setOrganization({
      ...organization,
      [name]: value,
    });
  };
  return (
    <Box>
      <Form onSubmit={create}>
        <Title>Create organization</Title>
        <Input
          required
          label="Name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <Input
          required
          label="OIB"
          name="oib"
          onChange={(e) => handleChange(e)}
        />
        <Flex justifyContent="flex-end">
          <Button width="100%">Create</Button>
        </Flex>
      </Form>
    </Box>
  );
};
