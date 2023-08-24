import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
import Landing from './landing/landing_1'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div>
      <Head>
        <title>OnEggy</title>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" /> */}
      </Head>
      {/* <Script src='' strategy='lazyOnload'>

      </Script> */}
      <Landing/>
    </div>
  )
}
