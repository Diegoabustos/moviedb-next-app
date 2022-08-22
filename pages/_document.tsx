import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="font-lora">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
