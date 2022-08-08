
import Image from 'next/image'

export async function getServerSideProps(context){
    // console.log(context.sendid.id);

    const api = process.env.API_DOMAIN;

    // const apiid = 'http://localhost:8000/comments/new?id_recipe=';
    // const params = context.sendid.id;
    // const limitapi = '&limit=';
    // const limit = '10';
    // console.log( `${apiid}${params}${limitapi}${limit}` )
  
    // const commenOnRecipe = await fetch( `${apiid}${params}${limitapi}${limit}` )
    //   .then((response) => response.json());
    return {
      props: {
        // commenOnRecipe,
      }
    }
};
  
export default function commentsinarecipe(props) {

    console.log(props);
    // BELUM ADA DUMMY COMMENTS DATA IN TABLE
    
  return (
    <>
    {/* <div className='row my-4'>
      <div className='col-2'>
        <Image 
          src='http://localhost:8000/images/food_images/foodImage_4.jpeg'
          width={50}
          height={50}
          style={{borderRadius: "50%"}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Comment by user 3</div>
        <div className='p4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime</div>
      </div>
    </div> */}
    <div className='row my-4'>
      <div className='col-2'>
        <Image 
          src='http://localhost:8000/images/food_images/foodImage_3.jpeg'
          width={50}
          height={50}
          style={{borderRadius: "50%"}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Harcode Dummy User 2</div>
        <div className='p4'>consectetur adipisicing elit. Maxime</div>
      </div>
    </div>
    <div className='row my-4'>
      <div className='col-2'>
        <Image 
          src='http://localhost:8000/images/food_images/foodImage_11.jpeg'
          width={50}
          height={50}
          style={{borderRadius: "50%"}}
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
