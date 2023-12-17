import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"
import timestamp from '../utils/timestamp'
// import { useSelect } from "../context/Select";

function Order({ order, bg }: { order: any, bg: string }) {
	// const [isOpen, setIsOpen] = useState<boolean>(false)
	const menu = useRef<HTMLDivElement>(null)
	// const li = useRef<HTMLLIElement>(null)
	// const { togglePopup } = useSelect()

	// const list = ['details', 'edit', 'remove']

	return (
		<li className={`flex items-center justify-between rounded-lg p-4 text-gray-700 mb-4 shadow ${bg} relative`}>
			<span>#{order.id}</span>
			<span>{timestamp(order.createdAt)}</span>
			<span>${order.product.price}</span>
			<span className='w-20'>{order.status}</span>
			<div
				className='text-md font-bold mr-2 hover:bg-gray-200 py-2 rounded transition cursor-pointer'
				ref={menu}
				>
				<BsThreeDotsVertical />
			</div>
			{/* {isOpen && <ul className="absolute right-14 top-4 bg-gray-200 px-3 rounded text-sm z-10"> */}
			{/* 	{list.map((item, index) => ( */}
			{/* 		<li */}
			{/* 			ref={li} */}
			{/* 			key={index} */}
			{/* 			className="my-2 p-1 font-medium hover:bg-gray-100 cursor-pointer" */}
			{/* 			onClick={togglePopup} */}
			{/* 		> */}
			{/* 			{item} */}
			{/* 		</li> */}
			{/* 	))} */}
			{/* </ul>} */}
		</li>
	)
}

export default Order
