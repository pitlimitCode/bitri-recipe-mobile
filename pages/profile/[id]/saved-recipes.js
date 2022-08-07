// import Image from 'next/image'
import Link from 'next/link'

export default function ProfileSavedRecipe() {
  return (
    <div className="mobile" >
      <main>
        <div className="container">

          <div className='row pb-4 pt-5'> 
            <div className='d-flex align-items-center'>
              <div className='col-2'>
                <div id="backarrow2">
                  <Link href="javascript:history.back()">
                    <i className="bi bi-chevron-left"></i>
                  </Link>
                </div>
              </div>
              <div className='col-8'>
                <div className='text-center p3 bold main-text-cl'>
                  Saved Recipes
                </div>
              </div>
              <div className='col-2' />
            </div>
          </div>

            {/* {datas?.map((data) => (
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
              > */}
              {/* <ul>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul> */}
                {/* <div className="row">
                  <div className="col-2">
                    <img
                      src="http://localhost:8000/images/food_images/foodImage_11.jpeg"
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

                  <div className="col-4" />

                </div>
              </div>
            ))} */}

        </div>
      </main>

    </div>
  )
}
