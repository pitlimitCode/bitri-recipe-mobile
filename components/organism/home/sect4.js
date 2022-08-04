import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import poplogo1 from '../../../public/default_image/reclogo01.png'

export async function getServerSideProps(context){
  const request = await fetch(
    "http://localhost:8000/recipes/show/new"
  ).then((response) => response.json());
  return {
    props: { request }
  }
};


function Home4(props) {
  console.log(props); 
  return (
    <>
      {/* <div>{{props}} </div> */}
      <div className="p3 bold mb-3">Semua Resep Populer</div>
                
      <div className="card mb-3" style={{width:"100%"}}>
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
      </div>


      {[...new Array(3)].map((item, index) => (
        <div
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
          key={index}
        >
          <div className="row">
            <div className="col-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lotek_Indonesian_food.jpg/1507px-Lotek_Indonesian_food.jpg"
                width="80px"
                height="80px"
                style={{ borderRadius: "16px", objectFit: "cover" }}
                alt="image"
              />
            </div>
            <div className="col-10">
              <div style={{ marginLeft: "20px" }}>
                <h6>Lotek mba ni'mah</h6>
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

export default Home4;