import Image from 'next/image'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

function Menu() {
  const menuItems = ['Home', 'Shop', 'About', 'Visit', 'Learn', 'Wholesale']
  return (
    <nav className="flex align-center justify-between">
      <div>
        <Image />
      </div>
      <ul className="flex flex-row align-center font-title justify-center m-3">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Learn</li>
        <li>Wholesale</li>
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
