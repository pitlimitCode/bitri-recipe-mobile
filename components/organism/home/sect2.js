import Link from 'next/link'
import Image from 'next/image'

import poplogo1 from '../../../public/default_image/reclogo01.png'
import poplogo2 from '../../../public/default_image/reclogo02.png'
import poplogo3 from '../../../public/default_image/reclogo03.png'

export default function Home2() {

  return (
    <>
    <div className="p3 bold mb-3">Kategori resep</div>
    
    {/* CUSTOM URL POPULAR RECIPE FOR USER, FOR NOW BY OLDER */}
    <div className="d-flex justify-content-between text-center">
      <div>
        <Link href="detail/1">
          <a><Image src={poplogo2} id='poplogo'/></a>
        </Link>
        <div className='p4 bold'>Soup</div>
      </div>
      <div>
        <Link href="detail/2">
          <a><Image src={poplogo1} id='poplogo'/></a>
        </Link>
        <div className='p4 bold'>Chicken</div>
      </div>
      <div>
        <Link href="detail/3">
          <a><Image src={poplogo3} id='poplogo'/></a>
        </Link>
        <div className='p4 bold'>Seafood</div>
      </div>
      <div>
        <Link href="detail/4">
          <a><Image src={poplogo1} id='poplogo'/></a>
        </Link>
        <div className='p4 bold'>Desert</div>
      </div>
    </div>
    </>
  )
}
