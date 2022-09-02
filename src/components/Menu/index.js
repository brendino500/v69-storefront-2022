import Image from 'next/image'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

function Menu() {
  const menuItems = ['Home', 'Shop', 'About', 'Visit', 'Learn', 'Wholesale']
  return (
    <nav className="flex align-center justify-between sticky top-0 bg-white h-12 z-50">
      <div>
        <Image />
      </div>
      <ul className="flex flex-row align-center font-title justify-around m-3 w-6/12">
        <a href="#home">
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
