import { CreateOrganization, JoinOrganization } from "components/pages";
import { Flex, JumboTitle, SubTitle } from "components/ui";
import { useAppSelector } from "hooks/redux-hooks";
import { userSelector } from "redux/user";

const NewJoinOrganization = () => {
  const user = useAppSelector(userSelector);
  return (
    <>
      <JumboTitle>Hello {user?.email}</JumboTitle>
      <SubTitle>Create or Join organization</SubTitle>
      <Flex>
        <JoinOrganization />
        <CreateOrganization />
      </Flex>
    </>
  );
};

export default NewJoinOrganization;
