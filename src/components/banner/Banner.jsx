import BannerImage from "../../assets/banners/banner.png"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row px-8 md:px-18 py-12 justify-between bg-[#d8e3ff]">
            <div className="w-full md:w-1/3 items-center justify-center mt-auto mb-auto">
                <h1 className="text-5xl font-bold mb-6">Transform your Skin, Embrace Your Glow</h1>
                <p className="mb-6">Discover radiant, healthy skin with our expert care and premium solutions designed just for you</p>
                <button className="flex items-center bg-yellow-300 hover:bg-yellow-400 py-2 px-4 rounded-full text-gray-900 mb-6">
                    Shop now <ArrowUpRightIcon className="w-3 h-3 mt-1 ml-1" />
                </button>
            </div>
            <div className="md:w-2/5 items-center justify-end">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex gap-x-24 mt-8 md:mt-0 md:gap-x-0 justify-center md:flex-col md:justify-end md:items-center">   
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                >
                    <FaFacebook size={20} className="icon" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                >
                    <FaTwitter size={20} className="icon" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-1"
                >
                    <FaInstagram size={20} className="icon" />
                </a>
                <div className="hidden md:block w-px h-32 bg-linear-to-t from-[#7c8b9a] to-[#c1cde6]
                 "></div>
            </div>
        </div>
    )
}

export default Banner
