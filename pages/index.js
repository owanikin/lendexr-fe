import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lendexr</title>
        <meta name="description" content="Self-Repaying Loan" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Header/>
    </div>
  )
}
