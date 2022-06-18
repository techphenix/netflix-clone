import Image from 'next/image'
import { BellIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex items-cennter space-x-2 md:space-x-10'>
        <Image src='/img/logo.png' width={35} height={35} />
        <ul className='hidden space-x-4 pt-2 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>Tv Shows</li>
          <li className='headerLink'>New & popular</li>
          <li className='headerLink'>My list</li>
        </ul>
      </div>
      <div className='flex items-cennter space-x-4 text-sm font-light'>
        <SearchIcon className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='sm:inline h-6 w-6' />
        <Link href='/account'>
          <a>
            <UserCircleIcon className='sm:inline h-6 w-6' />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
