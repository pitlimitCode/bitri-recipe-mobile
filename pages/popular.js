import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps(context){
  const popular = await fetch( "http://localhost:8000/recipes/show/new" ).then((response) => response.json());
  return {
    props: {
      popular,
    }
  }
};

export default function PopularRecipe(props) {
  const datas = props?.popular?.data;
  console.log(datas);
  const urlIdRecipe = 'http://localhost:3000/detail/'
  const urlApi = 'http://localhost:8000/'
  return (
    <div className="mobile">
      <Head>
        <title>Popular Menu</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="All popular menu recipes by category" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main>
        <div className="container">

          <div className='row pb-4 pt-5'> 
          <div className='d-flex align-items-center'>
            <div className='col-2'>
              <div id="backarrow2">
                <Link href="/">
                  <i className="bi bi-chevron-left"></i>
                </Link>
              </div>
            </div>
            <div className='col-8'>
              <div className='text-center p3 bold main-text-cl'>
                Popular Menu
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
              {/* <ul>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul> */}
        <Link href={`${urlIdRecipe}${data.id_recipe}`}>
                <div className="row">
                  <div className="col-2">
                    <img
                      src={`${urlApi}${data.image_recipe}`}
                      // src="/images/food_images/foodImage_11.jpeg"
                      // src={data.image_recipe}
                      width="80px"
                      height="80px"
                      style={{ borderRadius: "16px", objectFit: "cover", marginTop: "7px" }}
                      alt="image"
                    />
                  </div>
                  <div className="col-6">
                    <div style={{ marginLeft: "20px" }}>
                      <h6>{data.name_recipe}</h6>
                      <div className='p4'>Spicy, Salted, Tasty</div>
                      <div className="d-flex gap-1 align-items-center">
                        <span className='p4'>4.7</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className='row' style={{marginTop:"30%"}}>

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
                </Link>
              </div>
            ))}

        </div>
      </main>
    </div>
  )
}