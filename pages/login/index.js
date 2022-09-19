import Head from 'next/head'
import Link from 'next/link'

import axios from "axios";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";

import Inputs from '../../components/atoms/inputs'

// const getBody = promisify(bodyParser.urlencoded());

// export async function getServerSideProps(context){
//   const api = process.env.API_DOMAIN;
//   const login = await fetch( `${api}/users/login` ).then((response) => response.json());
//   console.log(login);
  
//   return {
//     props: {
//       login,
//     }
//   }
// };

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  return { props: { api }}
};

export default function Login(props) {
	const router = useRouter();
  const {isLogin} = useSelector(state => state.auth);
  useEffect(() => { if (isLogin) {router.push("/")}}, [])

  const dispatch = useDispatch();
  
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
  const [IsError, setIsError] = useState(false);
	const [ErrorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const api = props.api;
  // console.log(api);
  const handleLogin = () => {
    setIsLoading(true);
    axios.post(`${api}/users/login`, {
      email: Email,
      password: Password,
    })
      .then((res) => {
        if (res.data.isValid){
          console.log(res)
          setIsError(false);
          dispatch({
            type: Type.SET_ISLOGIN,
            payload: true
          })
          dispatch({
            type: Type.SET_TOKEN,
            payload: res?.data?.token
          })
          router.replace("/")
        } else {
          setIsError(true);
          setErrorMsg(res?.data.message);
        }
        // JSON.parse(localStorage.setItem("token", res?.data.show.rows));
        // localStorage.setItem("token", res?.data?.token);
        // localStorage.setItem("name", res?.data?.name);
      })
      .catch((e) => {
        setIsError(true);
        setErrorMsg(e.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mobile">
      <Head>
        <title>Bitri Recipe</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="auth">
        <div className="container">

          {/* IMAGE AVATAR */}
          <div className="row">
            <div className="col"/>
            <div className="col-6">
              <div>
                <i className="bi bi-person defAva"></i>
              </div>
            </div>
            <div className="col" />
          </div>

          {/* FORM LOGIN */}
          <div className="text-center main-text-cl p3">Welcome !</div>
          <div className="text-center text-1-cl p5 mb-5">Log in your exiting account.</div>

          {IsError 
            ? <div className='alert alert-danger text-center py-1 mx-5'>{ErrorMsg}</div>
            : null
          } 
          <form onSubmit={(e) => e.preventDefault()}>
            <Inputs
              id="email"
              icon="bi-person"
              type="email"
              placeholder="examplexxx@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
            <Inputs
              id="password"
              icon="bi-lock"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
              autocomplete="current-password"
            />
            
            <div className="text-end mb-4">
              <Link href="login/forgot-password">
                <a className="aStyle text-2-cl p4">Forgot Password ?</a>
              </Link>
            </div>

            <div className="d-grid gap-2 mb-4">
              <button type="submit" className="button" onClick={handleLogin}>
                {isLoading ? "Loading..." : "Log in"}
              </button>
            </div>
          </form>

          <div className="text-center text-2-cl p4">Don&apos;t have account? 
            <Link href="register">
              <a className="main-text-cl aStyle"> Sign Up</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}