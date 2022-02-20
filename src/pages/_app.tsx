import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme/theme";
import GlobalStyle from "styles/global";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Header } from "modules";
import { AppContainer } from "shared/components";

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
