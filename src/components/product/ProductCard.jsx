const ProductCard = ({ key,name,desc,img,amount,amountDesc,rating,review }) => {
    return (
        <>
            <div id={key} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="h-56 w-full">
                    <a href="#">
                        <img
                            className="mx-auto h-full"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="pt-6">
                    <ul className="mt-2 flex items-center justify-between gap-4">
                        <li className="flex items-center gap-2">
                            <a
                                href="#"
                                className="text-md font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                            >
                                {name}
                            </a>
                        </li>

                        <li className="flex items-center justify-end gap-2">
                            <p className="text-sm font-medium ">{amountDesc}</p>
                        </li>
                    </ul>

                    <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex items-center">
                            {
                                [...Array(rating)].map((_, index) => (
                                    <svg
                                        className="h-4 w-4 text-yellow-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                ))
                            }
                        </div>

                        <p className="text-sm font-xs text-gray-500 dark:text-gray-400">Review ({review})</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-sm font-medium">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
