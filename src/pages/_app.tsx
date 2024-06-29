import { Layout, WaitlistModal } from "@src/components/atom";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import WaitlistProvider from "@src/components/providers/WaitlistProvider";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WaitlistProvider>
      <WaitlistModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SE71GKHH2P"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SE71GKHH2P');`,
        }}
      />
    </WaitlistProvider>
  );
}
