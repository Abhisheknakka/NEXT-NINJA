import Head from 'next/head'
import NavBar from '../comps/NavBar'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div >
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
                Hi my name is Abhishek; I'am a final year Under greadute in VIT Vellore.
      </p>

      <p className={styles.text}>
         Hi my name is Abhishek; I'am a final year Under greadute in VIT Vellore.
      </p>
      
            <Link href="/ninjas"> 
            <a className={styles.btn}> See Ninja Listing </a>
            </Link>
           
    </div>
    </>
  )
}
