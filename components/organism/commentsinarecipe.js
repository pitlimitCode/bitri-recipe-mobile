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
              src={`${data.avatar}`}
              width={50}
              height={50}
              style={{borderRadius: "50%"}}
              alt="avatar"
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
          src='https://res.cloudinary.com/dy3yw6bod/image/upload/v1662711416/bitri_recipe/recipe/vsfl2jqubqz6dialkn5t.jpg'
          width={50}
          height={50}
          style={{borderRadius: "50%"}}
          alt="avatar dummy"
        />
      </div>
      <div className='col-10'>
        <div className='bold p4'>Hardcode User Dummy</div>
        <div className='p4'>Commenter dummy, Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
    </>
  )
}
