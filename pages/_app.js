import Head from 'next/head';
import '../styles/globals.css';

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
