import AdsImage from "../../assets/ads/ads.webp"
import { IoIosBrush } from "react-icons/io"
import AdItem from "../container/AdItem";

const leftData = [
  { id: 1, title: "Nail Elegance", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.Lorem ipsum dolor sit amet.", img: ''},
  { id: 2, title: "Nail Design", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img:'' },
  { id: 3, title: "Luxury Nails", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img:''}
];

const rightData = [
  { id: 1, title: "Nail Elegance", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img:'' },
  { id: 2, title: "Nail Design", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img:'' },
  { id: 3, title: "Luxury Nails", desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", img:''}
];

const Service = () => {
    return (
        <div className="bg-[#d5dbdb]">
            <div className="container">
                <div className="px-8 py-12 ">
                    <div className="text-center w-full mb-[50px]">
                        <h1 className="text-3xl font-bold  align-center">
                            Transform with <br></br>Our Glowing Services
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-center lg:items-center">
                        <div className="left flex flex-wrap gap-8 justify-end">
                            {leftData.map((item) => (
                                <AdItem
                                    key={item.id}
                                    title={item.title}
                                    info={item.desc}
                                    icon={<IoIosBrush className="h-8 w-8 mt-4" />}
                                />
                            ))}
                        </div>

                        <div className="middle hidden lg:flex">
                            <img
                                className="min-w-80 w-80 max-w-full rounded-t-[40%] rounded-b-[40%] border-0 border-gray-800"
                                src={AdsImage}
                                alt=""
                            />
                        </div>

                        <div className="right flex flex-wrap gap-8 justify-start">
                            {rightData.map((item) => (
                                <AdItem
                                    key={item.id}
                                    side="right"
                                    title={item.title}
                                    info={item.desc}
                                    icon={<IoIosBrush className="h-8 w-8 mt-4" />}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
