import Image from 'next/image'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

import logo from '../../../public/logo-black.png'

function Menu() {
  const menuItems = ['Home', 'Shop', 'About', 'Visit', 'Learn', 'Wholesale']
  return (
    <nav className="flex align-center justify-between sticky top-0 bg-white h-12 z-50">
      <Image src={logo} alt="V69 Logo" height="48px" width="48px" />
      <ul className="flex flex-row align-center font-title justify-around m-3 w-6/12">
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#shop">
          <li>Shop</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#learn">
          <li>Learn</li>
        </a>
        <a href="#wholesale">
          <li>Wholesale</li>
        </a>
      </ul>
      <div className="flex align-center m-3">
        <button>
          <IoSearchOutline />
        </button>
        <button>
          <IoCartOutline />
        </button>
      </div>
    </nav>
  )
}

export default Menu
