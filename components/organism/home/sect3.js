// import Link from 'next/link'
import Image from 'next/image'
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Link from 'next/link';

export default function Home3(props) {
  // console.log(props);
  const datas = props.data3.slice(0, 10);
  
  const api = props.api;
  return (
    <>
      <div className="p3 bold mb-3">New Recipes</div>
      <Swiper
        slidesPerView={2.4}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {datas?.map((data) => (
          <SwiperSlide className="d-flex justify-center" key={data.id} >

            <Link href={`/detail/${data.id}`}>
              <div className="card pic100 mb-1"
                style={{
                  border: "none",
                  "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                }}
              >
                {/* <Image 
                  style={{ borderRadius: "16px"}}
                  src={`${api}/${data.image}`}
                  width={150}
                  height={150}
                  alt="image"
                />
                <div className="bottom-left-text p4">{data.name}</div> */}
                <Image 
                  style={{ borderRadius: "16px", position:"relative"}}
                  src={`${api}/${data.image}`}
                  width={150}
                  height={150}
                  alt="image"
                />
                <div className="bottom-left-text p4" id="childNewRecipe">{data.name}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}