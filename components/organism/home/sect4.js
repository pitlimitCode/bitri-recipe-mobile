import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'


export default function Home4(props) {
  const datas = props.data4;
  // console.log("Console Home4 data:", datas); 
  // images/food_images/foodImage_11.jpeg
  return (
    <>
      <div className="p3 bold mb-3">Semua Resep Populer</div>
                
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
            <div className="col-2">
              


              {/* TIDAK BISA PAKAI NEXT/IMAGE */} {/* CARA GABUNGKAN 2 VARIABEL KEDALAM 1 SRC */}

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
            <div className="col-10">
              <div style={{ marginLeft: "20px" }}>
                <h6>{data.name_recipe}</h6>
                <p>Spicy, Salted, Tasty</p>
                <div className="d-flex gap-1 align-items-center">
                  {/* <img
                    src="/images/star.png"
                    alt="star"
                    height="12px"
                  /> */}
                  <span>4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </>
  )
}