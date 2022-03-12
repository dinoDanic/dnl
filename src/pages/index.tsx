import { useAppSelector } from "hooks/redux-hooks";
import type { NextPage } from "next";
import { userSelector } from "redux/user";
import NewJoinOrganization from "./organization/new-join";

const Home: NextPage = () => {
  const user = useAppSelector(userSelector);
  const noOrganizaction: boolean = !user?.organizationId;

  return (
    <>
      {noOrganizaction && (
        <>
          <NewJoinOrganization />
        </>
      )}
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Home;
