import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
import {useRouter} from "next/router";
import NavHome from '../../components/organism/navHome'

export default function Profile() {
  const { query } = useRouter();
  return (
    <div className="mobile" >
      <Head>
        <title>Bitri Recipe</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="main bg-light">
        <h1>user profile id= {query.id}</h1>





      </main>

      <NavHome />
      {/* <nav className="nav nav-pills nav-fill">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/add-recipe">
          <a className="nav-link">+Recipe</a>
        </Link>
        <Link href="/chat">
          <a className="nav-link">Chat</a>
        </Link>
        <Link href="/profile/:id/">
          <a className="nav-link active" aria-current="page">Profile</a>
        </Link>
      </nav> */}
    </div>
  )
}
