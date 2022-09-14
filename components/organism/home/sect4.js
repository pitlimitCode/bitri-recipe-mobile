import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'


export default function Home4(props) {
  const datas = props.data4;
  // console.log(datas);
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
          <Link href={`/detail/${data.id_recipe}`}>
            <div className="row">
              <div className="col-3 mt-2">
                <Image
                  src={`${data.image_recipe}`}
                  alt="image"
                  width={75}
                  height={75}
                  style={{ borderRadius: "16px"}}
                />
              </div>
              <div className="col-9 mt-1">
                <div className='p4 bold pb-1'>{data.name_recipe}</div>
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
      
    </>
  )
}