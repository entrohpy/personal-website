import Head from 'next/head';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <Head>
      </Head>
    </Component>
  );
}

export default App;
