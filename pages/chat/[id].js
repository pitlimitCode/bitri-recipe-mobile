// import Link from 'next/link'
// import Image from 'next/image'

import {useEffect} from "react";

export default function ChatId() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="mobile" >
      <main className="main bg-light">
        <h1>chat to user by its id</h1>





      </main>
    </div>
  )
}
