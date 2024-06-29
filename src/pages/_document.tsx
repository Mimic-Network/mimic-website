import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Udochukwuka Onyela" />
        <meta
          name="description"
          content="All-in-One Social Networking App For real-time interactions."
        />
        <meta
          name="keywords"
          content="Mimic, Social, Networking, App, Interactions, Real-time, realtime, Twitter, Facebook, Social Media, Tweet"
        />
        <meta name="google-site-verification" content="921UTIU2ikjqPF7lBJ0FnsdigpEwD5kZS9kjGXKs3BE" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:url" content="https://mimic-landing.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MIMIC" />
        <meta
          property="og:description"
          content="All-in-One Social Networking App For real-time interactions."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="http://mimic-landing.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://mimic-landing.netlify.app"
        />
        <meta name="twitter:title" content="MIMIC" />
        <meta
          name="twitter:description"
          content="All-in-One Social Networking App For real-time interactions."
        />
        <meta
          name="twitter:image"
          content="https://mimic-landing.netlify.app/og_image.png"
        />

        <meta property="og:title" content="MIMIC" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mimic-landing.netlify.app/og_image.png"
        />
        <meta name="theme-color" content="#2F58B0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#2F58B0" />
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SE71GKHH2P"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SE71GKHH2P');`,
          }}
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
