import axios from "axios";
import React, { useState } from 'react';

import Inputs from '../components/atoms/inputs'
import NavHome from '../components/organism/navHome'

import { useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  return { props: { api } }
};

export default function AddRecipe(props) {
  const api = props.api;

	const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     // navigate("/login");
  //     window.location.href = "/login";
  //   }
  // }, []);
  // console.log(props);

  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
	const [Title, setTitle] = useState('');
	const [Ingre, setIngre] = useState('');
	const [Image, setImage] = useState('');
  
  const formData = new FormData();
  formData.append('name', Title);
  formData.append('ingredients', Ingre);
  formData.append('image', Image);

  const handleNewRecipe = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    await axios
      .post(api + "/recipes/add", formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.message == 'jwt expired'){
          // console.log('expire woi');
          setIsError(true);
          setErrorMsg("Your out of Time autentification, please Logout then Login again");
        } else {
          if (res.data.isValid){
            router.push("/")
            // navigate("/");
          } else {
            setIsError(true);
            setErrorMsg(res?.data.message);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setErrorMsg(err?.response?.data);
      // })
      // .finally(() => {
        // setIsLoading(false);
      });
  };

  return (
    <div className="mobile" >
      <main className='auth'>
        <div className="container">
          <div className='row mt-5'>
            <div className='col-2'>
            <div className='col-10'/>
              <br/><br/>
            </div>
          </div>
          <div className="text-center main-text-cl p2 mb-5">Add Your Recipe</div>

          {/* Alert error message */}
          {isError 
            ? <div className='text-center alert alert-danger'>{errorMsg}</div>
            : null
          } 

          <form action="/" method="post">
            <Inputs
              icon="bi-book"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
            />
            <textarea
              style={{
                border: "none",
                "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
              }}
              type="textarea"
              placeholder="Ingredients and Steps"
              rows="7"
              className="form-control text-1-cl bg-white mt-3"
              // value={value}
              onChange={(e) => setIngre(e.target.value)}
              value={Ingre}
            />
            {/* NEED POP OUT OF IMAGE AND VIDEO */}
            <Inputs
              icon="bi-image"
              type="file"
              // placeholder="Add Image"
              onChange={(e) => setImage(e.target.files[0])}
              // value={Image}
            />
            {/* <Inputs
              icon="bi-camera-video"
              type="email"
              placeholder="Add Video"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            /> */}
            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className="d-grid gap-2 pt-5 pb-3">
                  <button 
                    type="submit"
                    className="button px-5"
                    onClick={handleNewRecipe}
                  >
                    POST
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <NavHome />
    </div>
  )
}
