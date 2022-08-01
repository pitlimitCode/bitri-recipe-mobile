import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

export default function Chat() {
  return (
    <div className="mobile" >
      <Head>
        <title>Bitri Recipe</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="main bg-light">
        <h1>chat to user by id user</h1>





      </main>
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">Link</a>
        </Link>
        <Link href="/add-recipe">
          <a className="nav-link">Link</a>
        </Link>
        <Link href="/chat">
          <a className="nav-link active" aria-current="page">Active</a>
        </Link>
        <Link href="/profile/:id/">
          <a className="nav-link">Link</a>
        </Link>
      </nav>

    </div>
  )
}
