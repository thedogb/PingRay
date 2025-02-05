import "@/styles/globals.css";
// import { Config } from "@/config";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import TagManager from "react-gtm-module";
import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-XXXXXXX" });
  }, []);

  return (
    <>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
    </>
  );
}
