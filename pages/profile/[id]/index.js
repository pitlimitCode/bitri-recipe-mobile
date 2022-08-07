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
    }
  }
};

// params id not number? invalid url !

export default function Profile(props) {

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

            <div className="row pointercursor d-flex align-items-center pt-2 pb-3">
              <Link href="/profile/2/edit">
                <div className="col-2">
                  <i className="bi bi-person main-text-cl p2"></i>
                </div>
              </Link>
              <Link href="/profile/2/edit">
                <div className="col-8 p3">
                  Edit Profie
                </div>
              </Link>
              <Link href="/profile/2/edit">
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="row pointercursor d-flex align-items-center pb-4">
              <Link href="/profile/2/my-recipes">
                <div className="col-2">
                  <i className="bi bi-award main-text-cl p2"></i>
                </div>
              </Link>
              <Link href="/profile/2/my-recipes">
                <div className="col-8 p3">
                  My Recipe
                </div>
              </Link>
              <Link href="/profile/2/my-recipes">
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="row pointercursor d-flex align-items-center pb-4">
              <Link href="/profile/2/saved-recipes">
                <div className="col-2">
                  <i className="bi bi-bookmark main-text-cl p2"></i>
                </div>
              </Link>
              <Link href="/profile/2/saved-recipes">
                <div className="col-8 p3">
                  Saved Recipe
                </div>
              </Link>
              <Link href="/profile/2/saved-recipes">
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="row pointercursor d-flex align-items-center pb-4">
              <Link href="/profile/2/liked-recipes">
                <div className="col-2">
                  <i className="bi bi-hand-thumbs-up main-text-cl p2"></i>
                </div>
              </Link>
              <Link href="/profile/2/liked-recipes">
                <div className="col-8 p3">
                  Liked Recipe
                </div>
              </Link>
              <Link href="/profile/2/liked-recipes">
                <div className="col-2">
                  <div id="backarrow2">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </div>

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
