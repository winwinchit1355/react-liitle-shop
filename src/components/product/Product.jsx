import AdsImage from "../../assets/ads/ads.webp"
import { IoIosBrush } from "react-icons/io"
import ProductCard from "./ProductCard"

const products = [
    {
        id: 1,
        name: "Nail Elegance",
        desc: "Lorem ipsum dolor sit amet.",
        img: "",
        amount: 0,
        amountDesc: "$20.00USD",
        rating: 4,
        review: "4.5k"
    },
    {
        id: 2,
        name: "Nail Elegance",
        desc: "Lorem ipsum dolor sit amet.",
        img: "",
        amount: 0,
        amountDesc: "$20.00USD",
        rating: 3,
        review: "4.5k"
    },
    {
        id: 4,
        name: "Nail Elegance",
        desc: "Lorem ipsum dolor sit amet.",
        img: "",
        amount: 0,
        amountDesc: "$20.00USD",
        rating: 1,
        review: "5k"
    },
    {
        id: 5,
        name: "Nail Elegance",
        desc: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
        img: "",
        amount: 0,
        amountDesc: "$20.00USD",
        rating: 4,
        review: "4.5k"
    },
]

const Product = () => {
    return (
        <div className="bg-[#fdf6ed]">
            <div className="container">
                <div className="px-8 py-12 ">
                    <div className="text-center w-full mb-[50px]">
                        <h1 className="text-3xl font-bold  align-center">Our Products</h1>
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                desc={product.desc}
                                img={product.img}
                                amount={product.amount}
                                amountDesc={product.amountDesc}
                                rating={product.rating}
                                review={product.review}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
