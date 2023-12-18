import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"
import timestamp from '../utils/timestamp'

function Order({ order, bg }: { order: any, bg: string }) {
	const menu = useRef<HTMLDivElement>(null)

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
		</li>
	)
}

export default Order
