import AdsImage from "../../assets/ads/ads.webp"
import { IoIosBrush } from "react-icons/io"

const leftData = [
  { id: 1, title: "Nail Elegance", desc: "Lorem ipsum dolor sit amet.",img:'' },
  { id: 2, title: "Nail Design", desc: "Adipisicing elit sed do.",img:'' },
  { id: 3, title: "Luxury Nails", desc: "Consectetur elit amet.",img:''}
];

const rightData = [
  { id: 1, title: "Nail Elegance", desc: "Lorem ipsum dolor sit amet.",img:'' },
  { id: 2, title: "Nail Design", desc: "Adipisicing elit sed do.",img:'' },
  { id: 3, title: "Luxury Nails", desc: "Consectetur elit amet.",img:''}
];

const Advertisement = () => {
    return (
        <div className="px-8 py-12 bg-[#d5dbdb">
            <div className="text-center w-full mb-[50px]">
                <h1 className="text-3xl font-bold  align-center">
                    Transform with <br></br>Our Glowing Services
                </h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="left flex flex-wrap gap-8 justify-end">
                    <div className="flex items-center justify-center gap-4 w-full">
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <IoIosBrush className="h-8 w-8 mt-4" />
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet conseclit. </p>
                        </div>
                        <IoIosBrush className="h-8 w-8 mt-4" />
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <IoIosBrush className="h-8 w-8 mt-4" />
                    </div>
                </div>

                <div className="middle">
                    <img
                        className="rounded-t-[40%] rounded-b-[40%] border-0 border-gray-800"
                        src={AdsImage}
                        alt=""
                    />
                </div>

                <div className="right flex flex-wrap gap-8 justify-start">
                    <div className="flex items-center justify-center gap-4 w-full">
                        <IoIosBrush className="h-8 w-8 mt-4" />
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet consipisicing elit. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                        <IoIosBrush className="h-8 w-8 mt-4" />
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                        <IoIosBrush className="h-8 w-8 mt-4" />
                        <div className="w-1/2">
                            <h4 className="text-xl font-bold">Nail Elegance</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement
