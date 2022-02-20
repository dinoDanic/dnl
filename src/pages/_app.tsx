import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme/theme";
import GlobalStyle from "styles/global";
import Header from "components/header";
import { MyAppC } from "./_styles";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Header />
            <MyAppC>
              <Component {...pageProps} />
            </MyAppC>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
