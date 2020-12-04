import "../styles/globals.css";
import Init from "../src/components/Init";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  let browserViewport = (
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  if (
    process.browser &&
    global.window.navigator.userAgent.indexOf("Safari") != -1
  ) {
    browserViewport = (
      <Head>
        <meta name="viewport" content={"initial-scale=1.0, user-scalable=0"} />
      </Head>
    );
  }

  return (
    <Init>
      {browserViewport}
      <Component {...pageProps} />;
    </Init>
  );
}

export default MyApp;
