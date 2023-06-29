import { useEffect, useState } from "react";
import { Navbar } from "@/Layout/Navbar";
import Layout from "@/Layout/ParentLayout";
import { useAppSelector } from "@/redux/setup/hooks";
import store from "@/redux/setup/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import SkeletonLoading from "@/core/Templates/SkeletonLoading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      setLoading(true);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        {loading ? <SkeletonLoading /> : <Component {...pageProps} />}
      </Layout>
    </Provider>
  );
}
