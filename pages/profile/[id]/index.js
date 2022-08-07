// import Image from 'next/image'
import NavHome from '../../../components/organism/navHome'
import Link from 'next/link'

export async function getServerSideProps(context){

  // PROFILE DATA USER BY ID
  const api = 'http://localhost:8000/users/show/id?id='
  const params = context.query.id;
  const dataprofile = await fetch(`${api}${params}`)
    .then((response) => response.json())
    .catch(() => null);

  if(!dataprofile){
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      dataprofile,
      params,
    }
  }
};

export default function Profile(props) {

  // (USER) ID PARAMS
  const userId = props.params;
  // console.log(userId);
  const linkEdit = `${userId}/edit`
  const linkMy = `${userId}/my-recipes`
  const linkSaved = `${userId}/saved-recipes`
  const linkLiked = `${userId}/liked-recipes`
  
  // API IMAGE
  const data = props.dataprofile.data[0];
  const urlApi = 'http://localhost:8000/';
  
  // LOGOUT AND REMOVE LOCAL STORAGE BROWSER
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };
  return (
    <div className="mobile" >  

      <div id="profilepage" >
        <div className="row justify-content-center text-center">
          <div className="col-3">
            <img src={`${urlApi}${data.avatar}`} id="profilpic" />
          </div>
          <div className="p2 bold text-white pt-3">{data.name}</div>
        </div>
      </div>


      <div className="container">
        <div id="profileopt">

          <Link href={linkEdit}>
            <div className="row pointercursor d-flex align-items-center pt-2 pb-3">
                <div className="col-2">
                  <i className="bi bi-person main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Edit Profie
                </div>
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>
            
          <Link href={linkMy}>
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-award main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  My Recipe
                </div>
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>

          <Link href={linkSaved}>
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-bookmark main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Saved Recipe
                </div>
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>

          <Link href={linkLiked}>
            <div className="row pointercursor d-flex align-items-center pb-4">
                <div className="col-2">
                  <i className="bi bi-hand-thumbs-up main-text-cl p2"></i>
                </div>
                <div className="col-8 p3">
                  Liked Recipe
                </div>
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
            </div>
          </Link>

          <div className="row pointercursor d-flex align-items-center">
              <div className="col-2" onClick={handleLogout}>
                <i className="bi bi-power text-danger p2"></i>
              </div>
              <div className="col-8 p3 text-danger" onClick={handleLogout}>
                Log Out
              </div>
              <div className="col-2" />
          </div>

        </div>
      </div>

      <NavHome />
    </div>
  )
}
