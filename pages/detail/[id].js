import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Link from 'next/link'
import Comments from '../../components/organism/commentsinarecipe'

export async function getServerSideProps(context){
  const api = 'http://localhost:8000/recipes/show/id?id=';
  const params = context.query.id;

  const datauser = await fetch( `${api}${params}` )
    .then((response) => response.json())
    .catch(() => null);

  if(!datauser){
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      datauser,
    }
  }
};

// params id not number? invalid url
export default function DetailRecipe(props) {
  const data = props.datauser[0];
  const imagerecipe = `http://localhost:8000/${data.image}`;
  // console.log(data);
  // console.log(api);

  const { query } = useRouter();
  
  return (
    <div className="mobile" >
      <Head>
        <title>The Recipe</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="detail recipe for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      
      <div id='imagesection'>
        <img src={imagerecipe} id="imagedetailrecipe" />
      </div>
      
      <div id='descsection' className='bg-white'>
        <div className='container'>

          {/* BACK ICON, SAVED, AND LIKED */}
          <div className="row pt-3 pb-4">
            <div className='d-flex align-items-center'>
              <div className='col-2'>
                <div id="backarrow2">
                  <Link href="javascript:history.back()">
                    <i className="bi bi-chevron-left"></i>
                  </Link>
                </div>
              </div>
              <div className="col-6" />

              <div className="col-4">
                <div className='row'>
                  <div className='col-6'>
                    <i className="bi bi-bookmark likensave"></i>
                    {/* <i className="bi bi-bookmark-check" id="likensaveY"></i> */}
                  </div>
                  <div className='col-6'>
                    <i className="bi bi-hand-thumbs-up likensave"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NAME RECIPE AND ITS USERS */}
          <div className='text-center bold detailYlBg'>
            <div className='p3 main-text-cl'> {data.name} </div>
            <div className='p4'>by {data.username} </div>
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
            < Comments sendid={query} />

          </div>
        </div>
      </div>
    </div>
  )
}
