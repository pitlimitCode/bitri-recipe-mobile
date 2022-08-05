// import Link from 'next/link'
// import Image from 'next/image'
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

export default function Home3(props) {
  const datas = props.data3;
  // console.log("Console Home3 data:", datas); 

  // src="http://localhost:8000/images/food_images/foodImage_12.jpeg"
  return (
    <>

      <div className="p3 bold mb-3">Resep Terbaru</div>

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
        slidesPerView={2.3}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {datas?.map((data) => (
          <SwiperSlide className="d-flex justify-center" key={data.id} >
            <div className="card pic100">
                <img 
                  src="http://localhost:8000/images/food_images/foodImage_11.jpeg"
                  // className="picImagePages" 
                  alt="search pic"
                  width="200px"
                  height="200px"
                />
              <div className="bottom-left-text">{data.name}</div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}