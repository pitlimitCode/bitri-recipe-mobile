import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import {useRouter} from "next/router";
import axios from "axios";
import React, { useState, useEffect } from 'react';

// import styles from '../styles/Home.module.css'
import Comments from '../../components/organism/commentsinarecipe'

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  const params = context.query.id;

  const dataRecipe = await fetch( `${api}/recipes/id/${params}` )
    .then((response) => response.json())
    .catch(() => null);

  const commenOnRecipe = await fetch(`${api}/comments/new?id_recipe=${params}&sort=desc`)
    .then((response) => response.json());
  

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
      commenOnRecipe,
    }
  }
};

export default function DetailRecipe(props) {
  const api = props?.api;
  const data = props?.dataRecipe?.data[0]
  const comments = props?.commenOnRecipe?.result?.data;
  // console.log(props.dataRecipe);

  // AXIOS USER - GET ID
  const [IdUser, setIdUser] = useState("");
  useEffect(() => {
    axios.get(`${api}/users/getid`)
      .then( (data) => {
        // console.log(data.data);
        setIdUser(data?.data?.id)
      })
      .catch((e) => console.log(e.message));
  }, [api])

  // console.log('data.id_user = ', data.id_user, '. IdUser = ', IdUser) 

  return (
    <div className="mobile" >
      <Head>
        <title>The Recipe</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="detail recipe for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      
      {/* <div id='imagesection'>
        <Image src={`${data.image}`} id="imagedetailrecipe" alt="detailrecipe" />
      </div> */}

      {/* <div id='imagesection'> */}
        <Image 
          src={`${data.image}`} 
          alt="detailrecipe" 
          // width= "420px"
          // height= "400%"
          width= {420}
          height= {300}
        />
      {/* </div> */}
      
      <div id='descsection' className='bg-white'>
        <div className='container'>

          {/* BACK ICON, SAVED, AND LIKED */}
          <div className="row pt-3 pb-4">
            <div className='d-flex align-items-center'>
              <Link href="javascript:history.back()">
                <div className='col-2' id="backarrow2">
                  <i className="bi bi-chevron-left"></i>
                </div>
              </Link>
              <div className="col-6" />

              <div className="col-4">
                <div className='row'>
                  <div className='col-6'>
                    <i className="bi bi-bookmark likensave"></i>
                    {/* <i className="bi bi-bookmark-check" id="likensaveY"></i> */}
                  </div>
                  <div className='col-3'>
                    <i className="bi bi-hand-thumbs-up likensave"></i>
                    {/* <div className='p3'>{data.total_likes}</div> */}
                  </div>
                  <div className='col-1 p5 main-text-cl bold'>
                    {data.total_likes}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EDIT RECIPE */}
          {/* <div className="text-right mt-4">
            <Link href={`edit/${data.id}`}>
              <a className="btn btn-green">
                TOMBOL EDIT !!!
              </a>
            </Link>
          </div> */}
          
            {/* <Link to={`/edit/${data.id}`}> */}
          {(data.id_user == IdUser) 
          ? (
              <div className='row'>
                <div className='d-flex justify-content-end'>
                  <div className="d-grid gap-2 pt-3 pb-1">
                    <Link href={`edit/${data.id}`}>
                      <a className="btn btn-green p4 pb-1">
                        EDIT / DELETE ?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          ) : ( null ) }
            {/* </Link> */}
          
          {/* <button className='right' style={{textAlign:'right', backgroundColor:'yellowgreen'}}>hii</button> */}

          {/* NAME RECIPE AND ITS USERS */}
          <div className='text-center detailYlBg'>
            <div className='p3 main-text-cl bold'> {data.name} </div>
            <div className='p4'>
              by <span className='main-text-cl bold'>{data.username}</span> 
            </div>
          </div>
          {/* CONTENT OF INGREDIENTS, STEPS, AND VIDEO STEPS */}
          <div className='my-5'>
            <div className='p3'>Ingredients</div>
            <div className='mb-4 p4 detailYlBg'>{data.ingredients}</div>
            <div className='p3'>Steps</div>
            <div className='mb-4 p4 detailYlBg'>{data.step}</div>
            {/* <div className='p3'>Vidio Steps</div>
              <div className='mb-4 p4'>lorem ipsum</div> */}
          </div>

          {/* USER COMMENT TO THIS RECIPE*/}
          <form action="/" method="post" className='mb-5'>
            <textarea type="text" className="form-control mb-3" id="bgtaxtarea" placeholder="Comment :" rows="7"/>
            <div className="d-grid gap-2">
              <button type="submit" className="button">Post Comment</button>
            </div>
          </form>

          {/* ALL COMMENT IN THIS RECIPE */}
          <div className='pb-5'>
            <div className='p3'>Comment</div>
            <Comments comments={comments} api={api} />
          </div>
          
        </div>
      </div>
    </div>
  )
}
