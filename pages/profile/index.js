import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";

import NavHome from '../../components/organism/navHome'

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  return { props: { api } }
};

export default function Profile(props) {
	const router = useRouter();
  const {isLogin} = useSelector(state => state.auth);
  useEffect(() => { if (!isLogin) {router.push("/login")}})

  const dispatch = useDispatch();  
  const api = props.api;

  // PROFILE DATA USER BY ID
	const [Name, setName] = useState("");
  const [Avatar, setAvatar] = useState("");
  useEffect(() => {
    axios
      .get(`{api}/users/getid`)
      .then((res) => {
        axios
          .get(api + "/users/id/" + res.data.id)
          .then((profile) => {
            setName(profile.data.data.name);
            setAvatar(profile.data.data.avatar);
          })
          .catch((e) => console.log(e.message));
      })
      .catch((err) => console.log(err.message));
  }, []);
  
  // LOGOUT AND REMOVE LOCAL STORAGE BROWSER
  const handleLogout = () => {
    dispatch({
      type: Type.SET_ISLOGIN,
      payload: false
    }),
    dispatch({
      type: Type.SET_TOKEN,
      payload: ''
    }),
    router.push("/login")
  };
  
  return (
    <div className="mobile" >  

      <div id="profilepage" >
        <div className="row justify-content-center text-center">
          <div className="col-3">
            <Image 
              src={Avatar} 
              alt="avatar"
              width={90}
              height={90}
              id="profilpic" 
            />
          </div>
          <div className="p2 bold text-white pt-3">{Name}</div>
        </div>
      </div>


      <div className="container">
        <div id="profileopt">

          {/* <Link href="profile/edit">
            <div className="row pointercursor d-flex align-items-center pt-2 pb-3">
                <div className="col-2">
                  <i className="bi bi-person main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Edit Profie
                </div>
                <div className="col-2">
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link> */}
            
          <Link href="/profile/my-recipes">
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-award main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  My Recipe
                </div>
                <div className="col-2">
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>

          {/* <Link href="profile/saved-recipes">
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-bookmark main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Saved Recipe
                </div>
                <div className="col-2">
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link> */}

          <Link href="profile/liked-recipes">
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-hand-thumbs-up main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Liked Recipe
                </div>
                <div className="col-2">
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>

          <div className="row pointercursor d-flex align-items-center pt-4">
              <div className="col-2" onClick={handleLogout}>
                <i className="bi bi-power text-danger p2"></i>
              </div>
              <div className="col-8 p3 text-danger" onClick={handleLogout}>
                Log Out
              </div>
              <div className="col-2" />
          </div>

        </div>
      </div>

      <NavHome />
    </div>
  )
}
