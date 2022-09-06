import React, { useState } from 'react';
import Link from 'next/link'

export async function getServerSideProps(context){
  // const api = process.env.API_DOMAIN;
  const params = context.query.id;

  // const myrecipe = await fetch(`${api}/users/show/myrecipe?id=${params}`)
  //   .then((response) => response.json())
  //   .catch(() => null);

  // if(!myrecipe){
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   }
  // }
  
  return {
    props: {
      // myrecipe,
      params,
      // api,
    }
  }
};

export default function EditProfile(props) {
	// const [Name, setName] = useState('');
	// const [Email, setEmail] = useState('');
	// const [PhoneNumber, setPhoneNumber] = useState('');
	// const [Password1, setPassword1] = useState('');
	// const [Password2, setPassword2] = useState('');
  return (
    <div className="mobile" >
      
      <main>
        <div className="container">

          <div className='row pb-4 pt-5'> 
            <div className='d-flex align-items-center'>
              <Link href={`${process.env.CLIENT_DOMAIN}/profile/${props.params}`}>
                <div className='col-2' id="backarrow2">
                  <i className="bi bi-chevron-left"></i>
                </div>
              </Link>
              <div className='col-8'>
                <div className='text-center p3 bold main-text-cl'>
                  Edit Profile
                </div>
              </div>
              <div className='col-2' />
            </div>
          </div>

          <div className="row pb-2 pt-2"> 
              <div className='p3' style={{borderBottom:"1px solid #c5c5c5", paddingBottom:"0.5rem"}}>Change Profile Picture</div>
          </div>
          <div className="row pb-2"> 
              <div className='p3' style={{borderBottom:"1px solid #c5c5c5", paddingBottom:"0.5rem"}}>Change Name</div>
          </div>
          <div className="row pb-2"> 
              <div className='p3' style={{borderBottom:"1px solid #c5c5c5", paddingBottom:"0.5rem"}}>Change Password</div>
          </div>



        </div>
      </main>

    </div>
  )
}
