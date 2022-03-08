import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks/redux-hooks";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CURRENT_USER } from "modules/api";
import { Header } from "modules/header";
import { device, size } from "styles/theme/screenSizes";
import { routes } from "modules/routes";
import { setUserData } from "redux/user";
import { UserType } from "types";

type AuthorizeProps = {
  children: React.ReactNode;
  pageProps: any;
};

export const Authorize: React.FC<AuthorizeProps> = ({
  children,
  pageProps,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [user, setUser] = useState<UserType>();

  const { loading } = useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      console.log(data);
      const { currentUser } = data;
      if (currentUser === null) {
        router.push(routes.login);
      } else if (currentUser.organizationId === null) {
        router.push(routes.createJoinOrganization);
      } else {
        dispatch(setUserData(currentUser));
        setUser(currentUser);
      }
    },
    onError: (err) => console.log(err),
  });

  if (pageProps.protected && loading) {
    return <>loading...</>;
  }
  if (!pageProps.protected && !user?.organizationId) {
    return <AppChildren>{children}</AppChildren>;
  }

  return (
    <AuthorizeC>
      <Header />
      <AppChildren>{children}</AppChildren>
    </AuthorizeC>
  );
};

const AuthorizeC = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const AppChildren = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${device.deksop} {
    width: ${size.desktop};
  }
`;
