import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import poplogo1 from '../../../public/default_image/reclogo01.png'


export default function Home4(props) {
  const datas = props.data;
  console.log(datas); 
  return (
    <>
      {/* <div>{{props}} </div> */}
      <div className="p3 bold mb-3">Semua Resep Populer</div>
                
      {/* <div className="card mb-3" style={{width:"100%"}}>
        <div className="row">
          <div className="col-4">
            <Image src={poplogo1} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body">
              <p className="card-text">This is a wider .</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="mb-3 bg-white rounded">
          Flex item 1
        </div>
        <div className="mb-3 bg-white rounded">
          Flex item 2
        </div>
        <div className="mb-3 bg-white rounded">
          Flex item 3
        </div>
      </div> */}


          {/* {listPhoto?.map((item) => (
            <Col lg={4}>
              <CardImage image={item?.url} title={item?.title} />
            </Col>
          ))} */}

          {/* {datas.map(data => (
              <div>{data.name}</div>
          ))} */}

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
              <img
                src="http://localhost:8000/images/food_images/foodImage_12.jpeg"
                // src={data.image_recipe}
                width="80px"
                height="80px"
                style={{ borderRadius: "16px", objectFit: "cover" }}
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

// export async function getServerSideProps(context){
//   const request = await fetch(
//     "http://localhost:8000/recipes/show/new"
//   ).then((response) => response.json());
//   return {
//     props: { request }
//   }
// };