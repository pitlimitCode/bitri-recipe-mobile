import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;

  const popular = await fetch( `${api}/recipes/fivelikes` ).then((response) => response.json());
  return {
    props: {
      popular,
      api,
    }
  }
};

export default function PopularRecipe(props) {
  const datas = props?.popular?.result?.data;
  console.log(datas);
  const urlIdRecipe = `${process.env.CLIENT_DOMAIN}/detail/`
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
              <Link href="/">
                <div className='col-2' id="backarrow2">
                  <i className="bi bi-chevron-left"></i>
                </div>
              </Link>
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
                <div className="row">

                <Link href={`${urlIdRecipe}/${data.id_recipe}`}>
              <div className="col-3 mt-2">
                    <Image
                      src={`${props.api}/${data.image_recipe}`}
                      alt="image"
                      width={75}
                      height={75}
                      style={{ borderRadius: "16px"}}
                    />
                  </div>
                </Link>
                
                <Link href={`${urlIdRecipe}/${data.id_recipe}`}>
                  <div className="col-5 mt-1">
                    <div className='p4 pb-2'>{data.name_recipe}</div>
                    {/* <div className='p4'>Spicy, Salted, Tasty</div> */}
                    <div className="d-flex gap-1 align-items-center p4">
                      <i className='bi bi-star-fill text-warning'></i>
                      <span>4.7</span>
                    </div>
                  </div>
                </Link>

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
              </div>
            ))}

        </div>
      </main>
    </div>
  )
}