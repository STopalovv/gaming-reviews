import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const {user, login, logout} = useContext(AuthContext)
  console.log(user);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Assassin Reviews</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Reviews</a></Link></li>
          <li onClick={login} className='btn'>Login/Signup</li>
          <li onClick={logout} className='btn'>Logout</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" width={966} height={276} />
      </div>
    </div>
  )
}
