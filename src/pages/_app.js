import 'normalize.css';
import 'bootstrap/scss/bootstrap.scss'
import '../styles/config.scss'
import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return  (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp