import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme/theme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import GlobalStyle from "styles/global";
import { setContext } from "@apollo/client/link/context";
import { AppContainer } from "components/pages";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/redux-hooks";
import { userSelector } from "redux/user";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);

  // if (pageProps.protected && !user) {
  //   return "loading...";
  // }
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <AppContainer>
              <Component {...pageProps} />
            </AppContainer>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
