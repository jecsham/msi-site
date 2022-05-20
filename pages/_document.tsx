import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="My System Information | Jecsham Castillo" />
          <meta
            name="description"
            content="My System Information allows you to visualize the main components of your Windows computer."
          />
          <meta name="keywords" content="my system information, hardware monitor" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/pgrabovets/json-view@master/dist/jsonview.bundle.css"
          />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/pgrabovets/json-view@master/dist/jsonview.bundle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
