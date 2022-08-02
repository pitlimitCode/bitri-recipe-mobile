import Link from 'next/link'
import Image from 'next/image'

import poplogo1 from '../../../../styles/default_image/reclogo01.png'
import poplogo2 from '../../../../styles/default_image/reclogo02.png'
import poplogo3 from '../../../../styles/default_image/reclogo03.png'

export default function Home2() {
  return (
    <>
    <div className="p3 bold mb-3">Resep Populer Untuk Kamu</div>
    
    <div className="d-flex justify-content-between text-center">
      <div>
        <Link href="detail/1">
          <Image src={poplogo2} id='poplogo'/>
        </Link>
        <div className='p4 bold'>Soup</div>
      </div>
      <div>
        <Link href="detail/2">
          <Image src={poplogo1} id='poplogo'/>
        </Link>
        <div className='p4 bold'>Chicken</div>
      </div>
      <div>
        <Link href="detail/3">
          <Image src={poplogo3} id='poplogo'/>
        </Link>
        <div className='p4 bold'>Seafood</div>
      </div>
      <div>
        <Link href="detail/4">
          <Image src={poplogo1} id='poplogo'/>
        </Link>
        <div className='p4 bold'>Desert</div>
      </div>
    </div>
    </>
  )
}
