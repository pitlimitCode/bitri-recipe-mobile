// import Link from 'next/link'
// import Image from 'next/image'
import NavHome from '../../components/organism/navHome'

import {useEffect} from "react";

export default function Chat() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="mobile" >
      <main>
        <h1 className='text-warning mt-5'>Chat feature coming soon ...</h1>
      </main>
      <NavHome />

    </div>
  )
}
