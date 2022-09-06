import React, { useState } from 'react';

import Inputs from '../components/atoms/inputs'
import NavHome from '../components/organism/navHome'

import {useEffect} from "react";

// export async function getServerSideProps(context){
//   const api = process.env.API_DOMAIN;
//   const apiAddRecipe = `${api}/recipes/add` //////
//   const params = context.query.id;

//   const addRecipe = await fetch( `${api}/${params}` )
//     .then((response) => response.json());
//   return {
//     props: {
//       datasearch,
//     }
//   }
// };

export default function AddRecipe(props) {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);
  // console.log(props);

	// const [Name, setName] = useState('');
	// const [Email, setEmail] = useState('');
	// const [Password1, setPassword1] = useState('');
	// const [Password2, setPassword2] = useState('');
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

          <form action="/" method="post">
            <Inputs
              icon="bi-book"
              type="text"
              placeholder="Title"
              // onChange={(e) => setName(e.target.value)}
              // value={Name}
            />
            <textarea
              style={{
                border: "none",
                "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
              }}
              type="textarea"
              placeholder="Description"
              rows="7"
              className="form-control text-1-cl bg-white mt-3"
              // value={value}
              // onChange={(e) => setEmail(e.target.value)}
              // value={Email}
            />
            {/* NEED POP OUT OF IMAGE AND VIDEO */}
            <Inputs
              icon="bi-image"
              type="email"
              placeholder="Add Image"
              // onChange={(e) => setEmail(e.target.value)}
              // value={Email}
            />
            <Inputs
              icon="bi-camera-video"
              type="email"
              placeholder="Add Video"
              // onChange={(e) => setEmail(e.target.value)}
              // value={Email}
            />
            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className="d-grid gap-2 pt-5 pb-3">
                  <button type="submit" className="button px-5">POST</button>
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
