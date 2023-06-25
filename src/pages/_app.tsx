import Layout from "@/Layout/ParentLayout";
import store, { persistor } from "@/redux/setup/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP>;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
