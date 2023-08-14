import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
import Landing from './landing'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div>
      <Head>
        <title>OnEggy</title>
      </Head>
      {/* <Script src='' strategy='lazyOnload'>

      </Script> */}
      <Landing/>
    </div>
  )
}
