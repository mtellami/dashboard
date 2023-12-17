import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"

function timestamp(n: number) {
	const now = new Date(n)

	const format = (n: number) => {
		return n < 10 ? `0${n}` : n;
	}
	return `${format(now.getDay())}.${format(now.getMonth())}.${now.getFullYear()}`
}

function Order({ order, bg }: { order: any, bg: string }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menu = useRef<HTMLUListElement>(null)
	const list = ['details', 'edit', 'remove']

	useEffect(() => {
		document.addEventListener('mousedown', (e: MouseEvent) => {
			if(menu.current && isOpen && !menu.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		})
	}, [])

	return (
		<li className={`flex items-center justify-between rounded-lg p-4 text-gray-700 mb-4 shadow ${bg} relative`}>
			<span>#{order.id}</span>
			<span>{timestamp(order.createdAt)}</span>
			<span>${order.product.price}</span>
			<span className='w-20'>{order.status}</span>
			<div
				className='text-md font-bold mr-2 hover:bg-gray-200 py-2 rounded transition cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
				>
				<BsThreeDotsVertical />
			</div>
			{isOpen && <ul ref={menu} className="absolute right-14 top-4 bg-gray-200 px-3 rounded text-sm z-10">
				{list.map((item, index) => (
					<li key={index} className="my-2 p-1 font-medium hover:bg-gray-100 cursor-pointer">{item}</li>
				))}
			</ul>}
		</li>
	)
}

export default Order
