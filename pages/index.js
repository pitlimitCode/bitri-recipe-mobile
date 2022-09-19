import Home2 from '../components/organism/home/sect2'
import Home3 from '../components/organism/home/sect3'
import Home4 from '../components/organism/home/sect4'
import NavHome from '../components/organism/navHome'

import Head from 'next/head'
import Link from 'next/link'
import {useEffect, useState} from "react";

// import { 
//   useSelector, 
//   useDispatch
// } from "react-redux";
// import * as Type from "../redux/comps/type";

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
  // const idUserActive = await fetch( `${api}/users/getid` ).then((response) => response.json()).catch((err) => null);
  const dataHome3 = await fetch( `${api}/recipes/all/?sort=desc` ).then((response) => response.json());
  const dataHome4 = await fetch( `${api}/recipes/fivelikes` ).then((response) => response.json());
  
  return {
    props: {
      api,
      // idUserActive,
      // dataHome2,
      dataHome3,
      dataHome4,
    }
  }
};

export default function Home(props) {
  // console.log(props);
  // console.log(process.env.API_DOMAIN);
  
  // SEARCHING SECTION
  const [Searching, setSearching] = useState([]);  
  // const handleSearchingName = () => {
  //   window.location.href=`${process.env.CLIENT_DOMAIN}/search/${Searching}`
  // };

  return (
    <div className="mobile" >
      <Head>
        <title>Home</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main>
        <div className="container">

          {/* SEARCH RECIPES - HOME */}
          {/* <section className="mt-5 "> <Home1 
          // data1={props.dataHome1.data} 
          /> </section>  */}

          {/* SEARCH RECIPES - HOME */}
          <section className="mt-5 ">
            <form>
              <div className="row">
                <div className="col-9">
                  <div 
                    className="input-group"
                    style={{
                      border: "none",
                      "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                      "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                      "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                    }}
                  >
                    <i className="input-group-text bi bi-search bg-white" id="logosearch"></i>
                    <input
                      placeholder="Search Pasta, Bread, etc"
                      type="search"
                      className="form-control"
                      id="searchinput"
                      onChange={(e) => setSearching(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-3">
                <Link href={`/search/${Searching}`}>
                  <button id="searchbutton"
                    type='button'
                    // onClick={handleSearchingName}
                  >Search</button>
                </Link>
                </div>
              </div>
            </form>
          </section>

          {/* CATEGORY RECIPE - HOME */}
          <section> <Home2 /> </section> 

          {/* NEWEST RECIPES - HOME */}
          <section> <Home3 data3={props.dataHome3.result.data} api={props.api}/> </section> 

          {/* ALL POPULAR RECIPES - HOME */}
          {/* <section> <Home4 data4={props.dataHome4.result.data} api={props.api} /> </section>  */}
          
        </div>
      </main>
      <NavHome sendid={props.idUserActive}/>
    </div>
  )
}