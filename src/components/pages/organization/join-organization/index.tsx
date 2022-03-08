import { Button, Input } from "components/inputs";
import { Box, Flex, Title } from "components/ui";
import React from "react";

export const JoinOrganization = () => {
  return (
    <Box>
      <Title>Join organization</Title>
      <Input label="Invation token" />
      <Input label="Dispay name" />
      <Flex justifyContent="flex-end">
        <Button width="100%">Send</Button>
      </Flex>
    </Box>
  );
};
