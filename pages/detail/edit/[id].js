import axios from "axios";
import { useEffect, useState } from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";
// import styles from '../styles/Home.module.css'
import { useDispatch } from "react-redux";
import * as Type from "../../../redux/auth/type";

import Inputs from '../../../components/atoms/inputs'

export async function getServerSideProps(context){
  const params = context.query.id;
  const api = process.env.API_DOMAIN;
  const dataRecipe = await fetch( `${api}/recipes/id/${params}` )
    .then((response) => response.json())
    .catch(() => null);

  if(!dataRecipe){
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      api,
      dataRecipe,
    }
  }
};

export default function EditRecipe(props) {
  const dispatch = useDispatch();
	const router = useRouter();
  const api = props?.api;
  const data = props?.dataRecipe?.data[0];
  // console.log(data.name);
  
  // CHANGE DETAIL RECIPE USER
  const [isErrorDet, setIsErrorDet] = useState(false);
  const [errorMsgDet, setErrorMsgDet] = useState("");
	const [Title, setTitle] = useState('');
	const [Ingre, setIngre] = useState('');
  // console.log(data.id, Title, Ingre);
  const handleEditRecipe = async (e) => {
    e.preventDefault();
    setIsErrorDet(false)
    // setIsLoading(true);
    await axios
      .patch(api + "/recipes/edit", {
        'id' : data.id,
        'name' : Title,
        'ingredients' : Ingre,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message == 'jwt expired'){
          // console.log('expire woi');
          setIsErrorDet(true)
          setErrorMsgDet("Your out of Time autentification, please Logout then Login again")
          dispatch({
            type: Type.SET_ISLOGIN,
            payload: false
          }),
          dispatch({
            type: Type.SET_TOKEN,
            payload: ''
          })
        } else {
          if (res.data.isValid){
            router.push(`/detail/${data.id}`)
          } else {
            setIsErrorDet(true);
            setErrorMsgDet(res?.data.message);
            // dispatch({
            //   type: Type.SET_ISLOGIN,
            //   payload: false
            // }),
            // dispatch({
            //   type: Type.SET_TOKEN,
            //   payload: ''
            // })
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsErrorDet(true);
        setErrorMsgDet(err?.response?.data);
      // })
      // .finally(() => {
        // setIsLoading(false);
      });
  };

  
  // CHANGE IMAGE RECIPE USER
  const [isErrorImg, setIsErrorImg] = useState(false);
  const [errorMsgImg, setErrorMsgImg] = useState("");
	const [Image, setImage] = useState('');  
  const formData = new FormData();
  formData.append('id_recipe', data.id);
  formData.append('image', Image);
  const handleEditImage = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    await axios
      .patch(api + "/recipes/editimage", formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.message == 'jwt expired'){
          // console.log('expire woi');
          setIsErrorImg(true);
          setErrorMsgImg("Your out of Time autentification, please Logout then Login again");
        } else {
          if (res.data.isValid){
            console.log(res);
            // router.push("detail/")
            // navigate("/");
          } else {
            setIsErrorImg(true);
            setErrorMsgImg(res?.data.message);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsErrorImg(true);
        setErrorMsgImg(err?.response?.data);
      // })
      // .finally(() => {
        // setIsLoading(false);
      });
  };

  // DELETE THIS RECIPE
  const handleDeleteRecipe = () => {
    axios
      .delete(api + `/recipes/delete/${data.id}`)
      .then(() => router.push("/"))
      .catch((err) => { console.log(err?.response?.data) });
  };

  return (
    <div className="mobile" >
      
      <main className='auth'>
        <div className="container">

          <div className='row mb-3 d-flex align-items-center'>
            <Link href="javascript:history.back()">
              <div className='col-2' id="backarrow2">
                <i className="bi bi-chevron-left"></i>
              </div>
            </Link>
          </div>

          <div className="text-center main-text-cl p2 mb-2">Edit Your Recipe</div>
          <div className="text-center main-text-cl p4 mb-5">{data.name}</div>

          {/* EDIT DETAIL RECIPE */}
          {/* Alert error message */}
          {isErrorDet 
            ? <div className='text-center alert alert-danger py-1 px-5'>{errorMsgDet}</div>
            : null
          } 
          {/* Form Edit Detail Recipe */}
          <form>
            <Inputs
              icon="bi-book"
              type="text"
              placeholder={data.name}
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
              // defaultValue={data.name}
            />
            <textarea
              style={{
                border: "none",
                "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
              }}
              type="textarea"
              placeholder={data.ingredients}
              rows="7"
              className="form-control text-1-cl bg-white mt-3"
              // value={value}
              onChange={(e) => setIngre(e.target.value)}
              value={Ingre}
            />
            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className="d-grid gap-2 pt-3 pb-5">
                  <button 
                    type="submit"
                    className="button px-5"
                    onClick={handleEditRecipe}
                  >
                    EDIT RECIPE
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* EDIT IMAGE */} {/* ? LATER, POP OUT FOR EDIT IMAGE */}
          {/* Alert error message */}
          {isErrorImg 
            ? <div className='text-center alert alert-danger py-1 px-5'>{errorMsgImg}</div>
            : null
          } 
          {/* Form Edit Image Recipe */}
          <form>
            <Inputs
              icon="bi-image"
              type="file"
              // placeholder="Add Image"
              onChange={(e) => setImage(e.target.files[0])}
              // value={Image}
            />
            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className="d-grid gap-2 pt-3 pb-5">
                  <button 
                    type="submit"
                    className="button px-5"
                    onClick={handleEditImage}
                  >
                    EDIT IMAGE
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* DELETE RECIPE */}
          <div className='row'>
            <div className='d-flex justify-content-center'>
              <div className="d-grid gap-2 pt-5 pb-2">
                <button 
                  type="submit"
                  className="buttonRed px-5"
                  onClick={handleDeleteRecipe}
                >
                  DELETE RECIPE
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
