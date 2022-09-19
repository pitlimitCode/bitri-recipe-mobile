/* eslint-disable */
import Link from 'next/link'
import {useRouter} from "next/router";

export default function navHome(props) {
  // console.log(props);
  let router = useRouter();
  return (
  <nav className='navHome'>
    <div style={{width:"33%"}}>
      <Link href="/" className="nav-item">
        <a className={router.pathname == "/" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-house-door"></i>
        </a>
      </Link>
    </div>
    <div style={{width:"33%"}}>
      <Link href="/add-recipe" className="nav-item">
        <a className={router.pathname == "/add-recipe" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-plus-square"></i>
        </a>
      </Link>
    </div>
    <div style={{width:"33%"}}>
      <Link href="/profile" className="nav-item">
        <a className={router.pathname == "/profile" ? "navHomeActive navHomeLink nav-link" : "nav-link navHomeLink"}> 
          <i className="bi bi-person"></i>
        </a>
      </Link>
    </div>
  </nav>
  )
}
