import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Assassin Reviews</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Reviews</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" width={966} height={276} />
      </div>
    </div>
  )
}
