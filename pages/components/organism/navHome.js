import Link from 'next/link'
import {useRouter} from "next/router";


export default function navHome() {
  const router = useRouter();
  return (
  <nav>
    <div style={{width:"40%"}}>
      <Link href="/" className="nav-item">
        <a className={router.pathname == "/" ? "active nav-link" : "nav-link"}> <i className="bi bi-house-door"></i> </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
      <Link href="/add-recipe" className="nav-item">
        <a className={router.pathname == "/add-recipe" ? "active nav-link" : "nav-link"}> <i className="bi bi-plus-square"></i> </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
      <Link href="/chat" className="nav-item">
        <a className={router.pathname == "/chat" ? "active nav-link" : "nav-link"}> <i className="bi bi-chat"></i> </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
    {/* ID from id authentification */}
      <Link href="/profile/:id/" className="nav-item">
        <a className={router.pathname == "/profile/[id]" ? "active nav-link" : "nav-link"}> <i className="bi bi-person"></i> </a>
      </Link>
    </div>
  </nav>
  )
}
