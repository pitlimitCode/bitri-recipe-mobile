import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
import Link from 'next/link'


export default function Home4(props) {
  const datas = props.data4;
  const urlIdRecipe = 'http://localhost:3000/detail/'
  const urlApi = 'http://localhost:8000/'
  // console.log("Console Home4 data:", datas); 
  // images/food_images/foodImage_11.jpeg
  return (
    <>
      <div className="p3 bold mb-3">Popular Recipes</div>
                
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
            <div className="col-2">
              <img
                src={`${urlApi}${data.image_recipe}`}
                width="80px"
                height="80px"
                style={{ borderRadius: "16px", objectFit: "cover", marginTop: "7px" }}
                alt="image"
              />
            </div>
            <div className="col-1" />
            <div className="col-9">
              <div style={{ marginLeft: "20px" }}>
                <h6 className='p4 bold'>{data.name_recipe}</h6>
                <p className='p4'>Spicy, Salted, Tasty</p>
                <div className="d-flex gap-1 align-items-center p4">
                  <i className='bi bi-star-fill text-warning'></i>
                  <span>4.7</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
      ))}
      
    </>
  )
}