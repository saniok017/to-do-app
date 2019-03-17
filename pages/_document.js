import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru-RU">
        <Head>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="to-do-app" />
          <meta name="apple-mobile-web-app-title" content="to-do-app" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
          <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
