import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  return { props: { api } }
};

export default function ProfilSelfRecipe(props) {
  const api = props.api;
  // console.log(props);

  // PROFILE DATA USER BY ID
	const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/users/myrecipes`)
      .then((res) => {
        setDatas(res?.data.result.data);
        // console.log("Console IN useEffect:", res?.data.result.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  // console.log("Console OUT OF useEffect:", datas);

  return(
    <div className="mobile" >
      <main>
        <div className="container">
          <div className='row pb-4 pt-5'> 
            <div className='d-flex align-items-center'>
              <Link href={`/profile`}>
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

          {datas.map((data) => (
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
                      src={data.image}
                      alt="image"
                      width={75}
                      height={75}
                      style={{ borderRadius: "16px"}}
                    />
                  </div>
                  <div className="col-9 mt-1">
                    <div className='p4 bold pb-1'>{data.recipe_name}</div>
                    {/* <div className='p4'>Spicy, Salted, Tasty</div>
                    <div className="d-flex gap-1 align-items-center p4">
                      <i className='bi bi-star-fill text-warning'></i>
                      <span>4.7</span>
                    </div> */}
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
