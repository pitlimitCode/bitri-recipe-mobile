// import Link from 'next/link'
// import Image from 'next/image'
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Link from 'next/link'

export default function Home3(props) {
  const datas = props.data3.slice(0, 10);
  const urlIdRecipe = 'http://localhost:3000/detail/'
  const urlApi = 'http://localhost:8000/'
  // console.log("Console Home3 data:", datas); 

  // src="http://localhost:8000/images/food_images/foodImage_12.jpeg"
  return (
    <>

      <div className="p3 bold mb-3">New Recipes</div>

      {/* <div className="col-3" key={index}>
        <div className="d-flex justify-center">
          <img
            src={item?.image}
            alt="icon"
            width="70px"
            height="70px"
          />
        </div>
        <p className="text-center">{item?.name}</p>
      </div> */}

      <Swiper
        slidesPerView={2.4}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {datas?.map((data) => (
          <SwiperSlide className="d-flex justify-center" key={data.id} >

            <Link href={`${urlIdRecipe}${data.id}`}>
              <div className="card pic100 mb-1"
                style={{
                  border: "none",
                  "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                }}
              >
                <img 
                  src={`${urlApi}${data.image}`}
                  alt="search pic"
                  width="200px"
                  height="200px"
                  />
                <div className="bottom-left-text p4">{data.name}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}