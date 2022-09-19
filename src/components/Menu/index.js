import Image from 'next/image'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

import logo from '../../../public/logo-black.png'
import data from '@/data/HomePage/Menu'

function Menu() {
  const menuItems = data.Menu
  return (
    <nav className="flex align-center justify-between sticky top-0 bg-white h-12 z-50">
      <a href="/">
        <Image src={logo} alt="V69 Logo" height="48px" width="48px" />
      </a>
      <ul className="flex flex-row align-center font-title justify-around m-3 w-6/12">
        {menuItems.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
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
