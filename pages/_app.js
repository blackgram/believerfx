import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="theme-color" content="#000" />
    </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
