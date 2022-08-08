import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  const params = context.query.id;

  const myrecipe = await fetch(`${api}users/show/myrecipe?id=${params}`)
    .then((response) => response.json())
    .catch(() => null);

  if(!myrecipe){
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      myrecipe,
      params,
      api,
    }
  }
};

export default function ProfilSelfRecipe(props) {
  const datas = props?.myrecipe?.data;
  // console.log(props.api);

  const urlIdRecipe = 'http://localhost:3000/detail/'
  return(
    <div className="mobile" >
      
      <main>
        <div className="container">

          <div className='row pb-4 pt-5'> 
            <div className='d-flex align-items-center'>
              <Link href={`http://localhost:3000/profile/${props.params}`}>
                <div className='col-2' id="backarrow2">
                  <i className="bi bi-chevron-left"></i>
                </div>
              </Link>
              <div className='col-8'>
                <div className='text-center p3 bold main-text-cl'>
                  My Recipes
                </div>
              </div>
              <div className='col-2' />
            </div>
          </div>

            {datas?.map((data) => (
              <div
                key={data.id_recipe}
                className="card"
                style={{
                  borderRadius: "15px",
                  padding: "10px",
                  border: "none",
                  "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
              <Link href={`${urlIdRecipe}${data.id_recipe}`}>
                <div className="row">
                  <div className="col-3 mt-2">
                    <Image
                      src={`${props.api}${data.image}`}
                      alt="image"
                      width={75}
                      height={75}
                      style={{ borderRadius: "16px"}}
                    />
                  </div>
                  <div className="col-9 mt-1">
                    <div className='p4 bold pb-1'>{data.recipe_name}</div>
                    <div className='p4'>Spicy, Salted, Tasty</div>
                    <div className="d-flex gap-1 align-items-center p4">
                      <i className='bi bi-star-fill text-warning'></i>
                      <span>4.7</span>
                    </div>
                  </div>
                </div>
          </Link>
              </div>
            ))}

        </div>
      </main>

    </div>
  )
}
