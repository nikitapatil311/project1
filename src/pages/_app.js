import "../../styles/globals.css";
import Layout from "../../components/Layout";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import Login from "./login";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {/* <Login /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
