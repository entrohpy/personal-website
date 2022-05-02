import Head from 'next/head';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Rohit Nema | Welcome :)</title>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7BNKFWWXG9"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7BNKFWWXG9');
        </script>
      </Head>
      <Component {...pageProps}>
      </Component>
    </div>
);
}

export default App;
