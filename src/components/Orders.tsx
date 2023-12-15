import { useEffect, useState } from 'react'
import { orders } from '../../static/orders'
import { useSelect } from '../context/Select'
import { Cards, DARK } from '../utils/constants'
import Card from './Card'


function Orders() {
	const { mode } = useSelect()
	const [cards, setCards] = useState<any[]>([])
	useEffect(() => {
		// fetch orders from backend
		setCards(Cards(orders))
	}, [])

	const background = mode === DARK ? 'bg-gray-300' : 'bg-gray-50'

	return (
		<section className="px-8 font-bold">
			<ul className='flex items-center justify-between py-8'>
				{cards.map((type, index) => 
					<Card item={type} index={index} />
				)}
			</ul>
			<h1 className="capitalize mb-8 text-2xl">recent orders</h1>
			<ul className='flex flex-col gap-6'>
				<li className='flex items-center justify-between px-4 font-medium capitalize'>
					<p>order</p>
					<p>created at</p>
					<p>name</p>
				</li>
				{orders.map((order, index) => (
					<li key={index} className={`flex items-center justify-between rounded-lg p-4 text-gray-700 ${background}`}>
						<h1>#{order.id}</h1>
						<p>{Date.now() - order.createdAt}</p>
						<p>{order.product.name}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Orders
