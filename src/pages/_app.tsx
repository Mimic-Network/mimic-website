import { Layout, WaitlistModal } from "@src/components/atom";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import WaitlistProvider from "@src/components/providers/WaitlistProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WaitlistProvider>
      <WaitlistModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WaitlistProvider>
  );
}
