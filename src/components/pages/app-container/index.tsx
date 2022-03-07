import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks/redux-hooks";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CURRENT_USER } from "modules/api";
import { Header } from "modules/header";
import { device, size } from "styles/theme/screenSizes";
import { routes } from "modules/routes";
import { setUser } from "redux/user";

type AppContainerProps = {
  children: React.ReactNode;
  pageProps: any;
};

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  pageProps,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [gotUser, setGotUser] = useState(false);

  useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      console.log(data);
      const { currentUser } = data;
      if (currentUser === null) {
        router.push(routes.login);
        setGotUser(false);
      } else {
        setGotUser(true);
        dispatch(setUser(currentUser));
      }
    },
    onError: (err) => console.log(err),
  });

  if (pageProps.protected && !gotUser) {
    return <>not auth</>;
  }

  return (
    <AppContainerC>
      <Header />
      <AppChildren>{children}</AppChildren>
    </AppContainerC>
  );
};

const AppContainerC = styled.div`
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
