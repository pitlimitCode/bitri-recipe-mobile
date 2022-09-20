/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from 'next/link'

export async function getServerSideProps(context){
  const api = process.env.API_DOMAIN;
//   const params = context.query.name;

//   // /?name=[name_recipe]&sort=[asc/desc/like]
//   const datasearch = await fetch( `${api}/recipes/name/${params}` )
//     .then((response) => response.json())
//     .catch(() => null);

  return {
    props: {
      // datasearch,
      api,
    }
  }
};

// export default function SearchRecipe() {
export default function SearchRecipe(props) {
  // const datas = props?.datasearch?.result?.data;
  // console.log(datas);
  

  const api = props.api;
  // console.log(props);
  // const api = props.api;
    // /?name=[name_recipe]&sort=[asc/desc/like]

  const {query} = useRouter();
  const [Searching, setSearching] = useState(query.name);
  const [Datas, setDatas] = useState('');
  
  const [SortBy, setSortBy] = useState('desc');
  // console.log(SortBy);
  useEffect(() => {
    // ?name=[name_recipe]&sort=[asc/desc/like]
    fetch( `${api}/recipes/name/?name=${Searching}&sort=${SortBy}` ) // ${sort}
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if(data.result){
        setDatas(data.result.data)
      } else {
        setDatas('')
      }
      // setAvatar(res.data.data?.avatar)
    }).catch((e) => {console.log(e)});
  }, [api, Searching, SortBy]);

  // const webdomain = process.env.CLIENT_DOMAIN;

  // console.log(`${datas[0].image}`);
  // console.log(Datas);
  
  // const [Searching, setSearching] = useState([]);
  // const handleSearchingName = () => {
  //   window.location.href=`${Searching}`
  // };
  

  return (
    <div className="mobile">
      <Head>
        <title>Search Recipes</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main>
        <div className="container">

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
                      defaultValue={query.name}
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

          {/* RESULT OF SEARCH */}
          {!Datas
            ? <div className='text-center alert alert-warning py-1 px-5'>No one recipe has named &quot;{Searching}&quot;</div>
            : 
              <div>
              {/* SEARCH SORT BY */}
                <select
                  aria-label="Default select example" 
                  style={{width:"110px", fontSize:"12px", marginBottom:"10px"}} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="desc">Newest</option>
                  <option value="asc">Older</option>
                  <option value="like">Like</option>
                </select>

              {Datas?.map((data) => (
                <div
                  key={data?.recipe_id}
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
                  <Link href={`/detail/${data.recipe_id}`}>
                    <div className="row">
                      <div className="col-3 mt-2">
                        <Image
                          src={`${data.image_recipe}`}
                          alt="image"
                          width={75}
                          height={75}
                          style={{ borderRadius: "16px"}}
                        />
                      </div>
                      <div className="col-9 mt-1">
                        <div className='p4 bold pb-1'>{data.name_recipe}</div>
                        <div className='p4'>Spicy, Salted, Tasty</div>
                        <div className="d-flex gap-1 align-items-center p4">
                          <i className='bi bi-hand-thumbs-up-fill text-warning'></i>
                          <span>{`${data.total_likes}`}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              </div>
          } 



        </div>
      </main>

    </div>
  )
}