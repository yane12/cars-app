import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul className='flex justify-between'>
                <li><Link href='/home'>Home</Link></li>
                <li><Link href='/login'>Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}
