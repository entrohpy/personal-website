import Head from 'next/head';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Rohit Nema | Stay Tuned :)</title>
      </Head>
      <Component {...pageProps}>
      </Component>
    </div>
  );
}

export default App;
