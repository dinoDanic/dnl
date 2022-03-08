import { CreateOrganization, JoinOrganization } from "components/pages";
import { Flex, JumboTitle } from "components/ui";
import React from "react";

const NewJoinOrganization = () => {
  return (
    <>
      <JumboTitle>Hello user</JumboTitle>
      <Flex>
        <JoinOrganization />
        <CreateOrganization />
      </Flex>
    </>
  );
};

export default NewJoinOrganization;
