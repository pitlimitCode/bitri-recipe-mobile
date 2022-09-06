
import Image from 'next/image'

  
export default function commentsinarecipe(props) {
  // console.log(props);
  const datas = props.comments;
  const api = props.api;
  return (
    <>      
    {datas?.map((data) => (
      <div className='row my-4' key={data.id}>
          <div className='col-2'>
            <Image 
              // src='images/food_images/foodImage_4.jpeg'
              src={`${api}/${data.avatar}`}
              width={50}
              height={50}
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className='col-10'>
            <div className='bold p4'>{data.name}</div>
            <div className='p4'>{data.comment_text}</div>
          </div>
      </div>
    ))}

    <div className='row my-4'>
      <div className='col-2'>
        <Image 
          src='http://localhost:8000/images/food_images/foodImage_11.jpeg'
          width={50}
          height={50}
          style={{borderRadius: "50%"}}
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Harcode User Dummy</div>
        <div className='p4'>Comment dummy, Lorem ipsum dolor sit amet</div>
      </div>
    </div>
    </>
  )
}
