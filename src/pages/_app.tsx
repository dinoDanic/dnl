import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme/theme";
import GlobalStyle from "styles/global";

import Header from "modules/header";
import { MyAppC } from "./_styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Header />
          <MyAppC>
            <Component {...pageProps} />
          </MyAppC>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
