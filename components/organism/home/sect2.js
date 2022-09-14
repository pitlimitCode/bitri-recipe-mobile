import Link from 'next/link'
import Image from 'next/image'

import poplogo1 from '../../../public/default_image/reclogo01.svg'
import poplogo2 from '../../../public/default_image/reclogo02.svg'
import poplogo3 from '../../../public/default_image/reclogo03.svg'

export default function Home2() {

  return (
    <>
    <div className="p3 bold mb-3">Popular for You</div>
    
    {/* CUSTOM URL POPULAR RECIPE FOR USER, FOR NOW BY OLDER */}
    <div className="d-flex justify-content-between text-center">
      <div> 
        <Link href="popular">
          <a><Image src={poplogo2} style={{cursor: "pointer"}} alt="popular logo"/></a>
        </Link>
        <div className='p4 bold'>Soup</div>
      </div>
      <div>
        <Link href="popular">
          <a><Image src={poplogo1} style={{cursor: "pointer"}} alt="popular logo"/></a>
        </Link>
        <div className='p4 bold'>Chicken</div>
      </div>
      <div>
        <Link href="popular">
          <a><Image src={poplogo3} style={{cursor: "pointer"}} alt="popular logo"/></a>
        </Link>
        <div className='p4 bold'>Seafood</div>
      </div>
      <div>
        <Link href="popular">
          <a><Image src={poplogo1} style={{cursor: "pointer"}} alt="popular logo"/></a>
        </Link>
        <div className='p4 bold'>Desert</div>
      </div>
    </div>
    </>
  )
}
