import "@/styles/globals.css";
import { Config } from "@/config";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={Config.SITE_NAME}
        description={Config.SITE_DESCRIPTION}
        canonical={Config.SITE_URL}
        openGraph={{
          type: "website",
          locale: "zh_CN",
          url: Config.SITE_URL,
          title: Config.SITE_NAME,
          description: Config.SITE_DESCRIPTION,
          images: [
            {
              url: Config.SITE_URL + Config.SITE_IMAGE,
              width: 600,
              height: 600,
              alt: Config.SITE_NAME,
            },
          ],
          site_name: Config.SITE_NAME,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
