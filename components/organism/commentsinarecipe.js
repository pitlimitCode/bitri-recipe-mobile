import Link from 'next/link'
// import {useRouter} from "next/router";

export async function getServerSideProps(context){
    // console.log(context.sendid.id);

    const apiid = 'http://localhost:8000/comments/new?id_recipe=';
    const params = context.sendid.id;
    const limitapi = '&limit=';
    const limit = '10';
    // console.log( `${apiid}${params}${limitapi}${limit}` )
  
    const datasearch = await fetch( `${apiid}${params}${limitapi}${limit}` )
      .then((response) => response.json());
    return {
      props: {
        datasearch,
      }
    }
};
  
export default function commentsinarecipe(props) {

    // console.log(props);
    // BELUM ADA DUMMY COMMENTS DATA IN TABLE
    
  return (
    <>
    {/* <div className='row my-4'>
      <div className='col-2'>
        <img 
          src='http://localhost:8000/images/food_images/foodImage_4.jpeg'
          style={{borderRadius: "50%", width:'3rem', height:'3rem'}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Comment by user 3</div>
        <div className='p4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime</div>
      </div>
    </div> */}
    <div className='row my-4'>
      <div className='col-2'>
        <img 
          src='http://localhost:8000/images/food_images/foodImage_3.jpeg'
          style={{borderRadius: "50%", width:'3rem', height:'3rem'}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Harcode Dummy User 2</div>
        <div className='p4'>consectetur adipisicing elit. Maxime</div>
      </div>
    </div>
    <div className='row my-4'>
      <div className='col-2'>
        <img 
          src='http://localhost:8000/images/food_images/foodImage_11.jpeg'
          style={{borderRadius: "50%", width:'3rem', height:'3rem'}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Harcode Dummy User 1</div>
        <div className='p4'>Lorem ipsum dolor sit amet</div>
      </div>
    </div>
    </>
  )
}
