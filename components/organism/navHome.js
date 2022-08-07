import Link from 'next/link'
import {useRouter} from "next/router";

export default function navHome(props) {
  const idparams = props?.idUserActive?.id;
  // const { query } = useRouter();
  // console.log(query);
  const router = useRouter();
  return (
  <nav className='navHome'>
    <div style={{width:"40%"}}>
      <Link href="/" className="nav-item">
        <a className={router.pathname == "/" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-house-door"></i>
        </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
      <Link href="/add-recipe" className="nav-item">
        <a className={router.pathname == "/add-recipe" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-plus-square"></i>
        </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
      <Link href="/chat" className="nav-item">
        <a className={router.pathname == "/chat" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-chat"></i>
        </a>
      </Link>
    </div>
    <div style={{width:"20%"}}>
    {/* ID from id authentification */}
      <Link href={`/profile/2`} className="nav-item">
        <a className={router.pathname == `/profile/2` ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-person"></i>
        </a>
      </Link>
    </div>
  </nav>
  )
}
