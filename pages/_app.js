import Script from 'next/script'
import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
