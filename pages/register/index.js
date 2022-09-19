import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import axios from "axios";

import Inputs from '../../components/atoms/inputs'

import {useEffect} from "react";

export default function Register() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  
  const [IsError, setIsError] = useState(false);
	const [ErrorMsg, setErrorMsg] = useState('');

	const [Name, setName] = useState('');
	const [Email, setEmail] = useState('');
	const [PhoneNumber, setPhoneNumber] = useState('');
	const [Password1, setPassword1] = useState('');
	const [Password2, setPassword2] = useState('');

  const api = process.env.API_DOMAIN;
  const handleRegister = async () => {
    // setIsLoading(true);

    axios.post(`${api}/users/add`, {
      name: Name,
      email: Email,
      phone_number: PhoneNumber,
      password: Password1,
      password2: Password2,
    })
    .then((res) => {
      setIsError(false);

    // SET TOKEN
      // JSON.parse(localStorage.setItem("token", res?.data.show.rows));
      window.location.href = "/login";
      // <Navigate to="/" />
    })
    .catch((e) => {
      console.log(e);
      setIsError(true);
      setErrorMsg(e.response.data)
    });
  };

  return (
    <div className="mobile" >
      <Head>
        <title>Register</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Create account to bitri recipe" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="main auth">
        <div className="container">
          <div className='row'>
            <div className='col-2'>
              <div id="backarrow">
                <Link href="/login">
                  <i className="bi bi-arrow-left-short"></i>
                </Link>
              </div>
            <div className='col-10'/>
            <br/><br/>
          </div>
          </div>
              <div className="text-center main-text-cl p2">Let&apos;s Get Started</div>
              <div className="text-center text-1-cl p5 pb-4">Create new account to access all features.</div>

              {IsError 
                ? <div className='alert alert-danger text-center py-1 mx-5'>{ErrorMsg}</div>
                : null
              } 
              <form method="post" onSubmit={(e) => e.preventDefault()}>
                <Inputs
                  icon="bi-person"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                />
                <Inputs
                  icon="bi-envelope"
                  type="mail"
                  placeholder="E-Mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
                <Inputs
                  icon="bi-telephone"
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={PhoneNumber}
                />
                <Inputs
                  icon="bi-lock"
                  type="password"
                  placeholder="Create New Password"
                  onChange={(e) => setPassword1(e.target.value)}
                  value={Password1}
                  autocomplete="current-password"
                />
                <Inputs
                  icon="bi-unlock"
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={Password2}
                  autocomplete="current-password"
                />
                {/* <input type="text" className="form-control mb-3" id="name" placeholder="Nama" />
                <input type="email" className="form-control mb-3" id="email" placeholder="E-Mail" />
                <input type="number" className="form-control mb-3" id="phone" placeholder="Nomor Telepon" />
                <input type="password" className="form-control mb-3" id="pass1" placeholder="Buat Kata Kunci Baru" />
                <input type="password" className="form-control mb-3" id="pass2" placeholder="Ulangi Kata Kunci Baru" /> */}

                <div className="d-grid gap-2 pt-5 pb-3">
                  <button type="submit" className="button" onClick={handleRegister}>Create</button>
                </div>
              </form>

              <div className="text-center text-2-cl p4">Already have account? 
                <Link href="login">
                  <a className="main-text-cl aStyle"> Log in Here</a>
                </Link>
              </div>


        </div>
      </main>

    </div>
  )
}
