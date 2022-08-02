import Link from 'next/link'
// import Image from 'next/image'

export default function navHome() {
  return (
  <nav className="nav-fill">
    <Link href="/" className="nav-item" >
      {/* <a className="nav-link active" aria-current="page">Home</a> */}
      <a className="nav-link active">Home</a>
    </Link>
    <Link href="/add-recipe" className="nav-item">
      <a className="nav-link">+Recipe</a>
    </Link>
    <Link href="/chat" className="nav-item">
      <a className="nav-link">Chat</a>
    </Link>
    {/* ID from id authentification */}
    <Link href="/profile/:id/" className="nav-item">
      <a className="nav-link">Profile</a>
    </Link>
  </nav>
  )
}
