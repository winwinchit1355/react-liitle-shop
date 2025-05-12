import { Link } from "react-router"
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline"
import { IoMdGlobe } from "react-icons/io"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import SITELOGO from "../../assets/react.svg"
const Footer = () => {
    return (
        <div className="bg-[#d8e3ff]">
            <div className="container">
                <footer className="md:hidden fixed z-50 w-full h-16 bottom-4 border border-gray-50 rounded-full bg-white shadow-md items-center">
                    <div className="grid grid-cols-5 gap-0 h-full mx-auto items-center justify-center">
                        <div className="left col-span-2 h-full">
                            <div className="grid grid-cols-3 h-full">
                                <Link
                                    className="flex items-center justify-center text-center h-full border-r-1 border-gray-200 text-sm"
                                    to="/shop"
                                >
                                    Shop
                                </Link>
                                <Link
                                    className="flex items-center justify-center text-center h-full border-r-1 border-gray-200 text-sm"
                                    to="/about"
                                >
                                    About
                                </Link>
                                <Link
                                    className="flex items-center justify-center text-center h-full border-r-1 border-gray-200 text-sm"
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                            </div>
                        </div>
                        <div className="middle flex justify-center items-center h-full border-r-1 border-gray-200">
                            <Link
                                className=""
                                to="/"
                            >
                                <img
                                    src={SITELOGO}
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="right col-span-2 h-full">
                            <div className="grid grid-cols-3 h-full">
                                <div className="flex items-center justify-center text-center gap-2 border-r-1 border-gray-200 ">
                                    <MagnifyingGlassIcon className="w-5 h-5 -scale-x-100 cursor-pointer " />
                                </div>
                                <div className="flex items-center justify-center text-center gap-2 border-r-1 border-gray-200 relative">
                                    <div className="absolute bottom-10 mb-2 bg-white shadow-md p-3 rounded-lg flex flex-col items-center space-y-3 z-50">
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:scale-110 transition"
                                        >
                                            <FaFacebook
                                                size={20}
                                                className="icon "
                                            />
                                        </a>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:scale-110 transition"
                                        >
                                            <FaTwitter
                                                size={20}
                                                className="icon"
                                            />
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                             className="text-pink-500 hover:scale-110 transition"
                                        >
                                            <FaInstagram
                                                size={20}
                                                className="icon"
                                            />
                                        </a>
                                    </div>
                                    <IoMdGlobe className="w-5 h-5 -scale-x-100 cursor-pointer " />
                                </div>
                                <div className="flex items-center justify-center gap-1 relative">
                                    <ShoppingCartIcon className="w-5 h-5 text-red-500 scale-110 transition animate-pulse" />
                                    {/* <span className="item-count absolute right-2 top-2 sm:top-3 sm:right-3 text-xs font-bold text-red-600 bg-white rounded-full px-1">0</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
