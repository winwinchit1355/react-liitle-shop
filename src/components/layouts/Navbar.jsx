import SITELOGO from '../../assets/react.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="flex flex-wrap justify-between px-20 py-2 bg-[#d8e3ff]">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
                <div className="flex items-center">
                    <Link to="/"><img src={SITELOGO} alt="" width={50} height={50} /></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li className='flex items-center gap-2'>
                        <span >Search</span>
                        <MagnifyingGlassIcon className="w-6 h-6 -scale-x-100" />
                    </li>
                    <li>
                        <span className='text-bold'>0</span>
                    </li>
                    <li>
                        <ShoppingCartIcon className="w-5 h-5" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
