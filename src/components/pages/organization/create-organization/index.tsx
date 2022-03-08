import { Button, Input } from "components/inputs";
import { Box, Flex, Title } from "components/ui";
import React from "react";

export const CreateOrganization = () => {
  return (
    <Box>
      <Title>Create organization</Title>
      <Input label="Name" />
      <Input label="OIB" />
      <Flex justifyContent="flex-end">
        <Button width="100%">Create</Button>
      </Flex>
    </Box>
  );
};
